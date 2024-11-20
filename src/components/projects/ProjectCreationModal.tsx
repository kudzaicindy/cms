import { useState } from 'react';
import { X, Plus } from 'lucide-react';
// Removed incorrect supabase import since path doesn't exist
interface ProjectCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectCreationModal: React.FC<ProjectCreationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTeamMembers, setSelectedTeamMembers] = useState<number[]>([]);

  const dummyTeamMembers = [
    { id: 1, name: 'John Doe', role: 'Developer', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Jane Smith', role: 'Designer', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Mike Johnson', role: 'Project Manager', avatar: '/api/placeholder/32/32' },
  ];

  if (!isOpen) return null;

  const handleCreateProject = () => {
    // Add logic to save the project
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-dark-primary/80 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-secondary rounded-2xl w-full max-w-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted/20">
          <h2 className="text-2xl font-bold text-primary">Create New Project</h2>
          <button onClick={onClose} className="text-muted hover:text-primary">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= item ? 'bg-primary text-white' : 'bg-dark-primary text-muted'
                }`}>
                  {item}
                </div>
                {item < 3 && (
                  <div className={`w-24 h-1 ${
                    step > item ? 'bg-primary' : 'bg-dark-primary'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
                  placeholder="Enter project name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
                  rows={4}
                  placeholder="Enter project description"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted mb-4">
                  Team Members
                </label>
                <div className="space-y-3">
                  {dummyTeamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 border border-muted/20 rounded-lg hover:bg-dark-primary/50"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-white">{member.name}</p>
                          <p className="text-sm text-muted">{member.role}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (selectedTeamMembers.includes(member.id)) {
                            setSelectedTeamMembers((prev) => prev.filter(id => id !== member.id));
                          } else {
                            setSelectedTeamMembers((prev) => [...prev, member.id]);
                          }
                        }}
                        className={`p-2 rounded-lg ${
                          selectedTeamMembers.includes(member.id)
                            ? 'bg-primary text-white'
                            : 'bg-dark-primary text-muted'
                        }`}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Project Timeline
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted mb-1">Start Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1">End Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Project Tags
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-muted"
                  placeholder="Add tags separated by commas"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Priority Level
                </label>
                <select className="w-full px-4 py-3 bg-dark-primary border border-muted/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between p-6 border-t border-muted/20">
          <button
            onClick={() => step > 1 && setStep(step - 1)}
            className={`px-6 py-2 rounded-lg border border-muted/20 text-white hover:bg-dark-primary ${
              step === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Back
          </button>
          <button
            onClick={() => step < 3 ? setStep(step + 1) : handleCreateProject()}
            className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-secondary"
          >
            {step === 3 ? 'Create Project' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreationModal;