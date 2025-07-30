import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contato() {
  return (
    <section id="contato" className="bg-white px-6 py-12 sm:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#2A4C68] mb-6 text-center">Contato</h2>

      <p className="text-[#1B2E41] text-center max-w-xl mx-auto mb-10 leading-relaxed">
        Para agendar uma consulta ou tirar dúvidas, você pode me contatar pelo WhatsApp, telefone ou e-mail. 
        Atendimento personalizado e respostas rápidas garantidas!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-12 text-[#2A4C68] text-lg font-medium">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5513991298550"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-[#25D366] transition-colors"
          aria-label="Enviar mensagem no WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
          <span>(13) 99912-9850</span>
        </a>

        {/* Telefone (somente número) */}
        <a
          href="tel:+5513991298550"
          className="flex items-center gap-3 hover:text-[#37699E] transition-colors"
          aria-label="Ligar para o número"
        >
          <FaPhone className="text-2xl" />
          <span>(13) 99912-9850</span>
        </a>

        {/* E-mail */}
        <a
          href="mailto:viniciusafjoao@gmail.com"
          className="flex items-center gap-3 hover:text-[#37699E] transition-colors"
          aria-label="Enviar e-mail para Vinícius"
        >
          <FaEnvelope className="text-2xl" />
          <span>viniciusafjoao@gmail.com</span>
        </a>
      </div>
    </section>
  )
}
