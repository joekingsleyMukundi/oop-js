function Book (title,year){
    this.title = title;
    this.year = year;
   };

   Book.prototype.getSummary = function(){
    return `${this.title} was created in the year: ${this.year}`
   }
   //inheritance
   function Magazine (title,year,month){
       Book.call(this,title,year);
       this.month = month;
   }

   Magazine.prototype = Object.create(Book.prototype)
   const mag1 = new Magazine("dora","2010","month")
   console.log(mag1)