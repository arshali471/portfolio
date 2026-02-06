export default function Education({ education }) {
  return (
    <section className="animate-slide-in-right">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span className="text-k8s-blue text-3xl animate-float">🎓</span> 
        <span className="bg-gradient-to-r from-k8s-blue to-blue-400 bg-clip-text text-transparent">Education</span>
      </h2>
      
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-lg p-6 hover:border-k8s-blue hover:shadow-2xl hover:shadow-k8s-blue/30 transition-all transform hover:scale-[1.02] relative overflow-hidden group">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              {education.degree}
            </h3>
            <p className="text-slate-400">{education.institution}</p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded border border-slate-700 inline-block">
              {education.period}
            </span>
            <p className="bg-gradient-to-r from-terminal-green to-emerald-400 bg-clip-text text-transparent font-bold mt-2 text-lg">CGPA: {education.cgpa}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
