import NavbarAdmin from '@/components/adminnavbar';
import ServiceImageUpload from '@/components/ServiceImageUpload';

export default function AdminCatalogPrint() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-gray-600 font-bold mb-8">Catalog Print Management</h1>
        <ServiceImageUpload serviceFolder="catalogprint" title="Catalog Print" />
      </div>
    </div>
  );
}