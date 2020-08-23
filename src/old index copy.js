//saved file before refactoring

import './styles/main.css';
import { model } from './model';

const site = document.querySelector('#site');

model.forEach((block) => {
  let html;
  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'textColumns') {
    html = textColumns(block);
  }

  site.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>
    `;
}

function text(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>
          ${block.value}
        </p>
      </div>
    </div>
    `;
}

function textColumns(block) {
  //html it's array
  const html = block.value.map((item) => {
    return `<div class="col-sm">${item}</?>`;
  });

  return `
    <div class="row">
      ${html.join('')}
    </div>
    `;
}
