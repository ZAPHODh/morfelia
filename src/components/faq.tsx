import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
    id: string
    question: string
    answer: string
}

interface FaqSectionProps {
    title: string
    items: FaqItem[]
}

export function FaqSection({ title, items }: FaqSectionProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-medium border-b border-gold-100 pb-2">{title}</h2>
            <Accordion type="multiple" className="space-y-2">
                {items.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border border-gold-100 rounded-md px-1">
                        <AccordionTrigger className="text-left font-medium py-4 hover:text-gold-700">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground py-4">
                            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
