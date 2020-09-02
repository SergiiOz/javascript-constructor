export class Site {
  constructor(selector) {
    this.$element = document.querySelector(selector);
  }

  render(model) {
    //before render clear html
    this.$element.innerHTML = '';
    model.forEach((block) => {
      this.$element.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
}
