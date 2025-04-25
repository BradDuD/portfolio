import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../css/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Movie App',
            description: 'Aplicación para buscar y guardar películas favoritas.',
            techStack: ['React', 'Vite', 'API TMDB'],
            link: 'https://github.com/BradDuD/react-movies',
            previewLink: 'https://react-movies-codtwpcdt-brad-dupres-projects.vercel.app',
            image: '/images/react-movies.png',
        },
        {
            title: 'Exotipet',
            description: 'Sitio Web sobre mascotas exoticas.',
            techStack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
            link: 'https://github.com/BradDuD/i-d-i_exotipet',
            previewLink: '',
            image: '/images/exotipet.png',
        },
        {
            title: 'App Mobile',
            description: 'Aplicación movil desarrollada en Android Studio.',
            techStack: ['Java', 'Kotlin', 'PHP', 'SQL'],
            link: 'https://github.com/BradDuD/app_mobile',
            previewLink: '',
            image: '/images/app-mobile.png',
        },
        // {
        //     title: 'Travel Page',
        //     description: 'Landing Page para una pagina web enfocada en viajes.',
        //     techStack: ['JavaScript', 'HTML', 'CSS'],
        //     link: 'https://github.com/BradDuD/travel-website-responsive',
        //     previewLink: '',
        //     image: '/images/mew.png',
        // },
        {
            title: 'Venom Blog',
            description: 'Blog web sobre desarrollo web.',
            techStack: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/BradDuD/web-blog-responsive',
            previewLink: 'https://web-blog-responsive.vercel.app',
            image: '/images/web-blog.png',
        },
        {
            title: 'Portafolio',
            description: 'El sitio en cuestión. Donde muestro mis proyectos.',
            techStack: ['React', 'TypeScript', 'CSS'],
            link: 'https://github.com/BradDuD/portfolio',
            previewLink: 'https://portfolio-brad-dupres-projects.vercel.app',
            image: '/images/portfolio.png',
        }
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Detecta la tecla ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className='home__container container center grid'>
            <h2 className='pixel-title'>Projects</h2>

            <div className="project-grid">
                {projects.map((proj, i) => (
                    <div key={i} onClick={() => setSelectedImage(proj.image)}>
                        <ProjectCard
                            title={proj.title}
                            description={proj.description}
                            techStack={proj.techStack}
                            link={proj.link}
                            previewLink={proj.previewLink}
                            image={proj.image}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Project Preview" className="modal-image animated" />
                </div>
            )}
        </div>

    );
};

export default Projects;
