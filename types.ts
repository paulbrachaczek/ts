//TS Types

//String
let aString: string;
aString = 'lorem';

//Number
let aNumber: number;
aNumber = 1;

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
enum MovieGerne {
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
    gerne: MovieGerne;
}


interface IMovieClass {
    title: string;
    director: string;
    year?: number;
    time?: number;
    gerne: string;
    showTitle(): string;
    borrow();
}

abstract class Rent {
    public title;
    abstract borrow():string;
    show
}

function MovieDecorator(constructor) {
    console.log('Utworzono klase Movie')
}

//@MovieDecorator
class Movie implements IMovieClass {
    public title: string;
    public director: string;
    public year: number;
    public time: number;
    public gerne: string;
    private category: string = "Film";

    constructor(_movie: IMovie) {
        this.title = _movie.title;
        this.director = _movie.director;
        this.year = _movie.year;
        this.time =   _movie.time;
        this.gerne = MovieGerne[_movie.gerne];
    }

    showTitle() {
        return `${this.category} ${this.title} to ${this.gerne} z ${this.year} roku.`;
    }
}  

let movie1 = {
    title: "Teksańska masakra piłą mechaniczną",
    director: 'Tobe Hooper',
    year: 1974,
    time: 83,
    gerne: MovieGerne.horror
}


// let m1 = new Movie(movie1);
// let m2 = new Movie({title: '120 dni sodomy', director: 'Pasolini', gerne: MovieGerne.horror})
// console.log(m1.showTitle());
// console.log(m2.showTitle());