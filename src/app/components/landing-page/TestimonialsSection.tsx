'use client';

import { motion } from 'framer-motion';
import { AnimatedTestimonials, type Testimonial } from '@/app/components/ui/shadcn-io/animated-testimonials';

const testimonials: Testimonial[] = [
  {
    quote: "A Tamborine revolucionou nossa gestão financeira. Com suas soluções de pagamento, conseguimos reduzir custos e aumentar a eficiência em 40%.",
    name: "Maria Silva",
    designation: "CFO, Tech Innovations",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "O gateway de pagamento da Tamborine é incrivelmente confiável. Não tivemos nenhuma interrupção de serviço nos últimos 12 meses.",
    name: "João Santos",
    designation: "CTO, E-commerce Plus",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "As APIs da Tamborine são bem documentadas e fáceis de integrar. Nossa equipe conseguiu implementar tudo em menos de uma semana.",
    name: "Ana Costa",
    designation: "Lead Developer, StartupXYZ",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-6 title-gradient-hero">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-[var(--color-neutral)]/80 max-w-3xl mx-auto">
            Descubra como a Tamborine está transformando negócios ao redor do mundo.
          </p>
        </motion.div>

        <AnimatedTestimonials 
          testimonials={testimonials} 
          autoplay={true}
        />
      </div>
    </section>
  );
}
