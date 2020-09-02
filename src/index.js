import { model } from './model';
import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
// import { title, text, textColumns } from './templates';
// import { templates } from './templates';
import './styles/main.css';

const site = new Site('#site');

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

new Sidebar('#panel', updateCallback);

site.render(model);

// const site = document.querySelector('#site');
// console.log(templates['textColumns']);

//== Second refactoring ==
// model.forEach((block) => {
//   console.log(block);
//   site.insertAdjacentHTML('beforeend', block.toHTML());

//=== First refactoring was above ==
// const generate = templates[block.type];
// if (generate) {
//   const html = generate(block);
//   site.insertAdjacentHTML('beforeend', html);
// }
// });
