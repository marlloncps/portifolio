import '../css/aboutme.css';

export default function AboutMe() {
  return (
    <>
      <main id='aboutme'>
        <section id='aboutme_section'>
          <div id='aboutme_left-div'>
            <h1>Sobre mim</h1>
            <div id='aboutme_summary'>
              <p></p>
            </div>
          </div>
          <div id='aboutme_right-div'>
            <h1>Habilidades</h1>
            <ul id='aboutme_skills_container'>
              <li id='aboutme_skills_icon'></li>
              <li id='aboutme_skills_icon'></li>
              <li id='aboutme_skills_icon'></li>
              <li id='aboutme_skills_icon'></li>
              <li id='aboutme_skills_icon'></li>
              <li id='aboutme_skills_icon'></li>
              <li id='aboutme_skills_icon'></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
