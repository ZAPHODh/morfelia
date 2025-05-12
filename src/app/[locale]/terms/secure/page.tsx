import Link from "next/link"
import { ShieldCheck, Clock, FileText, AlertTriangle, HelpCircle, CheckCircle, XCircle, HeartIcon, DollarSign } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Política de Garantia | Joalheria",
    description: "Informações sobre garantia de produtos, cobertura, exclusões e como acionar a garantia.",
}

export default function WarrantyPolicyPage() {
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/politicas",
        },
        {
            label: "Política de Garantia",
            href: "/politicas/garantia",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Política de Garantia</h1>
                    <p className="text-muted-foreground">
                        Informações sobre garantia de produtos, cobertura, exclusões e como acionar a garantia.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Introdução */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Garantia de Qualidade</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Todos os produtos comercializados em nossa loja são fabricados com materiais de alta qualidade e passam
                                por rigorosos controles de qualidade. Oferecemos garantia para todos os nossos produtos, assegurando a
                                qualidade e durabilidade das nossas joias.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Nossa garantia cobre defeitos de fabricação e problemas relacionados à qualidade dos materiais
                                utilizados. Esta política de garantia está em conformidade com o Código de Defesa do Consumidor (Lei nº
                                8.078/90).
                            </p>
                        </CardContent>
                    </Card>

                    {/* Prazo de Garantia */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Prazo de Garantia</CardTitle>
                            </div>
                            <CardDescription>Duração da garantia por tipo de produto</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                O prazo de garantia varia de acordo com o tipo de produto:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Joias em Ouro</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Garantia de 2 anos para defeitos de fabricação.</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Garantia vitalícia para o teor do metal precioso.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Joias em Prata</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Garantia de 1 ano para defeitos de fabricação.</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Garantia vitalícia para o teor do metal precioso.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Joias com Pedras Preciosas</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Garantia de 1 ano para defeitos de fabricação e fixação das pedras.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Relógios</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Garantia de 1 ano para o mecanismo.</p>
                                    <p className="text-sm text-muted-foreground mt-1">Garantia de 6 meses para a bateria.</p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Acessórios</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Garantia de 90 dias para defeitos de fabricação.</p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Produtos Personalizados</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Garantia de 1 ano para defeitos de fabricação.</p>
                                </div>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-2">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    O prazo de garantia começa a contar a partir da data de emissão da nota fiscal. Para acionar a
                                    garantia, é necessário apresentar a nota fiscal de compra.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* O que a Garantia Cobre */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>O que a Garantia Cobre</CardTitle>
                            </div>
                            <CardDescription>Situações cobertas pela nossa garantia</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">Nossa garantia cobre os seguintes problemas:</p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Defeitos de fabricação</li>
                                <li>Problemas na solda ou junção de componentes</li>
                                <li>Descoloração anormal do metal (exceto quando causada por produtos químicos)</li>
                                <li>Quebra ou rachaduras não causadas por impacto</li>
                                <li>Perda de pedras devido a defeitos na cravação (dentro do período de garantia)</li>
                                <li>Problemas no mecanismo de fechos e travas</li>
                                <li>Deformações não causadas por mau uso</li>
                                <li>Falhas no banho de ródio ou outras coberturas protetoras</li>
                            </ul>

                            <div className="bg-primary/10 p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Garantia Estendida:</p>
                                <p className="text-sm text-muted-foreground">
                                    Oferecemos a opção de Garantia Estendida para alguns produtos, que pode ser adquirida no momento da
                                    compra. A Garantia Estendida amplia o prazo de cobertura por mais 1 ano além da garantia padrão e
                                    inclui serviços adicionais como limpeza profissional e polimento.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* O que a Garantia NÃO Cobre */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <XCircle className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>O que a Garantia NÃO Cobre</CardTitle>
                            </div>
                            <CardDescription>Situações não cobertas pela nossa garantia</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">A garantia não cobre problemas causados por:</p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Desgaste natural pelo uso</li>
                                <li>Danos causados por acidentes, quedas ou impactos</li>
                                <li>Exposição a produtos químicos (perfumes, cremes, cloro, etc.)</li>
                                <li>Contato com água salgada ou piscinas (exceto para produtos específicos à prova d&apos;água)</li>
                                <li>Modificações ou reparos realizados por terceiros não autorizados</li>
                                <li>Uso inadequado ou em desacordo com as instruções de cuidado</li>
                                <li>Armazenamento inadequado</li>
                                <li>Desgaste do banho de ródio em joias de prata (considerado normal após 6 meses de uso)</li>
                                <li>Alterações na cor de pedras naturais devido à exposição ao sol ou produtos químicos</li>
                                <li>Riscos superficiais causados pelo uso diário</li>
                            </ul>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Atenção:</p>
                                        <p className="text-sm text-amber-700">
                                            A garantia será invalidada caso seja constatado mau uso, alterações não autorizadas ou danos
                                            causados por negligência. Recomendamos seguir as instruções de cuidado fornecidas com cada produto
                                            para preservar sua qualidade e aparência.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Como Acionar a Garantia */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Como Acionar a Garantia</CardTitle>
                            </div>
                            <CardDescription>Procedimentos para solicitar o serviço de garantia</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">Para acionar a garantia, siga os passos abaixo:</p>

                            <ol className="text-sm space-y-3 list-decimal list-inside text-muted-foreground">
                                <li className="pl-2">
                                    <span className="font-medium -ml-2">Entre em contato conosco</span>
                                    <p className="mt-1">
                                        Envie um e-mail para garantia@joalheria.com.br ou ligue para (11) 1234-5678 informando o problema e
                                        o número da nota fiscal.
                                    </p>
                                </li>

                                <li className="pl-2">
                                    <span className="font-medium -ml-2">Envie o produto para análise</span>
                                    <p className="mt-1">
                                        Após o contato inicial, você receberá instruções para enviar o produto para nossa central de
                                        reparos. O produto deve ser enviado na embalagem original ou em embalagem adequada, acompanhado da
                                        nota fiscal e do formulário de solicitação de garantia.
                                    </p>
                                </li>

                                <li className="pl-2">
                                    <span className="font-medium -ml-2">Análise técnica</span>
                                    <p className="mt-1">
                                        Nossa equipe técnica irá analisar o produto para verificar se o problema está coberto pela garantia.
                                        Esta análise pode levar até 7 dias úteis.
                                    </p>
                                </li>

                                <li className="pl-2">
                                    <span className="font-medium -ml-2">Reparo ou substituição</span>
                                    <p className="mt-1">
                                        Se o problema estiver coberto pela garantia, realizaremos o reparo ou, caso não seja possível,
                                        substituiremos o produto por um igual ou similar. O prazo para reparo é de até 30 dias.
                                    </p>
                                </li>

                                <li className="pl-2">
                                    <span className="font-medium -ml-2">Devolução</span>
                                    <p className="mt-1">
                                        Após o reparo ou substituição, o produto será enviado para o endereço indicado por você, sem custos
                                        adicionais.
                                    </p>
                                </li>
                            </ol>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Para produtos adquiridos em nossas lojas físicas, a garantia pode ser acionada diretamente na loja
                                    onde foi realizada a compra. Para compras online, siga o procedimento acima.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <DollarSign className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Custos</CardTitle>
                            </div>
                            <CardDescription>Informações sobre custos relacionados à garantia</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Serviços cobertos pela garantia:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Reparo de defeitos de fabricação: <span className="font-medium">Gratuito</span>
                                    </li>
                                    <li>
                                        Substituição de componentes com defeito: <span className="font-medium">Gratuito</span>
                                    </li>
                                    <li>
                                        Recravação de pedras (quando o problema for de fabricação):{" "}
                                        <span className="font-medium">Gratuito</span>
                                    </li>
                                    <li>
                                        Frete para devolução do produto reparado: <span className="font-medium">Gratuito</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Serviços não cobertos pela garantia (valores de referência):</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Polimento e limpeza profissional: <span className="font-medium">R$ 50,00 a R$ 150,00</span>{" "}
                                        (dependendo do tipo de joia)
                                    </li>
                                    <li>
                                        Banho de ródio em peças de prata: <span className="font-medium">R$ 80,00 a R$ 200,00</span>{" "}
                                        (dependendo do tamanho)
                                    </li>
                                    <li>
                                        Redimensionamento de anéis: <span className="font-medium">R$ 100,00 a R$ 300,00</span> (dependendo
                                        do material)
                                    </li>
                                    <li>
                                        Substituição de pedras perdidas por mau uso: <span className="font-medium">Valor sob consulta</span>
                                    </li>
                                    <li>
                                        Reparo de danos causados por mau uso: <span className="font-medium">Valor sob consulta</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Caso o problema não esteja coberto pela garantia, você receberá um orçamento para aprovação antes de
                                qualquer serviço ser realizado. Se optar por não realizar o serviço, apenas o frete de retorno será
                                cobrado.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Cuidados com as Joias */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <HeartIcon className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Cuidados com as Joias</CardTitle>
                            </div>
                            <CardDescription>Recomendações para preservar suas joias</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Para manter suas joias em perfeito estado e prolongar sua durabilidade, recomendamos os seguintes
                                cuidados:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Joias de Ouro:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Evite contato com produtos químicos como perfumes, cremes e cloro</li>
                                        <li>Limpe regularmente com pano macio e seco</li>
                                        <li>Guarde separadamente em embalagens macias para evitar arranhões</li>
                                        <li>Evite usar durante atividades físicas intensas</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Joias de Prata:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>A prata pode oxidar naturalmente com o tempo - isso não é um defeito</li>
                                        <li>Evite contato com água, especialmente água com cloro ou salgada</li>
                                        <li>Guarde em embalagens herméticas para reduzir a oxidação</li>
                                        <li>Limpe regularmente com produtos específicos para prata</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Joias com Pedras:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Evite impactos que possam danificar ou soltar as pedras</li>
                                        <li>Algumas pedras são sensíveis à luz solar e produtos químicos</li>
                                        <li>Limpe com escova macia e água morna com sabão neutro (exceto para pedras porosas)</li>
                                        <li>Verifique periodicamente a fixação das pedras</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Oferecemos serviços de manutenção preventiva, como limpeza profissional e verificação de segurança, que
                                podem ser agendados em nossas lojas ou pelo site. Recomendamos realizar esta manutenção a cada 6-12
                                meses para preservar a beleza e durabilidade das suas joias.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Perguntas Frequentes */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Perguntas Frequentes</CardTitle>
                            </div>
                            <CardDescription>Dúvidas comuns sobre nossa garantia</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">A garantia é transferível?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Não, a garantia é válida apenas para o comprador original e não pode ser transferida para terceiros.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Posso estender o prazo de garantia?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sim, oferecemos a opção de Garantia Estendida para a maioria dos produtos, que pode ser adquirida no
                                        momento da compra. Consulte as condições específicas para cada produto.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">O que acontece se eu perder a nota fiscal?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        A nota fiscal é o documento que comprova a data de compra e é essencial para acionar a garantia. No
                                        entanto, se você realizou a compra em nosso site e está cadastrado, podemos verificar o histórico de
                                        compras no sistema.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">A garantia cobre ajustes de tamanho?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Não, ajustes de tamanho são considerados serviços de personalização e não estão cobertos pela
                                        garantia. No entanto, oferecemos este serviço mediante pagamento.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Quanto tempo leva para reparar minha joia?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        O prazo para reparo pode variar de 7 a 30 dias, dependendo da complexidade do problema e da
                                        disponibilidade de materiais. Você será informado sobre o prazo estimado após a análise técnica.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-1">A garantia cobre produtos comprados em promoção?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sim, todos os produtos, independentemente de terem sido adquiridos em promoção, possuem a mesma
                                        garantia contra defeitos de fabricação.
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
                                    Se você tiver alguma dúvida sobre nossa política de garantia ou precisar acionar a garantia, nossa
                                    equipe está pronta para ajudar.
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


