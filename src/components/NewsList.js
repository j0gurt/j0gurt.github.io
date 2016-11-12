class NewsList extends ViewComponent{
  constructor(tag){
    super(tag);
    this.getNews('latest', 'the-next-web');
  }
  async getNews(sortBy, source){
    var news = await new NewsFactory(sortBy, source).getNews();
    this.render({
      news: this.renderNewsItems(news.articles).join(' '),
      title: source
              .split('-')
              .map(s => s.charAt(0).toUpperCase() + s.slice(1))
              .join(' ')
    });
  }
  renderNewsItems(newsList){
    return newsList.map((news)=>{
      return new NewsItem().template(news);
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
