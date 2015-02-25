Template.header.events({
	'submit .go': function (e) {
  		e.preventDefault();
		Router.go('/w/' + e.target.vid.value)
	}
});