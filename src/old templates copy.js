//saved file before refactoring

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
      <div class="col-sm">
        <p>
          ${block.value}
        </p>
      </div>
      `;
}

function textColumns(block) {
  //html it's array
  const html = block.value.map((item) => {
    return `<div class="col-sm">${item}</div>`;
  });

  return `
      <div class="row">
        ${html.join('')}
      </div>
      `;
}

export const templates = {
  title: title,
  text: text,
  textColumns: textColumns,
};
