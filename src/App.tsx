import React, { useState, useRef } from 'react';
import { Zap, Users, Target, Phone, Mail, MapPin, ExternalLink, CheckCircle, Settings, Lightbulb, Brain, Cpu, Network, Sparkles, Wine, Lock, Eye } from 'lucide-react';

// Estrutura de dados para cada projeto do portfólio
interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  icon: React.ReactNode;
  gradient: string;
  shadow: string;
  isRestricted: boolean; // Controla se o modo cliente tem limitações
}

// Array centralizado com as informações dos projetos
const projects: Project[] = [
  {
    id: 'dashboard',
    title: 'Dashboard IA Empresarial',
    description: 'Dashboard completo com IA para controlo de operações, visualização de dados em tempo real e relatórios automatizados.',
    liveUrl: 'https://iathiaguinho-cell.github.io/DASHBOARD-3/',
    icon: <Settings className="h-16 w-16 animate-spin-slow" />,
    gradient: 'from-cyan-500 to-purple-600',
    shadow: 'hover:shadow-cyan-500/20',
    isRestricted: true,
  },
  {
    id: 'adega',
    title: 'Adega Inteligente IA',
    description: 'Sistema de gestão de adega com IA para catalogar vinhos, sugerir harmonizações e controlar o stock de forma inteligente.',
    liveUrl: 'https://thiagovalencio1.github.io/ADEGA-IA/',
    icon: <Wine className="h-16 w-16" />,
    gradient: 'from-red-500 to-purple-600',
    shadow: 'hover:shadow-red-500/20',
    isRestricted: true,
  },
  {
    id: 'lista',
    title: 'Lista Inteligente IA',
    description: 'Aplicação com IA para organização de listas de compras com sugestões inteligentes e otimização automática.',
    liveUrl: 'https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/',
    icon: <CheckCircle className="h-16 w-16" />,
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'hover:shadow-green-500/20',
    isRestricted: false, // Este projeto é totalmente funcional para o cliente
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
      // Para o modo cliente, abre o link. Se for restrito, adiciona um parâmetro na URL.
      const url = modalProject.isRestricted ? `${modalProject.liveUrl}?mode=cliente` : modalProject.liveUrl;
      window.open(url, '_blank');
      closeModal();
    }
  };

  const handlePasswordSubmit = () => {
    if (password === '1940') {
      // Senha correta, abre o projeto como gestor (link original)
      if (modalProject) window.open(modalProject.liveUrl, '_blank');
      closeModal();
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ sending: true, message: 'A enviar...' });
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
        setFormStatus({ sending: false, message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.' });
        formRef.current?.reset();
      } else {
        throw new Error('Ocorreu um erro ao enviar a mensagem.');
      }
    })
    .catch(() => setFormStatus({ sending: false, message: 'Falha ao enviar. Por favor, tente novamente.' }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">thIAguinho Soluções</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Portfólio</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contacto</a>
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
              <Brain className="h-20 w-20 text-cyan-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Automação Inteligente</span>
              <span className="block text-white mt-2">Sob Medida</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Como um alfaiate, desenvolvemos <span className="text-cyan-400 font-semibold">fluxos de automação especializados</span> com IA para otimizar o seu tempo e processos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <a href="#contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                <span className="flex items-center justify-center space-x-2"><Sparkles className="h-5 w-5" /><span>Solicitar Orçamento</span></span>
              </a>
              <a href="#portfolio" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Ver Projetos
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projetos em Destaque</span></h2>
              <p className="text-xl text-gray-300">Conheça as nossas soluções inteligentes em ação.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className={`group bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.shadow}`}>
                  <div className={`bg-gradient-to-r ${project.gradient} h-48 flex items-center justify-center relative`}>
                    <div className="relative text-white text-center z-10">
                      <div className="flex justify-center mb-4">{project.icon}</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6 leading-relaxed h-24">{project.description}</p>
                    <button onClick={() => handleViewProjectClick(project)} className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300`}>
                      <ExternalLink className="h-5 w-5" />
                      <span>Visualizar Projeto</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Entre em Contacto</span></h2>
              <p className="text-xl text-gray-300">Vamos conversar sobre como a IA pode revolucionar a sua rotina.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" name="name" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="O seu nome completo" />
                    <input type="email" name="email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="O seu e-mail" />
                  </div>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="O seu telefone" />
                  <textarea name="message" rows={5} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500" placeholder="Descreva a sua necessidade..."></textarea>
                  <button type="submit" disabled={formStatus.sending} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50">
                    <span className="flex items-center justify-center space-x-2"><Sparkles className="h-5 w-5" /><span>{formStatus.sending ? 'A enviar...' : 'Enviar Pedido de Orçamento'}</span></span>
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
            <p className="text-gray-400 mb-6">Como gostaria de visualizar este projeto?</p>
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
                <label htmlFor="password" hidden>Senha de gestor</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 text-center" placeholder="Digite a senha" />
                {passwordError && <p className="text-red-400 text-sm">{passwordError}</p>}
                <button onClick={handlePasswordSubmit} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">Aceder</button>
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