import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Game Engines",
      skills: ["Unity", "Unreal Engine", "Godot"],
    },
    {
      category: "Programming",
      skills: ["C#", "C++", "GDScript", "Python", "JavaScript"],
    },
    {
      category: "3D/2D Tools",
      skills: ["Blender", "Maya", "Photoshop", "Aseprite", "Substance Painter"],
    },
    {
      category: "Other",
      skills: ["Git", "Shader Programming", "Multiplayer Networking", "AI/ML", "Performance Optimization"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#14171c] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#ff6694] mb-6">
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Technical proficiencies and tools I work with to bring games to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-[#1a1d23] p-8 rounded-xl border-2 border-gray-800"
            >
              <h3 className="text-2xl text-white mb-6 font-bold">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#ff6694]/10 text-[#ff6694] px-4 py-2 rounded-lg border border-[#ff6694]/30 hover:bg-[#ff6694]/20 hover:border-[#ff6694] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}