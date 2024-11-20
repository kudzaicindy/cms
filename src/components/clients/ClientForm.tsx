import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ClientFormProps {
  onSubmit: (client: any) => void;
  initialData?: any;
  onClose: () => void;
  isOpen: boolean;
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit, initialData, onClose, isOpen }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [tags, setTags] = useState(initialData?.tags || '');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone, description, tags });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-dark-primary/80 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-secondary rounded-2xl w-full max-w-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted/20">
          <h2 className="text-2xl font-bold text-primary">
            {initialData ? 'Edit Client' : 'Add New Client'}
          </h2>
          <button 
            onClick={onClose}
            className="text-muted hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-2">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
              rows={4}
              placeholder="Enter client description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-2">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
              placeholder="e.g., High Priority, Tech Industry"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between p-6 border-t border-muted/20">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-muted/20 text-white hover:bg-dark-primary"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-secondary"
            >
              {initialData ? 'Update Client' : 'Add Client'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
