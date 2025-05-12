import Link from "next/link"
import { Cookie, Shield, FileText, AlertTriangle, HelpCircle, Settings, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
    title: "Política de Cookies | Joalheria",
    description: "Informações sobre como utilizamos cookies e tecnologias similares em nosso site.",
}

export default function CookiePolicyPage() {
    // Breadcrumb items
    const breadcrumbItems = [
        {
            label: "Políticas",
            href: "/politicas",
        },
        {
            label: "Política de Cookies",
            href: "/politicas/cookies",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
                    <p className="text-muted-foreground">
                        Informações sobre como utilizamos cookies e tecnologias similares em nosso site.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Introdução */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Cookie className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>O que são Cookies?</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet,
                                smartphone) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem
                                de maneira mais eficiente, bem como fornecer informações aos proprietários do site.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Os cookies permitem que um site reconheça seu dispositivo e lembre-se de informações sobre sua visita,
                                como suas preferências de idioma, tamanho de fonte e outras configurações. Isso pode facilitar sua
                                próxima visita e tornar o site mais útil para você.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Como Utilizamos os Cookies */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Como Utilizamos os Cookies</CardTitle>
                            </div>
                            <CardDescription>Finalidades para as quais utilizamos cookies em nosso site</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Utilizamos cookies e tecnologias similares para diversos fins, incluindo:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Funcionamento do site:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Manter você conectado à sua conta durante sua visita</li>
                                        <li>Lembrar itens em seu carrinho de compras</li>
                                        <li>Processar transações e verificar suas informações</li>
                                        <li>Garantir a segurança da sua conta e transações</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Preferências e funcionalidades:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Lembrar suas preferências de idioma e região</li>
                                        <li>Personalizar a aparência do site conforme suas configurações</li>
                                        <li>Lembrar se você já respondeu a pesquisas ou alertas</li>
                                        <li>Melhorar sua experiência de navegação</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Análise e desempenho:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Entender como os visitantes interagem com nosso site</li>
                                        <li>Medir o desempenho do site e identificar áreas para melhoria</li>
                                        <li>Testar diferentes versões de páginas ou funcionalidades</li>
                                        <li>Coletar estatísticas sobre o número de visitantes e páginas visualizadas</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Marketing e publicidade:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Exibir anúncios relevantes com base em seus interesses</li>
                                        <li>Medir a eficácia de nossas campanhas de marketing</li>
                                        <li>Limitar o número de vezes que você vê um anúncio específico</li>
                                        <li>Entender como você chegou ao nosso site</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tipos de Cookies */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Cookie className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Tipos de Cookies que Utilizamos</CardTitle>
                            </div>
                            <CardDescription>Categorias de cookies presentes em nosso site</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">Utilizamos diferentes tipos de cookies em nosso site:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border rounded-md p-3">
                                    <div className="flex items-center mb-2">
                                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                        <h3 className="font-medium">Cookies Essenciais</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Necessários para o funcionamento básico do site. Permitem que você navegue e utilize recursos
                                        essenciais, como áreas seguras e carrinho de compras.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        <span className="font-medium">Duração:</span> Sessão / Persistentes (até 1 ano)
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <div className="flex items-center mb-2">
                                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                        <h3 className="font-medium">Cookies de Preferências</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Permitem que o site lembre suas escolhas e preferências, como idioma, região e configurações de
                                        visualização.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        <span className="font-medium">Duração:</span> Persistentes (até 1 ano)
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <div className="flex items-center mb-2">
                                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                        <h3 className="font-medium">Cookies Estatísticos</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Coletam informações anônimas sobre como os visitantes utilizam o site, como quais páginas são mais
                                        visitadas e se ocorrem erros.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        <span className="font-medium">Duração:</span> Sessão / Persistentes (até 2 anos)
                                    </p>
                                </div>

                                <div className="border rounded-md p-3">
                                    <div className="flex items-center mb-2">
                                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                        <h3 className="font-medium">Cookies de Marketing</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Utilizados para rastrear visitantes em sites e exibir anúncios relevantes com base em seus
                                        interesses e comportamento de navegação.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        <span className="font-medium">Duração:</span> Persistentes (até 2 anos)
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-medium">Cookies de terceiros:</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Além dos cookies que definimos diretamente, também permitimos que terceiros coloquem cookies em nosso
                                    site para os seguintes fins:
                                </p>
                                <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                    <li>Análise de tráfego (Google Analytics, Hotjar)</li>
                                    <li>Marketing e publicidade (Google Ads, Facebook Pixel)</li>
                                    <li>Mídia social (botões de compartilhamento)</li>
                                    <li>Processamento de pagamentos (gateways de pagamento)</li>
                                    <li>Suporte ao cliente (chat ao vivo)</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Gerenciamento de Cookies */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Settings className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Gerenciamento de Cookies</CardTitle>
                            </div>
                            <CardDescription>Como controlar e gerenciar cookies em seu navegador</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer suas preferências de
                                cookies das seguintes maneiras:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Configurações do navegador:</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        A maioria dos navegadores permite que você controle cookies através das configurações. Você pode
                                        configurar seu navegador para:
                                    </p>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>Bloquear todos os cookies</li>
                                        <li>Aceitar apenas cookies de sites que você visita (cookies primários)</li>
                                        <li>Bloquear cookies de terceiros</li>
                                        <li>Excluir todos os cookies quando fechar o navegador</li>
                                        <li>Navegar no modo privado/anônimo</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Instruções para gerenciar cookies nos principais navegadores:</h3>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>
                                            <span className="font-medium">Google Chrome:</span>{" "}
                                            <Link
                                                href="https://support.google.com/chrome/answer/95647"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Instruções
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="font-medium">Mozilla Firefox:</span>{" "}
                                            <Link
                                                href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Instruções
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="font-medium">Safari:</span>{" "}
                                            <Link
                                                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Instruções
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="font-medium">Microsoft Edge:</span>{" "}
                                            <Link
                                                href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Instruções
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Ferramentas de controle de publicidade:</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Você também pode gerenciar cookies de publicidade comportamental através das seguintes ferramentas:
                                    </p>
                                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                                        <li>
                                            <Link
                                                href="https://optout.aboutads.info/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Digital Advertising Alliance (DAA)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.youronlinechoices.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Your Online Choices (EU)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://tools.google.com/dlpage/gaoptout"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                Google Analytics Opt-out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-3 rounded-md mt-4">
                                <div className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-800">Importante:</p>
                                        <p className="text-sm text-amber-700">
                                            Se você optar por bloquear todos os cookies, algumas funcionalidades do nosso site podem não
                                            funcionar corretamente. Por exemplo, você não poderá adicionar itens ao carrinho, fazer login na
                                            sua conta ou realizar compras.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cookies e Privacidade */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <Shield className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Cookies e Privacidade</CardTitle>
                            </div>
                            <CardDescription>Como protegemos suas informações</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Levamos sua privacidade a sério e adotamos medidas para garantir que as informações coletadas por meio
                                de cookies sejam tratadas com segurança:
                            </p>

                            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                                <li>Utilizamos criptografia para proteger dados sensíveis transmitidos</li>
                                <li>Limitamos o acesso às informações coletadas apenas a funcionários autorizados</li>
                                <li>
                                    Exigimos que terceiros que utilizam cookies em nosso site cumpram com as leis de privacidade
                                    aplicáveis
                                </li>
                                <li>Não vendemos informações pessoais coletadas por meio de cookies</li>
                                <li>Mantemos políticas e procedimentos internos para proteger suas informações</li>
                            </ul>

                            <p className="text-sm text-muted-foreground mt-4">
                                Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{" "}
                                <Link href="/politicas/privacidade" className="text-primary hover:underline">
                                    Política de Privacidade
                                </Link>
                                .
                            </p>
                        </CardContent>
                    </Card>

                    {/* Lista de Cookies */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Lista de Cookies</CardTitle>
                            </div>
                            <CardDescription>Principais cookies utilizados em nosso site</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Abaixo está uma lista dos principais cookies que utilizamos em nosso site:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 px-3 font-medium">Nome do Cookie</th>
                                            <th className="text-left py-2 px-3 font-medium">Provedor</th>
                                            <th className="text-left py-2 px-3 font-medium">Finalidade</th>
                                            <th className="text-left py-2 px-3 font-medium">Duração</th>
                                            <th className="text-left py-2 px-3 font-medium">Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr>
                                            <td className="py-2 px-3">_session</td>
                                            <td className="py-2 px-3">joalheria.com.br</td>
                                            <td className="py-2 px-3">Mantém o estado da sessão do usuário</td>
                                            <td className="py-2 px-3">Sessão</td>
                                            <td className="py-2 px-3">Essencial</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">cart_items</td>
                                            <td className="py-2 px-3">joalheria.com.br</td>
                                            <td className="py-2 px-3">Armazena itens no carrinho de compras</td>
                                            <td className="py-2 px-3">30 dias</td>
                                            <td className="py-2 px-3">Essencial</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">_ga</td>
                                            <td className="py-2 px-3">Google Analytics</td>
                                            <td className="py-2 px-3">Distingue usuários únicos</td>
                                            <td className="py-2 px-3">2 anos</td>
                                            <td className="py-2 px-3">Estatístico</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">_gid</td>
                                            <td className="py-2 px-3">Google Analytics</td>
                                            <td className="py-2 px-3">Distingue usuários</td>
                                            <td className="py-2 px-3">24 horas</td>
                                            <td className="py-2 px-3">Estatístico</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">_fbp</td>
                                            <td className="py-2 px-3">Facebook</td>
                                            <td className="py-2 px-3">Rastreia visitantes entre sites para anúncios</td>
                                            <td className="py-2 px-3">3 meses</td>
                                            <td className="py-2 px-3">Marketing</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">user_preferences</td>
                                            <td className="py-2 px-3">joalheria.com.br</td>
                                            <td className="py-2 px-3">Armazena preferências do usuário</td>
                                            <td className="py-2 px-3">1 ano</td>
                                            <td className="py-2 px-3">Preferência</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">currency</td>
                                            <td className="py-2 px-3">joalheria.com.br</td>
                                            <td className="py-2 px-3">Armazena a moeda preferida</td>
                                            <td className="py-2 px-3">30 dias</td>
                                            <td className="py-2 px-3">Preferência</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3">recently_viewed</td>
                                            <td className="py-2 px-3">joalheria.com.br</td>
                                            <td className="py-2 px-3">Rastreia produtos visualizados recentemente</td>
                                            <td className="py-2 px-3">30 dias</td>
                                            <td className="py-2 px-3">Funcionalidade</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-sm text-muted-foreground mt-4">
                                Esta lista não é exaustiva e pode ser atualizada periodicamente. Para uma lista completa e atualizada,
                                entre em contato conosco através dos canais indicados ao final desta página.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Alterações na Política */}
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-primary" />
                                <CardTitle>Alterações na Política de Cookies</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Podemos atualizar esta Política de Cookies periodicamente para refletir alterações em nossas práticas de
                                cookies ou obrigações regulatórias. Publicaremos a versão atualizada em nosso site com uma data de
                                revisão atualizada.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Recomendamos que você revise esta política regularmente para se manter informado sobre como utilizamos
                                cookies. Alterações significativas serão notificadas através de um aviso em nosso site.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Ao continuar a usar nosso site após tais modificações, você concorda com os termos da Política de
                                Cookies revisada.
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
                            <CardDescription>Dúvidas comuns sobre cookies</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Os cookies podem conter vírus ou malware?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Não, cookies são apenas pequenos arquivos de texto e não podem conter vírus ou malware. No entanto,
                                        eles podem ser usados por sites maliciosos para rastrear seu comportamento online.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Os cookies podem acessar informações no meu computador?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Não, cookies não podem acessar outras informações armazenadas em seu computador ou dispositivo. Eles
                                        só podem armazenar informações que você fornece ao site ou informações sobre sua interação com o
                                        site.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Posso navegar na internet sem aceitar cookies?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sim, você pode configurar seu navegador para bloquear todos os cookies. No entanto, muitos sites não
                                        funcionarão corretamente sem cookies, especialmente recursos que exigem login ou personalização.
                                    </p>
                                </div>

                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Os cookies podem identificar quem eu sou pessoalmente?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Por si só, os cookies não podem identificar quem você é. No entanto, se você fornecer informações
                                        pessoais a um site (como ao criar uma conta), essas informações podem ser associadas a cookies para
                                        personalizar sua experiência.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-medium mb-1">
                                        Como posso ver quais cookies estão armazenados no meu dispositivo?
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        A maioria dos navegadores permite que você veja e gerencie os cookies armazenados. Geralmente, você
                                        pode encontrar essa opção nas configurações ou preferências do navegador, na seção de privacidade ou
                                        histórico.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contato */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Entre em Contato</CardTitle>
                            <CardDescription>Para questões relacionadas a cookies e privacidade</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                    Se você tiver dúvidas ou preocupações sobre esta Política de Cookies ou sobre como utilizamos cookies
                                    em nosso site, entre em contato conosco:
                                </p>

                                <div className="bg-muted p-4 rounded-md mt-4">
                                    <p className="font-medium">Contato:</p>
                                    <ul className="text-sm space-y-1 mt-2">
                                        <li>
                                            <span className="font-medium">E-mail:</span> privacidade@joalheria.com.br
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
