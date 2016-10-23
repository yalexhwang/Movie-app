## Movie-app
A practice using an API: a movie app pulling data from The Movie DB API. 
Displays movies now playing on a landing page, with options to view most popular movies and top rated movies
Option to serach for a movie (search keyword passed as a query)

### Technologies & Frameworks 
HTML, CSS, Bootstrap, JavaScript, jQuery

### Note
Handled data using an object constructor; data for each movies are turned into an object 

```javascript
function SaveMovies(title, urlPoster, release, overview, id) {
	this.title = title;
	this.imageURL = urlPoster; 
	this.release = release;
	this.overview = overview;
	this.id = id;
}
```
