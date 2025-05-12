"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Resolver, useForm } from "react-hook-form"
import { z } from "zod"
import { Plus, Pencil, Trash2, Check, CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const initialPaymentMethods = [
    {
        id: "1",
        type: "visa",
        isDefault: true,
        cardholderName: "Jane Doe",
        cardNumber: "•••• •••• •••• 4242",
        expiryMonth: "09",
        expiryYear: "2027",
        billingAddressId: "1",
    },
    {
        id: "2",
        type: "mastercard",
        isDefault: false,
        cardholderName: "Jane Doe",
        cardNumber: "•••• •••• •••• 5555",
        expiryMonth: "12",
        expiryYear: "2026",
        billingAddressId: "2",
    },
]

const paymentFormSchema = z.object({
    cardholderName: z.string().min(2, { message: "Cardholder name must be at least 2 characters." }),
    cardNumber: z.string().min(16, { message: "Card number must be at least 16 digits." }).max(19),
    expiryMonth: z.string().min(1, { message: "Please select an expiry month." }),
    expiryYear: z.string().min(4, { message: "Please select an expiry year." }),
    cvv: z.string().min(3, { message: "CVV must be at least 3 digits." }).max(4),
    billingAddressId: z.string().min(1, { message: "Please select a billing address." }),
    isDefault: z.boolean().default(false),
})

type PaymentFormValues = z.infer<typeof paymentFormSchema>

export default function PaymentMethodsPage() {
    const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
    const [isEditing, setIsEditing] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const form = useForm<PaymentFormValues>({
        resolver: zodResolver(paymentFormSchema) as Resolver<PaymentFormValues>,
        defaultValues: {
            cardholderName: "",
            cardNumber: "",
            expiryMonth: "",
            expiryYear: "",
            cvv: "",
            billingAddressId: "",
            isDefault: false,
        },
    })

    const handleEdit = (id: string) => {
        const methodToEdit = paymentMethods.find((method) => method.id === id)
        if (methodToEdit) {
            form.reset({
                ...methodToEdit,
                cardNumber: "",
                cvv: "",
            })
            setIsEditing(id)
            setIsDialogOpen(true)
        }
    }

    const handleDelete = (id: string) => {
        setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
    }

    const handleSetDefault = (id: string) => {
        setPaymentMethods(
            paymentMethods.map((method) => ({
                ...method,
                isDefault: method.id === id,
            })),
        )
    }

    const onSubmit = (values: PaymentFormValues) => {
        setIsSubmitting(true)

        setTimeout(() => {
            let cardType = "other"
            const firstDigit = values.cardNumber.charAt(0)
            if (firstDigit === "4") cardType = "visa"
            else if (firstDigit === "5") cardType = "mastercard"
            else if (firstDigit === "3") cardType = "amex"
            else if (firstDigit === "6") cardType = "discover"

            const maskedCardNumber = "•••• •••• •••• " + values.cardNumber.slice(-4)

            if (isEditing) {
                setPaymentMethods(
                    paymentMethods.map((method) => {
                        if (method.id === isEditing) {
                            return {
                                ...method,
                                type: cardType,
                                cardholderName: values.cardholderName,
                                cardNumber: maskedCardNumber,
                                expiryMonth: values.expiryMonth,
                                expiryYear: values.expiryYear,
                                billingAddressId: values.billingAddressId,
                                isDefault: values.isDefault ? true : method.isDefault ? true : false,
                            }
                        }
                        if (values.isDefault) {
                            return {
                                ...method,
                                isDefault: false,
                            }
                        }

                        return method
                    }),
                )
            } else {
                const newMethod = {
                    id: `${paymentMethods.length + 1}`,
                    type: cardType,
                    cardholderName: values.cardholderName,
                    cardNumber: maskedCardNumber,
                    expiryMonth: values.expiryMonth,
                    expiryYear: values.expiryYear,
                    billingAddressId: values.billingAddressId,
                    isDefault: values.isDefault ? true : paymentMethods.length === 0 ? true : false,
                }

                if (values.isDefault) {
                    setPaymentMethods([
                        newMethod,
                        ...paymentMethods.map((method) => ({
                            ...method,
                            isDefault: false,
                        })),
                    ])
                } else {
                    setPaymentMethods([newMethod, ...paymentMethods])
                }
            }

            setIsSubmitting(false)
            setIsEditing(null)
            setIsDialogOpen(false)
            form.reset()
        }, 1000)
    }

    const getCardIcon = (type: string) => {
        console.log(type)
        return <CreditCard className="h-5 w-5" />
    }

    const getCardTypeLabel = (type: string) => {
        switch (type) {
            case "visa":
                return "Visa"
            case "mastercard":
                return "Mastercard"
            case "amex":
                return "American Express"
            case "discover":
                return "Discover"
            default:
                return "Card"
        }
    }

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 11 }, (_, i) => (currentYear + i).toString())

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-serif mb-2">Payment Methods</h1>
                    <p className="text-muted-foreground">Manage your saved payment methods</p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={() => {
                                form.reset({
                                    cardholderName: "",
                                    cardNumber: "",
                                    expiryMonth: "",
                                    expiryYear: "",
                                    cvv: "",
                                    billingAddressId: "",
                                    isDefault: false,
                                })
                                setIsEditing(null)
                            }}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Payment Method
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[550px]">
                        <DialogHeader>
                            <DialogTitle>{isEditing ? "Edit Payment Method" : "Add Payment Method"}</DialogTitle>
                            <DialogDescription>
                                {isEditing
                                    ? "Update your payment method information below"
                                    : "Fill in the details for your new payment method"}
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="cardholderName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cardholder Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="As it appears on the card" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="cardNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Card Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="1234 5678 9012 3456"
                                                    maxLength={19}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/\s/g, "")
                                                        const formattedValue = value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
                                                        field.onChange(formattedValue)
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="expiryMonth"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Expiry Month</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="MM" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {Array.from({ length: 12 }, (_, i) => {
                                                            const month = (i + 1).toString().padStart(2, "0")
                                                            return (
                                                                <SelectItem key={month} value={month}>
                                                                    {month}
                                                                </SelectItem>
                                                            )
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="expiryYear"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Expiry Year</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="YYYY" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {years.map((year) => (
                                                            <SelectItem key={year} value={year}>
                                                                {year}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="cvv"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>CVV</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        type="password"
                                                        maxLength={4}
                                                        placeholder="123"
                                                        onChange={(e) => {
                                                            const value = e.target.value.replace(/\D/g, "")
                                                            field.onChange(value)
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="billingAddressId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Billing Address</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select billing address" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="1">123 Main Street, New York, NY 10001</SelectItem>
                                                    <SelectItem value="2">456 Park Avenue, New York, NY 10022</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="isDefault"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>Set as default payment method</FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                <DialogFooter>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            setIsDialogOpen(false)
                                            setIsEditing(null)
                                            form.reset()
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                {isEditing ? "Updating" : "Adding"}
                                            </>
                                        ) : (
                                            <>{isEditing ? "Update Payment Method" : "Add Payment Method"}</>
                                        )}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>

            {paymentMethods.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paymentMethods.map((method) => (
                        <Card key={method.id}>
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-full bg-muted">{getCardIcon(method.type)}</div>
                                        <CardTitle className="text-base capitalize">{getCardTypeLabel(method.type)}</CardTitle>
                                    </div>
                                    {method.isDefault && (
                                        <Badge variant="outline" className="bg-gold-50 text-gold-700 border-gold-200">
                                            Default
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                                <div className="space-y-1 text-sm">
                                    <p className="font-medium">{method.cardholderName}</p>
                                    <p className="font-mono">{method.cardNumber}</p>
                                    <p>
                                        Expires {method.expiryMonth}/{method.expiryYear}
                                    </p>
                                    <p className="pt-1 text-muted-foreground">
                                        Billing Address: {method.billingAddressId === "1" ? "123 Main Street" : "456 Park Avenue"}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between pt-4 border-t">
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={() => handleEdit(method.id)}>
                                        <Pencil className="mr-2 h-3.5 w-3.5" />
                                        Edit
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-red-500 hover:text-red-600"
                                        onClick={() => handleDelete(method.id)}
                                    >
                                        <Trash2 className="mr-2 h-3.5 w-3.5" />
                                        Delete
                                    </Button>
                                </div>
                                {!method.isDefault && (
                                    <Button variant="ghost" size="sm" onClick={() => handleSetDefault(method.id)}>
                                        <Check className="mr-2 h-3.5 w-3.5" />
                                        Set as Default
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 border rounded-lg">
                    <CreditCard className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No payment methods saved</h3>
                    <p className="text-muted-foreground mb-6">Add a payment method to make checkout faster</p>
                    <Button onClick={() => setIsDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Payment Method
                    </Button>
                </div>
            )}

            <div className="rounded-lg border p-4 bg-muted/50">
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-muted">
                        <CreditCard className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Secure Payment Information</h3>
                        <p className="text-sm text-muted-foreground">
                            Your payment information is encrypted and securely stored. We use industry-standard security measures to
                            protect your data and never store complete card numbers on our servers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
