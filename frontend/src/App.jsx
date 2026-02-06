import React, { useEffect, useState } from 'react';
import TerminalHero from './components/TerminalHero';
import PipelineExp from './components/PipelineExp';
import CloudSkills from './components/CloudSkills';
import CertBadges from './components/CertBadges';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("CONNECTING...");

  useEffect(() => {
    // Fetch Portfolio Data
    fetch('http://localhost:8000/api/portfolio')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
      
    // Fetch System Status
    fetch('http://localhost:8000/api/status')
      .then(res => res.json())
      .then(s => setStatus(s.status))
      .catch(() => setStatus("OFFLINE"));
  }, []);

  if (!data) return <div className="min-h-screen bg-devops-bg text-terminal-green flex items-center justify-center font-mono">Initializing System...</div>;

  return (
    <div className="min-h-screen bg-devops-bg text-slate-300 font-mono selection:bg-terminal-green selection:text-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Top Bar */}
      <div className="border-b border-slate-700 p-2 flex justify-between text-xs text-slate-500 bg-black/20 backdrop-blur-sm relative z-10">
        <span>root@arshad-portfolio:~</span>
        <span className={`flex items-center gap-2 ${status === 'OPERATIONAL' ? 'text-green-500' : 'text-red-500'}`}>
          <span className={status === 'OPERATIONAL' ? 'animate-pulse' : ''}>●</span> SYSTEM STATUS: <span className="font-bold">{status}</span>
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <TerminalHero profile={data.profile} />
        <CloudSkills skills={data.skills} />
        <PipelineExp experience={data.experience} />
        {data.projects && <Projects projects={data.projects} />}
        <CertBadges certs={data.certifications} />
        {data.achievements && <Achievements achievements={data.achievements} />}
        {data.education && <Education education={data.education} />}
        
        <footer className="text-center text-slate-600 text-sm border-t border-slate-800 pt-8">
          <p>Deploying solutions from {data.profile.location}</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href={`mailto:${data.profile.contact.email}`} className="hover:text-aws-orange transition-colors">Email</a>
            <a href={`https://${data.profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-k8s-blue transition-colors">LinkedIn</a>
            <a href={`https://${data.profile.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors">GitHub</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;