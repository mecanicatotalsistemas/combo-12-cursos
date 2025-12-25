import { useEffect } from 'react';
import { Settings, ShieldCheck, Award } from 'lucide-react';
import SocialProofPopup from './components/SocialProofPopup';
import CTAButton from './components/CTAButton';

function App() {
  useEffect(() => {
    document.title = 'Mecânica Total - 12 Cursos com Certificado | Acesso Vitalício';
  }, []);

  const courses = [
    { title: 'Curso Bombas Centrífugas' },
    { title: 'Curso Hidráulica Industrial' },
    { title: 'Curso Elementos de Vedação' },
    { title: 'Curso Compressores' },
    { title: 'Curso Metrologia' },
    { title: 'Curso Elementos Filtrantes' },
    { title: 'Curso Monitoramento On-line' },
    { title: 'Curso Rolamentos e Mancais' },
    { title: 'Curso Transportador de Correia' },
    { title: 'Curso Redutor e Engrenagens' },
    { title: 'Curso Peneira Vibratória' },
    { title: 'Curso Acoplamentos' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SocialProofPopup />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="https://static-media.hotmart.com/cG0l26jb-ckgyE7XLdyzODf8bdo=/1024x558/filters:quality(100)/hotmart/checkout_custom/631eb92a-0056-4f0f-9bb0-1c0f252e27e5/hnj3pr7rf.jpeg"
              alt="12 Cursos Liberados - Acesso Vitalício"
              className="w-full max-w-4xl rounded-2xl shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            O Combo de Cursos Essenciais para Quem Atua com <span className="text-red-500">Mecânica Industrial</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            São 12 cursos com certificado, acesso vitalício e suporte! Ideal para profissionais da indústria que querem se destacar de forma prática e direta.
          </p>

          <div className="bg-slate-800 border-2 border-red-500 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-5xl font-bold text-red-500 mb-2">12x de R$ 14,91</div>
            <div className="text-2xl text-gray-300 mb-4">ou R$ 136,00 à vista</div>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Compra 100% segura
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                12 certificados inclusos
              </span>
            </div>
          </div>

          <CTAButton />
        </header>

        <section className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            🎓 O que você vai aprender:
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {courses.map((course, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition-colors">
                <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                <span className="text-lg text-slate-700 font-medium">{course.title}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-xl p-6 text-center">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-slate-900">
              12 Certificados emitidos individualmente!
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            💥 O que dizem nossos alunos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500">
              <p className="text-lg text-slate-700 mb-3">
                "Já fiz 4 cursos do combo e aprendi mais do que em 2 anos de prática!"
              </p>
              <p className="font-bold text-slate-900">📢 Carlos M. - SP</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-500">
              <p className="text-lg text-slate-700 mb-3">
                "Certificados aceitos na minha empresa. Curso direto e fácil de aplicar."
              </p>
              <p className="font-bold text-slate-900">📢 Jéssica F. - MG</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-purple-500">
              <p className="text-lg text-slate-700 mb-3">
                "Excelente investimento! O conteúdo é muito completo e prático."
              </p>
              <p className="font-bold text-slate-900">📢 Rodrigo S. - RJ</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-orange-500">
              <p className="text-lg text-slate-700 mb-3">
                "Consegui uma promoção depois de concluir os cursos. Recomendo!"
              </p>
              <p className="font-bold text-slate-900">📢 Fernanda L. - PR</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-12 border-2 border-green-400 shadow-2xl">
          <div className="text-center">
            <ShieldCheck className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              🔐 Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-xl text-slate-700 mb-4 max-w-2xl mx-auto">
              Se você não gostar dos cursos por qualquer motivo, devolvemos <span className="font-bold text-green-600">100% do seu dinheiro</span>.
            </p>
            <p className="text-lg text-slate-600">
              Sem perguntas. Sem burocracia. Você não tem nada a perder!
            </p>
          </div>
        </section>

        <div className="text-center mb-12">
          <CTAButton />
        </div>

        <footer className="bg-slate-800 rounded-2xl p-8 text-center border-2 border-slate-700">
          <div className="mb-6">
            <Settings className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Mecânica Total®</h3>
          </div>

          <div className="space-y-2 text-gray-300 mb-6">
            <p>CNPJ: 29.705.491/0001-58</p>
            <p>📧 suporte@mecanicatotalbrasil.com.br</p>
            <p>📱 +55 27 99322-2442</p>
          </div>

          <div className="pt-6 border-t border-slate-700 text-sm text-gray-400">
            <p>© 2024 Mecânica Total. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
