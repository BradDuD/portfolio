import Work from '../components/Work';
import '../css/About.css';
const About = () => {
  return (
    <section className="section">
    <section className="section"></section>
      <h2 className="section__title">About me</h2>
      <div className="about__container container grid">
        <div className="about__data ">

          <p className="about__description">I am a Software Developer.</p>
          <p className="about__description">Proactive, self-taught, and highly capable of working in a team, I stand out for efficiently solving problems and quickly learning in dynamic environments.</p>
        </div>
        <div className="about__image">
          <img src='/images/speon.png' alt="About Me Image" className="about__img" />
        </div>
      </div>
      <Work></Work>

    </section>
  )
}

export default About