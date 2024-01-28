"use strict";

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},

	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			let lastWatchedfFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
			let valueOfLastWatchedFilm = prompt("На сколько оцените его?", "");
		
			if (lastWatchedfFilm === null || lastWatchedfFilm === "" || lastWatchedfFilm.length > 50 || valueOfLastWatchedFilm === null || valueOfLastWatchedFilm === "") {
				i--;
			} else {
				personalMovieDB.movies[lastWatchedfFilm] = valueOfLastWatchedFilm;
			}
		}
	},

	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			alert("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
			alert("Вы киноман");
		} else {
			alert("Произошла ошибка");
		};
	},

	showMyDB: function(hidden) {
		if (hidden != true) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat != true) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	},

	writeYourGenres: function() {
			for (let i = 1; i <= 3; i++) {
				let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
				if (genre == null || genre == "") {
					console.log("Вы ввели некорректные данные");
					i--;
				} else {
					personalMovieDB.genres[i - 1] = genre;
				}
			}
			personalMovieDB.genres.forEach((genre, j) => {
				console.log(`Любимый жанр ${j + 1} - это ${genre}`);
			});
	}
};
