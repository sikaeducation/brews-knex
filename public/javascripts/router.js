function Router(routes) {
  this.loadView = loadView;
  
  if(!window.location.hash) {
    history.pushState({}, "", "#/");
  }
  window.onhashchange = loadView;

  let currentView = null;
  function loadView() {
    const url = window.location.hash.split('#')[1];
    if(currentView) {
      currentView.style.display = 'none';
    }

    const route = routes.find(route => url.match(new RegExp(`^${route.url}$`)));
    const params = url.match(new RegExp(`^${route.url}$`));
    route.view.style.display = '';
    if(route.controller) {
      route.controller(params[1]);
    }
    currentView = route.view;
  }

}
