import '../css/Contact.css';

const Contact = () => {
  return (
    <div className='home__container container center grid '>
    <h2 className='pixel-title'>Contact me</h2>
    <div className="contact-content box-shadow">
       <a href="https://github.com/BradDuD/" target="_blank" rel="noopener noreferrer">
       <div className="contact-item"> 
        <i className="devicon-github-plain contact-icon" ></i>
        <span className='contact-btn'>GitHub</span>
       </div>
       </a>
       <a href="https://www.linkedin.com/in/brad-dupre-063276308/" target="_blank" rel="noopener noreferrer">
       <div className="contact-item"> 
        <i className="devicon-linkedin-plain contact-icon" ></i>
        <span className='contact-btn'>Linkedin</span>
       </div>
       </a>
    </div>
</div>
  )
}

export default Contact