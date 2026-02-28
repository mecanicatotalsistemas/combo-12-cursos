import { useEffect } from 'react';
import { Settings, ShieldCheck, Award } from 'lucide-react';
import SocialProofPopup from './components/SocialProofPopup';
import CTAButton from './components/CTAButton';
import UrgencyBar from './components/UrgencyBar';

function App() {
  useEffect(() => {
    document.title = 'Mecânica Total - 12 Cursos com Certificado | Acesso Vitalício';
  }, []);

  const courses = [
    { icon: '💧', title: 'Bombas Centrífugas', num: '01' },
    { icon: '🔧', title: 'Hidráulica Industrial', num: '02' },
    { icon: '🔩', title: 'Elementos de Vedação', num: '03' },
    { icon: '💨', title: 'Compressores', num: '04' },
    { icon: '📏', title: 'Metrologia', num: '05' },
    { icon: '🔍', title: 'Elementos Filtrantes', num: '06' },
    { icon: '📡', title: 'Monitoramento On-line', num: '07' },
    { icon: '⚙️', title: 'Rolamentos e Mancais', num: '08' },
    { icon: '🏗️', title: 'Transportador de Correia', num: '09' },
    { icon: '🔄', title: 'Redutor e Engrenagens', num: '10' },
    { icon: '📳', title: 'Peneira Vibratória', num: '11' },
    { icon: '🔗', title: 'Acoplamentos', num: '12' }
  ];

  return (
    <div className="min-h-screen bg-[#030A18] text-white">
      <UrgencyBar />
      <SocialProofPopup />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="particles-bg grid-bg relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#060F24] border border-[#004AAD] rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-[#FF3B30] rounded-full dot-ping"></span>
                  <span className="text-xs uppercase font-bold tracking-wider">OFERTA EXCLUSIVA • VAGAS LIMITADAS</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
                  O COMBO DE CURSOS <span className="text-glow-blue text-[#00AAFF]">ESSENCIAIS</span> PARA <span className="text-transparent" style={{WebkitTextStroke: '2px #004AAD'}}>MECÂNICA INDUSTRIAL</span>
                </h1>

                <p className="text-xl text-[#7A8FAD] mb-8 leading-relaxed">
                  12 cursos com certificado, acesso vitalício e suporte. Ideal para profissionais que querem se destacar de forma prática.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#0A1A35] border border-[#004AAD] rounded-lg p-4 text-center">
                    <div className="text-3xl font-black text-[#00AAFF]">12</div>
                    <div className="text-xs text-[#7A8FAD] uppercase">Cursos Completos</div>
                  </div>
                  <div className="bg-[#0A1A35] border border-[#004AAD] rounded-lg p-4 text-center">
                    <div className="text-3xl font-black text-[#00AAFF]">12</div>
                    <div className="text-xs text-[#7A8FAD] uppercase">Certificados</div>
                  </div>
                  <div className="bg-[#0A1A35] border border-[#004AAD] rounded-lg p-4 text-center">
                    <div className="text-3xl font-black text-[#00AAFF]">7</div>
                    <div className="text-xs text-[#7A8FAD] uppercase">Dias Garantia</div>
                  </div>
                </div>

                <div className="bg-[#0A1A35] border border-[#004AAD] rounded-lg p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#004AAD] to-[#0066FF] flex items-center justify-center text-xl font-black flex-shrink-0">
                    CM
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">⭐</span>)}
                    </div>
                    <p className="text-sm text-[#7A8FAD]">"Já fiz 4 cursos e aprendi mais do que em 2 anos!"</p>
                    <p className="text-xs text-[#004AAD] font-bold">Carlos M. — São Paulo, SP</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Price Card */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-[#060F24] border border-[#004AAD] rounded-2xl p-8 shadow-2xl" style={{boxShadow: '0 0 60px rgba(0,74,173,0.2)'}}>
                  <div className="border-t-4 border-[#00AAFF] rounded-t-xl -mt-8 -mx-8 mb-6 pt-6 px-8 bg-gradient-to-b from-[#0A1A35] to-transparent">
                    <div className="inline-block bg-[#FF3B30] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-4 animate-pulse">
                      🔥 72% OFF — SÓ HOJE
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-[#7A8FAD] line-through text-xl mb-2">De: R$ 647,00</div>
                    <div className="text-5xl font-black text-white mb-2">R$ 176,00</div>
                    <div className="text-xl text-[#7A8FAD] mb-3">ou 12x de R$ 19,29*</div>
                    <div className="inline-block bg-[#00E676] text-black text-sm font-bold px-4 py-2 rounded-lg mb-6">
                      ✅ ou R$ 158,40 no PIX (10% OFF)
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00E676]">✅</span>
                      <span className="text-[#F0F6FF]">12 cursos com certificado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00E676]">✅</span>
                      <span className="text-[#F0F6FF]">Acesso vitalício</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00E676]">✅</span>
                      <span className="text-[#F0F6FF]">Suporte incluso</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00E676]">✅</span>
                      <span className="text-[#F0F6FF]">Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00E676]">✅</span>
                      <span className="text-[#F0F6FF]">Acesso imediato</span>
                    </div>
                  </div>

                  <CTAButton />

                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-[#7A8FAD]">
                    <span>🔒 SSL</span>
                    <span>💳 Parcelado</span>
                    <span>↩️ 7 dias garantia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 px-4 bg-[#0A1A35]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center uppercase mb-4">
              12 CURSOS QUE VÃO TRANSFORMAR SUA CARREIRA
            </h2>
            <p className="text-center text-[#7A8FAD] mb-12">Cada curso com certificado emitido individualmente</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {courses.map((course) => (
                <div key={course.num} className="bg-[#060F24] card-neon-border rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-black text-[#004AAD] opacity-20">{course.num}</div>
                  <div className="relative flex items-center gap-4">
                    <span className="text-4xl">{course.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{course.title}</h3>
                      <span className="text-xs text-[#00E676] font-bold">✅ Incluso</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#004AAD] to-[#0066FF] rounded-2xl p-8 text-center" style={{boxShadow: '0 0 40px rgba(0,102,255,0.3)'}}>
              <Award className="w-16 h-16 text-[#FFD600] mx-auto mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">🎓 12 CERTIFICADOS EMITIDOS INDIVIDUALMENTE</h3>
              <p className="text-[#F0F6FF]">Válidos em todo o Brasil • Reconhecidos pelas empresas</p>
            </div>

            <div className="mt-12 text-center">
              <CTAButton />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-[#030A18]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center uppercase mb-12">
              O QUE NOSSOS ALUNOS ESTÃO DIZENDO
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#060F24] border border-[#004AAD] rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">⭐</span>)}
                </div>
                <p className="text-[#F0F6FF] mb-4">"Já fiz 4 cursos do combo e aprendi mais do que em 2 anos de prática!"</p>
                <p className="font-bold text-white mb-2">📢 Carlos M. — São Paulo, SP</p>
                <p className="text-sm text-[#00E676]">🏆 Resultado: Promovido após 3 meses</p>
              </div>

              <div className="bg-[#060F24] border border-[#004AAD] rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">⭐</span>)}
                </div>
                <p className="text-[#F0F6FF] mb-4">"Certificados aceitos na minha empresa. Curso direto e fácil de aplicar."</p>
                <p className="font-bold text-white mb-2">📢 Jéssica F. — Belo Horizonte, MG</p>
                <p className="text-sm text-[#00E676]">🏆 Resultado: Aumento salarial de 25%</p>
              </div>

              <div className="bg-[#060F24] border border-[#004AAD] rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">⭐</span>)}
                </div>
                <p className="text-[#F0F6FF] mb-4">"Excelente investimento! O conteúdo é muito completo e prático."</p>
                <p className="font-bold text-white mb-2">📢 Rodrigo S. — Rio de Janeiro, RJ</p>
                <p className="text-sm text-[#00E676]">🏆 Resultado: Nova função como técnico sênior</p>
              </div>

              <div className="bg-[#060F24] border border-[#004AAD] rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400">⭐</span>)}
                </div>
                <p className="text-[#F0F6FF] mb-4">"Consegui uma promoção depois de concluir os cursos. Recomendo!"</p>
                <p className="font-bold text-white mb-2">📢 Fernanda L. — Curitiba, PR</p>
                <p className="text-sm text-[#00E676]">🏆 Resultado: Reconhecimento imediato da chefia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-4 bg-[#0A1A35]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="shield-glow inline-block mb-6">
              <ShieldCheck className="w-24 h-24 text-[#00AAFF]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h2>
            <p className="text-xl text-[#F0F6FF] mb-4">
              Se você não gostar dos cursos por qualquer motivo, devolvemos <span className="text-[#00E676] font-bold">100% do seu dinheiro</span>.
            </p>
            <p className="text-[#7A8FAD]">
              Sem perguntas. Sem burocracia. Você não tem nada a perder!
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#002D6E] via-[#004AAD] to-[#002D6E] grid-bg relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
              NÃO DEIXE PARA AMANHÃ A QUALIFICAÇÃO QUE PODE <span className="text-glow-yellow text-[#FFD600]">MUDAR SUA CARREIRA</span> HOJE
            </h2>
            <p className="text-xl text-[#F0F6FF] mb-8">
              Mais de 15.000 profissionais já transformaram suas carreiras. Sua vez!
            </p>
            <CTAButton />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#060F24] border-t border-[#004AAD] py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Settings className="w-16 h-16 text-[#0066FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-6">Mecânica Total®</h3>

            <div className="space-y-2 text-[#7A8FAD] mb-6">
              <p>CNPJ: 29.705.491/0001-58</p>
              <p>📧 suporte@mecanicatotalbrasil.com.br</p>
              <p>📱 +55 27 99322-2442</p>
            </div>

            <div className="pt-6 border-t border-[#004AAD] text-sm text-[#7A8FAD]">
              <p>© 2024 Mecânica Total. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
