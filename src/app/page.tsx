"use client"

import { Play, Check, Phone, Mail, Building2, TrendingUp, DollarSign, Target, Users, Award, BarChart3, Megaphone, Camera, Zap, Shield, Clock, Star, CheckCircle2, ArrowRight, Sparkles, ChevronRight, Copy, Edit } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    segmento: "",
    faturamento: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
          {/* Main Headline - Improved Copy */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
            <span className="block text-white">Turbine os resultados das suas campanhas</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">
              usando anúncios sem cara de anúncios
            </span>
          </h1>

          {/* Subheadline - Better Copy */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Fale a língua da plataforma: turbine seus resultados através de conteúdos gerados por IA (Inteligência Artificial)
          </p>
        </div>
      </section>

      {/* Nossos Serviços Section - A dor que você está sentindo */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-bold mb-6">
              A dor que você está <span className="text-[#D4AF37]">sentindo</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Seu CTR está derretendo</h4>
              <p className="text-gray-400 leading-relaxed">Criativos genéricos não capturam atenção — e você paga por isso.</p>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Edit className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Seu dinheiro vale cada vez menos</h4>
              <p className="text-gray-400 leading-relaxed">Cada venda que você faz vale menos do que você paga pra anunciar.</p>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Seus criativos não acompanham seu orçamento</h4>
              <p className="text-gray-400 leading-relaxed">Sem novos ângulos, sua operação trava e você perde escala.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UGCs Section - MOVED HERE (between "A dor" and "Como Funciona") */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Alguns UGCs recentes que turbinaram
              <span className="block text-[#D4AF37] mt-2">o faturamento dos nossos clientes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
              A maioria deles conquistou um ROAS acima de 10! Ou seja: a cada R$1,00 investido em anúncios, voltou mais de R$10!!
            </p>

            {/* Video Testimonials Grid - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
              {/* Video 1 */}
              <div className="group relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-gray-800 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </div>
                    <p className="text-gray-400 text-sm">Vídeo de Depoimento 1</p>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="group relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-gray-800 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </div>
                    <p className="text-gray-400 text-sm">Vídeo de Depoimento 2</p>
                  </div>
                </div>
              </div>

              {/* Video 3 */}
              <div className="group relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-gray-800 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </div>
                    <p className="text-gray-400 text-sm">Vídeo de Depoimento 3</p>
                  </div>
                </div>
              </div>

              {/* Video 4 */}
              <div className="group relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-gray-800 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </div>
                    <p className="text-gray-400 text-sm">Vídeo de Depoimento 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Como Funciona Title */}
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-bold">
              Como <span className="text-[#D4AF37]">Funciona</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center text-3xl font-bold text-black shadow-xl shadow-[#D4AF37]/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                1
              </div>
              <div className="space-y-4 mt-4">
                <h4 className="text-3xl font-bold text-white">
                  Briefing estratégico
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Após preencher o formulário, um membro da nossa equipe vai entrar em contato com você e entender melhor o seu público, promessa, objeções e metas de faturamento.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center text-3xl font-bold text-black shadow-xl shadow-[#D4AF37]/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                2
              </div>
              <div className="space-y-4 mt-4">
                <h4 className="text-3xl font-bold text-white">
                  Produção dos criativos
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Com o briefing em mãos, nosso time entra em ação: copy, roteiro, edição e ângulos de teste focados em performance.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-gradient-to-br from-gray-900/50 to-black p-10 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center text-3xl font-bold text-black shadow-xl shadow-[#D4AF37]/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                3
              </div>
              <div className="space-y-4 mt-4">
                <h4 className="text-3xl font-bold text-white">
                  Ajustes finos e aprovação
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Enviamos os criativos para você revisar. Se precisar, ajustamos textos, cortes e elementos visuais até ficar pronto pra subir em campanha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Improved Design */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-base uppercase tracking-wider rounded-full mb-8 shadow-lg shadow-[#D4AF37]/50 animate-pulse">
              <Zap className="w-5 h-5" />
              <span>Apenas 10 Vagas por Mês</span>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-bold mb-6">
              Garanta Sua Vaga
              <span className="block text-[#D4AF37] mt-2">Consultoria Gratuita</span>
            </h3>
            
            <p className="text-xl text-gray-300">
              Preencha o formulário abaixo e nossa equipe vai entrar em contato contigo em menos de 5 minutos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-gray-800 shadow-2xl">
            {/* Nome */}
            <div className="space-y-3">
              <label htmlFor="nome" className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                Qual o seu nome?
              </label>
              <input
                type="text"
                id="nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="w-full px-6 py-5 bg-black/50 border-2 border-gray-800 rounded-xl focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 outline-none transition-all text-white placeholder-gray-500 text-lg"
                placeholder="Digite seu nome"
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                E-mail Profissional *
              </label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-16 pr-6 py-5 bg-black/50 border-2 border-gray-800 rounded-xl focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 outline-none transition-all text-white placeholder-gray-500 text-lg"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Telefone */}
            <div className="space-y-3">
              <label htmlFor="telefone" className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                WhatsApp *
              </label>
              <div className="relative">
                <Phone className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
                <input
                  type="tel"
                  id="telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="w-full pl-16 pr-6 py-5 bg-black/50 border-2 border-gray-800 rounded-xl focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 outline-none transition-all text-white placeholder-gray-500 text-lg"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            {/* Nome da Empresa */}
            <div className="space-y-3">
              <label htmlFor="empresa" className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                Qual o nome da sua empresa?
              </label>
              <div className="relative">
                <Building2 className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
                <input
                  type="text"
                  id="empresa"
                  required
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full pl-16 pr-6 py-5 bg-black/50 border-2 border-gray-800 rounded-xl focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 outline-none transition-all text-white placeholder-gray-500 text-lg"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            {/* Segmento */}
            <div className="space-y-3">
              <label htmlFor="segmento" className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                Segmento
              </label>
              <div className="relative">
                <TrendingUp className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none z-10" />
                <select
                  id="segmento"
                  required
                  value={formData.segmento}
                  onChange={(e) => setFormData({...formData, segmento: e.target.value})}
                  className="w-full pl-16 pr-6 py-5 bg-black/50 border-2 border-gray-800 rounded-xl focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 outline-none transition-all text-white appearance-none cursor-pointer text-lg"
                >
                  <option value="">Selecione o segmento</option>
                  <option value="fast-food">Fast Food</option>
                  <option value="casual">Casual Dining</option>
                  <option value="fine-dining">Fine Dining</option>
                  <option value="pizzaria">Pizzaria</option>
                  <option value="hamburgueria">Hamburgueria</option>
                  <option value="japonesa">Culinária Japonesa</option>
                  <option value="italiana">Culinária Italiana</option>
                  <option value="brasileira">Culinária Brasileira</option>
                  <option value="delivery">Delivery/Dark Kitchen</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            {/* Faturamento */}
            <div className="space-y-3">
              <label htmlFor="faturamento" className="block text-sm font-bold text-gray-300 uppercase tracking-wider">
                Faturamento Mensal Atual *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none z-10" />
                <select
                  id="faturamento"
                  required
                  value={formData.faturamento}
                  onChange={(e) => setFormData({...formData, faturamento: e.target.value})}
                  className="w-full pl-16 pr-6 py-5 bg-black/50 border-2 border-gray-800 rounded-xl focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 outline-none transition-all text-white appearance-none cursor-pointer text-lg"
                >
                  <option value="">Selecione a faixa</option>
                  <option value="0-30k">Até R$ 30.000</option>
                  <option value="30-50k">R$ 30.000 - R$ 50.000</option>
                  <option value="50-100k">R$ 50.000 - R$ 100.000</option>
                  <option value="100-200k">R$ 100.000 - R$ 200.000</option>
                  <option value="200k+">Acima de R$ 200.000</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-xl rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02] uppercase tracking-wider mt-8"
            >
              Quero transformar minha empresa agora →
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-6">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span>Seus dados estão 100% seguros e protegidos</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
