import {
  Briefcase,
  Code2,
  Github,
  Link,
  Linkedin,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      image: "assets/download (1).png",
      title: "Fasion E-Commerce Platform",
      description:
        " A full-featured e-commerce platform for fashion products with user authentication, product management.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "fasion-website-gray.vercel.app",
      repo: "https://github.com/iamselvaperumal/fasion-website",
    },
    {
      image: "assets/download.png",
      title: "Vishwas",
      description:
        "E-Commerce For Farmers and Customers also the Logistics Partners.",
      tech: ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"],
      demo: "vishwas-theta.vercel.app",
      repo: "https://github.com/iamselvaperumal/Vishwas-2025",
    },
    {
      title: "Portfolio Website",
      description:
        " highlight a professional's expertise, skills, and experience through a curated showcase of their best work and projects.",
      tech: ["TypeScript", "React", "TailwindCSS"],
      demo: "#",
      repo: "#",
    },
  ];

  const makeUrl = (url?: string) => {
    if (!url) return undefined;
    if (url === "#") return undefined;
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python Core",
    "Java Core",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Git",
    "TailwindCSS",
    "Express.js",
  ];
  const Tools = [
    "VS Code",
    "GitHub",
    "Figma",
    "ChatGPT",
    "Netlify",
    "Vercel",
    "Heroku",
  ];
  // removed unused promptings list (was causing a typecheck error)
  const softSkills = [
    "Effective Communication",
    "Problem-Solving",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
    "Creativity",
    "Leadership",
    "Emotional Intelligence",
    "Conflict Resolution",
  ];
  const experience = [
    {
      period: "2025 - Present",
      role: "Full-Stack Developer(Trainee)",
      company: "Imagecon India.",
      description:
        "works under supervision to assist with both the front-end and back-end of web applications, learning to develop and maintain features, fix bugs, and write clean code.",
    },
    {
      period: "2024 - 2025",
      role: "Software Developer",
      company: "Smart India Hackathon.",
      description:
        "an innovative problem-solver who codes and develops software solutions for real-world challenges, working intensively in a team to create a working prototype within a time limit.",
    },
    {
      period: "2024 (aug - oct)",
      role: "Full-Stack Developer(Intern)",
      company: "Stack and Queue Education.",
      description:
        "Built scalable web applications and implemented modern Technologies.",
    },
  ];

  return (
    <div className="portfolio">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Sparkles className="logo-icon" />
            <span>SG</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <img
            className="hero-profile-image w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
            src={profileImage}
            alt="Profile"
          />
          <br />
          <div className="hero-badge">Available for opportunities</div>
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="gradient-text">
              <br /> SELVAPERUMAL G
            </span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className="hero-description">
            Crafting exceptional digital experiences through clean code and
            innovative solutions. Passionate about building scalable
            applications that make a difference.
          </p>
          <button
            className="cta-button"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </button>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <User className="section-icon" />
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-image-container">
              <div className="about-image">
                <img src="assets/profile.jpeg" alt="" />
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with a keen eye for design
                and a commitment to writing clean, maintainable code. With years
                of experience building web applications, I specialize in
                creating seamless user experiences backed by robust, scalable
                architectures.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work
                and evolved into a career where I get to solve complex problems
                daily. I thrive in collaborative environments and believe that
                the best solutions come from diverse perspectives and continuous
                learning.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-container">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-header">
            <Code2 className="section-icon" />
            <h2>Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-header">
            <Code2 className="section-icon" />
            <h2>Tools & Platforms</h2>
          </div>
          <div className="skills-grid">
            {Tools.map((tool, index) => (
              <div key={index} className="skill-tag">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-header">
            <Code2 className="section-icon" />
            <h2>SoftSkills</h2>
          </div>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="section-header">
            <Sparkles className="section-icon" />
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <img className="project-image" src={project.image} alt="" />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {makeUrl(project.demo) ? (
                      <a
                        href={makeUrl(project.demo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Link size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className="project-link opacity-50 cursor-not-allowed"
                        aria-disabled="true"
                      >
                        <Link size={16} />
                        Live Demo
                      </span>
                    )}

                    {makeUrl(project.repo) ? (
                      <a
                        href={makeUrl(project.repo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={16} />
                        Repository
                      </a>
                    ) : (
                      <span
                        className="project-link opacity-50 cursor-not-allowed"
                        aria-disabled="true"
                      >
                        <Github size={16} />
                        Repository
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="section-header">
            <Mail className="section-icon" />
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-content">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>
            <div className="contact-links">
              <a href="mailto:hello@example.com" className="contact-link">
                <Mail size={24} />
                <span>hello@example.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} SG. All rights reserved.</p>
          <p className="footer-tagline">Built with React & passion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
