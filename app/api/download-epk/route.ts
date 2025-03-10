import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Ruta al archivo PDF
    const filePath = path.join(process.cwd(), 'public', 'pdf', 'EPK ULTIMO-1.pdf');
    
    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Archivo no encontrado', { status: 404 });
    }
    
    // Leer el archivo
    const fileBuffer = fs.readFileSync(filePath);
    
    // Configurar los headers para la descarga
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="EPK-Nacho-Gomez-Cao.pdf"');
    
    // Devolver el archivo como respuesta
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error al descargar el PDF:', error);
    return new NextResponse('Error al descargar el archivo', { status: 500 });
  }
} 