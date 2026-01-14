import { stories } from '../data/stories.js';
import { resolvePath } from '../utils/paths.js';

export const Stories = (target) => {
  const storiesHtml = stories.map(story => {
    const storyHash = story.link ? story.link.replace(/^#/, '') : '';
    const cardInteraction = story.link ? `
      onclick="window.location.hash='${storyHash}'"
      onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); window.location.hash='${storyHash}'; }"
      role="button"
      tabindex="0"
    ` : '';

    return `
    <div class="glass-card" ${cardInteraction} style="
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: transform var(--transition-normal);
      cursor: pointer;
    " onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
      <div style="
        height: 200px;
        background-image: url('${resolvePath(story.image)}');
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        margin-bottom: var(--spacing-sm);
        background-color: #ccc; /* Fallback */
        position: relative;
      ">
        ${story.imageCredit ? `
          <div style="
            position: absolute;
            bottom: 0;
            right: 0;
            background: rgba(0,0,0,0.6);
            color: white;
            font-size: 0.6rem;
            padding: 2px 6px;
            border-top-left-radius: 4px;
          ">${story.imageCredit}</div>
        ` : ''}
      </div>
      <h3 style="color: var(--color-dark-teal);">${story.title}</h3>
      <p style="font-size: 0.95rem;">${story.excerpt}</p>
      <div style="margin-top: auto; padding-top: var(--spacing-sm);">
        ${story.link ? `
          <a href="${story.link}" class="btn" style="
            display: block;
            width: 100%; 
            font-size: 0.9rem; 
            padding: 0.5rem; 
            text-align: center;
            text-decoration: none;
            box-sizing: border-box;
          ">Read Full Story</a>
        ` : `
          <button class="btn-outline" style="width: 100%; font-size: 0.9rem; padding: 0.5rem;">Read More</button>
        `}
      </div>
    </div>
  `}).join('');

  const content = `
    <section class="container" style="padding-top: var(--spacing-xl);">
      <div class="text-center mb-lg">
        <h2>Stories & Legends</h2>
        <p>Tales from the frontier</p>
      </div>
      
      <div style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-md);
      ">
        ${storiesHtml}
      </div>
    </section>
  `;

  target.innerHTML = content;
};
