"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLanguage } from '@/lib/language-context';
import { usePassword } from '@/lib/password-context';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { isAuthenticated, logout } = usePassword();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#future', label: t('nav.future') },
    { href: '#aesthetic', label: t('nav.aesthetic') },
    { href: '#femme', label: t('nav.femme') },
    { href: '#influences', label: t('nav.influences') },
    { href: '#songs', label: t('nav.songs') },
    { href: '#contact', label: t('nav.contact') },
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
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-highlight/80 hover:text-highlight transition-colors"
              >
                {item.label}
              </Link>
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
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-highlight/80 hover:text-highlight transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
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