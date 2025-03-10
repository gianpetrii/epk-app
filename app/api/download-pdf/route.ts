import { NextResponse } from 'next/server';

export async function GET() {
  // Redireccionar directamente al archivo PDF
  return NextResponse.redirect(new URL('/pdf/EPK ULTIMO-1.pdf', 'https://' + process.env.VERCEL_URL || 'http://localhost:3000'));
} 