export default function Projects({ projects }) {
  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="text-terminal-green text-3xl animate-float">📦</span> 
        <span className="bg-gradient-to-r from-terminal-green to-emerald-400 bg-clip-text text-transparent">Featured Projects</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-terminal-green hover:shadow-2xl hover:shadow-terminal-green/30 transition-all group transform hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-float">{project.icon}</div>
            
            <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-terminal-green transition-colors">
              {project.name}
            </h3>
            
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700 hover:border-terminal-green hover:bg-slate-700 transition-all cursor-default transform hover:scale-110"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="pt-4 border-t border-slate-700 group-hover:border-terminal-green transition-colors">
              <p className="text-sm font-semibold bg-gradient-to-r from-aws-orange to-yellow-500 bg-clip-text text-transparent">
                💥 Impact: {project.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
