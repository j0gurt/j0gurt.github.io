class NewsList extends ViewComponent{
  constructor(tag){
    super(tag);
    this.getNews('top', 'hacker-news');
  }
  async getNews(sortBy, source){
    var news = await new NewsFactory(sortBy, source).getNews();
    this.render({
      news: this.renderNewsItems(news.articles).join(' '),
      title: 'News List'
    });
  }
  renderNewsItems(newsList){
    return newsList.map((news)=>{
      return `
        <h3>${news.title}</h3>
        <div>${news.description}</div>
        <hr>
      `
    });
  }
  template(data){
    return `
      <div>
        <h2>${data.title}</h2>
        <div>${data.news}</div>
      <div>
    `
  }
};
