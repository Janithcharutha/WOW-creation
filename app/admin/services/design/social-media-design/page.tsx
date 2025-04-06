
'use client';
import NavbarAdmin from '@/components/adminnavbar';
import ServiceImageUpload from '@/components/ServiceImageUpload';
export default function SocialMediaDesign() {
  return (
    <div className="bg-gray-100 min-h-screen">
     <NavbarAdmin/> 
     <div className="container mx-auto py-8">
             <h1 className="text-3xl text-gray-600 font-bold mb-8">Social-Media Design Management</h1>
             <ServiceImageUpload serviceFolder="socialmedia" title="Socialmedia Design" />
      </div>
    </div>
  );
}

