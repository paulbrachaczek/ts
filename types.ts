//TS Types

//String
// let aString: string;
// aString = 'lorem';

// let aString = 'lorem';
// aString = 1;

//Number
let aNumber: number;
aNumber = 1;
//aNumber = 0b101010;


//Boolean
let aBool: boolean;
aBool = true;

//Any
let aAny:any;
aAny = 5;
aAny = 'lorem';

//Arrays
let arrString: string[];
let arrString2: Array<string>;
let arrNumber: number[];

arrString = ['lorem', 'ipsum']

//Tuple
let aTuple: [string, number];

aTuple = ['lorem', 1]

//Viod
let aaVoid: void = null;
function aVoid() :void {
    console.log('abc');
};

//Object
let aObject: object;
aObject = {};

//Never 
let error = function(message: string): never {
    throw new Error(message);
}
const sing = function(): never {
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
enum MovieGenre {
    romantic,
    horror,
    komedia
} 
//console.log(MovieGerne.horror);
//console.log(MovieGerne[1]);

enum Coffee {
    cappuccino = 'capuccino',
    black = 'czarna',
    flatwhite = 'biała',
    espresso = 'espresso'
}
//console.log(Coffee.black);

//Union types
let aUnion: string|number;

aUnion = 1;
aUnion = 'lorem';

//Interfaces
interface Book {
    title: string;
    author: string;
    pages?: number;
    year?: number;
}

let book = {
    title: 'Zbrodnia i kara',
    author: 'Fiodor Dostojewski',
    pages: 608,
    year: 1866
};

let aBook = function(book: { title: string, author: string, pages: number, year: number }){
    return book.title;
};

// let aBook = function(book: Book){
//     return book.title;
// };

//console.log(aBook(book));

//Generics

let aGeneric = function<T>(arr: T): T {
    return arr;
}

//console.log(aGeneric([1,2,3]))
//console.log(aGeneric('dwa'));

//Functions

let aFunction = function(a: number, b: number): string {
    return (a+b).toString();
}

let aFunction2 = function(a: string = 'Paweł', b?: string  ): string {
    if (b == undefined){
        return a;
    }
    else {
        return a+' '+b;
    }
} 

//console.log(aFunction2())

//Classes

interface IMovie {
    title: string;
    director: string;
    year?: number;
    time?: number;
    genre: MovieGenre;
}


interface IMovieClass {
    title: string;
    director: string;
    year?: number;
    time?: number;
    genre: string;
    showTitle(): string;
}

abstract class Rental {
    abstract borrow() :string;
    print() {
        console.log(this.borrow());
    }
}

function MovieDecorator(constructor: Function) {
    console.log('Klasa Movie została zadeklarowana')
}

@MovieDecorator
class Movie implements IMovieClass {
    public title: string;
    public director: string;
    public year: number;
    public time: number;
    public genre: string;
    private category: string = "Film";

    constructor(_movie: IMovie) {
        //super();
        this.title = _movie.title;
        this.director = _movie.director;
        this.year = _movie.year;
        this.time =   _movie.time;
        this.genre = MovieGenre[_movie.genre];
    }

    showTitle(): string {
        return `${this.category} ${this.title} to ${this.genre} z ${this.year} roku.`;
    }

    // borrow(): string {
    //     return `Wyporzyczyłeś ${this.title}.`
    // }

    // static hello(): string {
    //     console.log('hello');
    // }
}  

let movie1 = {
    title: "Teksańska masakra piłą mechaniczną",
    director: 'Tobe Hooper',
    year: 1974,
    time: 83,
    genre: MovieGenre.horror
}


let m1 = new Movie(movie1);
// let m2 = new Movie({title: '120 dni sodomy', director: 'Pasolini', genre: MovieGerne.horror})
// console.log(m1.showTitle());
// console.log(m2.showTitle());
//m1.print();
//Movie.hello();