// src/components/ProjectCard.tsx
import '../css/ProjectCard.css'

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  previewLink?: string;
  image: string; 
}

const ProjectCard = ({ title, description, techStack, link, previewLink, image }: ProjectCardProps) => {
  const handlePreviewClick = () => {
    if (window.gtag) {
      window.gtag('event', 'click_preview', {
        event_category: 'projects',
        event_label: title,
      });
    }
  };

  const handleGitHubClick = () => {
    if (window.gtag) {
      window.gtag('event', 'click_github', {
        event_category: 'projects',
        event_label: title,
      });
    }
  };

  return (
    <div className="project-card box-shadow">
      <div className="project-content">
        <div className='project-text'>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tech-stack">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech">{tech}</span>
            ))}
          </div>
          <div className="buttons-container">
            {previewLink ? (
              <a
                href={previewLink}
                className="button preview-button"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePreviewClick}
              >
                Preview
              </a>
            ) : (
              <button className="button preview-button disabled" disabled>Preview</button>
            )}
            <a
              href={link}
              className="button github-button"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGitHubClick}
            >
              GitHub
            </a>
          </div>
        </div>
        <div className='project-img-cont'>
          <img src={image} alt={title} className="project-image" />
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
