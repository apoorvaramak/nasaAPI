var app = {
	nasaImages : [],

	initialize: function() {
		app.getNasaImages();
	},

	makeHTML: function() {
		var theHTML = '';
		//debugger;
		for (var i = 0; i < app.nasaImages.length; i++){
			theHTML += "<div class='nasaTitle'>";
			theHTML += "<h3>" + app.nasaImages[i].title + "</h3>";
			theHTML += "</div>";
		}
		$('.container').html(theHTML);
	},

	getNasaImages: function() {
		console.log("Get NASA Images/Videos");
		var currentSearchWord = 'apollo%2011';
		//var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api_key=';
		//var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
		var nasaURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord;
		//var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nasaURL);
		fetch(nasaURL)
		.then(response => response.json())
		.then(data => {
			//;
			debugger;
			app.nasaImages = data.collection.items[0].data[0].description;
			console.log(app.nasaImages);
			app.makeHTML();
		})
		.catch(error => console.log(error));
	}
};

app.initialize();
