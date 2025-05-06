interface SkillsCardProps {
    skill: string;
    iconSrc: string;
  }
  
  const SkillsCard = ({ skill, iconSrc }: SkillsCardProps) => {
    return (
      <div className="skills-card box-shadow">
        <img src={iconSrc} alt={skill} className="skill-icon" />
        <p className="skill-name">{skill}</p>
      </div>
    );
  };
  
  export default SkillsCard;
  