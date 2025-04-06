
'use client';
import NavbarAdmin from '@/components/adminnavbar';
import ServiceImageUpload from '@/components/ServiceImageUpload';
export default function LetterheadDesign() {
  return (
    <div className="bg-gray-100 min-h-screen">
     <NavbarAdmin/> 
     <div className="container mx-auto py-8">
             <h1 className="text-3xl text-gray-600 font-bold mb-8">Letterhead Design Management</h1>
             <ServiceImageUpload serviceFolder="letterhead" title="Letterhead Design" />
      </div>
    </div>
  );
}

