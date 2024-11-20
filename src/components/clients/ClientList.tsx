import React, { useState } from 'react';
import ClientCard from './ClientCard';
import ClientForm from './ClientForm';
import { Plus } from 'lucide-react';

interface ClientListProps {
  clients: any[];
  onEdit: (client: any) => void;
  onDelete: (clientId: number) => void;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onEdit, onDelete }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddClient = (clientData: any) => {
    // Handle adding the client here
    onEdit(clientData);
    setIsFormOpen(false); // Close form after submission
  };

  return (
    <div className="space-y-6 min-h-screen bg-gray-900 text-gray-300">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Clients</h1>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Client
        </button>
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Client Form Modal */}
      <ClientForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddClient}
      />
    </div>
  );
};

export default ClientList;
