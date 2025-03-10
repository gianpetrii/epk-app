'use client';

import { useEffect } from 'react';
import { usePassword } from '@/lib/password-context';
import { PasswordLogin } from '@/components/password-login';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = usePassword();
  
  // Use effect to prevent flash of protected content
  useEffect(() => {
    // This is just to ensure client-side rendering
  }, []);

  if (!isAuthenticated) {
    return <PasswordLogin />;
  }

  return <>{children}</>;
} 