import { row, colSm } from './utils';

function title(block) {
  // console.log('parametrs of block', block);
  const tag = block.options.tag;
  const styles = block.options.styles;
  //we pass in function 'row'  two paramentrs content and styles
  return row(
    colSm(`<${tag}>${block.value}
  </${tag}>`),
    styles
  );
}

function text(block) {
  return row(colSm(`<p>${block.value}</p>`), block.options.styles);
}

function textColumns(block) {
  //html it's array
  const html = block.value.map((item) => {
    return colSm(`${item}`);
  });

  return row(`${html.join('')}`, block.options.styles);
}

function image(block) {
  // console.log('parametrs of block', block);
  const tag = block.options.tag;
  const altText = block.options.alt;
  const imageStyles = block.options.imageStyles;
  const styles = block.options.styles;
  const html = `<${tag} src="${block.value}" alt="${altText}" style="${imageStyles}"/>`;

  //we pass in function 'row'  two paramentrs content and styles
  return row(html, styles);
}

export const templates = {
  title: title,
  text: text,
  textColumns: textColumns,
  image: image,
};
