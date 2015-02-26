PlayerCtrl = RouteController.extend({

  template: 'player',

  data: function () { return Router.current().params },

  action: function () {
    this.render();
  }
});

Template.player.rendered = function () {
  var video = this.data._id;
  onYouTubeIframeAPIReady = function () {
      player = new YT.Player("player", {
          height: "400", 
          width: "600", 
          videoId: video,
          playerVars: { 
          	'autoplay': 0, 
          	'controls': 0, 
          	'showinfo': 0, 
          	'iv_load_policy': 3,
          	'modestbranding': 1,
          	'showinfo': 0,
          	'rel': 0,
            'loop': 1
          },
          //videoId: "LdH1hSWGFGU", 
      });
  };
  YT.load();
  // ...
};

Template.player.events({
  'click .stop': function () {
    player.pauseVideo();
  },
  'submit .countdown': function(e,t) {
    e.preventDefault();
    player.playVideo();
    var seconds = parseInt(e.target.timer.value + "000") * 60;
    console.log(seconds);
    setTimeout(
      function() {
        player.pauseVideo();
      }, seconds);

  }
});