"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.about': 'About the Artist',
    'nav.future': 'Future Project',
    'nav.aesthetic': 'Album Aesthetic',
    'nav.femme': 'Femme Fatale',
    'nav.influences': 'Influences',
    'nav.songs': 'Songs',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Nacho Gomez Cao',
    'hero.subtitle': 'Artist',
    'hero.download': 'Download EPK',
    'hero.contact': 'Contact',
    
    // About section
    'about.title': 'About the Artist',
    'about.p1': 'Nacho Gomez Cao is an emerging Argentinian musician and composer known for his introspective and emotional pop music. His work blends contemporary pop elements with his vintage rock & roll influences. Tracks like "Paradise" and "My Favorite Drug" have gained popularity on platforms such as Spotify, Apple Music, and YouTube, showcasing his talent for meaningful lyrics and polished production.',
    'about.p2': 'Nacho continues to grow as an artist, exploring new sounds and expanding his reach beyond Argentina, making him a promising name in contemporary pop.',
    
    // Social Media Stats section
    'stats.title': 'Social Media Presence',
    'stats.instagram': 'INSTAGRAM',
    'stats.tiktok': 'LIKES IN TIK TOK',
    
    // Future Project section
    'future.title': 'Future Project',
    'future.description': 'His next album, which the title it\'s yet to be determined, consists in the relationship between a man and a woman, situated in the big apple, New York City. The album narrates the story of this relationship, from the moment they meet (Track 1) up until the Post-Mortem of the relationship. This album takes us, in a sort of adventure through all the great stages of this "cool" connection this couple has, narrated from the experience of the man.\n\nSince the stages of Love are very different from one another, the music and the lyrics try to match each stage individually. This means this album could encapsulate different sounds and tones, maybe even different genres entirely. It makes sense that the Honeymoon phase of the relationship embodies a more pop and happy sound, while the Stagnation part captures more of a rock, heavy, deeper vibe.',
    
    // Album Aesthetic section
    'aesthetic.title': 'Album Aesthetic',
    'aesthetic.description': 'Each release created by Nacho Gomez Cao carries its own unique visual and sonic identity, carefully crafted to create an immersive artistic experience that complements his distinctive DJ style.',
    
    // Femme Fatale section
    'femme.title': 'Femme Fatale',
    'femme.description': 'HERE IS A SORT OF TRASHY, GLAMOUROUS STYLE THROUGHOUT THE ALBUM, SEEMS TO BE ALMOST SOMETHING UNTOUCHABLE. BUT AT THE SAME TIME, THERE IS A VULNERABILITY THAT IS YET TO BE SHOWN. THERE\'S HEARTBREAK, THERE\'S DECEPTION. THERE\'S REVENGE, THERE\'S SEX. THERE\'S LOVE, AND THERE\'S JEALOUSY. THEY ARE CELEBRITIES, BUT AGAIN, THEY ARE HUMANS. THIS ALBUM TENDS TO GO FROM ONE EXTREME TO ANOTHER, SO IT LETS THE EXTREMES BALANCE EACH OTHER OUT. LIKE NYC ITSELF. SHE REPRESENTS THE CALIFORNIA SUN, HE IS THE NEW YORK CITY SKYSCRAPERS.',
    
    'femme.paragraph1': 'HERE IS A SORT OF TRASHY, GLAMOUROUS STYLE THROUGHOUT THE ALBUM, SEEMS TO BE ALMOST SOMETHING UNTOUCHABLE. BUT AT THE SAME TIME, THERE IS A VULNERABILITY THAT IS YET TO BE SHOWN.',
    'femme.paragraph2': 'THERE\'S HEARTBREAK, THERE\'S DECEPTION. THERE\'S REVENGE, THERE\'S SEX. THERE\'S LOVE, AND THERE\'S JEALOUSY. THEY ARE CELEBRITIES, BUT AGAIN, THEY ARE HUMANS.',
    'femme.paragraph3': 'THIS ALBUM TENDS TO GO FROM ONE EXTREME TO ANOTHER, SO IT LETS THE EXTREMES BALANCE EACH OTHER OUT. LIKE NYC ITSELF. SHE REPRESENTS THE CALIFORNIA SUN, HE IS THE NEW YORK CITY SKYSCRAPERS.',
    
    // Influences section
    'influences.title': 'Influences',
    'influences.description': 'These are all artists that share some values with Nacho, whether is their songwriting abilities, or their ambition to try out different sounds palettes.',
    
    // Songs section
    'songs.title': 'Tracks',
    'songs.listen': 'Listen',
    'songs.details': 'View Details',
    'songs.stream': 'Stream my music on all major platforms:',
    
    // Press section
    'press.title': 'Press & Media',
    'press.photos': 'Press Photos',
    'press.highres': 'High-resolution photos available upon request.',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.booking': 'Booking & Management',
    'contact.connect': 'Connect',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.direct': 'Direct Contact',
    
    // Footer
    'footer.rights': 'All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.language': 'Language',
    
    // Password protection
    'password.incorrectPassword': 'Incorrect password. Please try again.',
    'password.restricted': 'Restricted Content',
    'password.restrictedMessage': 'This content is currently restricted as the songs have not been released yet.',
    'password.logout': 'Logout',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre el Artista',
    'nav.future': 'Proyecto Futuro',
    'nav.aesthetic': 'Estética del Álbum',
    'nav.femme': 'Femme Fatale',
    'nav.influences': 'Influencias',
    'nav.songs': 'Canciones',
    'nav.contact': 'Contacto',
    
    // Hero section
    'hero.title': 'Nacho Gomez Cao',
    'hero.subtitle': 'Artista',
    'hero.download': 'Descargar EPK',
    'hero.contact': 'Contacto',
    
    // About section
    'about.title': 'Sobre el Artista',
    'about.p1': 'Nacho Gomez Cao es un músico y compositor argentino emergente conocido por su música pop introspectiva y emocional. Su trabajo combina elementos del pop contemporáneo con influencias del rock & roll vintage. Canciones como "Paradise" y "My Favorite Drug" han ganado popularidad en plataformas como Spotify, Apple Music y YouTube, demostrando su talento para letras significativas y producción refinada.',
    'about.p2': 'Nacho continúa creciendo como artista, explorando nuevos sonidos y expandiendo su alcance más allá de Argentina, convirtiéndolo en un nombre prometedor en el pop contemporáneo.',
    
    // Social Media Stats section
    'stats.title': 'Presencia en Redes Sociales',
    'stats.instagram': 'INSTAGRAM',
    'stats.tiktok': 'LIKES EN TIK TOK',
    
    // Future Project section
    'future.title': 'Proyecto Futuro',
    'future.description': 'Su próximo álbum, cuyo título aún está por determinar, trata sobre la relación entre un hombre y una mujer, situada en la gran manzana, Nueva York. El álbum narra la historia de esta relación, desde el momento en que se conocen (Pista 1) hasta el post-mortem de la relación. Este álbum nos lleva, en una especie de aventura, a través de todas las grandes etapas de esta conexión "cool" que tiene la pareja, narrada desde la experiencia del hombre.\n\nComo las etapas del Amor son muy diferentes entre sí, la música y las letras intentan adaptarse a cada etapa individualmente. Esto significa que este álbum podría encapsular diferentes sonidos y tonos, tal vez incluso géneros completamente diferentes. Tiene sentido que la fase de Luna de Miel de la relación incorpore un sonido más pop y alegre, mientras que la parte de Estancamiento capture una vibra más rock, pesada y profunda.',
    
    // Album Aesthetic section
    'aesthetic.title': 'Estética del Álbum',
    'aesthetic.description': 'Cada lanzamiento creado por Nacho Gomez Cao lleva su propia identidad visual y sonora única, cuidadosamente elaborada para crear una experiencia artística inmersiva que complementa su distintivo estilo como DJ.',
    
    // Femme Fatale section
    'femme.title': 'Femme Fatale',
    'femme.description': 'HAY UN ESTILO GLAMOROSO Y UN TANTO DESCARADO A LO LARGO DEL ÁLBUM, PARECE SER CASI ALGO INTOCABLE. PERO AL MISMO TIEMPO, HAY UNA VULNERABILIDAD QUE AÚN ESTÁ POR MOSTRARSE. HAY DESAMOR, HAY ENGAÑO. HAY VENGANZA, HAY SEXO. HAY AMOR Y HAY CELOS. SON CELEBRIDADES, PERO NUEVAMENTE, SON HUMANOS. ESTE ÁLBUM TIENDE A IR DE UN EXTREMO A OTRO, PERMITIENDO QUE LOS EXTREMOS SE EQUILIBREN ENTRE SÍ. COMO LA PROPIA NYC. ELLA REPRESENTA EL SOL DE CALIFORNIA, ÉL ES LOS RASCACIELOS DE LA CIUDAD DE NUEVA YORK.',
    
    'femme.paragraph1': 'HAY UN ESTILO GLAMOROSO Y UN TANTO DESCARADO A LO LARGO DEL ÁLBUM, PARECE SER CASI ALGO INTOCABLE. PERO AL MISMO TIEMPO, HAY UNA VULNERABILIDAD QUE AÚN ESTÁ POR MOSTRARSE.',
    'femme.paragraph2': 'HAY DESAMOR, HAY ENGAÑO. HAY VENGANZA, HAY SEXO. HAY AMOR Y HAY CELOS. SON CELEBRIDADES, PERO NUEVAMENTE, SON HUMANOS.',
    'femme.paragraph3': 'ESTE ÁLBUM TIENDE A IR DE UN EXTREMO A OTRO, PERMITIENDO QUE LOS EXTREMOS SE EQUILIBREN ENTRE SÍ. COMO LA PROPIA NYC. ELLA REPRESENTA EL SOL DE CALIFORNIA, ÉL ES LOS RASCACIELOS DE LA CIUDAD DE NUEVA YORK.',
    
    // Influences section
    'influences.title': 'Influencias',
    'influences.description': 'Estos son artistas que comparten algunos valores con Nacho, ya sea por sus habilidades de composición, o por su ambición de probar diferentes paletas de sonidos.',
    
    // Songs section
    'songs.title': 'Tracks',
    'songs.listen': 'Escuchar',
    'songs.details': 'Ver Detalles',
    'songs.stream': 'Escucha mi música en todas las plataformas principales:',
    
    // Press section
    'press.title': 'Prensa y Medios',
    'press.photos': 'Fotos de Prensa',
    'press.highres': 'Fotos de alta resolución disponibles bajo petición.',
    
    // Contact section
    'contact.title': 'Contacto',
    'contact.booking': 'Reservas y Management',
    'contact.connect': 'Conectar',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.direct': 'Contacto Directo',
    
    // Footer
    'footer.rights': 'Todos los Derechos Reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.language': 'Idioma',
    
    // Password protection
    'password.incorrectPassword': 'Contraseña incorrecta. Por favor intente nuevamente.',
    'password.restricted': 'Contenido Restringido',
    'password.restrictedMessage': 'Este contenido está actualmente restringido ya que las canciones aún no han sido lanzadas.',
    'password.logout': 'Cerrar sesión',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 