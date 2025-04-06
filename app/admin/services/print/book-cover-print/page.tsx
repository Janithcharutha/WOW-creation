import NavbarAdmin from '@/components/adminnavbar';
import ServiceImageUpload from '@/components/ServiceImageUpload';

export default function AdminBookCoverPrint() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-gray-600 font-bold mb-8">Book-Cover Print Management</h1>
        <ServiceImageUpload serviceFolder="bookprint" title="Book Cover Print" />
      </div>
    </div>
  );
}