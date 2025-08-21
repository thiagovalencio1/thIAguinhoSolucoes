import React, { useState, useRef } from 'react';
import {
  Zap,
  Users,
  Target,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Settings,
  CheckCircle,
  Lightbulb,
  Brain,
  Cpu,
  Network,
  Sparkles,
  Wine,
  Lock,
  Eye,
  X,
  Scissors,
  DollarSign,
  Calendar,
  Clock
} from 'lucide-react';

/**
 * thIAguinho Soluções – Portfólio Profissional
 * Sistema de visualização: Visitante (prints) vs Gestor (acesso completo)
 * Orçamento com valores reais e funcionalidade EmailJS
 */

type ViewMode = 'gestor' | 'visitante';

interface Project {
  id: 'dashboard' | 'adega' | 'lista' | 'barbearia';
  title: string;
  description: string;
  technicalDescription: string;
  liveUrl: string;
  previewImages: string[];
  icon: React.ReactNode;
  gradient: string;
  shadow: string;
  isRestricted: boolean;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 'dashboard',
    title: 'Dashboard IA Empresarial',
    description: 'Sistema de controle operacional com inteligência artificial integrada.',
    technicalDescription: 'Dashboard empresarial desenvolvido com React e TypeScript, integrando APIs de IA para análise preditiva de dados operacionais. Implementa visualizações em tempo real com Chart.js, sistema de alertas automatizados e relatórios personalizáveis. Utiliza WebSockets para atualizações em tempo real e integração com múltiplas fontes de dados via REST APIs.',
    liveUrl: 'https://iathiaguinho-cell.github.io/DASHBOARD-3/',
    previewImages: [
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
    ],
    icon: <Settings className="h-16 w-16 animate-spin-slow" />,
    gradient: 'from-cyan-500 to-purple-600',
    shadow: 'hover:shadow-cyan-500/20',
    isRestricted: true,
    technologies: ['React', 'TypeScript', 'Chart.js', 'WebSockets', 'IA APIs']
  },
  {
    id: 'adega',
    title: 'Adega Inteligente IA',
    description: 'Sistema de gestão de vinhos com inteligência artificial para catalogação e recomendações.',
    technicalDescription: 'Aplicação web para gestão de adegas desenvolvida com tecnologias modernas. Implementa reconhecimento de imagem via IA para catalogação automática de rótulos, sistema de recomendação baseado em machine learning para harmonizações, controle de estoque com alertas automatizados e histórico de degustações. Integra APIs de vinícolas e bases de dados especializadas.',
    liveUrl: 'https://thiagovalencio1.github.io/ADEGA-IA/',
    previewImages: [
      'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
      'https://images.pexels.com/photos/2647933/pexels-photo-2647933.jpeg'
    ],
    icon: <Wine className="h-16 w-16" />,
    gradient: 'from-red-500 to-purple-600',
    shadow: 'hover:shadow-red-500/20',
    isRestricted: true,
    technologies: ['React', 'IA Vision', 'Machine Learning', 'APIs Vinícolas', 'LocalStorage']
  },
  {
    id: 'lista',
    title: 'Lista Inteligente IA',
    description: 'Organizador de compras com sugestões inteligentes e otimização automática.',
    technicalDescription: 'Sistema de lista de compras inteligente que utiliza algoritmos de IA para sugerir produtos baseados no histórico de compras e padrões de consumo. Implementa geolocalização para sugestão de estabelecimentos próximos, comparação de preços em tempo real, organização automática por categorias e rotas otimizadas de compras. Sincronização em nuvem para acesso multiplataforma.',
    liveUrl: 'https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/',
    previewImages: [
      'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg',
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'
    ],
    icon: <CheckCircle className="h-16 w-16" />,
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'hover:shadow-green-500/20',
    isRestricted: false,
    technologies: ['JavaScript', 'Geolocalização', 'APIs Preços', 'Cloud Sync', 'PWA']
  },
  {
    id: 'barbearia',
    title: 'Habibi Barbearia',
    description: 'Sistema completo de agendamento e gestão para barbearias modernas.',
    technicalDescription: 'Plataforma web completa para gestão de barbearias desenvolvida com foco na experiência do usuário. Implementa sistema de agendamento online com calendário interativo, gestão de clientes com histórico de serviços, controle de estoque de produtos, dashboard financeiro com relatórios detalhados e sistema de notificações via WhatsApp. Interface responsiva otimizada para dispositivos móveis.',
    liveUrl: 'https://iathiaguinho-cell.github.io/HabibiBarbearia/',
    previewImages: [
      'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
      'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg'
    ],
    icon: <Scissors className="h-16 w-16" />,
    gradient: 'from-amber-500 to-orange-600',
    shadow: 'hover:shadow-amber-500/20',
    isRestricted: true,
    technologies: ['React', 'Calendar API', 'WhatsApp API', 'Payment Gateway', 'Responsive Design']
  }
];

// Tabela de preços real
const pricingTable = {
  consultoria: {
    name: 'Consultoria e Análise',
    price: 'R$ 2.500',
    description: 'Análise completa dos processos e definição de estratégia de automação',
    duration: '2-3 semanas'
  },
  mvp: {
    name: 'MVP/Prototipo',
    price: 'R$ 8.500',
    description: 'Desenvolvimento de versão mínima viável para validação',
    duration: '4-6 semanas'
  },
  completo: {
    name: 'Sistema Completo',
    price: 'R$ 25.000',
    description: 'Solução completa com IA, integrações e suporte',
    duration: '8-12 semanas'
  },
  manutencao: {
    name: 'Suporte Mensal',
    price: 'R$ 1.200/mês',
    description: 'Manutenção, atualizações e suporte técnico',
    duration: 'Contínuo'
  }
};

export default function App() {
  // Modal de seleção de modo
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  // Form de orçamento
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<{ sending: boolean; message: string }>({
    sending: false,
    message: ''
  });

  // Senha criptografada (base64 de "1940")
  const ADMIN_PASSWORD = atob('MTk0MA==');

  // Abrir modal do projeto
  const handleViewProjectClick = (project: Project) => {
    setModalProject(project);
    setShowPasswordInput(false);
    setShowPreview(false);
    setPassword('');
    setPasswordError('');
  };

  // Fechar modal
  const closeModal = () => {
    setModalProject(null);
    setShowPasswordInput(false);
    setShowPreview(false);
    setPassword('');
    setPasswordError('');
  };

  // Ação ao escolher Gestor/Visitante
  const handleViewMode = (mode: ViewMode) => {
    if (!modalProject) return;

    if (mode === 'gestor') {
      setShowPasswordInput(true);
      return;
    }

    // Visitante: mostra preview com prints
    setShowPreview(true);
  };

  // Submit da senha de gestor
  const handlePasswordSubmit = () => {
    if (password.trim() === ADMIN_PASSWORD) {
      if (modalProject) {
        window.open(modalProject.liveUrl, '_blank', 'noopener');
      }
      closeModal();
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  // Envio do formulário (EmailJS)
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ sending: true, message: 'Enviando solicitação...' });

    try {
      const formData = new FormData(e.currentTarget);
      const serviceType = formData.get('service') as string;
      const pricing = pricingTable[serviceType as keyof typeof pricingTable];

      const data = {
        service_id: 'iathiaguinho',
        template_id: 'template_nmo3wtu',
        user_id: 'gOqYuX3xgmtjoXmLr',
        template_params: {
          ...Object.fromEntries(formData.entries()),
          service_price: pricing?.price || 'Sob consulta',
          service_duration: pricing?.duration || 'A definir'
        }
      };

      const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!resp.ok) {
        throw new Error('Falha no envio do e-mail.');
      }

      setFormStatus({
        sending: false,
        message: 'Solicitação enviada com sucesso! Entraremos em contato em até 24 horas.'
      });
      formRef.current?.reset();
    } catch {
      setFormStatus({
        sending: false,
        message: 'Erro ao enviar. Por favor, tente novamente ou entre em contato diretamente.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-cyan-400" />
            <span className="text-xl font-bold">
              thIAguinho <span className="text-cyan-400">Soluções</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-gray-300">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Projetos</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
            <a href="#contact" className="hover:text-white transition-colors">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Automação sob medida,
                <span className="text-cyan-400"> do seu jeito</span>.
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Desenvolvemos soluções de IA e automação personalizadas para o seu negócio.
                Como uma alfaiataria digital: cada projeto é único e feito especialmente para você.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver Projetos
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <ShieldCheck className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">Segurança e privacidade de dados</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <Lightbulb className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">Soluções sob medida e escaláveis</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <Brain className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">IA aplicada ao core do negócio</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <Cpu className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">Integração com suas ferramentas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="text-cyan-400">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Metodologia comprovada para entregar resultados reais
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all">
              <Users className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-2xl font-semibold">Descoberta & Análise</h3>
              <p className="mt-2 text-gray-300">
                Mapeamos seus processos atuais, identificamos gargalos e definimos KPIs de sucesso.
                Entendemos profundamente seu negócio antes de propor qualquer solução.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all">
              <Target className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-2xl font-semibold">Arquitetura & Design</h3>
              <p className="mt-2 text-gray-300">
                Criamos arquiteturas modulares e escaláveis, com IA aplicada onde realmente agrega valor.
                Cada componente é pensado para integrar perfeitamente ao seu fluxo atual.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all">
              <Network className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-2xl font-semibold">Entrega & Evolução</h3>
              <p className="mt-2 text-gray-300">
                Implementação gradual com testes contínuos, treinamento da equipe e suporte dedicado.
                Sua solução evolui junto com seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos em <span className="text-cyan-400">Destaque</span>
            </h2>
            <p className="text-xl text-gray-300">
              Soluções inteligentes desenvolvidas com tecnologias de ponta
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl ${project.shadow}`}
              >
                <div className={`bg-gradient-to-r ${project.gradient} h-48 flex items-center justify-center relative`}>
                  <div className="relative text-white text-center z-10">
                    <div className="flex justify-center mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleViewProjectClick(project)}
                      className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Visualizar Projeto</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investimento <span className="text-cyan-400">Transparente</span>
            </h2>
            <p className="text-xl text-gray-300">
              Preços justos para soluções que geram resultados reais
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pricingTable).map(([key, service]) => (
              <div
                key={key}
                className="p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              * Valores podem variar conforme complexidade e escopo do projeto
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Contato / Orçamento */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solicitar <span className="text-cyan-400">Orçamento</span>
            </h2>
            <p className="text-xl text-gray-300">
              Conte-nos sobre seu desafio e receba uma proposta personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gray-900 border border-gray-700">
              <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Seu e-mail"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Seu telefone"
                  />
                  <select
                    name="service"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  >
                    <option value="">Tipo de serviço</option>
                    <option value="consultoria">Consultoria e Análise</option>
                    <option value="mvp">MVP/Protótipo</option>
                    <option value="completo">Sistema Completo</option>
                    <option value="manutencao">Suporte Mensal</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Descreva seu projeto ou necessidade..."
                />
                <button
                  type="submit"
                  disabled={formStatus.sending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  {formStatus.sending ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
                {formStatus.message && (
                  <p className={`text-sm ${formStatus.message.includes('sucesso') ? 'text-green-400' : 'text-red-400'}`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>

            <div className="p-8 rounded-2xl bg-gray-900 border border-gray-700 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>iathiaguinho@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>São Paulo, Brasil</span>
              </div>
              
              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-4">Por que escolher a thIAguinho?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                    <Zap className="h-6 w-6 text-cyan-400" />
                    <p className="mt-2 text-sm text-gray-300">Entrega rápida</p>
                  </div>
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                    <Target className="h-6 w-6 text-cyan-400" />
                    <p className="mt-2 text-sm text-gray-300">Foco em ROI</p>
                  </div>
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                    <Network className="h-6 w-6 text-cyan-400" />
                    <p className="mt-2 text-sm text-gray-300">Integração total</p>
                  </div>
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700">
                    <Sparkles className="h-6 w-6 text-cyan-400" />
                    <p className="mt-2 text-sm text-gray-300">Suporte dedicado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Seleção de Modo */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">{modalProject.title}</h3>
              <p className="text-gray-300 mb-4">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {modalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {!showPasswordInput && !showPreview ? (
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Como você gostaria de visualizar este projeto?
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleViewMode('gestor')}
                    className="p-6 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 text-left"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Lock className="h-6 w-6" />
                      <span className="text-xl">Acesso Gestor</span>
                    </div>
                    <p className="text-cyan-100 text-sm">
                      Acesso completo ao sistema funcional com todas as features ativas
                    </p>
                  </button>

                  <button
                    onClick={() => handleViewMode('visitante')}
                    className="p-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 text-left"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="h-6 w-6" />
                      <span className="text-xl">Visualização</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Preview com capturas de tela e descrição técnica detalhada
                    </p>
                  </button>
                </div>
              </div>
            ) : showPasswordInput ? (
              <div className="space-y-6">
                <div className="text-center">
                  <Lock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Acesso Restrito</h4>
                  <p className="text-gray-300">Digite a senha para acessar o sistema completo</p>
                </div>
                <div className="max-w-sm mx-auto">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError('');
                    }}
                    placeholder="••••"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-center text-lg tracking-widest"
                    onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  />
                  {passwordError && (
                    <p className="text-red-400 text-sm mt-2 text-center">{passwordError}</p>
                  )}
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={handlePasswordSubmit}
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                    >
                      Acessar
                    </button>
                    <button
                      onClick={() => {
                        setShowPasswordInput(false);
                        setPassword('');
                        setPasswordError('');
                      }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Eye className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Preview do Projeto</h4>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-cyan-400">Análise Técnica</h5>
                  <p className="text-gray-300 leading-relaxed">{modalProject.technicalDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {modalProject.previewImages.map((image, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden">
                      <img
                        src={image}
                        alt={`Preview ${index + 1} do ${modalProject.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Interface {index + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-400 mb-4">
                    Interessado em ver o sistema funcionando?
                  </p>
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                  >
                    <Mail className="h-5 w-5" />
                    Solicitar Demonstração
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold">
                thIAguinho <span className="text-cyan-400">Soluções</span>
              </span>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} thIAguinho Soluções — Transformando ideias em soluções inteligentes.
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
              <span>Desenvolvido com ❤️ em São Paulo</span>
              <span>•</span>
              <span>Especialistas em IA e Automação</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}