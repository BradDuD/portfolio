import SkillsCard from "./SkillsCard";
import '../css/Skills.css';

const Skills = () => {
    const skills = [
        { skill: 'Python', iconSrc: '/icons/skills/python-original.svg' },
        { skill: 'Flask', iconSrc: '/icons/skills/flask-original.svg' },
        { skill: 'Django', iconSrc: '/icons/skills/django-plain.svg' },
        { skill: 'HTML', iconSrc: '/icons/skills/html5-plain.svg' },
        { skill: 'CSS', iconSrc: '/icons/skills/css3-plain.svg' },
        { skill: 'JS', iconSrc: '/icons/skills/javascript-plain.svg' },
        { skill: 'TS', iconSrc: '/icons/skills/typescript-plain.svg' },
        { skill: 'React', iconSrc: '/icons/skills/react-original.svg' },
        { skill: 'SQL', iconSrc: '/icons/skills/azuresqldatabase-original.svg' },
        { skill: 'MySQL', iconSrc: '/icons/skills/mysql-original.svg' },
        { skill: 'SQLite', iconSrc: '/icons/skills/sqlite-original.svg' },
        { skill: 'Java', iconSrc: '/icons/skills/java-original.svg' },
        { skill: 'Docker', iconSrc: '/icons/skills/docker-plain.svg' },
        { skill: 'Azure', iconSrc: '/icons/skills/azure-original.svg' },
        { skill: 'Git', iconSrc: '/icons/skills/git-original.svg' },
        { skill: 'GitHub', iconSrc: '/icons/skills/github-original.svg' },
      ];
      

    return (
            <div className='home__container container center grid '>
                <h2 className='pixel-title'>Skills</h2>
                <div className="skill-grid box-shadow">
                    {skills.map((skill, i) => (
                        <SkillsCard
                            key={i}
                            skill={skill.skill}
                            iconSrc={skill.iconSrc}
                        />
                    ))}
                </div>
            </div>
    );
};

export default Skills