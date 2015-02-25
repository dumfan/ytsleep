Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  layoutTemplate: 'Layout'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeCtrl'
});

Router.route('/w/:_id', {
  name: 'player',
  controller: 'PlayerCtrl'
});