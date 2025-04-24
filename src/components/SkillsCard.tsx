interface SkillsCardProps {
    skill: string;
    iconClass: string;
  }
  
  const SkillsCard = ({ skill, iconClass }: SkillsCardProps) => {
    return (
      <div className="skills-card box-shadow">
        <i className={`${iconClass} skill-icon`}></i>
        <p className="skill-name">{skill}</p>
      </div>
    );
  };
  
  export default SkillsCard;
  