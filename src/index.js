import { model } from './model';
// import { title, text, textColumns } from './templates';
import { templates } from './templates';

import './styles/main.css';

const site = document.querySelector('#site');
// console.log(templates['textColumns']);

model.forEach((block) => {
  const generate = templates[block.type];
  if (generate) {
    const html = generate(block);
    site.insertAdjacentHTML('beforeend', html);
  }
});
