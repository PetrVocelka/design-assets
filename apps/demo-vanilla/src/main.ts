import { defineDesignAssetsElements } from '@design-assets/web-components/register';

defineDesignAssetsElements();

const grid = document.getElementById('icon-grid');
if (grid) {
  for (const name of ['square', 'circle', 'triangle', 'diamond', 'plus', 'arrow-right']) {
    const el = document.createElement('da-icon');
    el.setAttribute('name', name);
    el.setAttribute('class', 'h-6 w-6 shrink-0 inline-block text-brand-600');
    el.setAttribute('decorative', '');
    grid.appendChild(el);
  }
}

const pictogram = document.getElementById('pictogram');
if (pictogram) {
  const el = document.createElement('da-pictogram');
  el.setAttribute('name', 'school');
  el.setAttribute('class', 'h-12 w-12 shrink-0 inline-block');
  el.setAttribute('decorative', '');
  pictogram.appendChild(el);
}
