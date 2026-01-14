import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Stories } from './components/Stories';
import { Timeline } from './components/Timeline';
import { HistoricBusinesses } from './components/HistoricBusinesses';
import { HistoricChurches } from './components/HistoricChurches';
import { GenericStory } from './components/GenericStory';

const app = document.querySelector('#app');

// Initial Layout
app.innerHTML = `
  <div id="header-container"></div>
  <main id="main-content" style="min-height: 80vh; padding-top: 80px;"></main>
  <div id="footer-container"></div>
`;

// Render Header and Footer
Header(document.querySelector('#header-container'));
Footer(document.querySelector('#footer-container'));

const contentDiv = document.querySelector('#main-content');

// Router
const router = () => {
  const hash = window.location.hash || '#';

  // Scroll to top on route change
  window.scrollTo(0, 0);

  // Clear previous content (optional, innerHTML overwrite handles it)
  contentDiv.innerHTML = '';

  if (hash === '' || hash === '#' || hash === '#home') {
    Home(contentDiv);
  } else if (hash === '#about') {
    About(contentDiv);
  } else if (hash === '#stories') {
    Stories(contentDiv);
  } else if (hash === '#timeline') {
    Timeline(contentDiv);
  } else if (hash === '#businesses') {
    HistoricBusinesses(contentDiv);
  } else if (hash === '#churches') {
    HistoricChurches(contentDiv);
  } else if (hash.startsWith('#story/')) {
    const storyId = hash.replace('#story/', '');
    if (storyId) {
      console.log('Router: Navigating to story:', storyId);
      GenericStory(contentDiv, storyId);
    } else {
      console.error('Router: Empty story ID');
      Home(contentDiv);
    }
  } else {
    Home(contentDiv);
  }
};

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
