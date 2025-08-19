import React from 'react';
import { Zap, Users, Target, Code, Phone, Mail, MapPin, Github, ExternalLink, CheckCircle, Settings, Lightbulb, Brain, Cpu, Network, Sparkles } from 'lucide-react';

function App() {
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
        {/* Animated background elements */}
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
            <div className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Desenvolvimento IA</h3>
              <p className="text-sm text-gray-300">Aplicações web inteligentes e dashboards com IA integrada</p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/20 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Automação Inteligente</h3>
              <p className="text-sm text-gray-300">Fluxos automatizados com IA para otimizar operações</p>
            </div>
            
            <div className="group bg-gradient-to-br from-pink-900/20 to-pink-800/20 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Consultoria IA</h3>
              <p className="text-sm text-gray-300">Análise e implementação de soluções com Inteligência Artificial</p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Suporte 24/7</h3>
              <p className="text-sm text-gray-300">Acompanhamento e manutenção contínua com monitoramento IA</p>
            </div>
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
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-white text-center z-10">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Settings className="h-16 w-16 animate-spin-slow" />
                      <Cpu className="absolute top-2 left-2 h-6 w-6 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Dashboard IA Empresarial</h3>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">Sistema de Controle Inteligente</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Dashboard completo com IA integrada para controle de operações empresariais, 
                  visualização de dados em tempo real e relatórios automatizados inteligentes.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://iathiaguinho-cell.github.io/DASHBOARD-3/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Sistema</span>
                  </a>
                  <a 
                    href="https://github.com/iathiaguinho-cell/DASHBOARD-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-white text-center z-10">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <CheckCircle className="h-16 w-16" />
                      <Brain className="absolute -top-2 -right-2 h-8 w-8 animate-bounce" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Lista Inteligente IA</h3>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-2000"></div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">Sistema de Lista com IA</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Aplicação personalizada com Inteligência Artificial para organização e controle 
                  de listas de compras com sugestões inteligentes e otimização automática.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Sistema</span>
                  </a>
                  <a 
                    href="https://github.com/iathiaguinho-cell/ListadeComprasdaHelena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Users className="h-16 w-16 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Nossa Equipe IA
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Conheça os especialistas por trás das soluções inteligentes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">TV</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thiago Ventura Valêncio</h3>
              <p className="text-cyan-400 font-semibold mb-3 text-lg">CEO & IA Specialist</p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Especialista em soluções tecnológicas com foco em automação inteligente e 
                otimização de processos empresariais com IA.
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-300 bg-gray-800/50 rounded-lg p-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>(17) 99763-1210</span>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">FJ</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Fernando Cesar Fernandes Jr.</h3>
              <p className="text-purple-400 font-semibold mb-3 text-lg">Sócio Criador & Dev IA</p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Desenvolvedor experiente com expertise em criação de fluxos personalizados 
                e soluções inovadoras com Inteligência Artificial.
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-300 bg-gray-800/50 rounded-lg p-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>(17) 98136-8185</span>
              </div>
            </div>
          </div>
        </div>
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
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Thiago Ventura (CEO)</p>
                    <p className="text-gray-300">(17) 99763-1210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Fernando C. Fernandes Jr.</p>
                    <p className="text-gray-300">(17) 98136-8185</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">E-mail</p>
                    <p className="text-gray-300">iathiaguinho@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Localização</p>
                    <p className="text-gray-300">São José do Rio Preto - SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Solicitar Orçamento IA</h3>
              <form 
                action="mailto:iathiaguinho@gmail.com" 
                method="post" 
                encType="text/plain"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
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
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Descreva sua necessidade ou projeto com IA..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                thIAguinho Soluções
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções em automação inteligente personalizadas para revolucionar sua rotina
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 thIAguinho Soluções. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;