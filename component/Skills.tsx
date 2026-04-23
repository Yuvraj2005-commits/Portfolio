const skills = [
  "Next.js", 
  "React",
  "Node.js",
  "Express",
  "MATLAB",
  "Python",
  "AI/ML",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-5">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-800 px-4 py-2 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}