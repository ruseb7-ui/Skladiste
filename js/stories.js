fetch('data/stories.json')
  .then(response => response.json())
  .then(stories => {
    const list = document.getElementById('storiesList');

    stories.forEach(story => {
      const article = document.createElement('article');
      article.className = 'story-item';

      article.innerHTML = `
        <a href="povidka.html?id=${story.id}" class="story-link">
          <div class="story-image">
            <img src="${story.image}" alt="${story.title}">
          </div>
          <div class="story-text">
            <h2>${story.title}</h2>
            <p>${story.annotation}</p>
          </div>
        </a>
      `;

      list.appendChild(article);
    });
  })
  .catch(err => {
    console.error('Chyba při načítání povídek:', err);
  });
