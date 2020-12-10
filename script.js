
var app = {
	nasaImages : [],
	initialize: function() {
		document.getElementById("submitButton").addEventListener("click", function(){app.getNasaImages()})
		document.getElementById("submitButton2").addEventListener("click", function(){app.getNasaImages2()})
	},

	makeImageHTML:function(record, imageUrl)
	{
		//debugger;
		var theHTML = '';

		$("#form").addClass('hide');
		var i;

			//app.getNasaImaging(app.nasaImages[i].data[0].nasa_id);
			theHTML += "<div class='nasaTitle'>";
			theHTML += `<h3> <img src= "${imageUrl}">`;
			console.log('img url: ', imageUrl);
			//theHTML += "<h3>" + "<img src='" + app.nasaImaging[0] + "'>";
			theHTML += record.data[0].title + "</br>" + "</br>" + "<span>" + record.data[0].description + "</span>" + "</h3>";
			// theHTML += "<h3>" + app.nasaImages[i].data[0].description + "</h3>";
			theHTML += "</div>";


		$('.container').append(theHTML);
	},

	// makeHTML: function() {
	// 	var theHTML = '';
	// 	//debugger;
	// 	$("#form").addClass('hide');
	// 	var i;
	// 	for (i = 0; i < Object.keys(app.nasaImages).length; i++){
	// 		theHTML += "<div class='nasaTitle'>";
	// 		theHTML += "<h3>" + "<img src=" + app.makeImageHTML() + ">" + app.nasaImages[i].data[0].title + "</br>" + "</br>" + "<span>" + app.nasaImages[i].data[0].description + "</span>" + "</h3>";
	// 		// theHTML += "<h3>" + app.nasaImages[i].data[0].description + "</h3>";
	// 		theHTML += "</div>";
	// 	}
	// 	$('.container').html(theHTML);
	//
	// },

	getNasaImages: function() {
		console.log("Get NASA Images/Videos");
		var currentSearchWord = document.getElementById('myInput').value;
		//debugger;
		//var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api_key=';
		//var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
		var nasaURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + "&media_type=image";
		//var nyTimesReqURL = nyTimesURL + myNYKey;
	//	console.log(nasaURL);
		fetch(nasaURL)
		.then(response => response.json())
		.then(data => {
			//;
			//debugger;
			app.nasaImages = data.collection.items;
		//	console.log(app.nasaImages.description);
			//debugger;
				for (var j = 0; j < Object.keys(app.nasaImages).length; j++){

			app.getNasaImaging(app.nasaImages[j]);
		}

		})
		.catch(error => console.log(error));
	},
	getNasaImages2: function() {
		console.log("Get NASA Images/Videos");
		var galaxies= [];
		galaxies.push("cartwheel");
		galaxies.push("andromeda");
		galaxies.push("milky way");
		galaxies.push("whirlpool");
		galaxies.push("tadpole");
		galaxies.push("mayall");
		galaxies.push("triangulum");
		galaxies.push("circinus");
		galaxies.push("black eye");
		galaxies.push("messier");
		var currentSearchWord = galaxies[Math.floor(Math.random() * 10)];
		//debugger;
		//var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api_key=';
		//var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
		var nasaURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + "&media_type=image";
		//var nyTimesReqURL = nyTimesURL + myNYKey;
	//	console.log(nasaURL);
		fetch(nasaURL)
		.then(response => response.json())
		.then(data => {
			//;
			//debugger;
			app.nasaImages = data.collection.items;
		//	console.log(app.nasaImages.description);
			//debugger;
				for (var j = 0; j < Object.keys(app.nasaImages).length; j++){

			app.getNasaImaging(app.nasaImages[j]);
		}

		})
		.catch(error => console.log(error));
	},

getNasaImaging: function(record) {
//console.log("Get NASA Images/Videos");
	// if(app.nasaImages)
	// {
	// 	for (i = 0; i < Object.keys(app.nasaImages).length; i++){
	// 		var currentNASAId = app.nasaImages[i].data[0].nasa_id;
	// 	}
	// }
  var currentNASAId = record.data[0].nasa_id;
	//debugger;
	//var nyTimesURL = 'https://images-api.nasa.gov/search?q=' + currentSearchWord + '&api_key=';
	//var myNYKey = 'itOZtnn2XzP0a3GcrCaqH02bSM04rmEwQbhwpGRU';
	var jsonURL = 'https://images-assets.nasa.gov/image/' + currentNASAId + "/collection.json";
	//var nyTimesReqURL = nyTimesURL + myNYKey;
//	console.log(jsonURL);
	fetch(jsonURL)
	.then(response => response.json())
	.then(data => {
		//;
		console.log('img success', data[1])
		app.nasaImaging = data;
		//console.log(app.data[0]);
		app.makeImageHTML(record, data[1]);
	})
	.catch(error => console.log(error));
}
};
app.initialize();
