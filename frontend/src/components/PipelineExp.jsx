export default function PipelineExp({ experience }) {
  return (
    <section className="animate-slide-in-right">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-aws-orange animate-pulse">⚡</span>
        <span className="bg-gradient-to-r from-aws-orange to-yellow-500 bg-clip-text text-transparent">./experience.sh</span>
        <span className="text-xs font-normal text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full bg-slate-800 animate-pulse-border">CD Pipeline View</span>
      </h2>
      
      <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12 before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-terminal-green before:via-transparent before:to-transparent before:animate-pulse">
        {experience.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-12 animate-fade-in" style={{ animationDelay: `${job.id * 0.2}s` }}>
            {/* Pipeline Node */}
            <div className="absolute -left-[9px] top-0 bg-slate-900 border-2 border-terminal-green w-4 h-4 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-terminal-green rounded-full animate-ping opacity-75"></div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded border border-slate-700 hover:border-terminal-green transition-all group transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-terminal-green/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-terminal-green transition-colors">
                    {job.company}
                  </h3>
                  <p className="text-aws-orange text-sm">{job.role}</p>
                </div>
                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded mt-2 md:mt-0 w-fit">
                  {job.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-terminal-green mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}