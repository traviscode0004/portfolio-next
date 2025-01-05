'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'React.js', color: 'reactColor' },
    { name: 'Next.js', color: 'jColor' },
    { name: 'AWS (Amplify, Lambda)', color: 'dbColor' },
    { name: 'Typescript', color: 'qlColor' },
    { name: 'GraphQL', color: 'aiColor' },
    { name: 'Tailwind CSS', color: 'reactColor' },
    { name: 'JavaScript', color: 'jColor' },
    { name: 'Node.js', color: 'dbColor' },
    { name: 'PostgreSQL', color: 'qlColor' },
    { name: 'Bootstrap', color: 'aiColor' },
    { name: 'AppSync', color: 'reactColor' },
    { name: 'Twilio', color: 'jColor' },
    { name: 'Python', color: 'dbColor' },
    { name: 'Responsive Design', color: 'qlColor' },
    { name: 'REST APIs', color: 'aiColor' },
    { name: 'Kendo React', color: 'reactColor' },
  ];

  return (
    <section id="skills" className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center text-black text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <span className={`${skill.color}`}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
