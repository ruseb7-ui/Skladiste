const params = new URLSearchParams(window.location.search);
const storyId = params.get('id');

fetch('data/stories.json')
  .then(response => response.json())
  .then(stories => {
    const story = stories.find(s => s.id === storyId);
    const container = document.getElementById('storyContent');

    if (!story) {
      container.innerHTML = '<p>Povídka nebyla nalezena.</p>';
      return;
    }

    container.innerHTML = `
      <h1>${story.title}</h1>
      <p class="story-meta">${story.meta}</p>
    `;

    story.content.forEach(block => {
      if (block.type === 'p') {
        container.innerHTML += `<p>${block.text}</p>`;
      }
      if (block.type === 'h2') {
        container.innerHTML += `<h2>${block.text}</h2>`;
      }
      if (block.type === 'divider') {
        container.innerHTML += `<hr class="story-divider">`;
      }
    });
  });
