class Header extends ViewComponent{
  template(data){
    return `
      <global-header>
        <h1>${data.title}</h1>
      </global-header>
    `
  }
};
