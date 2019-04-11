var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let aNumber;
aNumber = 1;
let aBool;
aBool = true;
let aAny;
aAny = 5;
aAny = 'lorem';
let arrString;
let arrString2;
let arrNumber;
arrString = ['lorem', 'ipsum'];
let aTuple;
aTuple = ['lorem', 1];
let aaVoid = null;
function aVoid() {
    console.log('abc');
}
;
let aObject;
aObject = {};
let error = function (message) {
    throw new Error(message);
};
const sing = function () {
    while (true) {
        console.log("Never gonna give you up");
        console.log("Never gonna let you down");
        console.log("Never gonna run around and desert you");
        console.log("Never gonna make you cry");
        console.log("Never gonna say goodbye");
        console.log("Never gonna tell a lie and hurt you");
    }
};
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["romantic"] = 0] = "romantic";
    MovieGenre[MovieGenre["horror"] = 1] = "horror";
    MovieGenre[MovieGenre["komedia"] = 2] = "komedia";
})(MovieGenre || (MovieGenre = {}));
var Coffee;
(function (Coffee) {
    Coffee["cappuccino"] = "capuccino";
    Coffee["black"] = "czarna";
    Coffee["flatwhite"] = "bia\u0142a";
    Coffee["espresso"] = "espresso";
})(Coffee || (Coffee = {}));
let aUnion;
aUnion = 1;
aUnion = 'lorem';
let book = {
    title: 'Zbrodnia i kara',
    author: 'Fiodor Dostojewski',
    pages: 608,
    year: 1866
};
let aBook = function (book) {
    return book.title;
};
let aGeneric = function (arr) {
    return arr;
};
let aFunction = function (a, b) {
    return (a + b).toString();
};
let aFunction2 = function (a = 'Paweł', b) {
    if (b == undefined) {
        return a;
    }
    else {
        return a + ' ' + b;
    }
};
class Rental {
    print() {
        console.log(this.borrow());
    }
}
function MovieDecorator(constructor) {
    console.log('Klasa Movie została zadeklarowana');
}
let Movie = class Movie {
    constructor(_movie) {
        this.category = "Film";
        this.title = _movie.title;
        this.director = _movie.director;
        this.year = _movie.year;
        this.time = _movie.time;
        this.genre = MovieGenre[_movie.genre];
    }
    showTitle() {
        return `${this.category} ${this.title} to ${this.genre} z ${this.year} roku.`;
    }
};
Movie = __decorate([
    MovieDecorator
], Movie);
let movie1 = {
    title: "Teksańska masakra piłą mechaniczną",
    director: 'Tobe Hooper',
    year: 1974,
    time: 83,
    genre: MovieGenre.horror
};
let m1 = new Movie(movie1);
