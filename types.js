//TS Types
//String
var aString;
aString = 'lorem';
//Number
var aNumber;
aNumber = 1;
//Boolean
var aBool;
aBool = true;
//Any
var aAny;
aAny = 5;
aAny = 'lorem';
//Arrays
var arrString;
var arrString2;
var arrNumber;
arrString = ['lorem', 'ipsum'];
//Tuple
var aTuple;
aTuple = ['lorem', 1];
//Viod
var aaVoid = null;
function aVoid() {
    console.log('abc');
}
;
//Object
var aObject;
aObject = {};
//Never 
var error = function (message) {
    throw new Error(message);
};
var sing = function () {
    while (true) {
        console.log("Never gonna give you up");
        console.log("Never gonna let you down");
        console.log("Never gonna run around and desert you");
        console.log("Never gonna make you cry");
        console.log("Never gonna say goodbye");
        console.log("Never gonna tell a lie and hurt you");
    }
};
//Enum
var MovieGerne;
(function (MovieGerne) {
    MovieGerne[MovieGerne["romantic"] = 0] = "romantic";
    MovieGerne[MovieGerne["horror"] = 1] = "horror";
    MovieGerne[MovieGerne["komedia"] = 2] = "komedia";
})(MovieGerne || (MovieGerne = {}));
//console.log(MovieGerne.horror);
//console.log(MovieGerne[1]);
var Coffee;
(function (Coffee) {
    Coffee["cappuccino"] = "capuccino";
    Coffee["black"] = "czarna";
    Coffee["flatwhite"] = "bia\u0142a";
    Coffee["espresso"] = "espresso";
})(Coffee || (Coffee = {}));
var book = {
    title: 'Zbrodnia i kara',
    author: 'Fiodor Dostojewski',
    pages: 608,
    year: 1866
};
var aBook = function (book) {
    return book.title;
};
// let aBook = function(book: Book){
//     return book.title;
// };
//console.log(aBook(book));
//Generics
var aGeneric = function (arr) {
    return arr;
};
//console.log(aGeneric([1,2,3]))
//console.log(aGeneric('dwa'));
//Functions
var aFunction = function (a, b) {
    return (a + b).toString();
};
var aFunction2 = function (a, b) {
    if (a === void 0) { a = 'Paweł'; }
    if (b == undefined) {
        return a;
    }
    else {
        return a + ' ' + b;
    }
};
var Rent = /** @class */ (function () {
    function Rent() {
    }
    return Rent;
}());
function MovieDecorator(constructor) {
    console.log('Utworzono klase Movie');
}
//@MovieDecorator
var Movie = /** @class */ (function () {
    function Movie(_movie) {
        this.category = "Film";
        this.title = _movie.title;
        this.director = _movie.director;
        this.year = _movie.year;
        this.time = _movie.time;
        this.gerne = MovieGerne[_movie.gerne];
    }
    Movie.prototype.showTitle = function () {
        return this.category + " " + this.title + " to " + this.gerne + " z " + this.year + " roku.";
    };
    return Movie;
}());
var movie1 = {
    title: "Teksańska masakra piłą mechaniczną",
    director: 'Tobe Hooper',
    year: 1974,
    time: 83,
    gerne: MovieGerne.horror
};
// let m1 = new Movie(movie1);
// let m2 = new Movie({title: '120 dni sodomy', director: 'Pasolini', gerne: MovieGerne.horror})
// console.log(m1.showTitle());
// console.log(m2.showTitle());
