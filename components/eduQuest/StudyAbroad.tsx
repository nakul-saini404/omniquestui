import { ArrowRight } from 'lucide-react';

const countries = [
  { name: 'USA', flag: '🇺🇸', desc: 'Harvard, MIT, Stanford, Yale and 800+ top universities', color: 'from-blue-500 to-blue-700' },
  { name: 'UK', flag: '🇬🇧', desc: 'Oxford, Cambridge, LSE, Imperial and Russell Group', color: 'from-red-500 to-red-700' },
  { name: 'Canada', flag: '🇨🇦', desc: 'University of Toronto, UBC, McGill and U15 group', color: 'from-red-600 to-red-800' },
  { name: 'Australia', flag: '🇦🇺', desc: 'Group of Eight (Go8) universities and beyond', color: 'from-yellow-500 to-yellow-700' },
  { name: 'Singapore', flag: '🇸🇬', desc: 'NUS, NTU — Asia\'s world-class institutions', color: 'from-rose-500 to-rose-700' },
  { name: 'Europe', flag: '🇪🇺', desc: 'Germany, Netherlands, France and 500+ universities', color: 'from-indigo-500 to-indigo-700' },
];

export default function StudyAbroad() {
  return (
    <section className="section-pad bg-gray-50 px-0 md:px-12 m-12" id="study-abroad">
      <div className="container-max">
        <div className="text-center m-12">
          <span className="inline-block bg-brand-blue-light text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Study Abroad
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Fly &amp; Study at Your Dream College
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Access 750+ universities across 6 continents — with EduQuest as your trusted partner
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${c.color} p-8 flex items-center justify-between`}>
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">STUDY IN</p>
                  <h3 className="text-2xl font-black text-white">{c.name}</h3>
                </div>
                <span className="text-6xl drop-shadow">{c.flag}</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{c.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
                >
                  Start Your Application <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}