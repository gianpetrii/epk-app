'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Instagram, Twitter, Youtube, Music, Phone, Pause, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
// Import components only if they are used
// import { AudioPlayer } from "@/components/audio-player"
import { ImageGallery } from "@/components/image-gallery"
import { DownloadButton } from "@/components/download-button"
// import Image from "next/image"
import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function EPK() {
  return (
    <ProtectedRoute>
      <EPKContent />
    </ProtectedRoute>
  );
}

function EPKContent() {
  const { t } = useLanguage();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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
          <div className="flex flex-col items-center mb-6">
            <p className="flex items-center gap-2 text-sm md:text-base">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a href="mailto:nachogomezcao21@gmail.com" className="hover:text-primary">
                nachogomezcao21@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm md:text-base">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <a href="tel:+5491136861890" className="hover:text-primary">
                +5491136861890
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <DownloadButton />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-highlight text-highlight hover:bg-highlight hover:text-background"
            >
              <a href="#contact">{t('hero.contact')}</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* About the Artist Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('about.title')}</h2>
            <p className="mb-4">{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="/images/EPK ULTIMO-1.pdf-image-000.jpg" alt="Nacho Gomez Cao - Portrait" className="w-full h-auto" />
          </div>
        </section>

        {/* Social Media Stats Section */}
        <section className="py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-primary text-center">{t('stats.title')}</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('future.title')}</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('aesthetic.title')}</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('femme.title')}</h2>
          <div className="mb-8">
            <p className="text-lg max-w-3xl mx-auto text-center mb-10">{t('femme.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg overflow-hidden shadow-xl h-full">
                <img 
                  src="/images/EPK ULTIMO-1.pdf-image-010.jpg" 
                  alt="Femme Fatale concept 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl h-full">
                <img 
                  src="/images/EPK ULTIMO-1.pdf-image-011.jpg" 
                  alt="Femme Fatale concept 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
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
          </div>
        </section>

        {/* Influences Section */}
        <section id="influences" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('influences.title')}</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-primary">{t('songs.title')}</h2>

          <div className="bg-black p-4">
            {songs.map((song, index) => (
              <div 
                key={index} 
                className="mb-4 last:mb-0 group"
              >
                <button 
                  onClick={() => togglePlay(index)} 
                  className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-200 
                    ${playingIndex === index 
                      ? 'bg-black text-red-600' 
                      : 'bg-white text-black group-hover:bg-black group-hover:text-red-600 active:text-red-700'}`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 flex items-center justify-center transition-colors duration-200
                      ${playingIndex === index 
                        ? 'bg-black text-red-600' 
                        : 'bg-black text-white group-hover:text-red-600'}`}
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
              <h3 className="text-2xl font-bold text-center uppercase mb-12 relative">
                <span className="text-red-600 px-6 py-2 tracking-wider">{t('songs.stream')}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["Spotify", "Apple Music", "SoundCloud", "Bandcamp"].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="p-6 text-center transition-colors duration-200 text-white hover:text-red-600 active:text-white group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white transition-colors duration-200 group-hover:text-red-600 group-active:text-white">
                      <Music className="h-8 w-8" />
                    </div>
                    <span className="font-bold uppercase text-lg tracking-wide">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Press Photos */}
        <section id="photos" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('press.photos')}</h2>
          <ImageGallery images={pressPhotos} />
          <p className="text-center mt-4">{t('press.highres')}</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">{t('contact.title')}</h2>

          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.direct')}</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:nachogomezcao21@gmail.com" className="hover:text-primary break-all">
                    nachogomezcao21@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+5491136861890" className="hover:text-primary">
                    +5491136861890
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
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-highlight text-highlight hover:bg-highlight hover:text-background"
                >
                  <a href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-highlight text-highlight hover:bg-highlight hover:text-background"
                >
                  <a href="#" aria-label="YouTube">
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

