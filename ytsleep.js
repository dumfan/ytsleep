if (Meteor.isClient) {
  // YouTube API will call onYouTubeIframeAPIReady() when API ready.
  // Make sure it's a global variable.


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
