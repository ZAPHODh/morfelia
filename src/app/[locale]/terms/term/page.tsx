import Link from "next/link"
import { FileText, AlertTriangle, Scale, ShieldCheck, UserCheck, Copyright, RefreshCcw, Truck, CreditCard, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Termos e Condições | Joalheria",
    description: "Termos de uso do site e condições gerais de compra.",
}

export default function TermsPage() {
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/politicas",
        },
        {
            label: "Termos e Condições",
            href: "/politicas/termos",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Termos e Condições</h1>
                    <p className="text-muted-foreground">Termos de uso do site e condições gerais de compra.</p>
                </div>

                <div className="space-y-8">
                    {/* Introdução */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Introdução</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Bem-vindo ao site da Joalheria. Estes Termos e Condições regem o uso deste site e a compra de produtos
                                oferecidos por nós. Ao acessar nosso site e/ou fazer uma compra, você concorda com os termos aqui
                                descritos.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Por favor, leia estes termos cuidadosamente antes de acessar ou utilizar nosso site. Se você não
                                concordar com todos os termos deste acordo, não poderá acessar o site ou utilizar qualquer serviço.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Estes Termos e Condições estão em conformidade com a legislação brasileira, incluindo o Código de Defesa
                                do Consumidor (Lei nº 8.078/90), o Marco Civil da Internet (Lei nº 12.965/14) e a Lei Geral de Proteção
                                de Dados Pessoais (Lei nº 13.709/18).
                            </p>
                        </CardContent>
                    </Card>

                    {/* Definições */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Definições</CardTitle>
                            </div>
                            <CardDescription>Termos utilizados neste documento</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Para os fins destes Termos e Condições, as seguintes definições se aplicam:
                            </p>

                            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                                <li>
                                    <span className="font-medium">&quot;Site&quot;</span> refere-se ao website da Joalheria, acessível em
                                    www.joalheria.com.br
                                </li>
                                <li>
                                    <span className="font-medium">&quot;Nós&quot;, &quot;nosso&quot;, &quot;Joalheria&quot;</span> refere-se à empresa Joalheria Ltda.,
                                    inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX
                                </li>
                                <li>
                                    <span className="font-medium">&quot;Você&quot;, &quot;seu&quot;, &quot;Cliente&quot;, &quot;Usuário&quot;</span> refere-se à pessoa que acessa
                                    ou utiliza o Site
                                </li>
                                <li>
                                    <span className="font-medium">&quot;Conteúdo&quot;</span> refere-se a textos, gráficos, imagens, músicas,
                                    software, áudio, vídeo, informações ou outros materiais
                                </li>
                                <li>
                                    <span className="font-medium">&quot;Produtos&quot;</span> refere-se às joias e acessórios disponíveis para
                                    compra em nosso Site
                                </li>
                                <li>
                                    <span className="font-medium">&quot;Pedido&quot;</span> refere-se à solicitação de compra de Produtos realizada
                                    pelo Cliente
                                </li>
                                <li>
                                    <span className="font-medium">&quot;Termos&quot;</span> refere-se a estes Termos e Condições
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Uso do Site */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <UserCheck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Uso do Site</CardTitle>
                            </div>
                            <CardDescription>Condições para utilização do nosso site</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">Ao utilizar nosso site, você concorda em:</p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Fornecer informações verdadeiras, precisas, atuais e completas quando solicitado</li>
                                <li>Manter e atualizar prontamente suas informações de conta</li>
                                <li>Manter a segurança e confidencialidade de sua senha e identificação de acesso</li>
                                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                                <li>Ser responsável por todas as atividades que ocorram em sua conta</li>
                                <li>Não utilizar o site para qualquer finalidade ilegal ou não autorizada</li>
                                <li>
                                    Não violar quaisquer leis em sua jurisdição (incluindo, mas não se limitando a, leis de direitos
                                    autorais)
                                </li>
                            </ul>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Restrições de uso:</h3>
                                <p className="text-sm text-muted-foreground">Você concorda em não:</p>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Modificar, adaptar ou hackear o Site ou modificar outro website para falsamente sugerir associação
                                        com nosso Site
                                    </li>
                                    <li>
                                        Reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Site sem nossa
                                        permissão expressa por escrito
                                    </li>
                                    <li>Utilizar o Site para distribuir material publicitário não solicitado</li>
                                    <li>Utilizar técnicas de mineração de dados, robôs ou métodos similares de coleta de dados</li>
                                    <li>Interferir ou interromper o Site ou os servidores ou redes conectados ao Site</li>
                                    <li>
                                        Publicar ou transmitir qualquer material que contenha vírus, cavalos de Troia, worms, ou qualquer
                                        outro código, arquivo ou programa de computador destinado a interromper, destruir ou limitar a
                                        funcionalidade de qualquer software ou hardware
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Atenção:</p>
                                        <p className="text-sm text-amber-700">
                                            Reservamo-nos o direito de recusar o serviço, encerrar contas, remover ou editar conteúdo ou
                                            cancelar pedidos a nosso critério, incluindo, mas não se limitando a, se acreditarmos que a
                                            conduta do cliente viola a lei aplicável ou é prejudicial aos interesses de terceiros.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Produtos e Preços */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <ShoppingBag className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Produtos e Preços</CardTitle>
                            </div>
                            <CardDescription>Informações sobre produtos, disponibilidade e preços</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Produtos:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Todos os produtos são descritos com o máximo de precisão possível</li>
                                    <li>
                                        As imagens dos produtos são ilustrativas e podem apresentar pequenas variações em relação ao produto
                                        real, especialmente em joias artesanais
                                    </li>
                                    <li>
                                        As especificações técnicas (peso, dimensões, quilates) podem ter pequenas variações dentro dos
                                        limites aceitáveis da indústria joalheira
                                    </li>
                                    <li>Reservamo-nos o direito de limitar a quantidade de produtos disponíveis para compra</li>
                                    <li>Não garantimos que todos os produtos estarão disponíveis a todo momento</li>
                                </ul>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Preços:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Todos os preços são exibidos em Reais (BRL) e incluem impostos, salvo indicação em contrário</li>
                                    <li>
                                        Os preços estão sujeitos a alterações sem aviso prévio, especialmente para produtos que contenham
                                        metais preciosos e pedras, cujos valores de mercado flutuam
                                    </li>
                                    <li>O preço aplicável é aquele vigente no momento da confirmação do pedido</li>
                                    <li>
                                        Erros de precificação evidentes serão corrigidos mesmo após a confirmação do pedido, sendo oferecida
                                        a opção de cancelamento sem custos
                                    </li>
                                    <li>Promoções e descontos têm prazo determinado e podem ser encerrados a qualquer momento</li>
                                </ul>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Apesar de nossos esforços para manter as informações de preços e disponibilidade atualizadas, podem
                                    ocorrer erros. Caso identifiquemos um erro no preço de um produto que você encomendou, informaremos e
                                    daremos a opção de confirmar o pedido pelo preço correto ou cancelá-lo.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pedidos e Pagamentos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <CreditCard className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Pedidos e Pagamentos</CardTitle>
                            </div>
                            <CardDescription>Processo de compra e formas de pagamento</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Pedidos:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Ao fazer um pedido, você declara que é maior de 18 anos e possui capacidade legal para contratar
                                    </li>
                                    <li>Seu pedido constitui uma oferta para comprar um produto, sujeita à nossa aceitação</li>
                                    <li>
                                        A confirmação do pedido não constitui aceitação; o contrato só é formado quando enviamos confirmação
                                        de envio do produto
                                    </li>
                                    <li>
                                        Reservamo-nos o direito de recusar ou cancelar qualquer pedido por qualquer motivo, incluindo
                                        limitações de quantidade, erros de precificação ou problemas de identificação
                                    </li>
                                    <li>Você receberá um e-mail de confirmação com os detalhes do seu pedido</li>
                                </ul>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Pagamentos:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Aceitamos diversas formas de pagamento, conforme detalhado em nossa{" "}
                                        <Link href="/politicas/pagamento" className="text-primary hover:underline">
                                            Política de Pagamento
                                        </Link>
                                    </li>
                                    <li>Todas as transações são processadas por gateways de pagamento seguros</li>
                                    <li>
                                        Reservamo-nos o direito de verificar as informações de pagamento e envio para prevenir fraudes
                                    </li>
                                    <li>O pedido só será processado após a confirmação do pagamento</li>
                                    <li>
                                        Para pagamentos via boleto bancário, o pedido será reservado por 3 dias úteis; após esse prazo, sem
                                        confirmação de pagamento, o pedido será automaticamente cancelado
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Nota fiscal:</p>
                                <p className="text-sm text-muted-foreground">
                                    A nota fiscal será emitida em nome do titular do pedido e enviada por e-mail após a confirmação do
                                    pagamento. Para emissão em nome de terceiros ou com CNPJ, entre em contato com nosso atendimento antes
                                    de finalizar a compra.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Envio e Entrega */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Truck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Envio e Entrega</CardTitle>
                            </div>
                            <CardDescription>Informações sobre prazos e condições de entrega</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Para informações detalhadas sobre envio, prazos de entrega e custos de frete, consulte nossa{" "}
                                <Link href="/politicas/envio" className="text-primary hover:underline">
                                    Política de Envio
                                </Link>
                                . Abaixo estão os principais pontos:
                            </p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>O prazo de entrega é contado a partir da confirmação do pagamento</li>
                                <li>Os prazos de entrega são estimados e podem variar de acordo com a região</li>
                                <li>Não nos responsabilizamos por atrasos causados por eventos fora de nosso controle</li>
                                <li>É responsabilidade do cliente fornecer um endereço de entrega correto e completo</li>
                                <li>
                                    Entregas não realizadas devido a informações incorretas ou ausência de pessoa para recebimento são de
                                    responsabilidade do cliente
                                </li>
                                <li>Todas as entregas são acompanhadas de código de rastreamento</li>
                            </ul>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Importante:</p>
                                        <p className="text-sm text-amber-700">
                                            No momento da entrega, verifique se a embalagem está intacta. Em caso de avarias visíveis, recuse
                                            o recebimento e entre em contato conosco imediatamente. Após o recebimento, você tem 7 dias para
                                            verificar o produto e reportar qualquer problema.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Trocas e Devoluções */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <RefreshCcw className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Trocas e Devoluções</CardTitle>
                            </div>
                            <CardDescription>Política de trocas, devoluções e reembolsos</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                De acordo com o Código de Defesa do Consumidor, você tem o direito de devolver o produto em até 7 dias
                                corridos após o recebimento, caso não esteja satisfeito. Além disso:
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Direito de arrependimento:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Você pode desistir da compra em até 7 dias corridos após o recebimento do produto</li>
                                    <li>
                                        O produto deve ser devolvido em sua embalagem original, sem sinais de uso, com todos os acessórios e
                                        manuais
                                    </li>
                                    <li>O reembolso será realizado pelo mesmo método de pagamento utilizado na compra</li>
                                    <li>Os custos de envio para devolução por arrependimento são de responsabilidade do cliente</li>
                                </ul>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Produtos com defeito:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Em caso de defeito, você tem 30 dias para produtos não duráveis e 90 dias para produtos duráveis
                                        para reportar o problema
                                    </li>
                                    <li>
                                        O produto será analisado por nossa equipe técnica para verificar se o defeito está coberto pela
                                        garantia
                                    </li>
                                    <li>
                                        Se confirmado o defeito de fabricação, oferecemos as seguintes opções: substituição por um produto
                                        igual, troca por outro produto com complemento ou restituição do valor pago
                                    </li>
                                    <li>Os custos de envio para devolução de produtos com defeito são de nossa responsabilidade</li>
                                </ul>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Para mais detalhes sobre nossa política de trocas e devoluções, consulte nossa{" "}
                                <Link href="/politicas/devolucao" className="text-primary hover:underline">
                                    Política de Devolução
                                </Link>{" "}
                                completa.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Propriedade Intelectual */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Copyright className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Propriedade Intelectual</CardTitle>
                            </div>
                            <CardDescription>Direitos autorais e marcas registradas</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Todo o conteúdo disponível no Site, incluindo, mas não se limitando a, textos, gráficos, logotipos,
                                ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da
                                Joalheria ou de seus fornecedores de conteúdo e está protegido por leis nacionais e internacionais de
                                direitos autorais.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Uso permitido:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Você pode visualizar, baixar e imprimir conteúdo do Site apenas para uso pessoal e não comercial
                                    </li>
                                    <li>
                                        Você não pode modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar,
                                        licenciar, criar trabalhos derivados, transferir ou vender qualquer informação obtida do Site
                                    </li>
                                    <li>
                                        É proibido o uso de técnicas de framing para encapsular qualquer marca registrada, logotipo ou
                                        outras informações proprietárias sem nosso consentimento expresso por escrito
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Marcas registradas:</h3>
                                <p className="text-sm text-muted-foreground">
                                    O nome &quot;Joalheria&quot;, nosso logotipo e todos os nomes relacionados, logotipos, nomes de produtos e
                                    serviços, designs e slogans são marcas registradas da Joalheria ou de suas afiliadas. Você não pode
                                    usar essas marcas sem nossa permissão prévia por escrito.
                                </p>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Se você acredita que seu trabalho foi copiado de uma maneira que constitui violação de direitos
                                    autorais, forneça as seguintes informações ao nosso agente de direitos autorais: (i) uma assinatura
                                    eletrônica ou física da pessoa autorizada a agir em nome do proprietário do direito autoral; (ii) uma
                                    descrição do trabalho protegido por direitos autorais que você alega ter sido violado; (iii) uma
                                    descrição de onde o material que você alega estar infringindo está localizado no site; (iv) seu
                                    endereço, número de telefone e endereço de e-mail; (v) uma declaração sua de que acredita de boa fé
                                    que o uso contestado não é autorizado pelo proprietário dos direitos autorais, seu agente ou a lei;
                                    (vi) uma declaração sua, feita sob pena de perjúrio, de que as informações acima em sua notificação
                                    são precisas e que você é o proprietário dos direitos autorais ou autorizado a agir em nome do
                                    proprietário dos direitos autorais.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Limitação de Responsabilidade */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Scale className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Limitação de Responsabilidade</CardTitle>
                            </div>
                            <CardDescription>Limites da nossa responsabilidade</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">Dentro dos limites permitidos por lei:</p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>
                                    O Site e todos os produtos são fornecidos &quot;como estão&quot; e &quot;conforme disponíveis&quot;, sem garantias de
                                    qualquer tipo, expressas ou implícitas
                                </li>
                                <li>Não garantimos que o Site funcionará sem interrupções ou estará livre de erros</li>
                                <li>
                                    Não seremos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos,
                                    incluindo, mas não se limitando a, perda de lucros, dados, uso, boa vontade ou outras perdas
                                    intangíveis
                                </li>
                                <li>
                                    Nossa responsabilidade total por quaisquer reclamações relacionadas aos produtos não excederá o valor
                                    pago pelo produto específico que deu origem à reclamação
                                </li>
                                <li>
                                    Não seremos responsáveis por atrasos ou falhas no desempenho resultantes de causas além do nosso
                                    controle razoável
                                </li>
                            </ul>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Importante:</p>
                                        <p className="text-sm text-amber-700">
                                            As limitações acima não se aplicam a responsabilidades que não podem ser excluídas ou limitadas
                                            pela lei aplicável, como em casos de fraude, negligência grave ou violação intencional.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Privacidade e Proteção de Dados */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <ShieldCheck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Privacidade e Proteção de Dados</CardTitle>
                            </div>
                            <CardDescription>Como tratamos suas informações pessoais</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Nossa{" "}
                                <Link href="/politicas/privacidade" className="text-primary hover:underline">
                                    Política de Privacidade
                                </Link>{" "}
                                descreve como coletamos, usamos e compartilhamos suas informações quando você visita ou faz uma compra
                                em nosso site.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Ao utilizar nosso site, você concorda com a coleta e uso de informações de acordo com nossa Política de
                                Privacidade. Processamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados
                                Pessoais (LGPD).
                            </p>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium">Principais pontos sobre privacidade:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        Coletamos apenas as informações necessárias para processar seu pedido e melhorar sua experiência
                                    </li>
                                    <li>
                                        Utilizamos cookies e tecnologias similares conforme descrito em nossa{" "}
                                        <Link href="/politicas/cookies" className="text-primary hover:underline">
                                            Política de Cookies
                                        </Link>
                                    </li>
                                    <li>Não vendemos suas informações pessoais a terceiros</li>
                                    <li>Implementamos medidas de segurança para proteger suas informações</li>
                                    <li>Você tem direitos sobre seus dados pessoais, incluindo acesso, correção e exclusão</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Alterações nos Termos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Alterações nos Termos</CardTitle>
                            </div>
                            <CardDescription>Como e quando estes termos podem ser modificados</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento, a nosso exclusivo
                                critério. Alterações entrarão em vigor imediatamente após a publicação dos Termos atualizados no Site.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                É sua responsabilidade verificar periodicamente se houve alterações. O uso contínuo do Site após a
                                publicação de quaisquer modificações constitui aceitação dessas modificações.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Para alterações significativas, faremos esforços razoáveis para notificar os usuários, como através de
                                um aviso em destaque no Site ou por e-mail.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Lei Aplicável e Foro */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Scale className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Lei Aplicável e Foro</CardTitle>
                            </div>
                            <CardDescription>Jurisdição e resolução de disputas</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Estes Termos e Condições são regidos e interpretados de acordo com as leis da República Federativa do
                                Brasil, independentemente de conflitos com disposições legais.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Qualquer disputa decorrente ou relacionada a estes Termos será submetida à jurisdição exclusiva dos
                                tribunais da Comarca de São Paulo, Estado de São Paulo, Brasil.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Antes de recorrer aos tribunais, comprometemo-nos a tentar resolver quaisquer disputas de forma
                                amigável. Você concorda em primeiro notificar-nos sobre qualquer disputa, permitindo-nos tentar
                                resolvê-la diretamente com você.
                            </p>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Nada nestes Termos limitará o direito do consumidor de recorrer ao Procon ou ao Poder Judiciário como
                                    consumidor, conforme garantido pelo Código de Defesa do Consumidor.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Disposições Gerais */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Disposições Gerais</CardTitle>
                            </div>
                            <CardDescription>Outras informações importantes</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                                <li>
                                    <span className="font-medium">Independência das cláusulas:</span> Se qualquer disposição destes Termos
                                    for considerada inválida ou inexequível, tal disposição será eliminada e as disposições restantes
                                    permanecerão em pleno vigor e efeito.
                                </li>
                                <li>
                                    <span className="font-medium">Renúncia:</span> A falha da Joalheria em fazer valer qualquer direito ou
                                    disposição destes Termos não constituirá renúncia a tal direito ou disposição.
                                </li>
                                <li>
                                    <span className="font-medium">Cessão:</span> Você não pode ceder seus direitos ou obrigações sob estes
                                    Termos sem nosso consentimento prévio por escrito.
                                </li>
                                <li>
                                    <span className="font-medium">Acordo integral:</span> Estes Termos, juntamente com quaisquer políticas
                                    ou regras operacionais publicadas por nós no Site, constituem o acordo integral entre você e a
                                    Joalheria em relação ao uso do Site.
                                </li>
                                <li>
                                    <span className="font-medium">Comunicações:</span> Ao fornecer seu endereço de e-mail, você concorda
                                    em receber comunicações eletrônicas relacionadas ao seu pedido e ao uso do Site.
                                </li>
                                <li>
                                    <span className="font-medium">Força maior:</span> Não seremos responsáveis por qualquer falha ou
                                    atraso no cumprimento de nossas obrigações devido a eventos fora de nosso controle razoável.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Contato */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Entre em Contato</CardTitle>
                            <CardDescription>Para questões relacionadas a estes Termos e Condições</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    Se você tiver dúvidas ou preocupações sobre estes Termos e Condições, entre em contato conosco:
                                </p>

                                <div className="bg-muted p-4 rounded-md mt-4">
                                    <p className="font-medium">Contato:</p>
                                    <ul className="text-sm space-y-1 mt-2">
                                        <li>
                                            <span className="font-medium">E-mail:</span> juridico@joalheria.com.br
                                        </li>
                                        <li>
                                            <span className="font-medium">Telefone:</span> (11) 1234-5678
                                        </li>
                                        <li>
                                            <span className="font-medium">Endereço:</span> Av. Paulista, 1000, São Paulo - SP, CEP 01310-100
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <Link
                                        href="/contato"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                    >
                                        Fale Conosco
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


