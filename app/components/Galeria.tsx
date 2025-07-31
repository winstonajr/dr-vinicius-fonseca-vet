'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const images = [
  { src: '/perfil.jpg', alt: 'Atendimento domiciliar com pet 1' },
  { src: '/default.jpg', alt: 'Atendimento domiciliar com pet 2' },
  { src: '/default.jpg', alt: 'Atendimento domiciliar com pet 3' },
  { src: '/default.jpg', alt: 'Atendimento domiciliar com pet 4' },
  { src: '/default.jpg', alt: 'Atendimento domiciliar com pet 5' },
];

export default function GalleryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  // Navegação manual
  const handlePrev = useCallback(() => {
    instanceRef.current?.prev();
  }, [instanceRef]);

  const handleNext = useCallback(() => {
    instanceRef.current?.next();
  }, [instanceRef]);

  return (
    <section
      id="galeria"
      className="bg-[#F5F9FB] py-16 px-4"
      aria-label="Galeria de atendimentos veterinários"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6 text-[#2A4C68]"
        >
          <Camera className="w-6 h-6" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl font-bold">Galeria de Atendimentos</h2>
        </motion.div>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#37699E] max-w-2xl mx-auto mb-10 text-sm sm:text-base"
        >
          Veja alguns momentos dos atendimentos — carinho, profissionalismo e amor pelos pets.
        </motion.p>

        {/* Slider */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {images.map(({ src, alt }, index) => (
              <motion.div
                key={index}
                className="keen-slider__slide rounded-xl overflow-hidden border border-[#7CA6C7] shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={500}
                  priority={index === 0}
                  className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Controles */}
          <button
            onClick={handlePrev}
            aria-label="Slide anterior"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-[#2A4C68] bg-opacity-70 hover:bg-opacity-90 text-white p-2 transition focus:outline-none focus:ring-2 focus:ring-[#25D366] z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Próximo slide"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-[#2A4C68] bg-opacity-70 hover:bg-opacity-90 text-white p-2 transition focus:outline-none focus:ring-2 focus:ring-[#25D366] z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div
          className="flex justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Navegação da galeria"
        >
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              aria-selected={currentSlide === idx}
              role="tab"
              aria-label={`Ir para slide ${idx + 1}`}
              tabIndex={currentSlide === idx ? 0 : -1}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] ${
                currentSlide === idx ? 'bg-[#2A4C68]' : 'bg-[#CAD8E1]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
