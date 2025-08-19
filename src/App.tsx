import React, { useState, useRef } from 'react';
import { Zap, Users, Target, Phone, Mail, MapPin, ExternalLink, CheckCircle, Settings, Lightbulb, Brain, Cpu, Network, Sparkles, Wine, Lock, Eye } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  icon: React.ReactNode;
  gradient: string;
  shadow: string;
  isRestricted: boolean;
}

const projects: Project[] = [
  {
    id: 'dashboard',
    title: 'Dashboard IA Empresarial',
    description: 'Dashboard completo com IA integrada para controle de operações empresariais, visualização de dados em tempo real e relatórios automatizados inteligentes.',
    liveUrl: 'https://iathiaguinho-cell.github.io/DASHBOARD-3/',
    icon: (
      <div className="relative">
        <Settings className="h-16 w-16 animate-spin-slow" />
        <Cpu className="absolute top-2 left-2 h-6 w-6 animate-pulse" />
      </div>
    ),
    gradient: 'from-cyan-500 to-purple-600',
    shadow: 'hover:shadow-cyan-500/20',
    isRestricted: true,
  },
  {
    id: 'adega',
    title: 'Adega Inteligente IA',
    description: 'Sistema de gerenciamento de adega com IA para catalogar vinhos, sugerir harmonizações e controlar o estoque de forma inteligente e automatizada.',
    liveUrl: 'https://thiagovalencio1.github.io/ADEGA-IA/',
    icon: (
      <div className="relative">
        <Wine className="h-16 w-16" />
        <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-300 animate-pulse" />
      </div>
    ),
    gradient: 'from-red-500 to-purple-600',
    shadow: 'hover:shadow-red-500/20',
    isRestricted: true,
  },
  {
    id: 'lista',
    title: 'Lista Inteligente IA',
    description: 'Aplicação personalizada com Inteligência Artificial para organização e controle de listas de compras com sugestões inteligentes e otimização automática.',
    liveUrl: 'https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/',
    icon: (
      <div className="relative">
        <CheckCircle className="h-16 w-16" />
        <Brain className="absolute -top-2 -right-2 h-8 w-8 animate-bounce" />
      </div>
    ),
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'hover:shadow-green-500/20',
    isRestricted: false,
  },
];

function App() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formStatus, setFormStatus] = useState({ sending: false, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleViewProjectClick = (project: Project) => {
    setModalProject(project);
    setShowPasswordInput(false);
    setPassword('');
    setPasswordError('');
  };

  const closeModal = () => setModalProject(null);

  const handleViewMode = (mode: 'gestor' | 'cliente') => {
    if (!modalProject) return;
    if (mode === 'gestor') {
      setShowPasswordInput(true);
    } else {
      const url = modalProject.isRestricted ? `${modalProject.liveUrl}?mode=cliente` : modalProject.liveUrl;
      window.open(url, '_blank');
      closeModal();
    }
  };

  const handlePasswordSubmit = () => {
    if (password === '1940') {
      if (modalProject) window.open(modalProject.liveUrl, '_blank');
      closeModal();
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ sending: true, message: 'Enviando...' });
    const formData = new FormData(e.currentTarget);
    const data = {
      service_id: 'iathiaguinho',
      template_id: 'template_nmo3wtu',
      user_id: 'gOqYuX3xgmtjoXmLr',
      template_params: Object.fromEntries(formData.entries()),
    };
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({ sending: false, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        formRef.current?.reset();
      } else {
        throw new Error('Ocorreu um erro ao enviar a mensagem.');
      }
    })
    .catch(() => setFormStatus({ sending: false, message: 'Falha ao enviar. Por favor, tente novamente.' }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">thIAguinho Soluções</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Início</a>
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Brain className="h-20 w-20 text-cyan-400 animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-purple-400 animate-bounce" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Automação Inteligente</span>
              <span className="block text-white mt-2">Sob Medida</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Como um alfaiate, desenvolvemos <span className="text-cyan-400 font-semibold">fluxos de automação especializados</span> com IA para otimizar seu tempo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <a href="#contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                <span className="flex items-center justify-center space-x-2"><Sparkles className="h-5 w-5 group-hover:animate-spin" /><span>Solicitar Orçamento</span></span>
              </a>
              <a href="#portfolio" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Ver Projetos IA
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Sparkles className="h-16 w-16 text-purple-400" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projetos IA em Funcionamento</span></h2>
              <p className="text-xl text-gray-300">Conheça nossas soluções inteligentes já implementadas.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.shadow}`}>
                  <div className={`bg-gradient-to-r ${project.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative text-white text-center z-10">
                      <div className="flex justify-center mb-4">{project.icon}</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed h-24 overflow-hidden">{project.description}</p>
                    <button onClick={() => handleViewProjectClick(project)} className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-300 group-hover:scale-105`}>
                      <ExternalLink className="h-4 w-4" />
                      <span>Visualizar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Mail className="h-16 w-16 text-cyan-400" />
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-purple-400 animate-bounce" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Entre em Contato</span></h2>
              <p className="text-xl text-gray-300">Vamos conversar sobre como a IA pode revolucionar sua rotina.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-3 rounded-full"><Phone className="h-6 w-6" /></div>
                    <div>
                      <p className="font-semibold text-white">Thiago Ventura (CEO)</p>
                      <p className="text-gray-300">(17) 99763-1210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-full"><Phone className="h-6 w-6" /></div>
                    <div>
                      <p className="font-semibold text-white">Fernando C. Fernandes Jr.</p>
                      <p className="text-gray-300">(17) 98136-8185</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Solicitar Orçamento IA</h3>
                <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="Descreva sua necessidade..."></textarea>
                  </div>
                  <button type="submit" disabled={formStatus.sending} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50">
                    <span className="flex items-center justify-center space-x-2"><Sparkles className="h-5 w-5" /><span>{formStatus.sending ? 'Enviando...' : 'Enviar Mensagem'}</span></span>
                  </button>
                  {formStatus.message && (<p className={`text-center mt-4 text-sm ${formStatus.message.includes('sucesso') ? 'text-green-400' : 'text-red-400'}`}>{formStatus.message}</p>)}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">&times;</button>
            <h3 className="text-2xl font-bold mb-2 text-white">{modalProject.title}</h3>
            <p className="text-gray-400 mb-6">Como você gostaria de visualizar este projeto?</p>
            {!showPasswordInput ? (
              <div className="space-y-4">
                <button onClick={() => handleViewMode('gestor')} className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  <Lock className="h-5 w-5" /><span>Visualizar como Gestor</span>
                </button>
                <button onClick={() => handleViewMode('cliente')} className="w-full flex items-center justify-center space-x-2 bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-105">
                  <Eye className="h-5 w-5" /><span>Visualizar como Cliente</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Digite a senha de gestor</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="******" />
                {passwordError && <p className="text-red-400 text-sm">{passwordError}</p>}
                <button onClick={handlePasswordSubmit} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">Acessar</button>
                <button onClick={() => setShowPasswordInput(false)} className="text-gray-400 hover:text-white text-sm">Voltar</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
