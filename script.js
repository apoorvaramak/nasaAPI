
var app = {
	nasaImages : [],

	initialize: function() {
		document.getElementById("submitButton").addEventListener("click", function(){app.getNasaImages()})
		document.getElementById("submitButton2").addEventListener("click", function(){app.getNasaImages()})
	},

	makeHTML: function() {
		var theHTML = '';
		//debugger;
		$("#form").addClass('hide');
		var i;
		for (i = 0; i < Object.keys(app.nasaImages).length; i++){
			theHTML += "<div class='nasaTitle'>";
			theHTML += "<h3>" + "<a href=" + app.nasaImages[i].href + ">" + app.nasaImages[i].data[0].media_type.toUpperCase() + "</a>" + ": " + app.nasaImages[i].data[0].title + "</br>" + "</br>" + "<span>" + app.nasaImages[i].data[0].description + "</span>" + "</h3>";
			// theHTML += "<h3>" + app.nasaImages[i].data[0].description + "</h3>";
			theHTML += "</div>";


		}
		$('.container').html(theHTML);

	},

	getNasaImages: function() {
		console.log("Get NASA Images/Videos");
		var currentSearchWord = document.getElementById('myInput').value;
		//debugger;
		//var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api_key=';
		//var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
		var nasaURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord;
		//var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nasaURL);
		fetch(nasaURL)
		.then(response => response.json())
		.then(data => {
			//;
			//debugger;
			app.nasaImages = data.collection.items;
			console.log(app.nasaImages.description);
			app.makeHTML();
		})
		.catch(error => console.log(error));
	}
};
app.initialize();
