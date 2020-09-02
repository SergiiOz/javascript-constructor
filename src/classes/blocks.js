import { row, colSm } from '../utils';

//=== Block (main class) ===
class Block {
  constructor(type, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Method toHTML have to realized');
  }
}

//=== Title ===
export class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options);
  }

  toHTML() {
    // console.log('parametrs of block', block);
    // const tag = this.options.tag;
    // const styles = this.options.styles;
    //with destructuring
    const { tag = 'h1', styles } = this.options;
    //we pass in function 'row'  two paramentrs content and styles
    return row(colSm(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

//=== Image ===
export class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options);
  }

  toHTML() {
    // console.log('parametrs of block', block);
    const tag = this.options.tag;
    const altText = this.options.alt;
    const imageStyles = this.options.imageStyles;
    const styles = this.options.styles;
    const html = `<${tag} src="${this.value}" alt="${altText}" style="${imageStyles}"/>`;

    //we pass in function 'row'  two paramentrs content and styles
    return row(html, styles);
  }
}

//=== Text ===
export class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options);
  }

  toHTML() {
    return row(colSm(`<p>${this.value}</p>`), this.options.styles);
  }
}

//=== TextColumns ===
export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super('textColumns', value, options);
  }

  toHTML() {
    //html it's array
    const html = this.value.map((item) => {
      return colSm(`${item}`);
    });

    return row(html.join(''), this.options.styles);
  }
}
