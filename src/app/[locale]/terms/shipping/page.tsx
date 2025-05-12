import Link from "next/link"
import { Truck, Package, Clock, MapPin, AlertTriangle, RotateCcw, Shield, DollarSign } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Política de Envio | Joalheria",
    description:
        "Informações sobre prazos de entrega, métodos de envio, e políticas de devolução para clientes brasileiros.",
}

export default function ShippingPolicyPage() {
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/terms",
        },
        {
            label: "Política de Envio",
            href: "/terms/shipping",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Política de Envio e Entrega</h1>
                    <p className="text-muted-foreground">
                        Informações detalhadas sobre nossos métodos de envio, prazos de entrega e políticas relacionadas.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Métodos de Envio */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Truck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Métodos de Envio</CardTitle>
                            </div>
                            <CardDescription>Trabalhamos com os Correios para entregar suas joias com segurança</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-medium">PAC</h3>
                                <p className="text-sm text-muted-foreground">
                                    Serviço econômico para envio de mercadorias. Entrega em todo o Brasil.
                                </p>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Prazo médio: 3 a 12 dias úteis, dependendo da região</li>
                                    <li>Rastreamento incluso</li>
                                    <li>Seguro incluso até R$ 2.000,00</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium">SEDEX</h3>
                                <p className="text-sm text-muted-foreground">
                                    Serviço expresso para envio de mercadorias. Entrega mais rápida.
                                </p>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Prazo médio: 1 a 5 dias úteis, dependendo da região</li>
                                    <li>Rastreamento incluso</li>
                                    <li>Seguro incluso até R$ 2.000,00</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium">SEDEX 10</h3>
                                <p className="text-sm text-muted-foreground">
                                    Serviço premium com entrega garantida até as 10h do dia útil seguinte ao da postagem.
                                </p>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Disponível apenas para algumas localidades</li>
                                    <li>Consulte disponibilidade pelo CEP</li>
                                    <li>Seguro incluso até R$ 2.000,00</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Prazos de Entrega */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Prazos de Entrega</CardTitle>
                            </div>
                            <CardDescription>Os prazos variam de acordo com a região e o método de envio escolhido</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Os prazos de entrega são contados em dias úteis a partir da confirmação do pagamento e podem variar de
                                acordo com a região de entrega:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Capitais e Regiões Metropolitanas</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>PAC: 3 a 5 dias úteis</li>
                                        <li>SEDEX: 1 a 2 dias úteis</li>
                                    </ul>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Interior dos Estados</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>PAC: 5 a 8 dias úteis</li>
                                        <li>SEDEX: 2 a 4 dias úteis</li>
                                    </ul>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Regiões Norte e Nordeste</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>PAC: 8 a 12 dias úteis</li>
                                        <li>SEDEX: 3 a 5 dias úteis</li>
                                    </ul>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Áreas Remotas</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>PAC: 10 a 15 dias úteis</li>
                                        <li>SEDEX: 5 a 8 dias úteis</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Os prazos informados são estimativas dos Correios e podem sofrer alterações em períodos de alta
                                    demanda, como Black Friday e Natal, ou devido a condições climáticas adversas e greves.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custos de Envio */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <DollarSign className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Custos de Envio</CardTitle>
                            </div>
                            <CardDescription>Como calculamos o frete para sua encomenda</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                O valor do frete é calculado automaticamente com base no CEP de destino, peso e dimensões do produto.
                                Você pode calcular o frete na página do produto antes de finalizar a compra.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Fatores que influenciam o valor do frete:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Distância entre nossa loja e o endereço de entrega</li>
                                    <li>Peso e dimensões do produto</li>
                                    <li>Método de envio escolhido (PAC ou SEDEX)</li>
                                    <li>Valor declarado do produto (para fins de seguro)</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 p-3 rounded-md mt-2">
                                <p className="text-sm font-medium">Frete Grátis:</p>
                                <p className="text-sm text-muted-foreground">
                                    Oferecemos frete grátis para compras acima de R$ 500,00 para todo o Brasil via PAC. Promoções
                                    especiais de frete podem ser anunciadas em nosso site e redes sociais.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Rastreamento e Entrega */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Package className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Rastreamento e Entrega</CardTitle>
                            </div>
                            <CardDescription>Como acompanhar seu pedido até a entrega</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Todos os envios incluem código de rastreamento que será enviado para seu e-mail assim que o pedido for
                                despachado. Você também pode acompanhar o status do seu pedido na sua conta em nosso site.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Como rastrear seu pedido:</h3>
                                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                                    <li>
                                        Acesse o site dos Correios:{" "}
                                        <a
                                            href="https://rastreamento.correios.com.br/app/index.php"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            rastreamento.correios.com.br
                                        </a>
                                    </li>
                                    <li>Digite o código de rastreamento enviado por e-mail</li>
                                    <li>Clique em &quot;Buscar&quot; para ver o status atual da entrega</li>
                                </ol>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Recebimento da encomenda:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>A entrega será realizada no endereço informado durante a compra</li>
                                    <li>É necessário que uma pessoa esteja presente para receber a encomenda</li>
                                    <li>O entregador poderá solicitar documento de identificação</li>
                                    <li>Confira o conteúdo da embalagem no momento da entrega</li>
                                </ul>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-2">
                                <p className="text-sm font-medium">Tentativas de entrega:</p>
                                <p className="text-sm text-muted-foreground">
                                    Caso não haja ninguém para receber a encomenda, os Correios realizarão até 3 tentativas de entrega.
                                    Após a terceira tentativa, o pacote ficará disponível para retirada na agência dos Correios mais
                                    próxima por até 7 dias.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Áreas de Entrega e Restrições */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Áreas de Entrega e Restrições</CardTitle>
                            </div>
                            <CardDescription>Informações sobre locais atendidos e possíveis restrições</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Realizamos entregas em todo o território brasileiro, porém algumas localidades podem apresentar
                                restrições ou prazos estendidos.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Áreas com restrições:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Áreas de risco ou com restrição de entrega pelos Correios</li>
                                    <li>Algumas ilhas e localidades de difícil acesso</li>
                                    <li>Caixas postais</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-2">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Atenção:</p>
                                        <p className="text-sm text-amber-700">
                                            Para verificar se sua localidade possui alguma restrição de entrega, consulte o CEP em nossa
                                            calculadora de frete antes de finalizar a compra ou entre em contato com nosso atendimento.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Política de Devolução e Troca */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <RotateCcw className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Política de Devolução e Troca</CardTitle>
                            </div>
                            <CardDescription>Informações sobre como proceder em caso de devolução ou troca</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                De acordo com o Código de Defesa do Consumidor, você tem até 7 dias após o recebimento do produto para
                                solicitar a devolução ou troca por arrependimento.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Como solicitar devolução ou troca:</h3>
                                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                                    <li>
                                        Entre em contato com nosso SAC pelo e-mail{" "}
                                        <span className="font-medium">atendimento@joalheria.com.br</span> ou pelo WhatsApp
                                    </li>
                                    <li>Informe o número do pedido e o motivo da devolução/troca</li>
                                    <li>Aguarde as instruções para envio do produto</li>
                                    <li>Envie o produto em sua embalagem original com todos os acessórios</li>
                                </ol>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Custos de devolução:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        <span className="font-medium">Defeito ou erro no envio:</span> Custos de envio por nossa conta
                                    </li>
                                    <li>
                                        <span className="font-medium">Arrependimento ou desistência:</span> Custos de envio por conta do
                                        cliente
                                    </li>
                                    <li>
                                        <span className="font-medium">Troca por tamanho:</span> Custos de envio por conta do cliente
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-2">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    O produto deve ser devolvido sem sinais de uso, com todas as etiquetas e na embalagem original. Após
                                    recebermos o produto e confirmarmos seu estado, o reembolso será processado em até 10 dias úteis.
                                </p>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Para mais detalhes sobre nossa política de devolução e troca, acesse nossa{" "}
                                <Link href="/politicas/devolucao" className="text-primary hover:underline">
                                    Política de Devolução completa
                                </Link>
                                .
                            </p>
                        </CardContent>
                    </Card>

                    {/* Seguro e Extravio */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Shield className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Seguro e Extravio</CardTitle>
                            </div>
                            <CardDescription>Como procedemos em casos de danos ou extravios durante o transporte</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Todos os nossos envios são segurados para garantir a segurança da sua compra. Em caso de extravio, roubo
                                ou danos durante o transporte, seguimos os seguintes procedimentos:
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Em caso de extravio ou roubo:</h3>
                                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                                    <li>Aguardamos o prazo máximo de entrega informado pelos Correios</li>
                                    <li>Abrimos uma reclamação formal junto aos Correios</li>
                                    <li>Após a confirmação do extravio, realizamos o reenvio do produto ou o reembolso integral</li>
                                </ol>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Em caso de danos na embalagem ou no produto:</h3>
                                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                                    <li>Registre o problema no ato do recebimento com o entregador</li>
                                    <li>Tire fotos da embalagem danificada e do produto</li>
                                    <li>Entre em contato conosco em até 24 horas após o recebimento</li>
                                    <li>Envie as fotos e a descrição do problema para nosso e-mail</li>
                                </ol>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-2">
                                <p className="text-sm font-medium">Valor do seguro:</p>
                                <p className="text-sm text-muted-foreground">
                                    O valor do seguro é calculado com base no valor total da compra. Para joias de alto valor (acima de R$
                                    2.000,00), recomendamos a contratação de seguro adicional, que pode ser solicitado durante o processo
                                    de compra.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Perguntas Frequentes */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Perguntas Frequentes</CardTitle>
                            <CardDescription>Dúvidas comuns sobre envio e entrega</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">
                                        Posso alterar o endereço de entrega após a confirmação do pedido?
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sim, desde que o pedido ainda não tenha sido despachado. Entre em contato com nosso atendimento o
                                        mais rápido possível para solicitar a alteração.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">O que acontece se eu não estiver em casa no momento da entrega?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Os Correios farão até 3 tentativas de entrega em dias úteis. Após a terceira tentativa, o pacote
                                        ficará disponível para retirada na agência dos Correios mais próxima por até 7 dias.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Vocês entregam em caixas postais?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Não realizamos entregas em caixas postais. É necessário informar um endereço completo com CEP
                                        válido.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Como faço para rastrear meu pedido?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Você receberá o código de rastreamento por e-mail assim que o pedido for despachado. Com esse
                                        código, você pode acompanhar a entrega no site dos Correios ou na sua conta em nosso site.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Qual é o prazo para postagem após a confirmação do pagamento?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Produtos em estoque são despachados em até 2 dias úteis após a confirmação do pagamento. Produtos
                                        personalizados ou sob encomenda podem ter prazos diferenciados, informados na página do produto.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-1">Vocês realizam entregas internacionais?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Atualmente, realizamos entregas apenas para o Brasil. Estamos trabalhando para disponibilizar
                                        entregas internacionais em breve.
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
                                    Se você tiver alguma dúvida sobre nossa política de envio, prazos de entrega ou qualquer outra
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
