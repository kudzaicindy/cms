import React, { useState } from 'react';

interface Tag {
  id: number;
  name: string;
}

interface Note {
  id: number;
  content: string;
  date: string;
}

interface Project {
  id: number;
  name: string;
  status: string;
}

interface Client {
  id: number;
  image: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  tags: Tag[];
  notes: Note[];
  projects: Project[];
}

interface ClientDetailsProps {
  client: Client;
  onSave: (updatedClient: Client) => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ client, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedClient, setEditedClient] = useState<Client>(client);
  const [newNote, setNewNote] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setEditedClient({ ...editedClient, image: event.target.result.toString() });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    onSave(editedClient);
    setEditMode(false);
  };

  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        content: newNote,
        date: new Date().toISOString()
      };
      setEditedClient({
        ...editedClient,
        notes: [...editedClient.notes, note]
      });
      setNewNote('');
    }
  };

  const addTag = () => {
    if (newTag.trim()) {
      const tag = {
        id: Date.now(),
        name: newTag
      };
      setEditedClient({
        ...editedClient,
        tags: [...editedClient.tags, tag]
      });
      setNewTag('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-6">
        {/* Image Section */}
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={editedClient.image || '/default-avatar.png'}
            alt={`${editedClient.name}'s profile`}
            className="w-full h-full rounded-full object-cover"
          />
          {editMode && (
            <input
              type="file"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
          )}
        </div>

        {/* Basic Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {editMode ? (
              <input
                type="text"
                value={editedClient.name}
                onChange={(e) => setEditedClient({ ...editedClient, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            ) : (
              <p className="mt-1 text-lg font-semibold">{editedClient.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {editMode ? (
              <input
                type="email"
                value={editedClient.email}
                onChange={(e) => setEditedClient({ ...editedClient, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            ) : (
              <p className="mt-1">{editedClient.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            {editMode ? (
              <input
                type="tel"
                value={editedClient.phone}
                onChange={(e) => setEditedClient({ ...editedClient, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            ) : (
              <p className="mt-1">{editedClient.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            {editMode ? (
              <textarea
                value={editedClient.description}
                onChange={(e) => setEditedClient({ ...editedClient, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                rows={3}
              />
            ) : (
              <p className="mt-1">{editedClient.description}</p>
            )}
          </div>
        </div>

        {/* Tags Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {editedClient.tags.map(tag => (
              <span key={tag.id} className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                {tag.name}
                {editMode && (
                  <button
                    onClick={() => setEditedClient({
                      ...editedClient,
                      tags: editedClient.tags.filter(t => t.id !== tag.id)
                    })}
                    className="ml-2 text-xs"
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
            {editMode && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add tag"
                  className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
                <button
                  onClick={addTag}
                  className="bg-primary text-white px-3 py-1 rounded-md"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Notes Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
          <div className="space-y-2">
            {editedClient.notes.map(note => (
              <div key={note.id} className="bg-gray-50 p-3 rounded-md">
                <p>{note.content}</p>
                <p className="text-sm text-gray-500">{new Date(note.date).toLocaleDateString()}</p>
              </div>
            ))}
            {editMode && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add note"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
                <button
                  onClick={addNote}
                  className="bg-primary text-white px-3 py-1 rounded-md"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Projects</label>
          <div className="space-y-2">
            {editedClient.projects.map(project => (
              <div key={project.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                <span>{project.name}</span>
                <span className="text-sm text-gray-500">{project.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          {editMode ? (
            <>
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
