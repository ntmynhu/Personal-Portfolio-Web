import { motion } from "motion/react";
import {
  Code2,
  Gamepad2,
  Palette,
  Zap,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Game Programming",
      description:
        "Experienced with Unity (C#) and Godot (GDScript)",
    },
    {
      icon: Gamepad2,
      title: "Game Design",
      description:
        "Gameplay mechanics design for personal game projects",
    },
    {
      icon: Zap,
      title: "Optimization",
      description:
        "Basic knowledge of game performance optimization and efficient code practices",
    },
    {
      icon: Palette,
      title: "2D/3D Content",
      description:
        "Basic Blender and 2D assets for simple game projects",
    },
  ];

  const education = [
    {
      degree: "Software Engineering",
      school: "University of Information Technology",
      year: "2023 - Present",
      description:
        "Specialized in Software Development and Game Development",
    },
  ];

  const workExperience = [
    {
      position: "Unity Developer (Remote)",
      company: "Golden Sea Studio",
      year: "Sep 2024 - Jun 2025",
      description:
        "Developed 2D/3D Unity games for Android and WebGL platforms. Implemented gameplay features and integrated backend APIs.",
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
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
            I'm a game programmer passionate about creating fun
            and engaging gameplay experiences. I mainly develop
            games with Unity and enjoy turning ideas into
            polished playable games.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1d23] p-6 rounded-xl border-2 border-gray-800 hover:border-[#ff6694] transition-colors"
            >
              <div className="bg-[#ff6694]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-7 h-7 text-[#ff6694]" />
              </div>
              <h3 className="text-white text-xl mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6694]/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#ff6694]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Work Experience
            </h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-[#1a1d23] p-6 rounded-xl border-2 border-gray-800 hover:border-[#ff6694] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-1">
                      {work.position}
                    </h4>
                    <p className="text-[#ff6694]">
                      {work.company}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {work.year}
                  </span>
                </div>
                <p className="text-gray-400">
                  {work.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#ff6694]/10 w-12 h-12 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#ff6694]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Education
            </h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-[#1a1d23] p-6 rounded-xl border-2 border-gray-800 hover:border-[#ff6694] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-[#ff6694]">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}