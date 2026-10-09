import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { ActiveInitiativeSection } from './components/ActiveInitiativeSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ServicesSection } from './components/ServicesSection';
import { NewsSection } from './components/NewsSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { CommunitySection } from './components/CommunitySection';
import { ContinuousCycleSection } from './components/ContinuousCycleSection';
import { IndicatorsSection } from './components/IndicatorsSection';
import { IdePracticesSection } from './components/IdePracticesSection';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { IntranetSidebar } from './components/IntranetSidebar';
import { Footer } from './components/Footer';
import {
  SearchModal,
  ActivityRegistrationModal,
  DocReaderModal,
  ServiceModal,
  ArticleReaderModal,
  ActionDetailModal,
  JoinCommunityModal,
  SharePointModal,
} from './components/Modals';
import {
  PillarType,
  Activity,
  ServiceItem,
  NewsItem,
  KnowledgeDoc,
} from './types/pqvt';
import {
  ACTIVITIES_CALENDAR,
  SERVICES_LIST,
  NEWS_ARTICLES,
  FEATURED_DOC09,
  OTHER_KNOWLEDGE_DOCS,
  STRATEGIC_ACTION_ACT06,
} from './data/pqvtData';
import { AlertCircle, CheckCircle, Info, UserCheck, ShieldAlert } from 'lucide-react';

export default function App() {
  const [isIdePage, setIsIdePage] = useState(() => window.location.pathname === '/praticas-ide');
  useEffect(() => {
    document.title = isIdePage ? 'Práticas IDE da Enap | PQVT · COGEM' : 'PQVT — Portal de Qualidade de Vida no Trabalho | COGEM Conecta · Enap';
  }, [isIdePage]);
  useEffect(() => {
    const syncPage = () => {
      if (window.location.hash === '#praticas-ide') window.history.replaceState(null, '', '/praticas-ide');
      const ide = window.location.pathname === '/praticas-ide';
      setIsIdePage(ide);
      setActiveSection(ide ? 'praticas-ide' : window.location.hash.slice(1) || 'inicio');
    };
    window.addEventListener('popstate', syncPage);
    window.addEventListener('hashchange', syncPage);
    syncPage();
    return () => { window.removeEventListener('popstate', syncPage); window.removeEventListener('hashchange', syncPage); };
  }, []);
  // Application State
  const [selectedPillar, setSelectedPillar] = useState<PillarType | null>(null);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Activities & Registrations State
  const [activitiesList, setActivitiesList] = useState<Activity[]>(ACTIVITIES_CALENDAR);

  // Modals Visibility State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedActivityForReg, setSelectedActivityForReg] = useState<Activity | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<KnowledgeDoc | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [isActionDetailOpen, setIsActionDetailOpen] = useState(false);
  const [isJoinCommunityOpen, setIsJoinCommunityOpen] = useState(false);
  const [isSharePointModalOpen, setIsSharePointModalOpen] = useState(false);

  // All docs collection for search
  const allDocs = [FEATURED_DOC09, ...OTHER_KNOWLEDGE_DOCS];

  // Registered activities
  const registeredActivities = activitiesList.filter((a) => a.isEnrolled);

  // Handlers for Registration
  const handleRegisterActivity = (activity: Activity) => {
    setSelectedActivityForReg(activity);
  };

  const handleConfirmRegistration = (activityId: string) => {
    setActivitiesList((prev) =>
      prev.map((act) =>
        act.id === activityId
          ? {
              ...act,
              isEnrolled: true,
              enrolledCount: act.enrolledCount + 1,
            }
          : act
      )
    );
  };

  const handleUnregisterActivity = (activityId: string) => {
    setActivitiesList((prev) =>
      prev.map((act) =>
        act.id === activityId
          ? {
              ...act,
              isEnrolled: false,
              enrolledCount: Math.max(0, act.enrolledCount - 1),
            }
          : act
      )
    );
  };

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'praticas-ide') {
      window.history.pushState(null, '', '/praticas-ide');
      setIsIdePage(true);
      window.scrollTo({ top: 0 });
      return;
    }
    if (isIdePage) {
      window.history.pushState(null, '', `/#${sectionId}`);
      setIsIdePage(false);
      requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView());
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sp-page min-h-screen flex flex-col text-[#17151D]">
      
      {/* 1. Intranet Global Header */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 2. Contextual Subnavigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Viewport — SharePoint-style home canvas */}
      <main className="sp-home flex-1 ">
        <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          {isIdePage ? <>
            <IdePracticesSection />
          </> : <>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
            <div className="min-w-0 space-y-5">
              <section className="sp-webpart">
                <Hero
                  onExploreActivities={() => scrollToSection('atividades')}
                  onExploreAbout={() => scrollToSection('sobre')}
                  onOpenDoc09={() => setSelectedDoc(FEATURED_DOC09)}
                />
              </section>

              {/* 4. O PQVT em um Olhar (4 Pilares) */}
              <section className="sp-webpart">
                <PillarsSection
                  selectedPillar={selectedPillar}
                  onSelectPillar={setSelectedPillar}
                  onNavigateToActivities={() => scrollToSection('atividades')}
                />
              </section>
            </div>

            <IntranetSidebar onNavigate={scrollToSection} />
          </div>

          <div className="mt-5 space-y-5">
            {/* 5. Acontece Agora (ACT-06 — Plano Anual PQVT 2026) */}
            <section className="sp-webpart"><ActiveInitiativeSection
              onOpenDoc09={() => setSelectedDoc(FEATURED_DOC09)}
              onOpenActionDetail={() => setIsActionDetailOpen(true)}
            /></section>

            {/* 6. Próximas Atividades (Agenda SharePoint) */}
            <section className="sp-webpart"><ActivitiesSection
              activities={
                selectedPillar
                  ? activitiesList.filter((a) => a.pillar === selectedPillar)
                  : activitiesList
              }
              onRegister={handleRegisterActivity}
              onUnregister={handleUnregisterActivity}
            /></section>

            {/* 7. Serviços para Você (Canais e Acolhimento) */}
            <section className="sp-webpart"><ServicesSection
              onSelectService={(srv) => setSelectedService(srv)}
            /></section>

            {/* 8. Notícias e Histórias (Comunicação Editorial) */}
            <section className="sp-webpart"><NewsSection
              onOpenArticle={(article) => setSelectedArticle(article)}
            /></section>

            {/* 9. Guias e Conhecimento (Destaque DOC-09) */}
            <section className="sp-webpart"><KnowledgeSection
              onOpenDoc={(doc) => setSelectedDoc(doc)}
            /></section>

            {/* 10. Comunidade de Prática (CoP Diversidade & Clima) */}
            <section className="sp-webpart"><CommunitySection
              onJoinCommunity={() => setIsJoinCommunityOpen(true)}
              onOpenDoc15={() => {
                const doc15 = OTHER_KNOWLEDGE_DOCS.find((d) => d.code === 'DOC-15');
                if (doc15) setSelectedDoc(doc15);
              }}
            /></section>

            {/* 11. Como o PQVT é Construído (Ciclo Contínuo) */}
            <section className="sp-webpart"><ContinuousCycleSection /></section>

            {/* 12. Indicadores Institucionais */}
            <section className="sp-webpart"><IndicatorsSection /></section>

            {/* 13. Sobre o PQVT (Eixo 2, EX, DEI, PGD) */}
            <section className="sp-webpart"><AboutSection /></section>

            {/* 14. CTA Final */}
            <section className="sp-webpart"><CtaSection
              onNavigateToActivities={() => scrollToSection('atividades')}
              onNavigateToServices={() => scrollToSection('servicos')}
              onJoinCommunity={() => setIsJoinCommunityOpen(true)}
            /></section>
          </div>
          </>}
        </div>
      </main>

      {/* 15. Institutional Footer */}
      <Footer
        onOpenSharePointSpecs={() => setIsSharePointModalOpen(true)}
      />

      {/* ===================================================================
          MODALS & DRAWERS (Single Mount Point)
          =================================================================== */}
      
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        activities={activitiesList}
        services={SERVICES_LIST}
        docs={allDocs}
        news={NEWS_ARTICLES}
        onSelectActivity={(act) => {
          scrollToSection('atividades');
          handleRegisterActivity(act);
        }}
        onSelectService={(srv) => setSelectedService(srv)}
        onSelectDoc={(doc) => setSelectedDoc(doc)}
        onSelectNews={(article) => setSelectedArticle(article)}
      />

      {/* Activity Registration Modal */}
      <ActivityRegistrationModal
        activity={selectedActivityForReg}
        onClose={() => setSelectedActivityForReg(null)}
        onConfirmRegistration={handleConfirmRegistration}
      />

      {/* Document Reader Modal */}
      <DocReaderModal
        doc={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Strategic Action ACT-06 Detail Modal */}
      <ActionDetailModal
        action={STRATEGIC_ACTION_ACT06}
        isOpen={isActionDetailOpen}
        onClose={() => setIsActionDetailOpen(false)}
        onOpenDoc09={() => setSelectedDoc(FEATURED_DOC09)}
      />

      {/* Join Community Modal */}
      <JoinCommunityModal
        isOpen={isJoinCommunityOpen}
        onClose={() => setIsJoinCommunityOpen(false)}
      />

      {/* SharePoint & M365 Integration Specs Modal */}
      <SharePointModal
        isOpen={isSharePointModalOpen}
        onClose={() => setIsSharePointModalOpen(false)}
      />


    </div>
  );
}
