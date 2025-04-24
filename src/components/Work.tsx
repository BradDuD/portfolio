import '../css/Work.css';
import WorkItem from './WorkItem';

const Work = () => {
  return (
    <section className="section">
      <h2 className="section__title">Work</h2>
      
        <div className="work-grid">
          <WorkItem
            company="OMIA Colombia S.A.S"
            position="Junior Fullstack Developer"
            years="24~"
            className="work3"
          />
          <WorkItem
            company="Teleperformance"
            position="Customer Support B1"
            years="23–24"
            className="work2"
          />
          <WorkItem
            company="2de2"
            position="Junior Developer"
            years="23–23"
            className="work1"
          />
        
      </div>
    </section>
  );
};

export default Work;
