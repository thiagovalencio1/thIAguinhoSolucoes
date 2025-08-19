import React, { useState, useRef } from 'react';
import { Zap, Users, Target, Phone, Mail, MapPin, Github, ExternalLink, CheckCircle, Settings, Lightbulb, Brain, Cpu, Network, Sparkles, Wine, Lock, Eye } from 'lucide-react';

// Interface para definir a estrutura de um projeto
interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  icon: React.ReactNode;
  gradient: string;
  shadow: string;
  isRestricted: boolean; // Define se o projeto tem restrições para o modo cliente
}

// Array com os dados dos projetos para facilitar a manutenção
const projects: Project[] = [
  {
    id: 'dashboard',
    title: 'Dashboard IA Empresarial',
    description: 'Dashboard completo com IA integrada para controle de operações empresariais, visualização de dados em tempo real e relatórios automatizados inteligentes.',
    liveUrl: 'https://iathiaguinho-cell.github.io/DASHBOARD-3/',
    repoUrl: 'https://github.com/iathiaguinho-cell/DASHBOARD-3',
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
    id: 'lista',
    title: 'Lista Inteligente IA',
    description: 'Aplicação personalizada com Inteligência Artificial para organização e controle de listas de compras com sugestões inteligentes e otimização automática.',
    liveUrl: 'https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/',
    repoUrl: 'https://github.com/iathiaguinho-cell/ListadeComprasdaHelena',
    icon: (
      <div className="relative">
        <CheckCircle className="h-16 w-16" />
        <Brain className="absolute -top-2 -right-2 h-8 w-8 animate-bounce" />
      </div>
    ),
    gradient: 'from-green-500 to-emerald-600',
    shadow: 'hover:shadow-green-500/20',
    isRestricted: false, // Este projeto é totalmente funcional para o cliente
  },
  {
    id: 'adega',
    title: 'Adega Inteligente IA',
    description: 'Sistema de gerenciamento de adega com IA para catalogar vinhos, sugerir harmonizações e controlar o estoque de forma inteligente e automatizada.',
    liveUrl: 'https://thiagovalencio1.github.io/ADEGA-IA/',
    repoUrl: 'https://github.com/thiagovalencio1/ADEGA-IA',
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
];


function App() {
  // Estado para controlar o modal de visualização do projeto
  const [modalProject, setModalProject] = useState<Project | null>(null);
  // Estado para controlar a visualização do campo de senha
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  // Estado para armazenar o valor da senha digitada
  const [password, setPassword] = useState('');
  // Estado para mensagem de erro da senha
  const [passwordError, setPasswordError] = useState('');
  // Estado para controlar as mensagens de status do formulário de contato
  const [formStatus, setFormStatus] = useState({ sending: false, message: '' });

  // Referência ao formulário para poder resetá-lo
  const formRef = useRef<HTMLFormElement>(null);

  // Função para abrir o modal para um projeto específico
  const handleViewProjectClick = (project: Project) => {
    setModalProject(project);
    setShowPasswordInput(false);
    setPassword('');
    setPasswordError('');
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalProject(null);
  };

  // Função para lidar com a seleção do modo de visualização
  const handleViewMode = (mode: 'gestor' | 'cliente') => {
    if (!modalProject) return;

    if (mode === 'gestor') {
      setShowPasswordInput(true);
    } else {
      // Modo Cliente
      // Para projetos restritos, adicionamos um parâmetro na URL para que a aplicação de destino possa limitar as funcionalidades.
      // Para projetos não restritos (como a lista de compras), abrimos a URL normal.
      const url = modalProject.isRestricted ? `${modalProject.liveUrl}?mode=cliente` : modalProject.liveUrl;
      window.open(url, '_blank');
      closeModal();
    }
  };

  // Função para verificar a senha do gestor
  const handlePasswordSubmit = () => {
    if (password === '1940') {
      setPasswordError('');
      if (modalProject) {
        window.open(modalProject.liveUrl, '_blank');
      }
      closeModal();
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  // Função para enviar o formulário de contato usando EmailJS
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ sending: true, message: 'Enviando...' });

    const formData = new FormData(e.currentTarget);
    const data = {
      service_id: 'iathiaguinho',
      template_id: 'template_nmo3wtu',
      user_id: 'gOqYuX3xgmtjoXmLr', // Sua Public Key
      template_params: {
        'name': formData.get('name'),
        'email': formData.get('email'),
        'phone': formData.get('phone'),
        'message': formData.get('message'),
      }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({ sending: false, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        formRef.current?.reset(); // Limpa o formulário
      } else {
        throw new Error('Ocorreu um erro ao enviar a mensagem.');
      }
    })
    .catch(error => {
      console.error('EmailJS Error:', error);
      setFormStatus({ sending: false, message: 'Falha ao enviar. Por favor, tente novamente ou contate-nos por outro meio.' });
    });
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                thIAguinho Soluções
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Início</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Sobre</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Serviços</a>
              <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Portfolio</a>
              <a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Equipe</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Brain className="h-20 w-20 text-cyan-400 animate-pulse" />
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-purple-400 animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Automação Inteligente
              </span>
              <span className="block text-white mt-2">Sob Medida</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Como um alfaiate cria roupas personalizadas, desenvolvemos 
              <span className="text-cyan-400 font-semibold"> fluxos de automação especializados </span>
              com Inteligência Artificial para otimizar seu tempo e revolucionar sua rotina
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <a 
                href="#contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="h-5 w-5 group-hover:animate-spin" />
                  <span>Solicitar Orçamento</span>
                </span>
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Ver Projetos IA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Network className="h-16 w-16 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sobre a thIAguinho Soluções
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos pioneiros em criar soluções práticas de automação inteligente para empresas e pessoas, 
              sempre pensando em facilitar e otimizar o tempo na rotina do dia a dia com tecnologia de ponta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Personalização Total</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada solução é desenvolvida exclusivamente para atender às necessidades específicas de cada cliente, 
                sem adaptações genéricas. Tecnologia sob medida.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IA Avançada</h3>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos Inteligência Artificial e tecnologia de ponta para criar fluxos automatizados inteligentes 
                que economizam tempo e eliminam erros operacionais.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Inovação Constante</h3>
              <p className="text-gray-300 leading-relaxed">
                Focamos em criar ferramentas que realmente fazem a diferença no futuro, 
                com interfaces intuitivas e funcionalidades revolucionárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Cpu className="h-16 w-16 text-cyan-400 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Nossos Serviços IA
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Oferecemos soluções completas em automação inteligente e desenvolvimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* ... (seção de serviços sem alterações) ... */}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="h-16 w-16 text-purple-400" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Projetos IA em Funcionamento
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Conheça nossas soluções inteligentes já implementadas e revolucionando rotinas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.shadow}`}
              >
                <div className={`bg-gradient-to-r ${project.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative text-white text-center z-10">
                    <div className="flex justify-center mb-4">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed h-24 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleViewProjectClick(project)}
                      className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg hover:brightness-110 transition-all duration-300 group-hover:scale-105`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visualizar</span>
                    </button>
                    {/* Botão de código removido conforme solicitado */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        {/* ... (seção da equipe sem alterações) ... */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Mail className="h-16 w-16 text-cyan-400" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-purple-400 animate-bounce" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Vamos conversar sobre como a IA pode revolucionar sua rotina
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ... (informações de contato sem alterações) ... */}
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Solicitar Orçamento IA</h3>
              <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Descreva sua necessidade ou projeto com IA..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus.sending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-5 w-5" />
                    <span>{formStatus.sending ? 'Enviando...' : 'Enviar Mensagem'}</span>
                  </span>
                </button>
                {formStatus.message && (
                  <p className={`text-center mt-4 text-sm ${formStatus.message.includes('sucesso') ? 'text-green-400' : 'text-red-400'}`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        {/* ... (rodapé sem alterações) ... */}
      </footer>

      {/* Modal de Visualização de Projeto */}
      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">&times;</button>
            <h3 className="text-2xl font-bold mb-2 text-white">{modalProject.title}</h3>
            <p className="text-gray-400 mb-6">Como você gostaria de visualizar este projeto?</p>

            {!showPasswordInput ? (
              <div className="space-y-4">
                <button
                  onClick={() => handleViewMode('gestor')}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Lock className="h-5 w-5" />
                  <span>Visualizar como Gestor</span>
                </button>
                <button
                  onClick={() => handleViewMode('cliente')}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-105"
                >
                  <Eye className="h-5 w-5" />
                  <span>Visualizar como Cliente</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Digite a senha de gestor</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="******"
                />
                {passwordError && <p className="text-red-400 text-sm">{passwordError}</p>}
                <button
                  onClick={handlePasswordSubmit}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Acessar
                </button>
                <button
                  onClick={() => setShowPasswordInput(false)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Voltar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
