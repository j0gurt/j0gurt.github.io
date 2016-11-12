class NewsItem {
  template(newsItem){
    return `
    <news-list-item>
      <h3><a href="${newsItem.url || ''}">${newsItem.title}</a></h3>
      <div>${newsItem.description || ''}</div>
    </news-list-item>
    `
  }
}
