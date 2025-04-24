// src/components/ProjectCard.tsx
import '../css/ProjectCard.css'

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string; // nueva prop
}

const ProjectCard = ({ title, description, techStack, link, image }: ProjectCardProps) => {
  return (
    <a href={link} className="project-card box-shadow" target="_blank" rel="noopener noreferrer">
      <div className="project-content">
        <div className='project-text'>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tech-stack">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech">{tech}</span>
            ))}
          </div>
        </div>
        <div className='project-img-cont'>
          <img src={image} alt={title} className="project-image" />
        </div>
      </div>
    </a>
  );
};


export default ProjectCard;
