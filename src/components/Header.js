class Header extends ViewComponent{
  template(data){
    return `
      <global-header>
        <div class="global-header-wrapper">
          <span class="global-header-logo">
            <svg width="45" height="45" viewBox="-17 18 45 45" data-multipart="true"><path d="M11.525 28.078c-.472-.225-.858.002-.858.506v20.044l8.616 4.113c.948.46 1.717.14 1.717-.7v-19.3a.22.22 0 0 0-.124-.19l-9.35-4.46v-.01z"></path><path d="M.333 43.696l9.83-15.247c.278-.43.89-.6 1.36-.38l9.364 4.47c.06.03.082.1.047.15L10.666 48.63.333 43.698v-.002z"></path><path d="M-8.57 28.35c-.786-.375-1.053-.096-.592.62L.333 43.696l10.333 4.932L.356 32.635a.156.156 0 0 0-.06-.054l-8.866-4.23z"></path><path d="M.333 52.033c0 .84-.643 1.22-1.43.844l-8.045-3.84c-.472-.224-.858-.82-.858-1.325V28.89c0-.672.515-.976 1.145-.675l9.133 4.36a.092.092 0 0 1 .055.084v19.37z"></path></svg>
          </span>
          <span class="global-header-title">${data.title}</span>
        </div>
      </global-header>
    `
  }
};
