import React from 'react';
import {
  ShieldCheck,
  Users,
  Compass,
  HeartPulse,
  Workflow,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const journeySteps = [
    { label: 'Chegada', desc: 'Onboarding & Boas-Vindas' },
    { label: 'Integração', desc: 'Acolhimento na Equipe' },
    { label: 'Desenvolvimento', desc: 'Capacitação & Aprendizagem' },
    { label: 'Experiência', desc: 'Cultura & Pertencimento' },
    { label: 'Bem-Estar', desc: 'Saúde Mental & Ergonomia' },
    { label: 'Encerramento', desc: 'Transição & Aposentadoria' },
  ];

  return (
    <section id="sobre" className="py-14 bg-[#F7F6F8] border-b border-[#E9E5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D4AFF] uppercase tracking-wider mb-1">
              <span>Fundamentação Institucional</span>
              <span aria-hidden="true" className="text-[#C5BFE3]">·</span>
              <span>COGEM-Conecta / Enap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] tracking-tight">
              Sobre o PQVT
            </h2>
            <p className="text-xs sm:text-sm text-[#77717F] mt-1 max-w-2xl leading-relaxed">
              O Programa de Qualidade de Vida no Trabalho é parte integrante do <strong>Eixo 2 — Experiência, Bem-Estar e Inclusão das Pessoas</strong> da Escola Nacional de Administração Pública.
            </p>
          </div>
        </div>

        {/* EX Journey Flow */}
        <div className="bg-white rounded-2xl border border-[#E9E5EC] p-6 lg:p-8 mb-8 shadow-xs">
          <div className="mb-4">
            <span className="text-xs font-bold text-[#6D4AFF] uppercase tracking-wider block">
              Jornada Integral do Servidor (Employee Experience — EX)
            </span>
            <p className="text-xs text-[#77717F] mt-0.5">
              O bem-estar permeia cada momento funcional do servidor na Enap:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#F7F6F8] border border-[#E9E5EC] flex flex-col justify-between text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#77717F]">
                    0{idx + 1}
                  </span>
                  {idx < journeySteps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#B6B0C0] hidden lg:block" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#17151D] block">{step.label}</span>
                  <span className="text-[10px] text-[#77717F]">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars of Action: DEI, PGD, Clima */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border border-[#E9E5EC] p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#F0ECFF] text-[#6D4AFF] flex items-center justify-center mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#17151D] mb-1.5">
              Diversidade, Equidade e Inclusão (DEI)
            </h3>
            <p className="text-xs text-[#77717F] leading-relaxed">
              Ações afirmativas, acolhimento à neurodiversidade, acessibilidade arquitetônica e digital, além de tolerância zero a qualquer forma de assédio no serviço público.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#E9E5EC] p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] text-[#27C7C9] flex items-center justify-center mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#17151D] mb-1.5">
              Equilíbrio no PGD e Teletrabalho
            </h3>
            <p className="text-xs text-[#77717F] leading-relaxed">
              Diretrizes claras de direito à desconexão, organização sustentável de jornadas e adaptação ergonômica para garantir produtividade sem sobrecarga mental.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#E9E5EC] p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-3">
              <HeartPulse className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#17151D] mb-1.5">
              Clima Organizacional e Apoio Psicossocial
            </h3>
            <p className="text-xs text-[#77717F] leading-relaxed">
              Gestão apoiada por People Analytics e escuta contínua, oferecendo canal sigiloso de acolhimento e suporte em transições funcionais e aposentadoria.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
