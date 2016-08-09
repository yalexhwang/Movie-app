
$(document).ready(function() {
	var apiBase = 'http://api.themoviedb.org/3';
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var imageBase = 'http://image.tmdb.org/t/p/';

	var urlNowPly = apiBase + "/movie/now_playing" + apiKey;
	var moviesNowPly = [];
	var urlTopRated = apiBase + "/movie/top_rated" + apiKey;
	var moviesTopRated = [];
	var urlPopular = apiBase + "/movie/popular" + apiKey;
	var moviesPopular = [];


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
			var id = dataNowPly.results[i].id;
			var movieData = new SaveMovies(title, urlPoster, release, overview, id);
			moviesNowPly.push(movieData);
		}

		var targetDiv = document.querySelectorAll('.main-nowPly > div > div');
		for (var i = 0; i < moviesNowPly.length; i++) {
			var poster = 'url(' + moviesNowPly[i].imageURL + ')';
			$(targetDiv[i]).css({
				'background-image': poster,
				'background-repeat': 'cover'
			});

			var title = moviesNowPly[i].title;
			var targetDivTitle = document.querySelectorAll('.nowPly-movie-info > h4');
			$(targetDivTitle[i]).text(title);
			var overview = moviesNowPly[i].overview;
			var targetDivOverview = document.querySelectorAll('.nowPly-movie-info > p');
			$(targetDivOverview[i]).text(overview);
			var id = "https://www.themoviedb.org/movie/" + moviesNowPly[i].id;
			var targetDivLink = document.querySelectorAll('.nowPly-movie-info');
			$(targetDivLink[i]).append('<a href=' + id + '> ...More </a>');			
		}

		$('.main-nowPly > div > div').hover(function() {
			$(this).children().css('visibility', 'visible');
		}, function() {
			$(this).children().css('visibility', 'hidden');
		});
	});



	$.getJSON(urlTopRated, function(dataTopRated) {
		console.log(dataTopRated.results);
		for (var i = 0; i < dataTopRated.results.length; i++) {
			var title = dataTopRated.results[i].title;
			var urlPoster = imageBase + 'w300' + dataTopRated.results[i].poster_path; 
			var release = dataTopRated.results[i].release_date;
			var overview = dataTopRated.results[i].overview;
			var urlPoster = dataTopRated.results[i].poster_path;
			if ((urlPoster == "null") || (urlPoster == null) || (urlPoster == undefined)) {
				urlPoster = "http://placehold.it/300x450"; 
			} else {
				urlPoster = imageBase + 'w300' + urlPoster;
			}
			var id = dataTopRated.results[i].id;
			var movieData = new SaveMovies(title, urlPoster, release, overview, id);
			moviesTopRated.push(movieData);
		}
		console.log(moviesTopRated);

		var targetDiv = document.querySelectorAll('.main-topRated > div > div')
		for (var i = 0; i < moviesTopRated.length; i++) {
			var poster = 'url(' + moviesTopRated[i].imageURL + ')';
			$(targetDiv[i]).css({
				'background-image': poster,
				'background-repeat': 'no-repeat',
			});

			var title = moviesTopRated[i].title;
			var targetDivTitle = document.querySelectorAll('.topRated-movie-info > h4');
			$(targetDivTitle[i]).text(title);
			var overview = moviesTopRated[i].overview;
			var targetDivOverview = document.querySelectorAll('.topRated-movie-info > p');
			$(targetDivOverview[i]).text(overview);
			var id = "https://www.themoviedb.org/movie/" + moviesTopRated[i].id;
			var targetDivLink = document.querySelectorAll('.topRated-movie-info');
			$(targetDivLink[i]).append('<a href=' + id + '> ...More </a>');	
		}

		$('.main-topRated > div > div').hover(function() {
			$(this).children().css('visibility', 'visible');
		}, function() {
			$(this).children().css('visibility', 'hidden');
		});
	});

	$.getJSON(urlPopular, function(dataPopular) {
		console.log(dataPopular.results);
		for (var i = 0; i < dataPopular.results.length; i++) {
			var title = dataPopular.results[i].title;
			var urlPoster = imageBase + 'w300' + dataPopular.results[i].poster_path; 
			var release = dataPopular.results[i].release_date;
			var overview = dataPopular.results[i].overview;
			var urlPoster = dataPopular.results[i].poster_path;
			if ((urlPoster == "null") || (urlPoster == null) || (urlPoster == undefined)) {
				urlPoster = "http://placehold.it/300x450"; 
			} else {
				urlPoster = imageBase + 'w300' + urlPoster;
			}
			var id = dataPopular.results[i].id;
			var movieData = new SaveMovies(title, urlPoster, release, overview, id);
			moviesPopular.push(movieData);
		}
		console.log(moviesTopRated);	
		var targetDiv = document.querySelectorAll('.main-popular > div > div')
		for (var i = 0; i < moviesPopular.length; i++) {
			var poster = 'url(' + moviesPopular[i].imageURL + ')';
			$(targetDiv[i]).css({
				'background-image': poster,
				'background-repeat': 'no-repeat',
			});	
			var title = moviesPopular[i].title;
			var targetDivTitle = document.querySelectorAll('.popular-movie-info > h4');
			$(targetDivTitle[i]).text(title);
			var overview = moviesPopular[i].overview;
			var targetDivOverview = document.querySelectorAll('.popular-movie-info > p');
			$(targetDivOverview[i]).text(overview);
			var id = "https://www.themoviedb.org/movie/" + moviesPopular[i].id;
			var targetDivLink = document.querySelectorAll('.popular-movie-info');
			$(targetDivLink[i]).append('<a href=' + id + '> ...More </a>');	
		}	
		$('.main-popular > div > div').hover(function() {
			$(this).children().css('visibility', 'visible');
		}, function() {
			$(this).children().css('visibility', 'hidden');
		});
	});

	
	var moviesSearch = [];
	$('#search-button').click(function() {
		var searchInput = $('#searchInput').val();
		console.log(searchInput);
 		var urlSearch = apiBase + "/search/movie" + apiKey + "&query=" + searchInput;
		$('#search').css('visibility', 'visible');	
		$('#search-tab').css('visibility', 'visible');
		$.getJSON(urlSearch, function(dataSearch) {
		console.log(dataSearch.results);
		for (var i = 0; i < dataSearch.results.length; i++) {
			var title = dataSearch.results[i].title;
			var urlPoster = imageBase + 'w300' + dataSearch.results[i].poster_path; 
			var release = dataSearch.results[i].release_date;
			var overview = dataSearch.results[i].overview;
			var urlPoster = dataSearch.results[i].poster_path;
			if ((urlPoster == "null") || (urlPoster == null) || (urlPoster == undefined)) {
				urlPoster = "http://placehold.it/300x450"; 
			} else {
				urlPoster = imageBase + 'w300' + urlPoster;
			}
			var id = dataSearch.results[i].id;
			$('#search > div').append('<div class="col-sm-3 movie-item"><div class="search-movie-info"><h4></h4><p></p></div></div>');
			var movieData = new SaveMovies(title, urlPoster, release, overview, id);
			moviesSearch.push(movieData);
		}
		console.log(moviesSearch);
		
		var targetDiv = document.querySelectorAll('.main-search > div > div')
		for (var i = 0; i < moviesSearch.length; i++) {
			var poster = 'url(' + moviesSearch[i].imageURL + ')';
			$(targetDiv[i]).css({
				'background-image': poster,
				'background-repeat': 'no-repeat',
			});	
			var title = moviesSearch[i].title;
			var targetDivTitle = document.querySelectorAll('.search-movie-info > h4');
			$(targetDivTitle[i]).text(title);
			var overview = moviesSearch[i].overview;
			var targetDivOverview = document.querySelectorAll('.search-movie-info > p');
			$(targetDivOverview[i]).text(overview);
			var id = "https://www.themoviedb.org/movie/" + moviesSearch[i].id;
			var targetDivLink = document.querySelectorAll('.search-movie-info-movie-info');
			$(targetDivLink[i]).append('<a href=' + id + '> ...More </a>');	
		}	
		$('.main-search > div > div').hover(function() {
			$(this).children().css('visibility', 'visible');
		}, function() {
			$(this).children().css('visibility', 'hidden');
		});
	});

	})

function SaveMovies(title, urlPoster, release, overview, id) {
	this.title = title;
	this.imageURL = urlPoster; 
	this.release = release;
	this.overview = overview;
	this.id = id;
}

});

