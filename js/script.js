document.addEventListener('DOMContentLoaded', function (event) {
  // Seu código aqui será executado quando a página for aberta
  const projectsDiv = document.getElementById('projects-div');
  // Exemplo: exibindo uma mensagem no console
  console.log('A página foi aberta!');
  const username = 'marlloncps';
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      for (const repository of data) {
        const repoDiv = document.createElement('div');
        repoDiv.classList.add('project-content');

        const spanDiv = document.createElement('div');
        spanDiv.id = 'span-div-projects';

        const projectName = document.createElement('span');
        projectName.id = 'project-name';
        const nome = repository.name;
        projectName.textContent = nome.replace(/-/g, ' ');

        const projectDescription = document.createElement('span');
        projectDescription.id = 'project-description';
        projectDescription.textContent = repository.description;

        spanDiv.appendChild(projectName);
        spanDiv.appendChild(projectDescription);

        const languageHeading = document.createElement('h5');
        languageHeading.style.textAlign = 'center';
        languageHeading.style.marginBottom = '20px';
        languageHeading.textContent = 'Linguagem: ';

        const languageSpan = document.createElement('span');
        languageSpan.style.fontWeight = '300';
        languageSpan.textContent = repository.language;
        languageHeading.appendChild(languageSpan)

        const topicsHeading = document.createElement('h5');
        topicsHeading.style.textAlign = 'center';
        topicsHeading.style.fontWeight = '400';
        topicsHeading.textContent = 'Tópicos do projeto:';

        const topicsList = document.createElement('ul');
        topicsList.id = 'project-habilities';

        for (const topic of repository.topics) {
          const topicItem = document.createElement('li');
          topicItem.textContent = topic;
          topicsList.appendChild(topicItem);
        }

        const repoLink = document.createElement('a');
        repoLink.id = 'project-link';
        repoLink.href = repository.html_url;
        repoLink.target = '_blank';
        repoLink.innerHTML = '<i class="fa-brands fa-github"></i> Repositório';

        repoDiv.appendChild(spanDiv);

        if (repository.language != null) repoDiv.appendChild(languageHeading);
        
        if (repository.topics.length != 0) repoDiv.appendChild(topicsHeading);
        
        repoDiv.appendChild(topicsList);
        repoDiv.appendChild(repoLink);

        projectsDiv.appendChild(repoDiv);
      }
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
