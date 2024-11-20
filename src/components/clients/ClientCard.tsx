import React from 'react';
import { Mail, Phone, Tag, Trash2, Edit2 } from 'lucide-react';

interface ClientCardProps {
  client: {
    id: number;
    name: string;
    email: string;
    phone: string;
    description: string;
    tags: string;
    notes: string;
  };
  onEdit: (client: any) => void;
  onDelete: (id: number) => void;
}

const ClientCard: React.FC<ClientCardProps> = ({ client, onEdit, onDelete }) => {
  const initials = client.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  const tagList = client.tags.split(',').map(tag => tag.trim());

  return (
    <div className="bg-dark-secondary rounded-xl shadow-sm border border-muted/20 p-6 hover:shadow-md transition-shadow text-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          {/* Profile Picture/Initials */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
            {initials}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">{client.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-muted mt-1">
              <Mail className="w-4 h-4" />
              <span>{client.email}</span>
            </div>
            {client.phone && (
              <div className="flex items-center space-x-2 text-sm text-muted mt-1">
                <Phone className="w-4 h-4" />
                <span>{client.phone}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(client)}
            className="p-2 text-muted hover:text-primary hover:bg-dark-primary rounded-lg transition-colors"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(client.id)}
            className="p-2 text-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Description */}
      {client.description && (
        <p className="mt-4 text-muted text-sm line-clamp-2">
          {client.description}
        </p>
      )}

      {/* Tags */}
      {tagList.length > 0 && tagList[0] !== '' && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tagList.map((tag, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              <Tag className="w-3 h-3" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      )}

      {/* Notes Preview */}
      {client.notes && (
        <div className="mt-4 p-3 bg-dark-primary rounded-lg">
          <p className="text-xs text-muted line-clamp-2">
            {client.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClientCard;
