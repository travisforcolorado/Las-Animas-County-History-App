import './src/styles/main.css';
import { Header } from './src/components/Header.js';
import { Footer } from './src/components/Footer.js';
import { Home } from './src/components/Home.js';

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header id="main-header"></header>
    <main id="main-content"></main>
    <footer id="main-footer"></footer>
  </div>
`;

// Router
import { Timeline } from './src/components/Timeline.js';
import { Stories } from './src/components/Stories.js';
import { About } from './src/components/About.js';
import { HistoricBusinesses } from './src/components/HistoricBusinesses.js';
import { HistoricChurches } from './src/components/HistoricChurches.js';
import { GenericStory } from './src/components/GenericStory.js';

const router = () => {
  const hash = window.location.hash || '#home';
  const mainContent = document.querySelector('#main-content');

  mainContent.innerHTML = '';

  if (hash === '' || hash === '#' || hash === '#home') {
    Home(mainContent);
  } else if (hash === '#timeline') {
    Timeline(mainContent);
  } else if (hash === '#stories') {
    Stories(mainContent);
  } else if (hash === '#about') {
    About(mainContent);
  } else if (hash === '#businesses') {
    HistoricBusinesses(mainContent);
  } else if (hash === '#churches') {
    HistoricChurches(mainContent);
  } else if (hash.startsWith('#story/')) {
    const storyId = hash.replace('#story/', '');
    if (storyId) {
      GenericStory(mainContent, storyId);
    } else {
      Home(mainContent);
    }
  } else {
    Home(mainContent);
  }

  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Initialize Components
Header(document.querySelector('#main-header'));
Footer(document.querySelector('#main-footer'));
