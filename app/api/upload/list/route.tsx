import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dr5ts47zf',
  api_key: '153946612626758',
  api_secret: '9ryUrc3_82MkaMzxppcwEMa5bvM'
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');

    if (!folder) {
      return NextResponse.json({ error: 'No folder specified' }, { status: 400 });
    }

    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folder,
      max_results: 100
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}