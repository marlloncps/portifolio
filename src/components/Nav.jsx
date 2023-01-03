import '../css/nav.css';

export default function Nav() {
  return (
    <>
      <section id='nav-section'>
        <div id='nav-div'>
          <p>MarllonDev</p>
          <nav id='nav-header'>
            <div>
              <a href='#nav-header'>Início</a>
              <a href='#aboutme'>Sobre mim</a>
              <a href='#nav-header'>Projetos</a>
              <a href='#nav-header'>Contato</a>
            </div>
          </nav>
        </div>
        <div id='nav-profile'>
          <span>Bem vindo ao meu portifólio, me chamo:</span>
          <h1>Márllon César</h1>
          <span>e sou Desenvolvedor Web!</span>
        </div>
      </section>
    </>
  );
}
