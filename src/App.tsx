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
  X
} from 'lucide-react';

/**
 * thIAguinho Soluções – Portfólio com Gate de Visualização
 * - Modal com "Gestor" (senha 1940) e "Cliente" (modo bloqueado em projetos restritos)
 * - Envio de orçamento via EmailJS (mantidos IDs já existentes)
 * - Sem opção de "ver código" em lugar nenhum
 */

type ViewMode = 'gestor' | 'cliente';

interface Project {
  id: 'dashboard' | 'adega' | 'lista';
  title: string;
  description: string;
  liveUrl: string;
  icon: React.ReactNode;
  gradient: string;
  shadow: string;
  isRestricted: boolean; // true => cliente abre com ?mode=cliente (sem gatilhos)
}

const projects: Project[] = [
  {
    id: 'dashboard',
    title: 'Dashboard IA Empresarial',
    description:
      'Controle operacional com IA, visualização em tempo real e relatórios automatizados.',
    liveUrl: 'https://iathiaguinho-cell.github.io/DASHBOARD-3/',
    icon: <Settings className="h-16 w-16 animate-spin-slow" />,
    gradient: 'from-cyan-500 to-purple-600',
    shadow: 'hover:shadow-cyan-500/20',
    isRestricted: true
  },
  {
    id: 'adega',
    title: 'Adega Inteligente IA',
    description:
      'Gestão de vinhos com IA para catalogar rótulos, sugerir harmonizações e controlar estoque.',
    liveUrl: 'https://thiagovalencio1.github.io/ADEGA-IA/',
    icon: <Wine className="h-16 w-16" />,
    gradient: 'from-red-500 to-purple-600',
    shadow: 'hover:shadow-red-500/20',
    isRestricted: true
  },
  {
    id: 'lista',
    title: 'Lista Inteligente IA',
    description:
      'Organização de compras com sugestões inteligentes e otimização automática.',
    liveUrl: 'https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/',
    icon: <CheckCircle className="h-16 w-16" />,
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'hover:shadow-green-500/20',
    // ÚNICO projeto 100% editável pelo cliente
    isRestricted: false
  }
];

export default function App() {
  // Modal de seleção de modo
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Form de orçamento
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<{ sending: boolean; message: string }>({
    sending: false,
    message: ''
  });

  // Abrir modal do projeto
  const handleViewProjectClick = (project: Project) => {
    setModalProject(project);
    setShowPasswordInput(false);
    setPassword('');
    setPasswordError('');
  };

  // Fechar modal
  const closeModal = () => {
    setModalProject(null);
    setShowPasswordInput(false);
    setPassword('');
    setPasswordError('');
  };

  // Ação ao escolher Gestor/Cliente
  const handleViewMode = (mode: ViewMode) => {
    if (!modalProject) return;

    if (mode === 'gestor') {
      setShowPasswordInput(true);
      return;
    }

    // Cliente: abre bloqueado se restrito
    const url = modalProject.isRestricted
      ? `${modalProject.liveUrl}${modalProject.liveUrl.includes('?') ? '&' : '?'}mode=cliente`
      : modalProject.liveUrl;

    window.open(url, '_blank', 'noopener');
    closeModal();
  };

  // Submit da senha de gestor
  const handlePasswordSubmit = () => {
    if (password.trim() === '1940') {
      if (modalProject) {
        window.open(modalProject.liveUrl, '_blank', 'noopener');
      }
      closeModal();
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  // Envio do formulário (EmailJS - mantém IDs existentes)
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ sending: true, message: 'Enviando...' });

    try {
      const formData = new FormData(e.currentTarget);

      // Mantidos exatamente como você já usava no site:
      const data = {
        service_id: 'iathiaguinho',
        template_id: 'template_nmo3wtu',
        user_id: 'gOqYuX3xgmtjoXmLr',
        template_params: Object.fromEntries(formData.entries())
      };

      const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!resp.ok) {
        throw new Error('Falha no disparo do e-mail.');
      }

      setFormStatus({
        sending: false,
        message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.'
      });
      formRef.current?.reset();
    } catch {
      setFormStatus({
        sending: false,
        message: 'Erro ao enviar. Por favor, tente novamente.'
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
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#portfolio" className="hover:text-white">Projetos</a>
            <a href="#contact" className="hover:text-white">Solicitar Orçamento</a>
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
                Projetos de IA e automação feitos como alfaiataria: a calça jeans certa para o seu negócio,
                sem ajustes improvisados.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver projetos
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Solicitar orçamento
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700">
                <ShieldCheck className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">Segurança e privacidade de dados</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700">
                <Lightbulb className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">Soluções sob medida e escaláveis</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700">
                <Brain className="h-8 w-8 text-cyan-400" />
                <p className="mt-4 text-gray-300">IA aplicada ao core do negócio</p>
              </div>
              <div className="p-6 bg-gray-800/60 rounded-2xl border border-gray-700">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700">
              <Users className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-2xl font-semibold">Onboarding & Descoberta</h3>
              <p className="mt-2 text-gray-300">
                Mapeamos processos, entendemos gargalos e definimos KPIs.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700">
              <Target className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-2xl font-semibold">Desenho do Fluxo</h3>
              <p className="mt-2 text-gray-300">
                Arquiteturas “plugáveis” e sem fricção, com IA onde faz diferença.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700">
              <Network className="h-10 w-10 text-cyan-400" />
              <h3 className="mt-4 text-2xl font-semibold">Entrega & Suporte</h3>
              <p className="mt-2 text-gray-300">
                Go-live sem traumas, documentação e suporte contínuo.
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
              Soluções inteligentes em ação—nada de “ver código”.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-gray-300 min-h-16">{project.description}</p>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => handleViewProjectClick(project)}
                      className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
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

      {/* Contato / Orçamento */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solicitar <span className="text-cyan-400">Orçamento</span>
            </h2>
            <p className="text-xl text-gray-300">
              Diga o objetivo de negócio e a dor. O resto é com a gente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700">
              <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Seu nome completo"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Seu e-mail"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Seu telefone"
                />
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Descreva sua necessidade..."
                />
                <button
                  type="submit"
                  disabled={formStatus.sending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  <Mail className="h-5 w-5" />
                  {formStatus.sending ? 'Enviando...' : 'Enviar solicitação'}
                </button>
                {formStatus.message && (
                  <p className="text-sm text-gray-300">{formStatus.message}</p>
                )}
              </form>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 space-y-6">
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
                <span>Brasil</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700">
                  <Zap className="h-6 w-6 text-cyan-400" />
                  <p className="mt-2 text-sm text-gray-300">Time-to-Value rápido</p>
                </div>
                <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700">
                  <Target className="h-6 w-6 text-cyan-400" />
                  <p className="mt-2 text-sm text-gray-300">Foco em resultado</p>
                </div>
                <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700">
                  <Network className="h-6 w-6 text-cyan-400" />
                  <p className="mt-2 text-sm text-gray-300">Integração nativa</p>
                </div>
                <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700">
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                  <p className="mt-2 text-sm text-gray-300">UX sem fricção</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Seleção de Modo */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
          <div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-800"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-2xl font-bold">{modalProject.title}</h3>
            <p className="mt-2 text-gray-300">
              Como você quer visualizar este projeto?
            </p>

            {!showPasswordInput ? (
              <div className="space-y-4 mt-6">
                <button
                  onClick={() => handleViewMode('gestor')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  <Lock className="h-5 w-5" />
                  <span>Visualizar como Gestor</span>
                </button>

                <button
                  onClick={() => handleViewMode('cliente')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  <Eye className="h-5 w-5" />
                  <span>Visualizar como Cliente</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4 mt-6">
                <label htmlFor="password" className="sr-only">Senha do gestor</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  placeholder="Digite a senha"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-center tracking-widest"
                />
                {passwordError && (
                  <p className="text-red-400 text-sm">{passwordError}</p>
                )}
                <div className="flex gap-3">
                  <button
                    onClick={handlePasswordSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                  >
                    Acessar
                  </button>
                  <button
                    onClick={() => {
                      setShowPasswordInput(false);
                      setPassword('');
                      setPasswordError('');
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} thIAguinho Soluções — Automação sob medida.</p>
      </footer>
    </div>
  );
}