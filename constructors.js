function Book (title,year){
 this.title = title;
 this.year = year;
this.getSummary = function(){
    return `${this.title} was created in the year: ${this.year}`
}
this.reveiw = function (year){
    this.year = year;
    this.reviewed = true;
}
};

const book1 = new Book("damu nyeusi","2013");
console.log(book1)
console.log(
    book1.getSummary()
);

book1.reveiw('2018')
console.log(book1);
