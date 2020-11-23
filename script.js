var app = {
	nyTimesArticles : [],

	initialize: function() {
		app.getNYTimesData();
	},

	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.nyTimesArticles.length; i++){
			theHTML += "<div class='nytArticle'>";
			theHTML += "<h3>" + app.nyTimesArticles[i].headline.main + "</h3>";
			theHTML += "</div>";
		}
		$('.container').html(theHTML);
	},

	getNYTimesData: function() {
		console.log("Get NY Times Data");
		var currentSearchWord = 'apollo ';
		var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api-key=';
		var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nyTimesReqURL);
		fetch(nyTimesReqURL)
		.then(response => response.json())
		.then(data => {
			debugger;
			app.nyTimesArticles = data.response.docs;
			console.log(app.nyTimesArticles);
			app.makeHTML();
		})
		.catch(error => console.log(error));
	}
};
