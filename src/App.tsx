import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Star, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  ShoppingBag, 
  Clock, 
  Heart, 
  MessageCircle, 
  Compass, 
  ShieldCheck, 
  Calendar,
  X,
  Plus,
  Check,
  Award
} from 'lucide-react';
import { LOOKBOOK_ITEMS, TESTIMONIALS, FAQS } from './data';
import { LookbookItem } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [scrolled, setScrolled] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState<string[]>([]);
  const [quickContactSuccess, setQuickContactSuccess] = useState(false);
  const [quickContactName, setQuickContactName] = useState('');

  // Handle transparent shadow header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter lookbook categories
  const filteredItems = selectedCategory === 'All'
    ? LOOKBOOK_ITEMS
    : LOOKBOOK_ITEMS.filter(item => item.category === selectedCategory);

  // Toggle favorites
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // WhatsApp link builder
  const buildWhatsAppLink = (message: string) => {
    const encodedText = encodeURIComponent(message);
    return `https://wa.me/5588997541001?text=${encodedText}`;
  };

  // Predefined links
  const instagramUrl = "https://www.instagram.com/usealicys";
  const mapsUrl = "https://maps.app.goo.gl/DU6aA19DttegTLb27";

  return (
    <div id="landing-page-container" className="min-h-screen font-sans bg-[#050505] text-gray-100 overflow-x-hidden selection:bg-[#C19A6B] selection:text-[#050505] relative">
      
      {/* Dynamic Gold Backdrop Aura */}
      <div id="glow-layer-top" className="absolute top-[10%] left-[20%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-radial-gradient -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-80" />
      <div id="glow-layer-mid" className="absolute top-[45%] right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-radial-gradient translate-x-1/3 pointer-events-none z-0 opacity-60" />
      <div id="glow-layer-bottom" className="absolute bottom-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-radial-gradient pointer-events-none z-0 opacity-40" />

      {/* TOP NAVIGATION BAR */}
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b ${
          scrolled 
            ? 'bg-[#050505]/85 backdrop-blur-xl border-gray-900/40 py-4 shadow-2xl' 
            : 'bg-transparent border-transparent py-5 lg:py-6'
        }`}
      >
        <div id="navbar-inner" className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a href="#" id="brand-logo-container" className="flex items-center space-x-2 group">
            <span id="brand-logo-text" className="font-serif text-xl md:text-2xl font-semibold tracking-[0.2em] text-[#C19A6B] transition-colors group-hover:text-white">
              ALICY'S
            </span>
            <span className="hidden sm:inline-block font-sans text-[8px] tracking-[0.3em] uppercase bg-gray-950 px-2 py-1 rounded text-gray-400 border border-gray-800">
              Cruz · CE
            </span>
          </a>

          {/* Nav items */}
          <div id="nav-links" className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-[0.15em] uppercase text-gray-300">
            <a href="#diferenciais" id="link-diferenciais" className="hover:text-[#C19A6B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#C19A6B] after:transition-all after:duration-300">
              DIFERENCIAIS
            </a>
            <a href="#lookbook" id="link-lookbook" className="hover:text-[#C19A6B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#C19A6B] after:transition-all after:duration-300">
              COLEÇÃO
            </a>
            <a href="#sobre" id="link-sobre" className="hover:text-[#C19A6B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#C19A6B] after:transition-all after:duration-300">
              A LOJA
            </a>
            {TESTIMONIALS.length > 0 && (
              <a href="#depoimentos" id="link-depoimentos" className="hover:text-[#C19A6B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#C19A6B] after:transition-all after:duration-300">
                OPINIÕES
              </a>
            )}
            <a href="#duvidas" id="link-duvidas" className="hover:text-[#C19A6B] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#C19A6B] after:transition-all after:duration-300">
              SUPORTE
            </a>
          </div>

          <div id="navbar-actions" className="flex items-center space-x-3 sm:space-x-4">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noreferrer" 
              id="inst-btn"
              className="p-2 text-gray-400 hover:text-[#C19A6B] transition-colors"
              aria-label="Seguir no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={buildWhatsAppLink("Olá! Gostaria de falar com uma stylist da Alicy's para conhecer o catálogo.")}
              target="_blank" 
              rel="noreferrer" 
              id="nav-cta-btn"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#A37B50] via-[#C19A6B] to-[#A37B50] text-[#050505] text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#C19A6B]/20"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Fale Conosco</span>
            </a>
            <a 
              href={buildWhatsAppLink("Olá! Gostaria de falar com uma stylist da Alicy's para conhecer o catálogo.")}
              target="_blank" 
              rel="noreferrer" 
              id="nav-cta-btn-mobile"
              className="flex sm:hidden p-2 bg-[#C19A6B] text-[#050505] rounded-full hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DE ELITE */}
      <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Image with Cinematic Luxury Overlay */}
        <div id="hero-bg" className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=90" 
            alt="Fundo Haute Couture Alicy's Roupas E Acessórios" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110 select-none pointer-events-none"
          />
          {/* Elite Gradient Masking */}
          <div id="hero-mask-top" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
          <div id="hero-mask-bottom" className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pointer-events-none" />
          <div id="hero-mask-left" className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div id="hero-content" className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div id="hero-text-block" className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 text-left">
            
            {/* Elegant luxury badge with stagger */}
            <motion.div 
              id="hero-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gray-950/70 border border-[#C19A6B]/30 backdrop-blur-md px-4 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C19A6B] animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#C19A6B]">
                Coleção Exclusiva Outono / Inverno 2026
              </span>
            </motion.div>

            {/* Grand Headline with dramatical tracking */}
            <motion.h1 
              id="hero-headline"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Moda que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C19A6B] via-[#E6D4BE] to-[#A37B50] italic font-normal">inspira</span>, <br />
              atendimento que <br />
              <span className="relative">
                conquista.
                <span className="absolute left-0 bottom-2 w-full h-[3px] bg-gradient-to-r from-[#C19A6B] to-transparent rounded-full" />
              </span>
            </motion.h1>

            {/* Elite copy explanations */}
            <motion.p 
              id="hero-subheadline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl font-light leading-relaxed tracking-wide"
            >
              Descubra uma curadoria fina de vestidos fluidos, alfaiataria primorosa e acessórios impecáveis que elevam o seu brilho pessoal. Viva a melhor experiência de moda em Cruz, Ceará ou compre online com consultoria dedicada.
            </motion.p>

            {/* Pulsing luxurious CTAs */}
            <motion.div 
              id="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a 
                href="#lookbook" 
                id="hero-primary-btn"
                className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-[#A37B50] via-[#C19A6B] to-[#E6D4BE] text-black font-bold tracking-wider text-xs uppercase px-8 py-4.5 rounded-full hover:shadow-[0_0_30px_rgba(193,154,107,0.3)] transition-all duration-300 transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 group-hover:animate-bounce" />
                <span>Explorar Lookbook</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C19A6B]"></span>
                </span>
              </a>

              <a 
                href={buildWhatsAppLink("Olá Alicy's! Gostaria de agendar um horário de atendimento exclusivo para consultoria de moda.")}
                target="_blank" 
                rel="noreferrer" 
                id="hero-secondary-btn"
                className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 hover:border-[#C19A6B]/40 hover:bg-white/10 backdrop-blur-md text-white font-bold tracking-wider text-xs uppercase px-8 py-4.5 rounded-full transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-[#C19A6B]" />
                <span>Consultoria VIP</span>
              </a>
            </motion.div>
            
          </div>

          {/* Hero right side teaser cards */}
          <div id="hero-visual" className="lg:col-span-5 hidden lg:block relative h-[500px]">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute right-0 top-0 w-72 h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" 
                alt="Alicys look preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold text-[#C19A6B] tracking-widest uppercase">Estilo Atemporal</span>
                <h3 className="font-serif text-lg text-white font-semibold mt-0.5">Tricot Modal Elegance</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-6 bottom-4 w-56 h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-3xl z-20 backdrop-blur-sm bg-black/30"
            >
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80" 
                alt="Alicys Look Details" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[9px] font-bold text-[#C19A6B] tracking-widest uppercase">Novidades</span>
                <p className="font-serif text-sm text-white font-medium">Vestidos Fluidos de Crepe</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating scroll down indicator */}
        <div id="scroll-wheel" className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1 select-none pointer-events-none opacity-60">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#C19A6B] font-semibold">Role para descobrir</span>
          <ChevronDown className="w-4 h-4 text-[#C19A6B] animate-bounce" />
        </div>
      </section>

      {/* DIFERENCIAIS (Bento Grid) */}
      <section id="diferenciais" className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative z-10 scroll-mt-20">
        <div id="diferenciais-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C19A6B] uppercase tracking-[0.3em] block mb-3">CONCEITO EXCLUSIVO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight">
            Por que escolher a Alicy’s?
          </h2>
          <div className="w-20 h-[2px] bg-[#C19A6B] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-400 font-light mt-5 leading-relaxed">
            Mais que um ponto de venda, somos um templo de estilo dedicado a destacar e abraçar a beleza singular da mulher contemporânea.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div id="bento-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[220px]">
          
          {/* Card 1: 4k+ Reviews (Generous sizing) */}
          <div id="bento-card-reviews" className="md:col-span-8 md:row-span-2 group min-h-[300px] rounded-3xl overflow-hidden border border-gray-900 bg-gradient-to-br from-[#121212] via-[#090909] to-[#121212] p-8 md:p-10 flex flex-col justify-between hover:border-[#C19A6B]/40 transition-all duration-500 relative shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-radial-gradient -translate-x-12 -translate-y-12 opacity-30 pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="p-3 bg-gray-950 border border-gray-800 rounded-2xl">
                <Star className="w-6 h-6 text-[#C19A6B] fill-current" />
              </div>
              <span className="text-[10px] font-bold text-[#C19A6B] tracking-widest uppercase bg-[#C19A6B]/10 border border-[#C19A6B]/20 px-3 py-1.5 rounded-full">
                Google Feedback
              </span>
            </div>
            
            <div id="reviews-text-block">
              <h4 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-white mt-3 select-all">
                "Moda que inspira, atendimento que conquista."
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mt-2 max-w-xl">
                Nossa reputação é moldada pelo carinho de milhares de clientes que confiam na nossa consultoria de estilo e na qualidade impecável de cada peça que oferecemos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-800/60 text-xs text-gray-400">
              <div className="flex items-center space-x-6">
                <span>📍 Cruz e Região</span>
              </div>
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center space-x-1.5 text-[#C19A6B] hover:text-white font-semibold transition-colors uppercase tracking-wider text-[11px]"
              >
                <span>Ver avaliações reais</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Instagram Direct Connection */}
          <div id="bento-card-instagram" className="md:col-span-4 md:row-span-1 group rounded-3xl overflow-hidden border border-gray-900 bg-gradient-to-br from-[#121212] via-[#090909] to-[#121212] p-8 flex flex-col justify-between hover:border-[#C19A6B]/40 transition-all duration-500 relative shadow-xl">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-gray-950 border border-gray-800 rounded-xl">
                <Instagram className="w-5 h-5 text-[#C19A6B]" />
              </div>
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-tight">@usealicys</h3>
              <p className="text-xs text-gray-400 font-light mt-1.5">
                Acompanhe provadores diários, novas peças e dicas exclusivas de styling no nosso perfil oficial.
              </p>
            </div>

            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C19A6B] hover:text-white mt-1"
            >
              <span>Seguir instagram</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 3: Physical Address Box */}
          <div id="bento-card-address" className="md:col-span-4 md:row-span-1 group rounded-3xl overflow-hidden border border-gray-900 bg-gradient-to-br from-[#121212] via-[#090909] to-[#121212] p-8 flex flex-col justify-between hover:border-[#C19A6B]/40 transition-all duration-500 shadow-xl">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-gray-950 border border-gray-800 rounded-xl">
                <MapPin className="w-5 h-5 text-[#C19A6B]" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Localização</span>
            </div>
            
            <div>
              <h3 id="store-title" className="text-sm font-bold uppercase tracking-widest text-[#C19A6B]">Centro de Cruz</h3>
              <p className="text-xs text-gray-300 font-light mt-1 leading-relaxed">
                Rua Ezequiel Vasconcelos, 1860 - Centro, Cruz - CE, 62595-000
              </p>
            </div>

            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#C19A6B]"
            >
              <span>Ver no mapa</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 4: VIP Support WhatsApp */}
          <div id="bento-card-contact" className="md:col-span-5 md:row-span-1 group rounded-3xl overflow-hidden border border-gray-900 bg-gradient-to-br from-[#121212] via-[#090909] to-[#121212] p-8 flex flex-col justify-between hover:border-[#C19A6B]/40 transition-all duration-500 shadow-xl">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-gray-950 border border-gray-800 rounded-xl">
                <MessageCircle className="w-5 h-5 text-[#C19A6B]" />
              </div>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Respostas Rápidas</span>
            </div>
            
            <div>
              <h3 className="text-lg font-serif font-bold text-white">Atendimento Consultivo</h3>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                Tire dúvidas sobre tecidos, caimento e tamanhos diretamente com nossas consultoras de moda via WhatsApp.
              </p>
            </div>

            <a 
              href={buildWhatsAppLink("Olá Alicy's! Gostaria de falar com uma consultora sobre as peças disponíveis no lookbook.")}
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C19A6B] hover:text-white"
            >
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 5: Opening Times */}
          <div id="bento-card-times" className="md:col-span-7 md:row-span-1 group rounded-3xl overflow-hidden border border-gray-900 bg-gradient-to-br from-[#121212] via-[#090909] to-[#121212] p-8 flex flex-col justify-between hover:border-[#C19A6B]/40 transition-all duration-500 shadow-xl">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-gray-950 border border-gray-800 rounded-xl">
                <Clock className="w-5 h-5 text-[#C19A6B]" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Horários</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Segunda a Sábado</p>
                <p className="text-sm font-semibold text-white mt-1">08:00 às 18:00</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Domingo</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Fechador temporariamente</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-snug">
              📍 Agende sua visita ou solicite delivery especial no conforto do seu lar.
            </p>
          </div>

        </div>
      </section>

      {/* LOOKBOOK / DIGITAL SHOWCASE */}
      <section id="lookbook" className="py-24 bg-[#090909]/50 border-y border-gray-900/40 relative z-10 scroll-mt-20">
        <div id="lookbook-inner" className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div id="lookbook-header" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="text-left max-w-xl">
              <span className="text-xs font-bold text-[#C19A6B] uppercase tracking-[0.3em] block mb-3">CURADORIA ALICY’S</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight">
                Peças de Destaque
              </h2>
              <div className="w-16 h-[2px] bg-[#C19A6B] mt-4 mb-4" />
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Clique sobre qualquer peça para visualizar detalhes finos, medidas, conselho de estilistas e iniciar um pedido direto.
              </p>
            </div>

            {/* Premium Interactive Category Selectors */}
            <div id="category-filter-bar" className="flex flex-wrap gap-2.5 pb-2 border-b border-gray-900 max-w-full overflow-x-auto">
              {['All', 'Golden Hour', 'Casual Chic', 'Night Out', 'Acessórios'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  id={`cat-btn-${cat}`}
                  className={`text-[10px] lg:text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#C19A6B] text-black border-[#C19A6B] shadow-lg shadow-[#C19A6B]/20 scale-105'
                      : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'Ver Todos' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Active Grid */}
          <div id="lookbook-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isFavorited = favoriteItems.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => setSelectedItem(item)}
                    id={`item-${item.id}`}
                    className="group bg-[#0c0c0c] border border-gray-900/60 rounded-3xl overflow-hidden cursor-pointer hover:border-[#C19A6B]/30 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] relative"
                  >
                    
                    {/* Floating controls inside image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-950">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                      {/* Header overlay info */}
                      <span className="absolute top-4 left-4 bg-[#050505]/80 backdrop-blur-md text-[9px] font-bold text-[#C19A6B] tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/5">
                        {item.category}
                      </span>

                      {/* Favorite Button */}
                      <button 
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md bg-black/40 border border-white/5 text-gray-300 hover:text-[#C19A6B] hover:scale-110 active:scale-95 transition-all"
                        aria-label="Favoritar item"
                      >
                        <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-500 hover:text-red-600' : ''}`} />
                      </button>

                      {/* Price badge floating */}
                      <div className="absolute bottom-4 left-4">
                        <p className="text-xs font-mono text-gray-400">Preço Especial</p>
                        <p className="text-lg font-bold text-[#C19A6B]">{item.price}</p>
                      </div>
                    </div>

                    {/* Bottom description box */}
                    <div className="p-6 flex flex-col space-y-3 flex-grow justify-between">
                      <div>
                        <h3 className="font-serif text-base text-white font-bold tracking-tight line-clamp-1 group-hover:text-[#C19A6B] transition-colors">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-xs text-gray-400 font-light line-clamp-2 mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-900/80 text-[10px] font-bold uppercase tracking-wider">
                        <span className="text-gray-500">Curadoria Alicy's</span>
                        <span className="text-[#C19A6B] inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                          <span>Ver Detalhes</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ABOUT THE BRAND (SOBRE ALICY'S) */}
      <section id="sobre" className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative z-10 scroll-mt-20">
        <div id="sobre-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div id="sobre-visual" className="lg:col-span-5 relative grid grid-cols-2 gap-4">
            <div className="absolute -inset-4 bg-radial-gradient opacity-40 pointer-events-none z-0" />
            
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/5 h-[260px] shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?auto=format&fit=crop&w=800&q=80" 
                  alt="Alicys Colecao Detalhes" 
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#0b0b0b] border border-gray-900 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                <p className="text-3xl font-serif font-bold text-[#C19A6B]">4.9★</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Classificação no Google</p>
              </div>
            </div>

            <div className="space-y-4 pt-8 flex flex-col justify-center">
              <div className="bg-[#0b0b0b] border border-gray-900 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                <p className="text-xs font-bold text-[#C19A6B]">Rua Ezequiel Vasconcelos</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-wider mt-1">Disponível em Cruz, CE</p>
              </div>
            </div>
          </div>

          <div id="sobre-text" className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-xs font-bold text-[#C19A6B] uppercase tracking-[0.3em]">MODA, ATENDIMENTO & AMOR</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight">
              Alicy’s Roupas E Acessórios
            </h2>
            <div className="w-16 h-[2.5px] bg-[#C19A6B]" />
            
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Idealizada com o propósito de empoderar mulheres, a <strong>Alicy’s</strong> se consolidou no coração de Cruz, Ceará, como uma das maiores referências em moda feminina de alta qualidade e atendimento customizado da região.
            </p>

            <blockquote className="border-l-2 border-[#C19A6B] pl-4 italic text-gray-300 font-serif text-sm md:text-base my-2">
              "Alicy's Roupas E Acessórios: Moda que inspira, atendimento que conquista. Venha nos visitar ou faça seu pedido online!"
            </blockquote>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Trabalhamos intensamente em cada detalhe, desde a escolha dos tecidos nobres (como o linho sublime e fios modal de alta resistência) até a perfumaria exclusiva da nossa embalagem tradicional. Prezamos pelo atendimento de elite, ajudando você a encontrar looks perfeitos para celebrar seus momentos mais especiais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 text-xs font-semibold text-gray-200">
              <div className="flex items-center space-x-3 bg-gray-950/60 p-4 rounded-xl border border-gray-900">
                <Clock className="w-5 h-5 text-[#C19A6B]" />
                <div>
                  <p className="font-bold text-white uppercase tracking-wider text-[10px]">Funcionamento Ágil</p>
                  <p className="text-gray-400 mt-0.5 select-all">08:00 às 18:00 (Seg-Sáb)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-gray-950/60 p-4 rounded-xl border border-gray-900">
                <MapPin className="w-5 h-5 text-[#C19A6B]" />
                <div>
                  <p className="font-bold text-white uppercase tracking-wider text-[10px]">Coração de Cruz, CE</p>
                  <p className="text-gray-400 mt-0.5">Visite nossa Boutique Suprema</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-white text-black font-bold tracking-wider text-xs uppercase px-8 py-4.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Trilhar Rota de GPS</span>
              </a>

              <a 
                href={buildWhatsAppLink("Olá! Gostaria de conversar com uma stylist para solicitar entrega programada das novidades.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border border-gray-800 hover:border-[#C19A6B] text-gray-300 hover:text-white font-bold tracking-wider text-xs uppercase px-8 py-4.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C19A6B]" />
                <span>Solicitar Delivery</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* DEPOIMENTOS / PROVA SOCIAL / GOOGLE TESTIMONIALS */}
      {TESTIMONIALS.length > 0 && (
        <section id="depoimentos" className="py-24 bg-[#090909]/50 border-y border-gray-900/40 relative z-10 scroll-mt-20">
          <div id="depoimentos-inner" className="max-w-7xl mx-auto px-4 md:px-8">
            
            <div id="depoimentos-header" className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#C19A6B] uppercase tracking-[0.3em] block mb-3">AMOR COMPARTILHADO</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight">
                O carinho de quem usa Alicy's
              </h2>
              <div className="w-16 h-[2px] bg-[#C19A6B] mx-auto mt-4" />
              <p className="text-xs sm:text-sm text-gray-400 font-light mt-5 leading-relaxed">
                Nossa maior recompensa é o retorno sincero das nossas amadas clientes. Confira relatos reais extraídos do nosso Google Business.
              </p>
            </div>

            <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div 
                  key={t.id} 
                  id={`testimonial-${t.id}`}
                  className="bg-[#0c0c0c] border border-gray-900/60 p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-[#C19A6B]/30 transition-all duration-300 shadow-lg relative group"
                >
                  <div>
                    {/* Testimonial header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-[#C19A6B]/10 border border-[#C19A6B]/25 flex items-center justify-center text-[#C19A6B] font-bold font-serif">
                          {t.avatarLetter}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white tracking-wide">{t.name}</h4>
                          <p className="text-[10px] text-gray-500 tracking-wider uppercase mb-0.5">{t.location}</p>
                        </div>
                      </div>
                      {t.verified && (
                        <span className="text-[8px] font-bold text-[#C19A6B] uppercase tracking-widest bg-[#C19A6B]/5 border border-[#C19A6B]/15 px-2 py-1 rounded">
                          Verificada
                        </span>
                      )}
                    </div>

                    {/* Stars Row */}
                    <div className="flex text-[#C19A6B] space-x-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    {/* Body Review */}
                    <p className="text-xs text-gray-300 font-light leading-relaxed select-all">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-900 mt-6 flex justify-between items-center text-[9px] text-gray-500 font-mono">
                    <span>Plataforma: Google Reviews</span>
                    <span>{t.date}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* FAQs / PERGUNTAS FREQUENTES */}
      <section id="duvidas" className="py-24 bg-[#090909]/40 border-t border-gray-900/60 relative z-10 scroll-mt-20">
        <div id="duvidas-inner" className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div id="duvidas-header" className="text-center mb-16">
            <span className="text-xs font-bold text-[#C19A6B] uppercase tracking-[0.3em] block mb-3">TIRANDO DÚVIDAS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
              Perguntas Frequentes
            </h2>
            <div className="w-12 h-[2px] bg-[#C19A6B] mx-auto mt-4" />
          </div>

          <div id="faq-accordions" className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  id={`faq-${faq.id}`}
                  className="border border-gray-900 bg-[#0c0c0c] rounded-2xl overflow-hidden transition-colors hover:border-gray-800"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left outline-none transition-all"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#C19A6B] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-gray-900/40 text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER SUPREMO MODO LUXURIOUS */}
      <footer id="footer" className="bg-[#030303] text-gray-400 pt-16 pb-8 border-t border-gray-950 relative z-10 text-xs text-left">
        <div id="footer-inner" className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-900/60">
          
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#C19A6B] tracking-[0.25em] uppercase">ALICY'S</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed max-w-sm">
              Sua boutique premium preferida em Cruz, trazendo coleções exclusivas de vestuário e acessórios femininos finos. Moda que inspira, atendimento que conquista.
            </p>
            <div className="flex space-x-3">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="p-2 bg-[#0c0c0c] border border-gray-800 rounded-full hover:text-[#C19A6B] transition-colors hover:border-[#C19A6B]/40">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={buildWhatsAppLink("Olá! Gostaria de conversar com a equipe de curadoria.")} target="_blank" rel="noreferrer" className="p-2 bg-[#0c0c0c] border border-gray-800 rounded-full hover:text-[#C19A6B] transition-colors hover:border-[#C19A6B]/40">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] font-bold text-[#C19A6B] tracking-widest uppercase">CONEXÕES RÁPIDAS</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais Claves</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Catálogo Lookbook</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">História da Loja</a></li>
              {TESTIMONIALS.length > 0 && (
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos Google</a></li>
              )}
              <li><a href="#duvidas" className="hover:text-white transition-colors">Central de Suporte</a></li>
            </ul>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h4 className="font-mono text-[10px] font-bold text-[#C19A6B] tracking-widest uppercase">INFORMAÇÕES DE CONTATO</h4>
            <ul className="space-y-3 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C19A6B] shrink-0 mt-0.5" />
                <span className="text-gray-400">R. Ezequiel Vasconcelos, 1860 - Centro, Cruz - CE, 62595-000</span>
              </li>
              <li className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#C19A6B] shrink-0" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Canais de Atendimento (WhatsApp):</span>
                </div>
                <div className="pl-6 space-y-2 flex flex-col">
                  <a 
                    href="https://wa.me/5588997541001" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#C19A6B] transition-colors"
                  >
                    <span className="text-[11px] font-medium">Atendimento 1:</span>
                    <span className="font-mono text-xs underline decoration-[#C19A6B]/30 decoration-1">(88) 99754-1001</span>
                  </a>
                  <a 
                    href="https://wa.me/5588997205727" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#C19A6B] transition-colors"
                  >
                    <span className="text-[11px] font-medium">Atendimento 2:</span>
                    <span className="font-mono text-xs underline decoration-[#C19A6B]/30 decoration-1">(88) 99720-5727</span>
                  </a>
                  <a 
                    href="https://wa.me/5588996477418" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#C19A6B] transition-colors"
                  >
                    <span className="text-[11px] font-medium">Atendimento 3:</span>
                    <span className="font-mono text-xs underline decoration-[#C19A6B]/30 decoration-1">(88) 99647-7418</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#C19A6B] shrink-0" />
                <span className="text-gray-400">Fechado · Abre Segunda às 08:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div id="footer-copyright" className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-600 font-medium">
          <p>© 2026 Alicy's Roupas E Acessórios. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">Como Chegar</a>
          </div>
        </div>
      </footer>

      {/* PERSISTENT FLOATING WHATSAPP BUTTON (CONVERSION FLUIDITY) */}
      <a 
        href={buildWhatsAppLink("Olá! Visitei o site de vocês e gostaria de conferir os lançamentos da semana.")}
        target="_blank" 
        rel="noreferrer" 
        id="whatsapp-sticky-widget"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform group flex items-center justify-center"
        aria-label="Atendimento rápido no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
        <span className="absolute right-full mr-2 scale-0 group-hover:scale-100 bg-[#050505] text-[#C19A6B] border border-gray-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl transition-all duration-300 pointer-events-none whitespace-nowrap">
          Fale Conosco
        </span>
      </a>

      {/* LOOKBOOK MODAL DETAIL COMPONENT */}
      <AnimatePresence>
        {selectedItem && (
          <div id="product-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop layout */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              id="modal-frame"
              className="relative w-full max-w-4xl bg-[#090909] border border-gray-900 rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 border border-white/5 text-gray-400 hover:text-white transition-colors hover:scale-105 active:scale-95"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image column */}
              <div id="modal-image-col" className="md:col-span-6 relative aspect-[4/5] md:aspect-auto md:h-full bg-gray-950">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090909] to-transparent" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] font-bold text-[#C19A6B] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-white/5">
                  Curadoria Selecionada
                </span>
              </div>

              {/* Modal details text column */}
              <div id="modal-text-col" className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#C19A6B] tracking-widest uppercase">
                      Categoria: {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-xs text-gray-500 uppercase">Preço de Lançamento:</span>
                    <span className="text-xl font-bold text-[#C19A6B]">{selectedItem.price}</span>
                  </div>

                  {selectedItem.description && (
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}

                  {/* Highlights checklist */}
                  {selectedItem.details && selectedItem.details.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Especificações Premium</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                        {selectedItem.details.map((detail, index) => (
                          <div key={index} className="flex items-center space-x-2.5">
                            <Check className="w-3.5 h-3.5 text-[#C19A6B] shrink-0" />
                            <span className="font-light">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Curation Stylist Tip box */}
                  {selectedItem.stylingTip && (
                    <div className="bg-[#0e0e0e] border border-gray-900 rounded-2xl p-4 space-y-1">
                      <div className="flex items-center space-x-1.5 text-[#C19A6B]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#C19A6B]">Conselho da Estilista</h4>
                      </div>
                      <p className="text-xs text-gray-400 font-light italic leading-relaxed">
                        "{selectedItem.stylingTip}"
                      </p>
                    </div>
                  )}

                  {/* Size Selectors (Fostering interactive feel) */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Selecione seu Tamanho</h4>
                    <div className="flex space-x-3">
                      {['P', 'M', 'G', 'GG'].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`w-9 h-9 text-xs font-bold rounded-xl border flex items-center justify-center transition-all ${
                            selectedSize === sz
                              ? 'bg-[#C19A6B] text-[#050505] border-[#C19A6B]'
                              : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Confirm Interest CTA Buttons */}
                <div className="pt-4 border-t border-gray-900">
                  <a 
                    href={buildWhatsAppLink(`Olá Alicy's! Vi o "${selectedItem.title}" no catálogo online do site, amei muito! Gostaria de verificar a disponibilidade no tamanho ${selectedSize}.`)}
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full bg-[#C19A6B] text-[#050505] font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-[#C19A6B]/10"
                  >
                    <MessageCircle className="w-4 h-4 fill-current animate-bounce" />
                    <span>Perguntar sobre este no WhatsApp</span>
                  </a>
                  <p className="text-[9px] text-gray-500 font-medium text-center mt-2.5 uppercase tracking-wider">
                    Redirecionamento instantâneo para atendimento VIP
                  </p>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
