class ViewComponent {
  constructor(tag) {
    this.element = this.getElement(tag);
  }
  getElement(element){
    return document.querySelector(element);
  }
  render(data){
    var template = this.template(data);
    this.element.innerHTML = template;
  }
  init(data){
    return this.template(data)
  }
};
