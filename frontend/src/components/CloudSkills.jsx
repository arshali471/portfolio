export default function CloudSkills({ skills }) {
  return (
    <section className="animate-slide-in-left">
      <h2 className="text-2xl font-bold mb-8 text-slate-100 flex items-center gap-2">
        <span className="text-k8s-blue animate-pulse">📋</span>
        <span className="text-k8s-blue">YAML</span> Configuration
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category} 
            className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-k8s-blue p-5 rounded font-mono text-sm transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-k8s-blue/20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold mb-2">{category}:</p>
            <ul className="pl-4 border-l-2 border-slate-700 hover:border-terminal-green transition-colors space-y-1">
              {items.map((skill, i) => (
                <li key={i} className="text-slate-300 hover:text-terminal-green hover:translate-x-1 transition-all cursor-default">
                  <span className="text-terminal-green">▸</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}