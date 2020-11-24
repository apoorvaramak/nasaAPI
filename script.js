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
		var currentSearchWord = 'apollo%11';
		var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api_key=';
		var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
		var nasaURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nasaURL);
		fetch(nasaURL)
		.then(response => response.json())
		.then(data => {
			//;
			app.nyTimesArticles = collections.items.data[0].center;
			console.log(app.nyTimesArticles);
			app.makeHTML();
		})
		.catch(error => console.log(error));
	}
};
