"use strict";

// 1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 2
let personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [

	],
	privat: false
};

if (personalMovieDB.count < 10) {
	alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	alert("Вы киноман");
} else {
	alert("Произошла ошибка");
};

// 3
for (let i = 0; i < 2; i++) {
	let lastWatchedfFilm = prompt("Один из последних просмотренных фильмов?", "");
	let valueOfLastWatchedFilm = prompt("На сколько оцените его?", "");

	if (lastWatchedfFilm === null || lastWatchedfFilm === "" || lastWatchedfFilm.length > 50 || valueOfLastWatchedFilm === null || valueOfLastWatchedFilm === "" || valueOfLastWatchedFilm.length > 50) {
		i--;
	} else {
		personalMovieDB.movies[lastWatchedfFilm] = valueOfLastWatchedFilm;
	}
}

console.log(personalMovieDB);