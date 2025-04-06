import NavbarAdmin from '@/components/adminnavbar';
import ServiceImageUpload from '@/components/ServiceImageUpload';

export default function AdminLeafletPrint() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-gray-600 font-bold mb-8">Leaflet Print Management</h1>
        <ServiceImageUpload serviceFolder="leafletprint" title="Leaflet Print" />
      </div>
    </div>
  );
}