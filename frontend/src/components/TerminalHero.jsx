import { useState, useEffect } from 'react';

export default function TerminalHero({ profile }) {
  const [typedText, setTypedText] = useState('');
  const fullText = profile.name;
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="animate-fade-in relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'scan 20s linear infinite'
        }}></div>
      </div>
      
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden relative animate-glow">
        {/* Terminal Header */}
        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs text-slate-400">bash — 80x24</span>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-terminal-green">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">whoami</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mt-2">
              <span className="bg-gradient-to-r from-terminal-green via-emerald-400 to-terminal-green bg-clip-text text-transparent animate-gradient">
                {typedText}
              </span>
              <span className="animate-pulse">_</span>
            </h1>
            <p className="text-xl bg-gradient-to-r from-aws-orange to-yellow-500 bg-clip-text text-transparent font-bold">{profile.role}</p>
            {profile.tagline && (
              <p className="text-sm text-slate-400 mt-1 font-mono">{profile.tagline}</p>
            )}
          </div>

          <div>
            <span className="text-terminal-green">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">cat summary.txt</span>
            <p className="mt-2 text-slate-300 leading-relaxed border-l-2 border-slate-600 pl-4">
              "{profile.summary}"
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-2 bg-slate-800 hover:bg-aws-orange hover:text-black border border-slate-600 hover:border-aws-orange px-3 py-2 rounded text-sm transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-aws-orange/50"
            >
              <span className="text-lg">✉</span> Email
            </a>
            <a 
              href={`https://${profile.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-k8s-blue hover:text-black border border-slate-600 hover:border-k8s-blue px-3 py-2 rounded text-sm transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-k8s-blue/50"
            >
              <span className="text-lg">💼</span> LinkedIn
            </a>
            <a 
              href={`https://${profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-terminal-green hover:text-black border border-slate-600 hover:border-terminal-green px-3 py-2 rounded text-sm transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/50"
            >
              <span className="text-lg">🔗</span> GitHub
            </a>
          </div>

          <div>
             <span className="text-terminal-green">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}