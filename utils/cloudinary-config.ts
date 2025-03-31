import { CldImage } from 'next-cloudinary';

export const cloudinaryConfig = {
  cloudName: 'dr5ts47zf',
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET
};