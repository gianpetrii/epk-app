'use client';

import { useState } from 'react';
import { usePassword } from '@/lib/password-context';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export function PasswordLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { authenticate } = usePassword();
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = authenticate(password);
    if (!isCorrect) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const placeholderText = language === 'es' ? 'Ingresa clave' : 'Enter Key';
  const buttonText = language === 'es' ? 'Descubrime' : 'Discover Me';

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-black/30 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-white/10">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Nacho Gomez Cao</h1>
            <p className="text-white">Electronic Press Kit</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 bg-black/50 border ${
                  error ? 'border-red-500' : 'border-gray-600'
                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder={placeholderText}
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-500">
                  {t('password.incorrectPassword') || 'Incorrect password. Please try again.'}
                </p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md transition duration-200"
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 