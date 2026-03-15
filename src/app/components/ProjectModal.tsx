import { motion } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  screenshots: string[];
  videoUrl?: string;
  tech: string[];
  features: string[];
  role: string;
  duration: string;
  platform: string;
  links: {
    demo: string;
    github: string;
  };
}

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1a1d23] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#ff6694]"
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#1a1d23] border-b border-gray-800 p-6 flex justify-between items-start z-10">
          <div>
            <h2 className="text-3xl text-white mb-2">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#ff6694] transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Video Section */}
          {project.videoUrl && (
            <div className="space-y-3">
              <h3 className="text-xl text-[#ff6694]">Gameplay Video</h3>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${project.title} gameplay`}
                ></iframe>
              </div>
            </div>
          )}

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#14171c] p-4 rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm mb-1">Role</p>
              <p className="text-white">{project.role}</p>
            </div>
            <div className="bg-[#14171c] p-4 rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm mb-1">Duration</p>
              <p className="text-white">{project.duration}</p>
            </div>
            <div className="bg-[#14171c] p-4 rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm mb-1">Platform</p>
              <p className="text-white">{project.platform}</p>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h3 className="text-xl text-[#ff6694]">About The Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-xl text-[#ff6694]">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-[#ff6694] mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-xl text-[#ff6694]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#ff6694]/10 text-[#ff6694] px-4 py-2 rounded-full border border-[#ff6694]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots Gallery */}
          <div className="space-y-3">
            <h3 className="text-xl text-[#ff6694]">Screenshots</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden border-2 border-gray-800 hover:border-[#ff6694] transition-colors"
                >
                  <ImageWithFallback
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.links.demo}
              className="flex-1 bg-[#ff6694] hover:bg-[#ff8ab0] text-white px-6 py-3 rounded-lg transition-colors text-center"
            >
              Play Demo
            </a>
            <a
              href={project.links.github}
              className="flex-1 bg-[#14171c] hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700 text-center"
            >
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}