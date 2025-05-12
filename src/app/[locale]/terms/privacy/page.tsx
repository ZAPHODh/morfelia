import Link from "next/link"
import { Shield, Lock, Eye, FileText, AlertTriangle, UserCheck, Clock, Cookie } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Política de Privacidade | Joalheria",
    description: "Como coletamos, usamos e protegemos seus dados pessoais.",
}

export default function PrivacyPolicyPage() {
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/terms",
        },
        {
            label: "Política de Privacidade",
            href: "/terms/privacy",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
                    <p className="text-muted-foreground">Como coletamos, usamos e protegemos seus dados pessoais.</p>
                </div>

                <div className="space-y-8">
                    {/* Introdução */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Shield className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Introdução</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos,
                                armazenamos e protegemos suas informações pessoais quando você utiliza nosso site e serviços.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Ao utilizar nosso site e fornecer seus dados pessoais, você concorda com as práticas descritas nesta
                                política. Recomendamos que você leia este documento na íntegra para entender nossos procedimentos em
                                relação aos seus dados.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Esta política está em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº
                                13.709/2018.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Coleta de Dados */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Eye className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Coleta de Dados</CardTitle>
                            </div>
                            <CardDescription>Informações que coletamos sobre você</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-medium">Dados fornecidos por você:</h3>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Informações de cadastro (nome, e-mail, telefone, CPF/CNPJ)</li>
                                    <li>Endereço para entrega e cobrança</li>
                                    <li>Informações de pagamento (processadas de forma segura por nossos parceiros)</li>
                                    <li>Histórico de compras e preferências</li>
                                    <li>Comunicações conosco via chat, e-mail ou telefone</li>
                                    <li>Avaliações e comentários sobre produtos</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium">Dados coletados automaticamente:</h3>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Endereço IP e informações do dispositivo</li>
                                    <li>Dados de navegação e interação com o site</li>
                                    <li>Cookies e tecnologias similares</li>
                                    <li>Localização geográfica aproximada</li>
                                    <li>Informações de acesso e uso do site</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium">Dados de terceiros:</h3>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Informações de redes sociais (quando você se conecta por esses meios)</li>
                                    <li>Dados de parceiros comerciais e de marketing</li>
                                    <li>Informações públicas disponíveis legalmente</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Uso dos Dados */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Uso dos Dados</CardTitle>
                            </div>
                            <CardDescription>Como utilizamos suas informações</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Utilizamos seus dados pessoais para os seguintes propósitos:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Execução de contrato e prestação de serviços:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Processar e gerenciar suas compras</li>
                                        <li>Entregar produtos no endereço fornecido</li>
                                        <li>Fornecer suporte ao cliente e atendimento pós-venda</li>
                                        <li>Gerenciar sua conta e preferências</li>
                                        <li>Processar pagamentos e reembolsos</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Interesses legítimos:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Melhorar nossos produtos e serviços</li>
                                        <li>Personalizar sua experiência de compra</li>
                                        <li>Detectar e prevenir fraudes e abusos</li>
                                        <li>Realizar análises de mercado e tendências</li>
                                        <li>Proteger nossos direitos legais e propriedade</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Com seu consentimento:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Enviar comunicações de marketing e promoções</li>
                                        <li>Coletar dados de geolocalização precisa</li>
                                        <li>Utilizar cookies não essenciais</li>
                                        <li>Compartilhar dados com parceiros para fins de marketing</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Obrigações legais:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Cumprir obrigações fiscais e contábeis</li>
                                        <li>Responder a solicitações legais e ordens judiciais</li>
                                        <li>Manter registros exigidos por lei</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Compartilhamento de Dados */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <UserCheck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Compartilhamento de Dados</CardTitle>
                            </div>
                            <CardDescription>Com quem compartilhamos suas informações</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Podemos compartilhar suas informações pessoais com as seguintes categorias de destinatários:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Prestadores de serviços:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Processadores de pagamento (instituições financeiras e operadoras de cartão)</li>
                                        <li>Serviços de entrega e logística (Correios e transportadoras)</li>
                                        <li>Serviços de hospedagem e tecnologia</li>
                                        <li>Serviços de atendimento ao cliente</li>
                                        <li>Serviços de marketing e análise</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Parceiros comerciais:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Fabricantes e fornecedores de produtos</li>
                                        <li>Parceiros de programas de fidelidade</li>
                                        <li>Empresas afiliadas e do mesmo grupo econômico</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Autoridades e órgãos reguladores:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Órgãos governamentais, quando exigido por lei</li>
                                        <li>Autoridades fiscais e regulatórias</li>
                                        <li>Órgãos judiciais e policiais mediante ordem judicial</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-muted p-3 rounded-md mt-4">
                                <p className="text-sm font-medium">Importante:</p>
                                <p className="text-sm text-muted-foreground">
                                    Exigimos que todos os terceiros que têm acesso aos seus dados respeitem a segurança dos seus dados
                                    pessoais e os tratem de acordo com a lei. Não permitimos que nossos prestadores de serviços utilizem
                                    seus dados pessoais para seus próprios fins, apenas para fins específicos e de acordo com nossas
                                    instruções.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Segurança dos Dados */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Lock className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Segurança dos Dados</CardTitle>
                            </div>
                            <CardDescription>Como protegemos suas informações</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra
                                acesso não autorizado, uso indevido, alteração ou destruição. Algumas das medidas que adotamos incluem:
                            </p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Criptografia de dados sensíveis em trânsito e em repouso</li>
                                <li>Firewalls e sistemas de detecção de intrusão</li>
                                <li>Acesso restrito a dados pessoais apenas a funcionários autorizados</li>
                                <li>Políticas rigorosas de senha e autenticação</li>
                                <li>Monitoramento regular de sistemas para detectar vulnerabilidades</li>
                                <li>Treinamento de segurança para funcionários</li>
                                <li>Avaliações periódicas de segurança e testes de penetração</li>
                            </ul>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Importante:</p>
                                        <p className="text-sm text-amber-700">
                                            Embora implementemos salvaguardas para proteger suas informações pessoais, nenhum método de
                                            transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Portanto, não
                                            podemos garantir sua segurança absoluta. Caso tenha conhecimento de qualquer problema de segurança
                                            em nosso site, entre em contato conosco imediatamente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Seus Direitos */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <UserCheck className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Seus Direitos</CardTitle>
                            </div>
                            <CardDescription>Direitos que você possui sobre seus dados pessoais</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                De acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), você possui os seguintes direitos em
                                relação aos seus dados pessoais:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de acesso</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode solicitar uma cópia dos dados pessoais que mantemos sobre você.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de retificação</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode solicitar a correção de dados incompletos ou imprecisos.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de exclusão</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode solicitar a exclusão dos seus dados pessoais em determinadas circunstâncias.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de restrição</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode solicitar a limitação do processamento dos seus dados pessoais.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de portabilidade</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode solicitar a transferência dos seus dados para outro serviço ou fornecedor.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de oposição</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode se opor ao processamento dos seus dados para determinadas finalidades.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de não discriminação</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você não será discriminado por exercer seus direitos de privacidade.
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <h3 className="font-medium">Direito de revogar o consentimento</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você pode retirar seu consentimento a qualquer momento.
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail{" "}
                                <span className="font-medium">privacidade@joalheria.com.br</span> ou pelo formulário disponível em nossa
                                página de contato. Responderemos à sua solicitação dentro do prazo legal de 15 dias.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Período de Retenção */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Período de Retenção</CardTitle>
                            </div>
                            <CardDescription>Por quanto tempo mantemos seus dados</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais os
                                coletamos, incluindo para fins de cumprimento de quaisquer obrigações legais, contratuais, de prestação
                                de contas ou requisitos de relatórios.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Períodos específicos de retenção:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        <span className="font-medium">Dados de conta e perfil:</span> Enquanto sua conta estiver ativa e por
                                        um período adicional de 5 anos após o encerramento
                                    </li>
                                    <li>
                                        <span className="font-medium">Dados de transações:</span> 10 anos, conforme exigido pela legislação
                                        fiscal e contábil
                                    </li>
                                    <li>
                                        <span className="font-medium">Dados de comunicações:</span> 2 anos após o último contato
                                    </li>
                                    <li>
                                        <span className="font-medium">Dados de marketing:</span> Até que você solicite a exclusão ou retire
                                        seu consentimento
                                    </li>
                                    <li>
                                        <span className="font-medium">Cookies e dados de navegação:</span> Conforme especificado em nossa
                                        Política de Cookies
                                    </li>
                                </ul>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Em algumas circunstâncias, podemos anonimizar seus dados pessoais (para que não possam mais ser
                                associados a você) para fins de pesquisa ou estatísticos, caso em que podemos usar essas informações
                                indefinidamente sem aviso prévio.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Cookies e Tecnologias Similares */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Cookie className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Cookies e Tecnologias Similares</CardTitle>
                            </div>
                            <CardDescription>Como utilizamos cookies em nosso site</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, personalizar
                                conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego.
                            </p>

                            <div className="space-y-2">
                                <h3 className="font-medium">Tipos de cookies que utilizamos:</h3>
                                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>
                                        <span className="font-medium">Cookies essenciais:</span> Necessários para o funcionamento do site
                                    </li>
                                    <li>
                                        <span className="font-medium">Cookies de preferências:</span> Permitem que o site lembre suas
                                        escolhas e preferências
                                    </li>
                                    <li>
                                        <span className="font-medium">Cookies estatísticos:</span> Nos ajudam a entender como os visitantes
                                        interagem com o site
                                    </li>
                                    <li>
                                        <span className="font-medium">Cookies de marketing:</span> Utilizados para rastrear visitantes em
                                        sites e exibir anúncios relevantes
                                    </li>
                                </ul>
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Você pode controlar e gerenciar cookies através das configurações do seu navegador. Para informações
                                mais detalhadas sobre os cookies que utilizamos, consulte nossa{" "}
                                <Link href="/politicas/cookies" className="text-primary hover:underline">
                                    Política de Cookies
                                </Link>
                                .
                            </p>
                        </CardContent>
                    </Card>

                    {/* Alterações na Política */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Alterações na Política de Privacidade</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas
                                práticas de informação ou obrigações regulatórias. Publicaremos a versão atualizada em nosso site com
                                uma data de revisão atualizada.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Recomendamos que você revise esta política regularmente para se manter informado sobre como estamos
                                protegendo suas informações. Alterações significativas serão notificadas por e-mail ou através de um
                                aviso em nosso site.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Ao continuar a usar nossos serviços após tais modificações, você concorda com os termos da Política de
                                Privacidade revisada.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contato */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Entre em Contato</CardTitle>
                            <CardDescription>Para questões relacionadas à privacidade e proteção de dados</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos seus
                                    dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
                                </p>

                                <div className="bg-muted p-4 rounded-md mt-4">
                                    <p className="font-medium">Contato do DPO:</p>
                                    <ul className="text-sm space-y-1 mt-2">
                                        <li>
                                            <span className="font-medium">Nome:</span> Departamento de Proteção de Dados
                                        </li>
                                        <li>
                                            <span className="font-medium">E-mail:</span> dpo@joalheria.com.br
                                        </li>
                                        <li>
                                            <span className="font-medium">Telefone:</span> (11) 1234-5678
                                        </li>
                                        <li>
                                            <span className="font-medium">Endereço:</span> Av. Paulista, 1000, São Paulo - SP, CEP 01310-100
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-sm text-muted-foreground mt-4">
                                    Você também tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados
                                    (ANPD) se não estiver satisfeito com a forma como tratamos seus dados pessoais.
                                </p>
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

