'use client';

import { useEffect } from 'react';
import { firebaseApp } from '@/lib/firebase';

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This ensures Firebase is initialized on the client side
    if (firebaseApp) {
      console.log('Firebase initialized successfully');
    } else {
      console.log('Firebase not initialized - this is normal during SSR');
    }
  }, []);

  return <>{children}</>;
} 