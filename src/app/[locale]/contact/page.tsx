import Link from "next/link"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Contato | Joalheria",
    description: "Entre em contato conosco para dúvidas, sugestões ou agendamentos.",
}

export default function ContactPage() {
    const breadcrumbItems = [
        {
            label: "Contato",
            href: "/contato",
        },
    ]

    return (
        <main className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Estamos à disposição para atender suas dúvidas, sugestões ou agendamentos. Escolha a forma de contato que
                        for mais conveniente para você.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Informações de Contato</CardTitle>
                            <CardDescription>Diversas formas de nos contatar</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Telefone</h3>
                                        <p className="text-sm text-muted-foreground">(11) 1234-5678</p>
                                        <p className="text-sm text-muted-foreground">(11) 98765-4321 (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">E-mail</h3>
                                        <p className="text-sm text-muted-foreground">atendimento@joalheria.com.br</p>
                                        <p className="text-sm text-muted-foreground">vendas@joalheria.com.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Endereço</h3>
                                        <p className="text-sm text-muted-foreground">Av. Paulista, 1000</p>
                                        <p className="text-sm text-muted-foreground">Bela Vista, São Paulo - SP</p>
                                        <p className="text-sm text-muted-foreground">CEP: 01310-100</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium">Horário de Funcionamento</h3>
                                        <p className="text-sm text-muted-foreground">Segunda a Sexta: 9h às 19h</p>
                                        <p className="text-sm text-muted-foreground">Sábado: 10h às 16h</p>
                                        <p className="text-sm text-muted-foreground">Domingo: Fechado</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <h3 className="font-medium mb-3">Redes Sociais</h3>
                                <SocialLinks />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant={'outline'}>
                                <Link
                                    href="https://wa.me/5511987654321"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                                >
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    Fale pelo WhatsApp
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Envie uma Mensagem</CardTitle>
                            <CardDescription>Preencha o formulário abaixo e entraremos em contato</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Nossa Localização</CardTitle>
                            <CardDescription>Visite nossa loja física</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65390548502264!3d-23.563273284682373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620160000000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização da Joalheria"
                                    className="h-full"
                                ></iframe>
                            </div>
                        </CardContent>
                        <CardFooter className="text-sm text-muted-foreground">
                            <p>
                                Estacionamento disponível no local. Acesso para pessoas com mobilidade reduzida. Próximo à estação de
                                metrô Trianon-Masp.
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Departamentos</CardTitle>
                            <CardDescription>Contatos específicos</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">Atendimento ao Cliente</h3>
                                <p className="text-sm text-muted-foreground">
                                    Para dúvidas sobre pedidos, entregas e trocas.
                                    <br />
                                    <span className="font-medium">E-mail:</span> atendimento@joalheria.com.br
                                    <br />
                                    <span className="font-medium">Tel:</span> (11) 1234-5678
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium">Vendas Corporativas</h3>
                                <p className="text-sm text-muted-foreground">
                                    Para empresas interessadas em presentes corporativos.
                                    <br />
                                    <span className="font-medium">E-mail:</span> corporativo@joalheria.com.br
                                    <br />
                                    <span className="font-medium">Tel:</span> (11) 1234-5679
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium">Imprensa</h3>
                                <p className="text-sm text-muted-foreground">
                                    Para jornalistas e veículos de comunicação.
                                    <br />
                                    <span className="font-medium">E-mail:</span> imprensa@joalheria.com.br
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium">Trabalhe Conosco</h3>
                                <p className="text-sm text-muted-foreground">
                                    Envie seu currículo e junte-se à nossa equipe.
                                    <br />
                                    <span className="font-medium">E-mail:</span> rh@joalheria.com.br
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-10">
                    <Card>
                        <CardHeader>
                            <CardTitle>Perguntas Frequentes</CardTitle>
                            <CardDescription>Respostas rápidas para suas dúvidas</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Qual o prazo de entrega?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        O prazo de entrega varia de acordo com a sua localização. Para mais detalhes, consulte nossa{" "}
                                        <Link href="/politicas/envio" className="text-primary hover:underline">
                                            Política de Envio
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Como posso rastrear meu pedido?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Você receberá um e-mail com o código de rastreamento assim que seu pedido for despachado. Também é
                                        possível acompanhar o status do pedido na sua conta em nosso site.
                                    </p>
                                </div>
                                <div className="border-b pb-3">
                                    <h3 className="font-medium mb-1">Quais são as formas de pagamento aceitas?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Aceitamos cartões de crédito, débito, Pix, boleto bancário e transferência. Para mais informações,
                                        consulte nossa{" "}
                                        <Link href="/politicas/pagamento" className="text-primary hover:underline">
                                            Política de Pagamento
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Como funciona a garantia dos produtos?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Todos os nossos produtos possuem garantia contra defeitos de fabricação. Para mais detalhes,
                                        consulte nossa{" "}
                                        <Link href="/politicas/garantia" className="text-primary hover:underline">
                                            Política de Garantia
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <Link
                                    href="/faq"
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                                >
                                    Ver todas as perguntas frequentes
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
