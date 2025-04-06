import NavbarAdmin from '@/components/adminnavbar';
import ServiceImageUpload from '@/components/ServiceImageUpload';

export default function AdminFlyerPrint() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-gray-600 font-bold mb-8">Flyer Print Management</h1>
        <ServiceImageUpload serviceFolder="flyerprint" title="Flyer Print" />
      </div>
    </div>
  );
}