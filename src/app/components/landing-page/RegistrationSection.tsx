'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Shield } from 'lucide-react';

export default function RegistrationSection({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    agreed: false
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    agreed: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Remove all non-numeric characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 10;
  };

  const formatPhone = (phone: string) => {
    // Remove all non-numeric characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Apply Brazilian phone formatting
    if (cleanPhone.length <= 2) {
      return `+55 ${cleanPhone}`;
    } else if (cleanPhone.length <= 7) {
      return `+55 ${cleanPhone.slice(0, 2)} ${cleanPhone.slice(2)}`;
    } else if (cleanPhone.length <= 11) {
      return `+55 ${cleanPhone.slice(0, 2)} ${cleanPhone.slice(2, 7)}-${cleanPhone.slice(7)}`;
    } else {
      return `+55 ${cleanPhone.slice(0, 2)} ${cleanPhone.slice(2, 7)}-${cleanPhone.slice(7, 11)}`;
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleInputChange('phone', formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      email: '',
      phone: '',
      agreed: ''
    };

    // Validate email
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    // Validate phone
    if (!formData.phone) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    // Validate agreement
    if (!formData.agreed) {
      newErrors.agreed = 'Você deve aceitar os termos';
    }

    setErrors(newErrors);

    // If no errors, submit form
    if (!Object.values(newErrors).some(error => error)) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your API
      alert('Cadastro realizado com sucesso!');
    }
  };

  return (
    <section className={cn("py-20 px-4 relative", className)}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-primary/15 to-primary/8 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-lg border border-primary/30 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 left-10 w-32 h-32 border border-primary/60 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* SVG Background for Glassmorphism Effect */}
          <div className="absolute inset-0 opacity-20">
            <svg 
              className="w-full h-full object-cover" 
              viewBox="0 0 400 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Flowing shapes */}

              <circle 
                cx="80" 
                cy="100" 
                r="40" 
                fill="var(--color-primary)" 
                fillOpacity="0.1"
              />
              <circle 
                cx="320" 
                cy="200" 
                r="60" 
                fill="var(--color-primary)" 
                fillOpacity="0.08"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl title-gradient-hero mb-6">
              Registre sua <span className="no-gradient">empresa</span> agora
            </h2>
            <p className="text-lg text-gradient-custom mb-12 max-w-xl mx-auto">
              Comece a transformar a gestão financeira da sua empresa com as soluções Tamborine. É rápido, seguro e sem burocracias.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
              {/* Email Field */}
              <div className="text-left">
                <label htmlFor="email" className="block text-white font-medium mb-1 text-sm">
                  E-mail corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu.email@empresa.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={cn(
                    "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm",
                    errors.email && "border-red-400 focus:border-red-400"
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="text-left">
                <label htmlFor="phone" className="block text-white font-medium mb-1 text-sm">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+55 (11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={cn(
                    "w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-sm",
                    errors.phone && "border-red-400 focus:border-red-400"
                  )}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Checkbox */}
              <div className="text-left">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={formData.agreed}
                      onChange={(e) => handleInputChange('agreed', e.target.checked)}
                      className="sr-only"
                    />
                    <div 
                      className={cn(
                        "w-4 h-4 rounded border-2 transition-all duration-200 flex items-center justify-center",
                        formData.agreed 
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)]" 
                          : "bg-white/10 border-white/40",
                        errors.agreed && "border-red-400"
                      )}
                    >
                      {formData.agreed && (
                        <svg 
                          className="w-3 h-3 text-[var(--color-dark-green)]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-white/90 leading-relaxed">
                    Estou de acordo com a{' '}
                    <Link href="/privacy" className="text-[var(--color-primary)] hover:underline font-medium">
                      Política de Privacidade
                    </Link>
                    {' '}e{' '}
                    <Link href="/terms" className="text-[var(--color-primary)] hover:underline font-medium">
                      Termos de Uso
                    </Link>
                    {' '}da Tamborine. *
                  </span>
                </label>
                {errors.agreed && (
                  <p className="text-red-400 text-sm mt-1">{errors.agreed}</p>
                )}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  <p className="text-white/90 text-xs">
                    <strong>Privacidade protegida:</strong> Seus dados são tratados com máxima segurança e nunca são compartilhados com terceiros sem sua autorização.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full button py-3 text-sm font-medium flex items-center justify-center gap-2"
                >
                  Registrar
                </button>
              </div>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral/70">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Setup Rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}