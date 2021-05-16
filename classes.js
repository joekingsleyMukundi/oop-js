class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year=year;
    }

    //method
    getSummary (){
        return `${this.title} was written by ${this.author} on: ${this.year}`
    }
    getAge(){
        const age = new Date().getFullYear - this.year;
        return `this book is ${age} years old`
    }
    revise (year){
        this.year = year;
        this.revised = true
    }
    static bestbook (){
        return "joe has the best book store"
    }
}

const book = new Book("damu nyeusi", "joe","2013");
console.log(book);
console.log(book.getSummary());
book.revise(2021)
console.log(book);
console.log(Book.bestbook());