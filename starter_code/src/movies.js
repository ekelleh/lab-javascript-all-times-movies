/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function hoursToMinutes(hourString) {
    hourstring = parseInt(hourString.split("h")) * 60;
    return hourstring;
}

function minutesToMinutes(minutesString) {
    minutesString = parseInt(minutesString.split("min"));
    return minutesString;
}

function turnStringToMinutes(durationString) {
    var timeSplit = durationString.split(" ");
    var hoursMinutes = hoursToMinutes(timeSplit[0]);
    var minutes = minutesToMinutes(timeSplit[1]);

    return minutes + hoursMinutes;
}

const turnHoursToMinutes = movies => {
    return movies.map(function(movie) {
        const durationMinutes = turnStringToMinutes(movie.duration);
        const newMovie = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: durationMinutes,
            genre: movie.genre,
            rate: movie.rate
        };
        return newMovie;
    });
};

// Get the average of all rates with 2 decimals
// using reduce
// duration in movies format:  rate: '9.3',

const ratesAverage = movies => {
    const x = movies.reduce(function(averageRate, movie) {
        return averageRate + parseFloat(movie.rate) / movies.length;
    }, 0);

    return x.toFixed(2);
};

console.log(ratesAverage(movies));

// Get the average of Drama Movies

const dramaMoviesRate = movies => {
    let dramaAmount = 0;
    const drama = movies.reduce((averageRate, movie) => {
        if (movie.genre.includes("Drama")) {
            dramaAmount = dramaAmount + 1;
            return averageRate + parseFloat(movie.rate);
        } else {
            return averageRate;
        }
    }, 0);
    return parseFloat((drama / dramaAmount).toFixed(2));
};

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

const orderByDuration = movies => {
    var newMovies = turnHoursToMinutes(movies);
    return newMovies.sort(function(a, b) {
        if (a.duration > b.duration) {
            return 1;
        } else if (b.duration > a.duration) {
            return -1;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
};

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
