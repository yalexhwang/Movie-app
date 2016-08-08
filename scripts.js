
$(document).ready(function() {
	var apiBase = 'http://api.themoviedb.org/3';
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var apiKey2 = '&api_key=fec8b5ab27b292a68294261bb21b04a5';
	var imageBase = 'http://image.tmdb.org/t/p/';


	var moviesNowPly = [];
	var urlNowPly = apiBase + "/movie/now_playing" + apiKey;
	console.log(urlNowPly);

	$.getJSON(urlNowPly, function(dataNowPly) {

		console.log(dataNowPly);
		for (var i = 0; i < dataNowPly.results.length; i++) {
			var title = dataNowPly.results[i].title;
			var urlPoster = imageBase + 'w300' + dataNowPly.results[i].poster_path; 
			var release = dataNowPly.results[i].release_date;
			var overview = dataNowPly.results[i].overview;
			var urlPoster = dataNowPly.results[i].poster_path;
			if ((urlPoster == "null") || (urlPoster == null) || (urlPoster == undefined)) {
				urlPoster = "http://placehold.it/300x450"; 
			} else {
				urlPoster = imageBase + 'w300' + urlPoster;
			}
			var movieData = new SaveMoviesNowPly(title, urlPoster, release, overview);
			moviesNowPly.push(movieData);
		}
		console.log(moviesNowPly);
		
		var targetDiv = document.querySelectorAll('.main-nowPly > div > div')
		for (var i = 0; i < moviesNowPly.length; i++) {
			var poster = 'url(' + moviesNowPly[i].imageURL + ')';
			$(targetDiv[i]).css({
				'background-image': poster,
				'background-repeat': 'no-repeat',
			});

			var title = moviesNowPly[i].title;
			var targetDivTitle = document.querySelectorAll('.movie-info > h4');
			$(targetDivTitle[i]).text(title);
			$(targetDivTitle[i]).css('color', 'transparent');
			var overview = moviesNowPly[i].overview;
			var targetDivOverview = document.querySelectorAll('.movie-info > p');
			$(targetDivOverview[i]).text(overview);
			$(targetDivOverview[i]).css('color', 'transparent');

		}

		$('.movie-info').hover(function() {
			$(this).css({
				'background-color': 'black',
				'color': 'white',
				'opacity': 0.8
			});
			$(this).children().css('color', 'white');
		}, function() {
			$(this).css({
				'background-color': 'transparent',
				'color': 'transparent',
				'opacity': 0.8
			}); 
			$(this).children().css('color', 'transparent');
		});

	});

	$('#search-button').submit(function() {
		var genre = $('#genres').val();
		var genreQuery = '?with_genres=' + genre;
		
		var people = $('#people').val();
		

		var urlDiscover = apiBase + '/discover/movie?with_genres=' + genre + apiKey2;
		console.log(urlDiscover);

		
		var year = $('#years').val();
		// var rating = checkRatignCheckbox();
		console.log(genre);
		console.log(people);
		console.log(year);
		// console.log(rating);
		$.getJSON(urlDiscover, function(dataDiscover) {
			console.log(dataDiscover);
		})

	});

	var keywordPeople = '/search/person';
	var keywordGenre = 'with_genres';
	var keywordReleaseYr = 'primary_release_year';
	var keywordCast = 'with_cast';

	var urlDiscover = apiBase + '/discover/movie' + apiKey;
	$.getJSON(urlDiscover, function(dataDiscover) {
		console.log(dataDiscover);
	});

	var urlGenres = apiBase + '/genre/movie/list' + apiKey;
	$.getJSON(urlGenres, function(dataGenres) {

		console.log(dataGenres);
	});

function SaveMoviesNowPly(title, urlPoster, release, overview) {
	this.title = title;
	this.imageURL = urlPoster; 
	this.release = release;
	this.overview = overview;
}

// function checkRatignCheckbox() {
// 	var ratingArr = [];
// 	if ($('#rating1').is(':checked')) {
// 		ratingArr.push('0');
// 	} else {
// 		ratingArr[0],push('0');
// 	}
// 	if ($('#rating2').is(':checked')) {
// 		ratingArr[1].push('2');
// 	} else {
// 		ratingArr[1],push('0');
// 	}
// 	if ($('#rating3').is(':checked')) {
// 		ratingArr[2].push('3');
// 	} else {
// 		ratingArr[2].push('0');
// 	}

// }

});

// results[i].popularity
// .vote_average