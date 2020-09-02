import { TitleBlock, TextBlock } from './blocks';

export class Sidebar {
  constructor(selector, update) {
    this.$element = document.querySelector(selector);
    this.update = update;

    //init sidebar
    this.init();
  }

  init() {
    this.$element.addEventListener('submit', this.addBlock.bind(this));
    this.$element.innerHTML = this.template;
  }

  get template() {
    return [block('text'), block('title')].join('');
  }

  addBlock(event) {
    event.preventDefault();
    // console.log('event', event);
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    const Constructor = type === 'text' ? TextBlock : TitleBlock;
    // console.log(Constructor);

    const newBlock = new Constructor(value, { styles });
    this.update(newBlock);

    //clear field input and textarea
    event.target.value.value = '';
    event.target.styles.value = '';
  }
}

function block(type) {
  return `
    <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
      <input class="form-control form-control-sm" name="value" placeholder="value" />
    </div>
    <div class="form-group">
       <textarea class="form-control form-control-sm" name="styles" placeholder="styles"></textarea>
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Add</button>
  </form>
  <hr/>
  `;
}
