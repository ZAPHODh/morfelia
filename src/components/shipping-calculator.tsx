"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Truck } from "lucide-react"
import type { ShippingOption } from "@/lib/shipping/types"
import { toast } from "sonner"

type Region = "brazil" | "europe" | "usa"

interface ShippingCalculatorProps {
    productId: string
    productWeight?: number
}


const localeToRegionMap: Record<string, Region> = {
    "pt-BR": "brazil",
    pt: "brazil",
    "en-US": "usa",
    en: "usa",
    de: "europe",
    fr: "europe",
    es: "europe",
    it: "europe",
}

export function ShippingCalculator({ productId, productWeight = 100 }: ShippingCalculatorProps) {
    const locale = useLocale()
    const [postalCode, setPostalCode] = useState("")
    const [region, setRegion] = useState<Region>("brazil")
    const [isLoading, setIsLoading] = useState(false)
    const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const detectedRegion = localeToRegionMap[locale] || "brazil"
        setRegion(detectedRegion)
    }, [locale])

    const validationPatterns = {
        brazil: /^\d{5}-?\d{3}$/,
        europe: /^[A-Za-z0-9\s-]{3,10}$/,
        usa: /^\d{5}(-\d{4})?$/,
    }

    const formatExamples = {
        brazil: "12345-678",
        europe: "Varies by country",
        usa: "12345 or 12345-6789",
    }

    const formatPostalCode = (value: string): string => {
        let formatted = value.replace(/[^\w\s-]/gi, "")

        if (region === "brazil") {
            formatted = formatted.replace(/-/g, "")
            if (formatted.length > 5) {
                formatted = `${formatted.substring(0, 5)}-${formatted.substring(5).substring(0, 3)}`
            }
        } else if (region === "usa" && formatted.length > 5 && !formatted.includes("-")) {
            formatted = `${formatted.substring(0, 5)}-${formatted.substring(5).substring(0, 4)}`
        }

        return formatted
    }

    const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPostalCode(formatPostalCode(value))
        setError(null)
    }

    const validatePostalCode = (): boolean => {
        const pattern = validationPatterns[region]
        if (!pattern.test(postalCode)) {
            setError(`Please enter a valid postal code. Format: ${formatExamples[region]}`)
            return false
        }

        return true
    }

    const calculateShipping = async () => {
        if (!validatePostalCode()) {
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch("/api/shipping", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postalCode,
                    region,
                    productId,
                    productWeight,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to calculate shipping")
            }

            const data = await response.json()

            if (data.options && data.options.length > 0) {
                setShippingOptions(data.options)
            } else {
                setError("No shipping options available for this destination")
                toast("No shipping options", {
                    description: "We couldn't find any shipping options for this destination. Please try another address.",
                })
            }
        } catch (error) {
            console.error("Error calculating shipping:", error)
            setError("Unable to calculate shipping. Please try again.")
            toast("Error", {
                description: "Failed to calculate shipping rates. Please try again.",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const formatCurrency = (price: number, currency = "USD") => {
        const formatter = new Intl.NumberFormat(
            locale || (currency === "BRL" ? "pt-BR" : currency === "EUR" ? "de-DE" : "en-US"),
            {
                style: "currency",
                currency,
            },
        )
        return formatter.format(price)
    }

    const formatDeliveryDate = (days: number) => {
        const date = new Date()
        date.setDate(date.getDate() + days)
        return date.toLocaleDateString(
            locale || (region === "brazil" ? "pt-BR" : region === "europe" ? "de-DE" : "en-US"),
            {
                weekday: "long",
                month: "short",
                day: "numeric",
            },
        )
    }
    const getRegionLabel = () => {
        switch (region) {
            case "brazil":
                return "CEP"
            case "europe":
                return "Postal Code"
            case "usa":
                return "ZIP Code"
            default:
                return "Postal Code"
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Truck className="mr-2 h-5 w-5" />
                    {region === "brazil" ? "Calculadora de Frete" : "Shipping Calculator"}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="postalCode" className="text-sm font-medium">
                        {getRegionLabel()}
                    </label>
                    <div className="flex space-x-2">
                        <Input
                            id="postalCode"
                            placeholder={formatExamples[region]}
                            value={postalCode}
                            onChange={handlePostalCodeChange}
                            maxLength={region === "brazil" ? 9 : region === "usa" ? 10 : 10}
                        />
                        <Button onClick={calculateShipping} disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : region === "brazil" ? (
                                "Calcular"
                            ) : (
                                "Calculate"
                            )}
                        </Button>
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    {region === "brazil" && (
                        <p className="text-xs text-muted-foreground">
                            <a
                                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-foreground"
                            >
                                Não sei meu CEP
                            </a>
                        </p>
                    )}
                </div>

                {shippingOptions.length > 0 && (
                    <div className="mt-4 space-y-3">
                        <h4 className="font-medium">{region === "brazil" ? "Opções de Envio" : "Shipping Options"}</h4>
                        <div className="space-y-2">
                            {shippingOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className="flex justify-between items-center p-3 border rounded-md hover:bg-accent transition-colors"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {option.carrierName || ""} {option.serviceName}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {region === "brazil" ? "Entrega estimada: " : "Estimated delivery: "}
                                            {formatDeliveryDate(option.estimatedDays)}
                                        </p>
                                    </div>
                                    <p className="font-semibold">{formatCurrency(option.price, option.currency)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
                {region === "brazil"
                    ? "Os custos de envio são calculados em tempo real com base nas taxas da transportadora e podem variar."
                    : "Shipping costs are calculated in real-time based on carrier rates and may vary."}
            </CardFooter>
        </Card>
    )
}
