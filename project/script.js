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

// 3
const lastWatchedfFilm = prompt("Один из последних просмотренных фильмов?", "");
const valueOfLastWatchedFilm = prompt("На сколько оцените его?", "");
const lastWatchedfFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const valueOfLastWatchedFilm1 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastWatchedfFilm] = valueOfLastWatchedFilm;
personalMovieDB.movies[lastWatchedfFilm1] = valueOfLastWatchedFilm1;