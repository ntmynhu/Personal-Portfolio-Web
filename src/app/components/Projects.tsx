import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { ProjectModal, ProjectData } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "Blossom Corner",
      description:
        "A 2D simulated gardening game where players plant, nurture, and sell flowers to earn money for expanding their garden.",
      fullDescription:
        "Blossom Corner is a farming simulation game where players can experience the joy of growing and caring for beautiful flowers. Starting with a small garden, you grow flowers, take care of them and sell them at your little flower shop.",
      image:
        "https://github.com/ntmynhu/Personal-Portfolio-Web/blob/main/src/assets/BlossomCorner/Homescene.jpg?raw=true",
      screenshots: [
        "https://github.com/ntmynhu/Personal-Portfolio-Web/blob/main/src/assets/BlossomCorner/Homescene.jpg?raw=true",
        "https://github.com/ntmynhu/Personal-Portfolio-Web/blob/main/src/assets/BlossomCorner/Homescene.jpg?raw=true",
        "https://github.com/ntmynhu/Personal-Portfolio-Web/blob/main/src/assets/BlossomCorner/Homescene.jpg?raw=true",
        "https://github.com/ntmynhu/Personal-Portfolio-Web/blob/main/src/assets/BlossomCorner/Homescene.jpg?raw=true",
      ],
      videoUrl:
        "https://www.youtube.com/embed/KAwdz8wRhlo?si=pvHtusr6-YW9I0FG",
      tech: [
        "Unity",
        "C#",
        "Firebase",
        "Unity Ads",
        "In-App Purchases",
      ],
      features: [
        "200+ unique puzzle levels",
        "Daily challenges and rewards",
        "Social features and leaderboards",
        "10+ power-ups and boosters",
        "Seasonal events and updates",
        "Offline playability",
      ],
      role: "Solo Developer",
      duration: "6 months",
      platform: "iOS, Android",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "VR Adventure Experience",
      description:
        "Immersive VR experience with intuitive controls and stunning environments",
      fullDescription:
        "Step into a breathtaking virtual reality adventure that transports players to fantastical worlds. Built from the ground up for VR, this experience features intuitive hand-tracking controls, physics-based interactions, and stunning environments that fully utilize the immersive capabilities of modern VR headsets.",
      image:
        "https://images.unsplash.com/photo-1762742228148-f38c34ea7f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzMzMzkwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1758874572979-bd0f18d34565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdhbWluZ3xlbnwxfHx8fDE3NzMzOTAzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1762742228148-f38c34ea7f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzMzMzkwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb258ZW58MXx8fHwxNzczNDA5MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nJTIwc29mdHdhcmV8ZW58MXx8fHwxNzczMzMwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tech: [
        "Unreal Engine",
        "C++",
        "Oculus SDK",
        "XR Interaction Toolkit",
      ],
      features: [
        "Full hand-tracking support",
        "Physics-based puzzle solving",
        "3+ hours of gameplay",
        "Stunning photorealistic environments",
        "Comfort settings for all VR users",
        "Spatial audio implementation",
      ],
      role: "VR Developer",
      duration: "9 months",
      platform: "Meta Quest, PCVR",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Multiplayer Battle Arena",
      description:
        "Fast-paced multiplayer game with competitive ranking system",
      fullDescription:
        "Enter the arena in this intense 5v5 multiplayer battle game. Choose from a diverse roster of heroes, each with unique abilities and playstyles. Climb the competitive ladder through strategic teamwork, precise mechanics, and smart decision-making. Features a robust matchmaking system and regular balance updates.",
      image:
        "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nJTIwc29mdHdhcmV8ZW58MXx8fHwxNzczMzMwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nJTIwc29mdHdhcmV8ZW58MXx8fHwxNzczMzMwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nJTIwc29mdHdhcmV8ZW58MXx8fHwxNzczMzMwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1642678730255-40a9e1847fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3NzM0MDk4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758043323593-d4511bcf82a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMHBsYXRmb3JtZXJ8ZW58MXx8fHwxNzczNDA5ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tech: ["Unity", "Mirror", "PlayFab", "Photon Voice"],
      features: [
        "5v5 competitive matches",
        "15+ unique heroes and champions",
        "Ranked matchmaking system",
        "Voice chat integration",
        "Seasonal battle passes",
        "Spectator mode and replays",
      ],
      role: "Network Programmer",
      duration: "15 months",
      platform: "PC",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "2D Platformer",
      description:
        "Retro-style platformer with pixel art and challenging level design",
      fullDescription:
        "A love letter to classic 2D platformers, featuring tight controls, challenging level design, and gorgeous pixel art. Navigate through beautifully crafted levels filled with secrets, collectibles, and creative boss battles. The game pays homage to retro classics while introducing modern quality-of-life features.",
      image:
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc3MzMxNjgzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1758043323593-d4511bcf82a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMHBsYXRmb3JtZXJ8ZW58MXx8fHwxNzczNDA5ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc3MzMxNjgzNHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW58ZW58MXx8fHwxNzczMzE3NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1640187128454-1d7c462ede26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczNDA5MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tech: ["Godot", "GDScript", "Aseprite"],
      features: [
        "40+ handcrafted levels",
        "Pixel-perfect collision detection",
        "Secret areas and collectibles",
        "6 unique boss battles",
        "Speedrun timer and leaderboards",
        "Unlockable character skins",
      ],
      role: "Game Designer & Developer",
      duration: "8 months",
      platform: "PC, Nintendo Switch",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Simulation Game",
      description:
        "Complex simulation with AI-driven NPCs and dynamic economy system",
      fullDescription:
        "Build and manage your own thriving city in this deep simulation game. Watch as AI-driven citizens live their lives, work jobs, and interact with each other in a living, breathing world. Manage resources, build infrastructure, and respond to dynamic events that challenge your strategic thinking.",
      image:
        "https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzQwOTIxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      screenshots: [
        "https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzQwOTIxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW58ZW58MXx8fHwxNzczMzE3NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nJTIwc29mdHdhcmV8ZW58MXx8fHwxNzczMzMwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1762742228148-f38c34ea7f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzMzMzkwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tech: ["Unity", "C#", "ML-Agents", "DOTween"],
      features: [
        "AI-driven NPC behavior systems",
        "Dynamic economy simulation",
        "Resource management and optimization",
        "Random events and disasters",
        "Modding support",
        "Endless gameplay possibilities",
      ],
      role: "Gameplay Programmer",
      duration: "18 months",
      platform: "PC",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="min-h-screen bg-[#1a1d23] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#ff6694] mb-6">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Here are some games and interactive projects I've
            worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#14171c] rounded-xl overflow-hidden border-2 border-gray-800 hover:border-[#ff6694] transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14171c] to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-[#ff6694]/0 group-hover:bg-[#ff6694]/10 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                    View Details →
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#ff6694]/10 text-[#ff6694] text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.links.demo, "_blank");
                    }}
                    className="flex items-center gap-2 text-[#ff6694] hover:text-[#ff6694]/80 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        project.links.github,
                        "_blank",
                      );
                    }}
                    className="flex items-center gap-2 text-[#ff6694] hover:text-[#ff6694]/80 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}