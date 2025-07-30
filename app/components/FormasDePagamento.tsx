import { FaMoneyBillWave, FaCreditCard, FaPix } from 'react-icons/fa6'

export default function FormasDePagamento() {
  return (
    <section id="formas-pagamento" className="bg-white px-6 py-12 sm:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#2A4C68] mb-6 text-center">Formas de Pagamento</h2>

      <p className="text-[#1B2E41] max-w-xl mx-auto mb-8 text-center leading-relaxed">
        Para sua comodidade, aceito as seguintes formas de pagamento:
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-10 text-[#2A4C68] text-lg font-medium">
        {/* Pix */}
        <div className="flex items-center gap-4">
          <FaPix className="text-3xl text-[#2A4C68]" />
          <div>
            <h3 className="font-semibold text-[#2A4C68]">Pix</h3>
            <p>Pagamento rápido e seguro via chave Pix.</p>
          </div>
        </div>

        {/* Dinheiro */}
        <div className="flex items-center gap-4">
          <FaMoneyBillWave className="text-3xl text-[#2A4C68]" />
          <div>
            <h3 className="font-semibold">Dinheiro</h3>
            <p>Pagamento no local, em espécie.</p>
          </div>
        </div>

        {/* Cartão (crédito/débito) */}
        <div className="flex items-center gap-4">
          <FaCreditCard className="text-3xl text-[#2A4C68]" />
          <div>
            <h3 className="font-semibold">Cartão</h3>
            <p>Cartão aceito (crédito/débito).</p>
          </div>
        </div>
      </div>

      <p className="text-[#37699E] text-center mt-10 max-w-xl mx-auto leading-relaxed">
        O valor da consulta varia de acordo com a localização do cliente. Para consultar o preço exato, envie uma mensagem pelo WhatsApp.
      </p>

      <div className="text-center mt-6">
        <a
          href="https://wa.me/5513991298550"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          aria-label="Agendar pelo WhatsApp"
        >
          Consultar valor / Agendar no WhatsApp
        </a>
      </div>
    </section>
  )
}
