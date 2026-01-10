import { stories } from '../data/stories.js';
import { resolvePath } from '../utils/paths.js';

export const GenericStory = (target, storyId) => {
  console.log('GenericStory called with ID:', storyId);
  const story = stories.find(s => s.id === storyId);
  console.log('Story found:', story);

  // Handle case where story isn't found
  if (!story) {
    target.innerHTML = `<div class="container" style="text-align:center; padding-top: 100px;"><h2>Story Not Found</h2><button class="btn" onclick="window.history.back()">Go Back</button></div>`;
    return;
  }

  if (story.sections) {
    console.log('Story sections type:', typeof story.sections, 'Length:', story.sections.length);
  } else {
    console.error('Story SECTIONS MISSING for:', storyId);
  }

  // --- RENDERING SECTIONS (Rich Content) ---
  let sectionsHtml = '';
  if (story.sections && story.sections.length > 0) {
    sectionsHtml = story.sections.map((section, index) => `
      <div class="story-section" style="
        display: flex;
        flex-direction: ${index % 2 === 0 ? 'row' : 'row-reverse'};
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
        align-items: center;
        flex-wrap: wrap;
      ">
        <div style="flex: 1; min-width: 300px;">
          <h3 style="color: var(--color-terracotta); font-size: 2rem; margin-bottom: var(--spacing-sm);">${section.heading}</h3>
          <p style="font-size: 1.1rem; line-height: 1.8;">${section.content}</p>
          ${section.quote ? `
            <blockquote style="
              margin-top: var(--spacing-md);
              padding-left: var(--spacing-md);
              border-left: 4px solid var(--color-teal);
              font-style: italic;
              font-size: 1.2rem;
              color: var(--color-dark-teal);
              ">"${section.quote}"</blockquote>
          ` : ''}
        </div>
        
        ${section.image ? `
          <div style="flex: 1; min-width: 300px;">
            <div class="glass-card" style="padding: var(--spacing-xs);">
              <img src="${resolvePath(section.image)}" alt="${section.heading}" style="width: 100%; border-radius: 4px;">
              ${section.imageCredit ? `<p style="font-size: 0.8rem; margin-top: 0.5rem; text-align: right; color: var(--text-secondary);">${section.imageCredit}</p>` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  // --- RENDERING SIMPLE CONTENT (Fallback) ---
  // If no sections, use the 'content' string or 'excerpt'
  let simpleContentHtml = '';
  if (!sectionsHtml) {
    simpleContentHtml = `
      <div class="glass-card mb-lg">
         ${story.image ? `
        <div class="mb-lg" style="text-align: center;">
             <img src="${resolvePath(story.image)}" alt="${story.title}" style="max-width: 100%; border-radius: 4px; border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
             ${story.imageCredit ? `<p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-secondary); font-style: italic;">${story.imageCredit}</p>` : ''}
        </div>
        ` : ''}
        <div class="story-content" style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text);">
            ${story.content || `<p>${story.excerpt}</p><p><em>Full historical details coming soon.</em></p>`}
        </div>
      </div>
    `;
  }

  // --- FINAL ASSEMBLY ---
  const content = `
    <div style="background-color: var(--color-paper); min-height: 100vh;">
      
      <!-- HERO HEADER (Optional: Use if story has a main image and we want a banner style, otherwise standard generic header) -->
      ${story.image && sectionsHtml ? `
      <div style="
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${resolvePath(story.image)}');
        background-size: cover;
        background-position: center;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        margin-bottom: var(--spacing-xl);
      ">
         <div class="container" style="background: rgba(0,0,0,0.6); padding: 2rem; border-radius: 8px; backdrop-filter: blur(4px);">
          <h1 style="font-size: 3.5rem; margin-bottom: var(--spacing-md); color: var(--color-sand);">${story.title}</h1>
          ${story.subtitle ? `<p style="font-size: 1.5rem; font-family: var(--font-heading); color: white;">${story.subtitle}</p>` : ''}
        </div>
      </div>
      ` : `
      <section class="container" style="padding-top: var(--spacing-xl); max-width: 800px;">
        <button class="btn-outline mb-md" onclick="window.location.hash='#stories'">← Back to Stories</button>
        <h2 class="text-center" style="color: var(--color-dark-brown); font-size: 2.5rem; margin-bottom: var(--spacing-sm);">${story.title}</h2>
        <div style="width: 60px; height: 4px; background: var(--color-terracotta); margin: 0 auto 2rem auto;"></div>
      </section>
      `}

      <div class="container" style="max-width: 1000px;">
        ${story.intro ? `
        <div class="intro mb-lg text-center">
          <p style="font-size: 1.3rem; font-weight: 500; color: var(--color-charcoal);">${story.intro}</p>
          <div style="width: 100px; height: 4px; background: var(--color-terracotta); margin: 2rem auto;"></div>
        </div>
        ` : ''}

        ${sectionsHtml}
        ${simpleContentHtml}

        <div class="text-center" style="margin-top: 4rem; padding-bottom: 4rem;">
          <h3 style="margin-bottom: var(--spacing-md);">Explore More</h3>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="window.location.hash='#stories'" class="btn">Back to Stories</button>
            <button onclick="window.location.hash='#timeline'" class="btn btn-outline">Back to Timeline</button>
          </div>
        </div>
      </div>
    </div>
  `;

  target.innerHTML = content;
  // Scroll to top
  window.scrollTo(0, 0);
};
