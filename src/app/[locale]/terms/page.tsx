import Link from "next/link"
import { Truck, ShieldCheck, CreditCard, FileText, Lock, HelpCircle, Cookie } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Políticas | Joalheria",
    description: "Políticas de privacidade, envio, pagamento e outras informações importantes.",
}

export default function PoliciesPage() {
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/terms",
        },
    ]

    const policies = [
        {
            title: "Política de Envio",
            description: "Informações sobre métodos de envio, prazos e custos de entrega.",
            icon: <Truck className="h-6 w-6" />,
            href: "/terms/shipping",
        },
        {
            title: "Política de Privacidade",
            description: "Como coletamos, usamos e protegemos seus dados pessoais.",
            icon: <Lock className="h-6 w-6" />,
            href: "/terms/privacy",
        },
        {
            title: "Política de Pagamento",
            description: "Métodos de pagamento aceitos e informações sobre processamento.",
            icon: <CreditCard className="h-6 w-6" />,
            href: "/terms/payment",
        },
        {
            title: "Termos e Condições",
            description: "Termos de uso do site e condições gerais de compra.",
            icon: <FileText className="h-6 w-6" />,
            href: "/terms/term",
        },
        {
            title: "Política de Garantia",
            description: "Informações sobre garantia de nossos produtos.",
            icon: <ShieldCheck className="h-6 w-6" />,
            href: "/terms/secure",
        },
        {
            title: "Política de Cookies",
            description: "Informações sobre o gerenciamento de dados em cookies.",
            icon: <Cookie className="h-6 w-6" />,
            href: "/terms/cookies",
        },
        {
            title: "Perguntas Frequentes",
            description: "Respostas para as dúvidas mais comuns.",
            icon: <HelpCircle className="h-6 w-6" />,
            href: "/faq",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Políticas da Loja</h1>
                    <p className="text-muted-foreground">Informações importantes sobre nossos processos, direitos e deveres.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {policies.map((policy) => (
                        <Card key={policy.href} className="overflow-hidden">
                            <Link href={policy.href} className="block h-full hover:no-underline">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <div className="mr-3 text-primary">{policy.icon}</div>
                                        <CardTitle>{policy.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-foreground/70">{policy.description}</CardDescription>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <span className="text-sm text-primary">Saiba mais →</span>
                                </CardFooter>
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        Se você tiver alguma dúvida sobre nossas políticas, entre em contato com nosso atendimento.
                    </p>
                    <div className="mt-4">
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
