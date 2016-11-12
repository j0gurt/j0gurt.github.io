class App extends ViewComponent{
  constructor(tag) {
    super(tag);
    var data = {
      headerTitle: {
        title: 'Medium News'
      },
    }
    this.render(data)
  }
  template(data){
    return `
      <news-list></news-list>
      ${new Header().init(data.headerTitle)}
    `
  }
};
