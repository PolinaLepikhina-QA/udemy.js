"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let lastWatchedfFilm = prompt("Один из последних просмотренных фильмов?", "");
		let valueOfLastWatchedFilm = prompt("На сколько оцените его?", "");
	
		if (lastWatchedfFilm === null || lastWatchedfFilm === "" || lastWatchedfFilm.length > 50 || valueOfLastWatchedFilm === null || valueOfLastWatchedFilm === "" || valueOfLastWatchedFilm.length > 50) {
			i--;
		} else {
			personalMovieDB.movies[lastWatchedfFilm] = valueOfLastWatchedFilm;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		alert("Вы киноман");
	} else {
		alert("Произошла ошибка");
	};
}

detectPersonalLevel ();

function showMyDB(hidden) {
	if (hidden != true) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
	}
}

writeYourGenres();