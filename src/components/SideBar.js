class SideBar extends ViewComponent{
  template(data){
    return `
      <news-side-bar>
        <div>${data.title}</div>
      </news-side-bar>
    `
  }
};
