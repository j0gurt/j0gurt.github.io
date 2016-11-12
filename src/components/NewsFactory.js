class NewsFactory {
  constructor(sortBy='top', source='hacker-news', apiKey = '6836e1cd2ea0448e907e9b1d2a05f06c') {
    this.url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=${apiKey}`;
  }

  async getNews(){
    return await fetch(this.url)
      .then(function(response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }
}
