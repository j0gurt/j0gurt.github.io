class NewsItem {
  template(newsItem){
    var image = newsItem.urlToImage ?
            `<img width="300px" src="${newsItem.urlToImage}">`: '';
    return `
    <news-list-item>
      <h3><a class="news-list-item-link" href="${newsItem.url || ''}">${newsItem.title}</a></h3>
      ${image}
      <div>${newsItem.description || ''}</div>
    </news-list-item>
    `
  }
}
