const app = require("express")();

const Book ={
    title:"book1",
    auther:'john doe',
    date:"2013",
    getSummary:function(){
        return `${this.title} was written by ${this.auther} this yea ${this.date}`
    }
}

console.log(Book.getSummary())

app.listen(3000,()=>{console.log("live")})