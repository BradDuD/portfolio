import ProjectCard from '../components/ProjectCard';
import '../css/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Movie App',
            description: 'Aplicación para buscar y guardar películas favoritas.',
            techStack: ['React', 'Vite', 'API TMDB'],
            link: 'https://github.com/BradDuD/react-movies',
            image: '/images/tyranitar.png',
        },
        {
            title: 'Exotipet',
            description: 'Sitio Web sobre mascotas exoticas.',
            techStack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
            link: 'https://github.com/BradDuD/i-d-i_exotipet',
            image: '/images/suicune.png',
        },
        {
            title: 'App Mobile',
            description: 'Aplicación movil desarrollada en Android Studio.',
            techStack: ['Java', 'Kotlin', 'PHP', 'SQL'],
            link: 'https://github.com/BradDuD/app_mobile',
            image: '/images/speon.png',
        },
        {
            title: 'Travel Page',
            description: 'Landing Page para una pagina web enfocada en viajes.',
            techStack: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/BradDuD/travel-website-responsive',
            image: '/images/mew.png',
        },
        {
            title: 'Venom Blog',
            description: 'Blog web sobre desarrollo web.',
            techStack: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/BradDuD/web-blog-responsive',
            image: '/images/mudkip2.png',
        },
        {
            title: 'Portafolio',
            description: 'El sitio en cuestión. Donde muestro mis proyectos.',
            techStack: ['React', 'TypeScript', 'CSS'],
            link: 'https://github.com/BradDuD/portfolio',
            image: '/images/milotic.png',
        }
    ];

    return (
            <div className='home__container container center grid'>
                <h2 className='pixel-title'>Projects</h2>
                <div className="project-grid">
                    {projects.map((proj, i) => (
                        <ProjectCard
                            key={i}
                            title={proj.title}
                            description={proj.description}
                            techStack={proj.techStack}
                            link={proj.link}
                            image={proj.image}
                        />
                    ))}
                </div>
            </div>
    );
};

export default Projects;
