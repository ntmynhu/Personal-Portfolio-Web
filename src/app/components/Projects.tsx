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
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/BlossomCorner/Frame%202%20(2).png?raw=true",
      screenshots: [
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/BlossomCorner/1.jpg?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/BlossomCorner/3.jpg?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/BlossomCorner/4.jpg?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/BlossomCorner/5.jpg?raw=true",
      ],
      videoUrl:
        "https://www.youtube.com/embed/KAwdz8wRhlo?si=pvHtusr6-YW9I0FG",
      tech: [
        "Unity",
        "C#"
      ],
      features: [
        "Plant, grow, and harvest different types of flowers",
        "Care for plants through watering and fertilizing",
        "Run a small flower shop to sell your harvested flowers",
        "Customers visit the shop with different orders",
        "Earn coins to expand your garden and unlock new flowers",
      ],
      role: "Solo Developer",
      duration: "3 months",
      platform: "Android, WebGL",
      links: {
        demo: "https://ntmynhu.itch.io/blossom-corner",
        github: "https://github.com/ntmynhu/Blossom-Corner",
      },
    },
    {
      title: "Foxy Adventure: The Truth Pearl",
      description:
        "A metroidvania platformer where Foxy explores the world, fights monsters, and uncovers the truth about his homeland.",
      fullDescription:
        "“Foxy Adventure: The Truth Pearl” is an action-adventure platformer where players guide Foxy the fox through a world slowly turning to stone after a mysterious tremor, battling monsters and searching for an ancient pearl to restore life to his homeland.",
      image:
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/FoxyAdventure/Frame%203%20(4).png?raw=true",
      screenshots: [
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/FoxyAdventure/Map3.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/FoxyAdventure/Map4.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/FoxyAdventure/BossFight2.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/FoxyAdventure/BossFight1.png?raw=true"
      ],
      videoUrl: "https://www.youtube.com/embed/LWtF0wVYS-c?si=vh0c23NOqsdwfQ9B",
      tech: [
        "Godot",
        "GDScript"
      ],
      features: [
        "Metroidvania exploration across 7 interconnected maps",
        "Elemental combat system: Water, Fire, Nature, Lightning, and Physical",
        "4 weapon types with upgradeable combat abilities",
        "Accessory system and consumable items for strategic gameplay",
        "9 enemy types, 3 boss battles, and several mini-boss encounters",
        "Online co-op gameplay supported by a dedicated server",
        "Online ranking system to compete with other players"
      ],
      role: "Gameplay Programmer",
      duration: "3 months",
      platform: "WebGL",
      links: {
        demo: "https://gnutt.itch.io/group8-foxyaventure-the-truth-pearl",
        github: "https://github.com/tienminhduong/FoxyAdventure",
      },
    },
    {
      title: "DeMimics",
      description:
        "A tactical puzzle game where you play as mischievous mimics trying to stop an explorer from reaching the treasure hidden in a ruined sanctuary.",
      fullDescription:
        "DeMimics is a puzzle game built around one twist: You are the enemy. Created in 1 week for Ham Jam #1, the game lets you control mischievous mimics living in a ruined forest sanctuary as you block, trap, and touch the explorer before he reaches the treasure. From his point of view you are monsters — but maybe the story isn’t that simple.",
      image:
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/DeMimics/Screenshot%202026-02-13%20194145.png?raw=true",
      screenshots: [
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/DeMimics/Mainmenu.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/DeMimics/Level2.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/DeMimics/Level3.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/DeMimics/Wingame.png?raw=true",
      ],
      videoUrl: "https://www.youtube.com/embed/GlLQEWGQ5rI?si=-SSRCz8AjbbZTZUk",
      tech: ["Unity", "C#"],
      features: [
        "8 puzzle levels with increasing difficulty",
        "Enemy-side gameplay – Play as the mischievous mimics",
        "Shared control system – All mimics move with a single input",
        "AI pathfinding – The explorer finds the shortest route to the pit",
        "Strategic blocking puzzles – Plan moves to intercept and stop him",
      ],
      role: "Artist, Programmer",
      duration: "1 week",
      platform: "WebGL",
      links: {
        demo: "https://ntmynhu.itch.io/demimics",
        github: "https://github.com/tuananhnguyen2004/ham-jam-1",
      },
    },
    {
      title: "CoTam",
      description:
        "A cooking simulation game where players run a small Vietnamese cơm tấm stall",
      fullDescription:
        "CoTam is a cooking simulation game where players manage a small cơm tấm stall in Saigon. Players take customer orders, prepare dishes with the correct ingredients, and grill meat at the right time while working under time pressure. Each in-game day introduces more customers and challenges, testing the player’s speed, accuracy, and kitchen management skills.",
      image:
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/CoTam/Frame%203%20(5).png?raw=true",
      screenshots: [
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/CoTam/MainMenu.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/CoTam/CoTam.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/CoTam/CustomerOrder1.png?raw=true",
        "https://github.com/ntmynhu/Mynhu-Portfolio/blob/main/src/assets/CoTam/Kitchen2.png?raw=true",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tech: ["Unity", "C#"],
      features: [
        "21+ levels with increasing difficulty",
        "Unlockable ingredients as the stall grows",
        "Fast-paced order preparation gameplay",
        "Interactive grilling and cooking mechanics",
        "Rewards for speed and order accuracy"
      ],
      role: "Game Designer & Developer",
      duration: "8 months",
      platform: "PC, Nintendo Switch",
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
                    Game
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