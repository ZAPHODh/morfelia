import Link from "next/link"
import { CreditCard, Wallet, BanknoteIcon, ShieldCheck, AlertTriangle, HelpCircle, Globe, RefreshCcw } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Política de Pagamento | Joalheria",
    description: "Informações sobre métodos de pagamento, parcelamento, segurança e processamento de pagamentos.",
}

export default function PaymentPolicyPage() {
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/terms",
        },
        {
            label: "Política de Pagamento",
            href: "/terms/payment",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Política de Pagamento</h1>
                    <p className="text-muted-foreground">
                        Informações sobre métodos de pagamento, parcelamento e processamento de pagamentos.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Métodos de Pagamento */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Wallet className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Métodos de Pagamento</CardTitle>
                            </div>
                            <CardDescription>Formas de pagamento aceitas em nossa loja</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-medium text-lg mb-2">Cartões de Crédito</h3>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Aceitamos as principais bandeiras de cartões de crédito:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="border rounded-md px-3 py-2 text-sm">Visa</div>
                                    <div className="border rounded-md px-3 py-2 text-sm">Mastercard</div>
                                    <div className="border rounded-md px-3 py-2 text-sm">American Express</div>
                                    <div className="border rounded-md px-3 py-2 text-sm">Elo</div>
                                    <div className="border rounded-md px-3 py-2 text-sm">Hipercard</div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg mb-2">Cartões de Débito</h3>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Aceitamos cartões de débito das seguintes bandeiras:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="border rounded-md px-3 py-2 text-sm">Visa Electron</div>
                                    <div className="border rounded-md px-3 py-2 text-sm">Maestro</div>
                                    <div className="border rounded-md px-3 py-2 text-sm">Elo Débito</div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg mb-2">Pix</h3>
                                <p className="text-sm text-muted-foreground">
                                    Pagamento instantâneo com confirmação imediata. Ao escolher esta opção, você receberá um QR Code para
                                    realizar o pagamento através do seu aplicativo bancário.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg mb-2">Boleto Bancário</h3>
                                <p className="text-sm text-muted-foreground">
                                    O boleto tem validade de 3 dias úteis. Após o pagamento, a compensação pode levar até 3 dias úteis.
                                    Seu pedido será processado somente após a confirmação do pagamento.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg mb-2">Transferência Bancária</h3>
                                <p className="text-sm text-muted-foreground">
                                    Aceitamos transferências para as seguintes instituições:
                                </p>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Banco Itaú</li>
                                    <li>Banco do Brasil</li>
                                    <li>Caixa Econômica Federal</li>
                                    <li>Banco Santander</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Parcelamento */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <CreditCard className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Parcelamento</CardTitle>
                            </div>
                            <CardDescription>Opções de parcelamento disponíveis</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Oferecemos diversas opções de parcelamento para melhor atender às suas necessidades:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Parcelamento sem juros:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Compras até R$ 500,00: até 3x sem juros</li>
                                        <li>Compras de R$ 500,01 a R$ 1.000,00: até 6x sem juros</li>
                                        <li>Compras acima de R$ 1.000,01: até 10x sem juros</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Parcelamento com juros:</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Para compras parceladas em mais vezes do que o limite sem juros, oferecemos parcelamento em até 12x
                                        com acréscimo de juros de 1,99% ao mês.
                                    </p>
                                </div>

                                <div className="bg-muted p-3 rounded-md">
                                    <p className="text-sm font-medium">Importante:</p>
                                    <p className="text-sm text-muted-foreground">
                                        O parcelamento está sujeito à análise e aprovação da administradora do cartão. O valor mínimo da
                                        parcela é de R$ 50,00.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-medium">Descontos para pagamento à vista:</h3>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>5% de desconto para pagamentos via Pix</li>
                                    <li>3% de desconto para pagamentos via boleto bancário</li>
                                    <li>3% de desconto para pagamentos em cartão de débito</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Processamento de Pagamentos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <BanknoteIcon className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Processamento de Pagamentos</CardTitle>
                            </div>
                            <CardDescription>Como processamos seus pagamentos</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Todos os pagamentos são processados de forma segura através de gateways de pagamento confiáveis e
                                certificados:
                            </p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Utilizamos a plataforma de pagamento Mercado Pago para processar cartões de crédito e débito</li>
                                <li>Pagamentos via Pix são processados diretamente pelo sistema bancário</li>
                                <li>Boletos são gerados e processados pelo Banco Itaú</li>
                            </ul>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Prazos de processamento:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        <span className="font-medium">Cartão de crédito/débito:</span> Confirmação imediata (sujeito à
                                        aprovação da operadora)
                                    </li>
                                    <li>
                                        <span className="font-medium">Pix:</span> Confirmação imediata após o pagamento
                                    </li>
                                    <li>
                                        <span className="font-medium">Boleto bancário:</span> Até 3 dias úteis após o pagamento
                                    </li>
                                    <li>
                                        <span className="font-medium">Transferência bancária:</span> Até 1 dia útil após a confirmação
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-2">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Seu pedido só será processado e enviado após a confirmação do pagamento. Em caso de não aprovação do
                                    pagamento, entraremos em contato para oferecer alternativas.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Segurança nos Pagamentos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Segurança nos Pagamentos</CardTitle>
                            </div>
                            <CardDescription>Como protegemos suas informações financeiras</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                A segurança das suas informações financeiras é nossa prioridade. Implementamos diversas medidas para
                                garantir a proteção dos seus dados:
                            </p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Certificado SSL de 256 bits para criptografia de dados</li>
                                <li>Conformidade com o padrão PCI DSS (Payment Card Industry Data Security Standard)</li>
                                <li>Não armazenamos dados completos de cartão de crédito em nossos servidores</li>
                                <li>Monitoramento constante para detecção de atividades suspeitas</li>
                                <li>Autenticação em duas etapas para acesso à sua conta</li>
                                <li>Verificação de endereço (AVS) e código de segurança (CVV)</li>
                            </ul>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Atenção:</p>
                                        <p className="text-sm text-amber-700">
                                            Nunca enviaremos e-mails solicitando dados de cartão de crédito, senhas ou informações pessoais
                                            sensíveis. Desconfie de qualquer comunicação solicitando esse tipo de informação.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Estornos e Reembolsos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <RefreshCcw className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Estornos e Reembolsos</CardTitle>
                            </div>
                            <CardDescription>Política de estornos e reembolsos</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Em caso de cancelamento, devolução ou troca de produtos, o reembolso será processado da seguinte forma:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Prazos para reembolso:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>
                                            <span className="font-medium">Cartão de crédito:</span> O estorno será solicitado à operadora do
                                            cartão em até 7 dias úteis após a aprovação do cancelamento/devolução. O valor aparecerá como
                                            crédito na fatura seguinte ou em até duas faturas, dependendo da data de fechamento.
                                        </li>
                                        <li>
                                            <span className="font-medium">Cartão de débito:</span> O estorno será processado em até 30 dias
                                            úteis, conforme regras da instituição financeira.
                                        </li>
                                        <li>
                                            <span className="font-medium">Pix:</span> O reembolso será realizado para a mesma chave Pix
                                            utilizada no pagamento em até 5 dias úteis.
                                        </li>
                                        <li>
                                            <span className="font-medium">Boleto/Transferência:</span> O reembolso será realizado via
                                            transferência bancária para conta de mesma titularidade do comprador em até 10 dias úteis.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-muted p-3 rounded-md">
                                    <p className="text-sm font-medium">Importante:</p>
                                    <p className="text-sm text-muted-foreground">
                                        Para processar o reembolso, é necessário que o produto devolvido esteja em perfeitas condições, sem
                                        sinais de uso, com todos os acessórios e na embalagem original. A aprovação do reembolso está
                                        sujeita à análise do produto devolvido.
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Para mais detalhes sobre devoluções e trocas, consulte nossa{" "}
                                <Link href="/politicas/devolucao" className="text-primary hover:underline">
                                    Política de Devolução e Troca
                                </Link>
                                .
                            </p>
                        </CardContent>
                    </Card>

                    {/* Pedidos Internacionais */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Globe className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Pedidos Internacionais</CardTitle>
                            </div>
                            <CardDescription>Informações sobre pagamentos internacionais</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Para pedidos internacionais, aceitamos as seguintes formas de pagamento:
                            </p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Cartões de crédito internacionais (Visa, Mastercard, American Express)</li>
                                <li>PayPal</li>
                                <li>Transferência bancária internacional (SWIFT)</li>
                            </ul>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Informações importantes:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Todos os preços são exibidos em Reais (BRL), mas serão convertidos para a moeda do seu cartão no
                                        momento da cobrança
                                    </li>
                                    <li>
                                        A conversão de moeda é realizada pela operadora do cartão ou banco, podendo incidir IOF e outras
                                        taxas
                                    </li>
                                    <li>
                                        Pedidos internacionais podem estar sujeitos a impostos de importação e taxas alfandegárias, que são
                                        de responsabilidade do cliente
                                    </li>
                                    <li>O parcelamento não está disponível para cartões internacionais</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Atenção:</p>
                                        <p className="text-sm text-amber-700">
                                            Alguns bancos podem bloquear transações internacionais como medida de segurança. Recomendamos que
                                            você informe seu banco sobre a compra internacional antes de realizá-la.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Perguntas Frequentes */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Perguntas Frequentes</CardTitle>
                            </div>
                            <CardDescription>Dúvidas comuns sobre pagamentos</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">É seguro comprar no site?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sim, nosso site utiliza certificado SSL de 256 bits para criptografar todas as informações
                                        transmitidas. Além disso, seguimos os padrões de segurança PCI DSS para processamento de pagamentos.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Quando meu cartão será cobrado?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        A cobrança no cartão de crédito é realizada no momento da aprovação do pedido. Para cartões de
                                        débito, a cobrança é imediata.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Posso alterar a forma de pagamento após finalizar o pedido?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sim, desde que o pagamento ainda não tenha sido aprovado. Entre em contato com nosso atendimento o
                                        mais rápido possível para solicitar a alteração.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">O que acontece se meu pagamento não for aprovado?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Em caso de não aprovação, você receberá uma notificação por e-mail e poderá tentar novamente com
                                        outro método de pagamento ou outro cartão.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Quanto tempo leva para o boleto ser compensado?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Após o pagamento do boleto, a compensação pode levar até 3 dias úteis. Seu pedido será processado
                                        somente após a confirmação do pagamento.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-1">Como faço para solicitar uma nota fiscal?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        A nota fiscal é emitida automaticamente após a confirmação do pagamento e enviada para o e-mail
                                        cadastrado. Caso precise de uma segunda via, acesse sua conta ou entre em contato com nosso
                                        atendimento.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contato */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Ainda com dúvidas?</CardTitle>
                            <CardDescription>Entre em contato com nossa equipe de atendimento</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    Se você tiver alguma dúvida sobre nossa política de pagamento, formas de pagamento ou qualquer outra
                                    questão, nossa equipe está pronta para ajudar.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <Link
                                        href="/contato"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                    >
                                        Fale Conosco
                                    </Link>
                                    <Link
                                        href="https://wa.me/5511999999999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                                    >
                                        WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-10 text-center text-sm text-muted-foreground">
                    <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
                </div>
            </div>
        </main>
    )
}
