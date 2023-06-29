const GITHUB_TOKEN = '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';

axios.get('https://api.github.com/user/repos', {
    headers: {
        'Authorization': 'Bearer ' + GITHUB_TOKEN
    }
})
    .then(response => {
        const projects = response.data;

        const projectList = document.getElementById('project-list');

        projects.forEach(project => {
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');

            accordionItem.innerHTML = `
          <h3>${project.name}</h3>
          <p><strong>Descrição do projeto:</strong> ${project.description || 'Sem descrição.'}</p>
          <p><strong>Linguagem de programação:</strong> ${project.language || 'Não especificada.'}</p>
          <p><strong>Última atualização:</strong> ${new Date(project.updated_at).toLocaleDateString()}</p>
          <p><strong>Estrelas:</strong> ${project.stargazers_count}</p>
          <p><strong>Forks:</strong> ${project.forks_count}</p>
          <p><strong>Autor:</strong> ${project.owner.login}</p>
          <p><strong>Link para o repositório:</strong> <a href="${project.html_url}" target="_blank">${project.html_url}</a></p>
        `;

            projectList.appendChild(accordionItem);
        });
    })
    .catch(error => {
        console.error('Erro ao obter os projetos do GitHub:', error);
    });