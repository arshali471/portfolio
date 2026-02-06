export default function CertBadges({ certs }) {
  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="text-yellow-500 text-3xl animate-pulse">⭐</span> 
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">Certified Artifacts</span>
      </h2>
      <div className="flex flex-wrap gap-4">
        {certs.map((cert, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border border-slate-700 hover:border-yellow-500 px-4 py-3 rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>🏆</div>
            <div>
              <p className="font-semibold text-slate-200 text-sm">{cert}</p>
              <p className="text-xs text-slate-500">Validated</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}