"use client"

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function DownloadButton() {
  const { t } = useLanguage();

  const handleDownload = () => {
    // Crear un enlace directo al PDF
    const link = document.createElement('a');
    link.href = '/pdf/EPK ULTIMO-1.pdf';
    link.download = 'EPK-Nacho-Gomez-Cao.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="default"
      size="lg"
      className="w-full sm:w-auto bg-highlight text-background hover:bg-highlight/80"
      onClick={handleDownload}
    >
      <Download className="h-5 w-5 mr-2 flex-shrink-0" />
      <span>{t('hero.download')}</span>
    </Button>
  );
}

