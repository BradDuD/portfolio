interface WorkItemProps {
    company: string;
    position: string;
    years: string;
    className?: string;
  }
  
  const WorkItem = ({ company, position, years, className = '' }: WorkItemProps) => {
    return (
      <div className={`work-item ${className}`}>
        <div className="work-info">
          <strong>{company}</strong>
          <span>{position}</span>
        </div>
        <div className="work-years">{years}</div>
      </div>
    );
  };
  
  export default WorkItem;
  