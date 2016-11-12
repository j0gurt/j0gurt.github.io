class App extends ViewComponent{
  constructor(tag) {
    super(tag);
    var data = {userName: 'Egor'}
    this.render(data)
  }
  template(data){
    return `
      <news-list></news-list>
      ${new Header().init({title: 'My Medium'})}
      ${new SideBar().init({title: 'Side News'})}
    `
  }
};
