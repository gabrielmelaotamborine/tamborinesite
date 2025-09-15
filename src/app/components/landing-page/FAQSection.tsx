'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O que é o Cartão de Crédito Empresarial da Tamborine?",
    answer: "O Cartão de Crédito Empresarial da Tamborine é uma solução financeira destinada a empresas que buscam flexibilidade e controle nos pagamentos corporativos. Ele permite que sua equipe realize transações de forma eficiente, simplificando a gestão financeira e otimizando processos internos."
  },
  {
    question: "Quais são os principais benefícios do Cartão de Crédito Empresarial Tamborine?",
    answer: "Os principais benefícios incluem: controle total de gastos em tempo real, relatórios detalhados de despesas, limites personalizáveis por funcionário, integração com sistemas de gestão, cashback em compras corporativas, e suporte 24/7 especializado em empresas."
  },
  {
    question: "Como solicitar o Cartão de Crédito Empresarial Tamborine?",
    answer: "O processo é simples e 100% digital. Basta preencher nosso formulário online com os dados da sua empresa, enviar a documentação necessária, aguardar a análise (que leva até 48h) e receber seu cartão em até 5 dias úteis no endereço cadastrado."
  },
  {
    question: "Quais tipos de despesas podem ser pagas com o cartão empresarial?",
    answer: "Praticamente todas as despesas corporativas: material de escritório, viagens de negócios, hospedagem, alimentação, combustível, assinaturas de software, marketing digital, fornecedores e muito mais. Oferecemos categorização automática para facilitar o controle."
  },
  {
    question: "O Cartão de Crédito Empresarial Tamborine possui anuidade?",
    answer: "Sim, nosso cartão possui uma anuidade competitiva que varia conforme o plano escolhido. No entanto, oferecemos isenção no primeiro ano para novas empresas e condições especiais para clientes de alto volume. Entre em contato para conhecer as condições especiais."
  },
  {
    question: "Como gerenciar os gastos realizados com o Cartão de Crédito Corporativo?",
    answer: "Através da nossa plataforma digital avançada, você tem acesso a dashboards em tempo real, relatórios customizáveis, alertas de gastos, aprovação de transações, definição de limites por categoria e colaborador, além de exportação de dados para sistemas contábeis."
  },
  {
    question: "É possível integrar o Cartão Tamborine com sistemas de gestão existentes?",
    answer: "Sim! Oferecemos APIs robustas e integrações nativas com principais ERPs do mercado (SAP, Oracle, TOTVS), sistemas contábeis (Conta Azul, QuickBooks), e ferramentas de gestão financeira. Nossa equipe técnica auxilia em todo o processo de integração."
  },
  {
    question: "O que fazer em caso de perda ou roubo do Cartão de Crédito?",
    answer: "Em caso de perda ou roubo, você pode bloquear o cartão instantaneamente através do nosso app ou portal web. Também oferecemos atendimento 24/7 por telefone. Um novo cartão será emitido imediatamente e enviado em até 24h via Sedex para sua empresa."
  }
];

export default function FAQSection({ className }: { className?: string }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className={cn("py-20 px-4 relative", className)}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl title-gradient-hero mb-6">
            Perguntas <span className="no-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-gradient-custom max-w-2xl mx-auto">
            Sobre cartões de crédito empresariais
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className="border border-primary/20 rounded-xl bg-primary/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-primary/10 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-neutral pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 text-primary">
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-primary/20 pt-4">
                    <p className="text-neutral/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 flex items-center flex-col">
          <p className="text-neutral/70 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <button className="button px-8 py-4 text-lg font-medium">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}