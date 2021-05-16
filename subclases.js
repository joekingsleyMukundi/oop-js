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
//chilld class inheriting fron Book Class
class Magazine extends Book {
    constructor(title,author,year,month){
        //inheriting propertys
        super(title,author,year);
        this.month = month
    }
}
const mag1 = new Magazine("voge","joe","2019","may")
console.log(mag1);
console.log(mag1.getSummary())