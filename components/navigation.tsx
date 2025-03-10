"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/lib/language-context';
import { usePassword } from '@/lib/password-context';

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

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { isAuthenticated, logout } = usePassword();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para manejar el clic en los enlaces de navegación
  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    smoothScrollTo(targetId, e);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { href: '#about', label: t('nav.about'), id: 'about' },
    { href: '#future', label: t('nav.future'), id: 'future' },
    { href: '#aesthetic', label: t('nav.aesthetic'), id: 'aesthetic' },
    { href: '#femme', label: t('nav.femme'), id: 'femme' },
    { href: '#influences', label: t('nav.influences'), id: 'influences' },
    { href: '#songs', label: t('nav.songs'), id: 'songs' },
    { href: '#contact', label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-highlight/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-highlight">
            Nacho Gomez Cao
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-highlight/80 hover:text-highlight transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                className="text-sm text-highlight/80 hover:text-highlight transition-colors flex items-center gap-1"
                onClick={logout}
              >
                <LogOut className="h-4 w-4" />
                {t('password.logout')}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-highlight"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-highlight/10">
          <div className="px-4 py-2 space-y-1">
            {isAuthenticated && navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-highlight/80 hover:text-highlight transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            {isAuthenticated && (
              <Button
                variant="ghost"
                className="w-full justify-start py-2 text-highlight/80 hover:text-highlight transition-colors flex items-center gap-2"
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
              >
                <LogOut className="h-4 w-4" />
                {t('password.logout')}
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 