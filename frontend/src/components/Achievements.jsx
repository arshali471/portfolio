export default function Achievements({ achievements }) {
  return (
    <section className="animate-slide-in-left">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="text-yellow-400 text-3xl animate-float">🏆</span> 
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Key Achievements</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-700 rounded-lg p-6 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/30 transition-all transform hover:scale-105 animate-fade-in relative overflow-hidden group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 relative z-10">
              {achievement.title}
            </h3>
            <p className="text-sm bg-gradient-to-r from-aws-orange to-yellow-500 bg-clip-text text-transparent font-semibold mb-3 relative z-10">{achievement.organization}</p>
            <p className="text-slate-400 text-sm relative z-10">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
