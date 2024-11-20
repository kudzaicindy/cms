import { Calendar, Users } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  status: 'In Progress' | 'Completed' | 'On Hold';
  teamMembers: number;
  deadline: string;
}

const ProjectList = () => {
  // Dummy data - replace with actual data later
  const projects: Project[] = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern design",
      progress: 75,
      status: "In Progress",
      teamMembers: 4,
      deadline: "2024-03-30"
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "New mobile application for client management",
      progress: 30,
      status: "In Progress",
      teamMembers: 6,
      deadline: "2024-04-15"
    },
    // Add more dummy projects as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-primary/10 text-primary';
      case 'Completed':
        return 'bg-green-500/10 text-green-500';
      case 'On Hold':
        return 'bg-yellow-500/10 text-yellow-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <button 
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
        >
          New Project
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-dark-secondary rounded-xl p-6 border border-muted/10 hover:border-primary/20 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-white/60 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/60">Progress</span>
                  <span className="text-primary">{project.progress}%</span>
                </div>
                <div className="h-2 bg-dark-primary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex items-center justify-between text-sm pt-4 border-t border-muted/10">
                <div className="flex items-center text-white/60">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{project.teamMembers} members</span>
                </div>
                <div className="flex items-center text-white/60">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(project.deadline).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList; 