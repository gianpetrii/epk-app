'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Instagram, Twitter, Youtube, Music, Phone, Pause, Play, Building, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
// Import components only if they are used
// import { AudioPlayer } from "@/components/audio-player"
import { ImageGallery } from "@/components/image-gallery"
import { DownloadButton } from "@/components/download-button"
// import Image from "next/image"
import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function EPK() {
  const { t } = useLanguage();
  
  return (
    <ProtectedRoute>
      <EPKContent />
    </ProtectedRoute>
  );
}

// Función de utilidad para desplazamiento suave
const smoothScrollTo = (elementId: string, e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;
  
  // Calcular la posición con un pequeño offset para mejor visualización
  const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const headerOffset = 80; // Espacio adicional para que no quede pegado al borde superior
  const offsetPosition = offsetTop - headerOffset;
  
  // Animación suave con easing
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  const duration = 2500; // Aumentamos significativamente la duración para un efecto más dramático
  let start: number | null = null;
  
  // Función de easing personalizada con cambios de aceleración y desaceleración muy pronunciados
  const customEase = (t: number): number => {
    // Aplicamos una función de potencia para hacer más pronunciados los cambios
    // Esta función crea un inicio extremadamente lento y un final muy suave
    return t < 0.5
      ? Math.pow(2 * t, 4) / 2  // Inicio muy lento (potencia 4)
      : 1 - Math.pow(2 * (1 - t), 4) / 2;  // Final muy suave
  };
  
  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Usamos la función de easing personalizada para un movimiento más dramático
    const easeProgress = customEase(progress);
    
    window.scrollTo(0, startPosition + distance * easeProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };
  
  requestAnimationFrame(animation);
};

function EPKContent() {
  const { t } = useLanguage();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Función para desplazamiento suave a la sección de contacto
  const scrollToContact = (e: React.MouseEvent) => {
    smoothScrollTo('contact', e);
  };

  const togglePlay = (index: number) => {
    if (playingIndex === index) {
      // Pause the current song
      setPlayingIndex(null);
    } else {
      // Play the selected song
      setPlayingIndex(index);
    }
  };

  // Tracks with local audio file
  const songs = [
    {
      title: "Londres",
      src: "/audio/Londres_JaviMix_13.wav"
    },
    {
      title: "Mi Angel",
      src: "/audio/Mi Angel_JaviMix_17.wav"
    },
    {
      title: "Tu Balcón",
      src: "/audio/Balcón_JaviMix_7.4.wav"
    }
  ];

  // Press photos using the uploaded images and new shared images
  const pressPhotos = [
    { src: "/images/EPK ULTIMO-1.pdf-image-014.jpg", alt: "Nacho Gomez Cao - Press Photo 1" },
    { src: "/images/EPK ULTIMO-1.pdf-image-015.jpg", alt: "Nacho Gomez Cao - Press Photo 2" },
    { src: "/images/EPK ULTIMO-1.pdf-image-016.jpg", alt: "Nacho Gomez Cao - Press Photo 3" },
    { src: "/images/EPK ULTIMO-1.pdf-image-017.jpg", alt: "Nacho Gomez Cao - Press Photo 4" },
    { src: "/images/EPK ULTIMO-1.pdf-image-018.jpg", alt: "Nacho Gomez Cao - Press Photo 5" },
    { src: "/images/EPK ULTIMO-1.pdf-image-019.jpg", alt: "Nacho Gomez Cao - Press Photo 6" },
    { src: "/images/EPK ULTIMO-1.pdf-image-020.jpg", alt: "Nacho Gomez Cao - Press Photo 7" },
    { src: "/images/EPK ULTIMO-1.pdf-image-021.jpg", alt: "Nacho Gomez Cao - Press Photo 8" },
    { src: "/images/EPK ULTIMO-1.pdf-image-022.jpg", alt: "Nacho Gomez Cao - Press Photo 9" },
    { src: "/images/EPK ULTIMO-1.pdf-image-023.jpg", alt: "Nacho Gomez Cao - Press Photo 10" },
    { src: "/images/EPK ULTIMO-1.pdf-image-024.jpg", alt: "Nacho Gomez Cao - Press Photo 11" },
    { src: "/images/EPK ULTIMO-1.pdf-image-025.jpg", alt: "Nacho Gomez Cao - Press Photo 12" },
    { src: "/images/EPK ULTIMO-1.pdf-image-026.jpg", alt: "Nacho Gomez Cao - Press Photo 13" },
    { src: "/images/EPK ULTIMO-1.pdf-image-027.jpg", alt: "Nacho Gomez Cao - Press Photo 14" },
    { src: "/images/EPK ULTIMO-1.pdf-image-028.jpg", alt: "Nacho Gomez Cao - Press Photo 15" }
  ];

  // Añadir el icono de TikTok
  const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-3.168h-3.766v13.206c0 1.55-1.257 2.807-2.807 2.807a2.807 2.807 0 0 1-2.807-2.807 2.807 2.807 0 0 1 2.807-2.807c.193 0 .383.019.566.056V7.825a6.578 6.578 0 0 0-.566-.024C4.15 7.801 1 10.951 1 14.807 1 18.663 4.15 21.813 8.006 21.813c3.856 0 7.006-3.15 7.006-7.006V9.136a8.728 8.728 0 0 0 4.308 1.127V6.497c0 0-1.317.071-1.999-.935Z" fill="currentColor"/>
    </svg>
  );

  // Añadir iconos para las plataformas de música
  const SpotifyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5917 16.4083C16.3833 16.6167 16.1167 16.7333 15.8333 16.7333C15.55 16.7333 15.2833 16.6167 15.075 16.4083C14.6583 15.9917 14.6583 15.3083 15.075 14.8917C17.2583 12.7083 17.2583 9.29167 15.075 7.10833C14.6583 6.69167 14.6583 6.00833 15.075 5.59167C15.4917 5.175 16.175 5.175 16.5917 5.59167C19.5667 8.56667 19.5667 13.4333 16.5917 16.4083ZM14.1417 14.1417C13.9333 14.35 13.6667 14.4667 13.3833 14.4667C13.1 14.4667 12.8333 14.35 12.625 14.1417C12.2083 13.725 12.2083 13.0417 12.625 12.625C13.5583 11.6917 13.5583 10.3083 12.625 9.375C12.2083 8.95833 12.2083 8.275 12.625 7.85833C13.0417 7.44167 13.725 7.44167 14.1417 7.85833C15.8917 9.60833 15.8917 12.3917 14.1417 14.1417ZM10.1167 13.3833C9.925 13.575 9.675 13.6667 9.41667 13.6667C9.15833 13.6667 8.90833 13.575 8.71667 13.3833C8.33333 13 8.33333 12.3333 8.71667 11.95C8.80833 11.8583 8.925 11.7917 9.05 11.75C9.16667 11.7167 9.29167 11.7 9.41667 11.7C9.54167 11.7 9.66667 11.7167 9.78333 11.75C9.90833 11.7917 10.025 11.8583 10.1167 11.95C10.5 12.3333 10.5 13 10.1167 13.3833Z" fill="currentColor"/>
    </svg>
  );

  const AppleMusicIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      <path d="M23.9938 18.3608C23.8681 18.7276 23.7125 19.0818 23.5269 19.4234C23.2363 19.9525 22.8857 20.3991 22.4751 20.7632C21.8494 21.3389 21.1337 21.6268 20.3281 21.6268C19.7625 21.6268 19.2819 21.4886 18.8863 21.2097C18.4907 20.9308 18.1401 20.7914 17.8344 20.7914C17.5138 20.7914 17.1481 20.9308 16.7375 21.2097C16.3269 21.4886 15.9763 21.6318 15.6856 21.6318C14.9 21.6318 14.1994 21.3339 13.5837 20.7382C13.1431 20.3441 12.7775 19.8675 12.4869 19.3084C12.1663 18.6927 11.9056 18.0019 11.705 17.2363C11.4894 16.3957 11.3837 15.5751 11.3837 14.7745C11.3837 13.8389 11.5544 13.0333 11.8956 12.3576C12.1663 11.8135 12.5369 11.3695 13.0075 11.0239C13.4781 10.6783 14.0038 10.5026 14.5844 10.4976C15.0851 10.4976 15.6957 10.6558 16.4163 10.9697C17.1369 11.2836 17.5625 11.4418 17.6932 11.4418C17.7938 11.4418 18.3244 11.2536 19.1801 10.8795C19.9857 10.5305 20.6713 10.3823 21.2369 10.4326C22.3132 10.5305 23.1388 10.9697 23.7144 11.7553C22.7488 12.3309 22.2682 13.1516 22.2732 14.2129C22.2782 15.0335 22.5738 15.7141 23.1644 16.2547C23.4351 16.5085 23.7357 16.7072 24.0664 16.8504C24.0463 17.0291 24.0213 17.2027 23.9913 17.3709C23.9613 17.7027 23.9238 18.0345 23.8737 18.3608H23.9938ZM18.4907 5.9697C18.4907 6.6104 18.2751 7.2161 17.8444 7.7867C17.3288 8.4574 16.6732 8.8629 15.9576 8.7951C15.9426 8.7149 15.9326 8.6247 15.9326 8.5243C15.9326 7.9137 16.1782 7.2631 16.6188 6.7124C16.8394 6.4335 17.1201 6.1997 17.4607 6.0114C17.8013 5.8257 18.1269 5.7228 18.4376 5.7078C18.4526 5.7929 18.4907 5.8783 18.4907 5.9697Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Hero Section */}
      <header className="relative min-h-[50vh] flex items-center justify-center py-16">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ backgroundImage: "url('/images/EPK ULTIMO-1.pdf-image-000.jpg')" }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <DownloadButton />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-highlight text-highlight hover:bg-highlight hover:text-background"
            >
              <a href="#contact" onClick={scrollToContact}>{t('hero.contact')}</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* About the Artist Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('about.title')}</h2>
            <p className="mb-4">{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="/images/EPK ULTIMO-1.pdf-image-000.jpg" alt="Nacho Gomez Cao - Portrait" className="w-full h-auto" />
          </div>
        </section>

        {/* Social Media Stats Section */}
        <section id="stats" className="py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary text-center">{t('stats.title')}</h2>
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
              <span className="text-4xl sm:text-5xl font-bold text-black mb-2">5K</span>
              <span className="text-sm uppercase tracking-wider text-black">{t('stats.instagram')}</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
              <span className="text-4xl sm:text-5xl font-bold text-black mb-2">115K</span>
              <span className="text-sm uppercase tracking-wider text-black">{t('stats.tiktok')}</span>
            </div>
          </div>
        </section>

        {/* Future Project Section */}
        <section id="future" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('future.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/images/EPK ULTIMO-1.pdf-image-001.jpg" alt="Future project concept" className="w-full h-auto" />
            </div>
            <div>
              <div className="prose prose-lg max-w-none">
                {t('future.description').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Album Aesthetic Section */}
        <section id="aesthetic" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('aesthetic.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-002.jpg"
                alt="Album aesthetic 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-003.jpg"
                alt="Album aesthetic 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-004.jpg"
                alt="Album aesthetic 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-005.jpg"
                alt="Album aesthetic 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-006.jpg"
                alt="Album aesthetic 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-007.jpg"
                alt="Album aesthetic 6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-008.jpg"
                alt="Album aesthetic 7"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/EPK ULTIMO-1.pdf-image-009.jpg"
                alt="Album aesthetic 8"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Femme Fatale Section */}
        <section id="femme" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('femme.title')}</h2>
          
          {/* Images first - two per row, same size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-xl h-80">
              <img 
                src="/images/EPK ULTIMO-1.pdf-image-010.jpg" 
                alt="Femme Fatale concept 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl h-80">
              <img 
                src="/images/EPK ULTIMO-1.pdf-image-011.jpg" 
                alt="Femme Fatale concept 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl h-80">
              <img 
                src="/images/EPK ULTIMO-1.pdf-image-012.jpg" 
                alt="Femme Fatale concept 3" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl h-80">
              <img 
                src="/images/EPK ULTIMO-1.pdf-image-013.jpg" 
                alt="Femme Fatale concept 4" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text content - left-justified with paragraph spacing */}
          <div className="text-left max-w-4xl">
            <p className="text-lg mb-16 font-thin" style={{ fontWeight: 50 }}>{t('femme.paragraph1')}</p>
            <p className="text-lg mb-16 font-thin" style={{ fontWeight: 50 }}>{t('femme.paragraph2')}</p>
            <p className="text-lg font-thin" style={{ fontWeight: 50 }}>{t('femme.paragraph3')}</p>
          </div>
        </section>

        {/* Influences Section */}
        <section id="influences" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('influences.title')}</h2>
          <p className="text-lg mb-8">{t('influences.description')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HARRY STYLES',
              'FINNEAS',
              'JEFF BUCKLEY',
              'FLEETWOOD MAC',
              'THE 1975',
              'GRACIE ABRAMS',
              'RUEL',
              'SHAWN MENDES'
            ].map((artist, index) => (
              <div key={index} className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">{artist}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Songs Section */}
        <section id="songs" className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('songs.title')}</h2>

          <div className="bg-black p-4">
            {songs.map((song, index) => (
              <div 
                key={index} 
                className="mb-16 last:mb-0 group"
              >
                <button 
                  onClick={() => togglePlay(index)} 
                  className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-200 
                    ${playingIndex === index 
                      ? 'bg-black text-primary' 
                      : 'bg-white text-black group-hover:bg-black group-hover:text-primary active:text-primary'}`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 flex items-center justify-center transition-colors duration-200
                      ${playingIndex === index 
                        ? 'bg-black text-primary' 
                        : 'bg-black text-white group-hover:text-primary'}`}
                    >
                      {playingIndex === index ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </div>
                    <span className="text-2xl font-bold uppercase tracking-wide">{song.title}</span>
                  </div>
                  <div className="text-base uppercase font-bold tracking-wider">
                    {playingIndex === index ? 'NOW PLAYING' : 'PLAY TRACK'}
                  </div>
                </button>
                {playingIndex === index && (
                  <audio 
                    src={song.src} 
                    autoPlay 
                    onEnded={() => setPlayingIndex(null)}
                    className="hidden"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black p-4">
            <div className="bg-black p-12">
              <h3 className="text-2xl font-thin text-center uppercase mb-12 relative" style={{ fontWeight: 50 }}>
                <span className="text-primary px-6 py-2 tracking-wider">{t('songs.stream')}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <a 
                  href="https://open.spotify.com/artist/4fYhsyBgwRPBtaQbwvym6i?si=PzK3F1AWTeObCge-J6cvGg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 text-center transition-colors duration-200 text-white hover:text-primary active:text-white group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white transition-colors duration-200 group-hover:text-primary group-active:text-white">
                    <SpotifyIcon />
                  </div>
                  <span className="font-thin uppercase text-lg tracking-wide" style={{ fontWeight: 50 }}>Spotify</span>
                </a>
                <a 
                  href="https://music.apple.com/ar/artist/nacho-gomez-cao/1504578951?l=en-GB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 text-center transition-colors duration-200 text-white hover:text-primary active:text-white group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white transition-colors duration-200 group-hover:text-primary group-active:text-white">
                    <AppleMusicIcon />
                  </div>
                  <span className="font-thin uppercase text-lg tracking-wide" style={{ fontWeight: 50 }}>Apple Music</span>
                </a>
                <a 
                  href="https://youtube.com/@nachogomezcao6404?si=282FOl5uQ0umvEbJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 text-center transition-colors duration-200 text-white hover:text-primary active:text-white group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white transition-colors duration-200 group-hover:text-primary group-active:text-white">
                    <Youtube className="h-8 w-8" />
                  </div>
                  <span className="font-thin uppercase text-lg tracking-wide" style={{ fontWeight: 50 }}>YouTube</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@nachogomezcao?_t=ZM-8uXydwJFiYJ&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-6 text-center transition-colors duration-200 text-white hover:text-primary active:text-white group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white transition-colors duration-200 group-hover:text-primary group-active:text-white">
                    <TikTokIcon />
                  </div>
                  <span className="font-thin uppercase text-lg tracking-wide" style={{ fontWeight: 50 }}>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Press Photos */}
        <section id="photos" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('press.photos')}</h2>
          <ImageGallery images={pressPhotos} />
          <p className="text-center mt-4">{t('press.highres')}</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-primary">{t('contact.title')}</h2>

          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.booking')}</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Building className="h-4 w-4 flex-shrink-0" />
                  <span>WorldBeat Productions</span>
                </p>
                <p className="flex items-center gap-2">
                  <User className="h-4 w-4 flex-shrink-0" />
                  <span>KC Porter</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+18184929264" className="hover:text-primary">
                    818-492-9264
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.connect')}</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-highlight text-highlight hover:bg-highlight hover:text-background"
                >
                  <a href="https://www.instagram.com/nachogomezcao?igsh=aWVvc2xteW5uYWpi&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-highlight text-highlight hover:bg-highlight hover:text-background"
                >
                  <a href="https://www.tiktok.com/@nachogomezcao?_t=ZM-8uXydwJFiYJ&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <TikTokIcon />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-highlight text-highlight hover:bg-highlight hover:text-background"
                >
                  <a href="https://youtube.com/@nachogomezcao6404?si=282FOl5uQ0umvEbJ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-highlight/10 py-8 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Nacho Gomez Cao. {t('footer.rights')}</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" className="hover:text-primary">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="hover:text-primary">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

