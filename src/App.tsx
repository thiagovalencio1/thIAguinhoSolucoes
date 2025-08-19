import React from 'react';
import { Zap, Users, Target, Code, Phone, Mail, MapPin, Github, ExternalLink, CheckCircle, Settings, Lightbulb } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">thIAguinho Soluções</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Equipe</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções em Automação
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Sob Medida
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Como um alfaiate cria roupas personalizadas, nós desenvolvemos fluxos de automação 
              especializados para otimizar seu tempo e facilitar sua rotina
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre a thIAguinho Soluções</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em criar soluções práticas de automação para empresas e pessoas, 
              sempre pensando em facilitar e otimizar o tempo na rotina do dia a dia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalização Total</h3>
              <p className="text-gray-600">
                Cada solução é desenvolvida exclusivamente para atender às necessidades específicas de cada cliente, 
                sem adaptações genéricas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <Settings className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automação Inteligente</h3>
              <p className="text-gray-600">
                Utilizamos tecnologia de ponta para criar fluxos automatizados que economizam tempo 
                e reduzem erros operacionais.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <Lightbulb className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soluções Práticas</h3>
              <p className="text-gray-600">
                Focamos em criar ferramentas que realmente fazem a diferença no dia a dia, 
                com interfaces simples e eficientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">
              Oferecemos soluções completas em automação e desenvolvimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all">
              <Code className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Desenvolvimento Web</h3>
              <p className="text-sm text-gray-600">Aplicações web personalizadas e dashboards intuitivos</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg hover:from-green-100 hover:to-green-200 transition-all">
              <Settings className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Automação de Processos</h3>
              <p className="text-sm text-gray-600">Fluxos automatizados para otimizar operações</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg hover:from-orange-100 hover:to-orange-200 transition-all">
              <Target className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Consultoria Tech</h3>
              <p className="text-sm text-gray-600">Análise e planejamento de soluções tecnológicas</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Suporte Técnico</h3>
              <p className="text-sm text-gray-600">Acompanhamento e manutenção contínua</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos em Funcionamento</h2>
            <p className="text-xl text-gray-600">
              Conheça algumas das nossas soluções já implementadas e funcionando
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <Settings className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Dashboard Empresarial</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sistema de Controle Integrado</h4>
                <p className="text-gray-600 mb-4">
                  Dashboard completo para controle de operações empresariais com visualização 
                  de dados em tempo real e relatórios automatizados.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://iathiaguinho-cell.github.io/DASHBOARD-3/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Sistema</span>
                  </a>
                  <a 
                    href="https://github.com/iathiaguinho-cell/DASHBOARD-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-48 flex items-center justify-center">
                <div className="text-white text-center">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Lista Inteligente</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sistema de Lista de Compras</h4>
                <p className="text-gray-600 mb-4">
                  Aplicação personalizada para organização e controle de listas de compras 
                  com interface intuitiva e funcionalidades avançadas.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://iathiaguinho-cell.github.io/ListadeComprasdaHelena/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Sistema</span>
                  </a>
                  <a 
                    href="https://github.com/iathiaguinho-cell/ListadeComprasdaHelena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
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
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600">
              Conheça os profissionais por trás das soluções
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">TV</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thiago Ventura Valêncio</h3>
              <p className="text-blue-600 font-semibold mb-3">CEO</p>
              <p className="text-gray-600 mb-4">
                Especialista em soluções tecnológicas com foco em automação e otimização de processos empresariais.
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span>(17) 99763-1210</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center hover:from-green-100 hover:to-green-200 transition-all">
              <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">FJ</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fernando Cesar Fernandes Jr.</h3>
              <p className="text-green-600 font-semibold mb-3">Sócio Criador</p>
              <p className="text-gray-600 mb-4">
                Desenvolvedor experiente com expertise em criação de fluxos personalizados e soluções inovadoras.
              </p>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span>(17) 98136-8185</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Vamos conversar sobre como podemos otimizar sua rotina
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Thiago Ventura (CEO)</p>
                    <p className="text-gray-600">(17) 99763-1210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fernando C. Fernandes Jr.</p>
                    <p className="text-gray-600">(17) 98136-8185</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 text-white p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-gray-600">iathiaguinho@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 text-white p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Localização</p>
                    <p className="text-gray-600">São José do Rio Preto - SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Orçamento</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva sua necessidade ou projeto..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">thIAguinho Soluções</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções em automação personalizadas para otimizar sua rotina
            </p>
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