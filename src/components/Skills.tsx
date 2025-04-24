import SkillsCard from "./SkillsCard";
import '../css/Skills.css';



const Skills = () => {
    const skills = [
        { skill: 'Python', iconClass: 'devicon-python-plain colored' },
        { skill: 'Flask', iconClass: 'devicon-flask-original colored' },
        { skill: 'Django', iconClass: 'devicon-django-plain colored' },
        { skill: 'HTML', iconClass: 'devicon-html5-plain colored' },
        { skill: 'CSS', iconClass: 'devicon-css3-plain colored' },
        { skill: 'JS', iconClass: 'devicon-javascript-plain colored' },
        { skill: 'TS', iconClass: 'devicon-typescript-plain colored' },
        { skill: 'React', iconClass: 'devicon-react-original colored' },
        { skill: 'SQL', iconClass: 'devicon-azuresqldatabase-plain colored' },
        { skill: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
        { skill: 'SQLite', iconClass: 'devicon-sqlite-plain colored' },
        { skill: 'Java', iconClass: 'devicon-java-plain colored' },
        { skill: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { skill: 'Azure', iconClass: 'devicon-azure-plain colored' },
        { skill: 'Git', iconClass: 'devicon-git-plain colored' },
        { skill: 'GitHub', iconClass: 'devicon-github-plain colored' },
      ];
      

    return (
            <div className='home__container container center grid '>
                <h2 className='pixel-title'>Skills</h2>
                <div className="skill-grid box-shadow">
                    {skills.map((skill, i) => (
                        <SkillsCard
                            key={i}
                            skill={skill.skill}
                            iconClass={skill.iconClass}
                        />
                    ))}
                </div>
            </div>
    );
};

export default Skills