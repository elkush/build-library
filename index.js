//this is the parent class Media

class Media {
    //properties of the Media
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    //getter function for all the properties
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  //methods on Media
    getAverageRating() {
      return this._ratings.reduce((accumulator, ratings) => accumulator + ratings) / this._ratings.length ;
    //return sum / this._ratings.length;
    }
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(newrating) {
      this._ratings.push(newrating);
    }
  }
  
  // This is the child class Book which inherit parent Media properties, getters and methods.
  
  class Book extends Media {
    constructor (author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  }
  
  // This is the child class Media which inherit parent Media properties, getters and methods.
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  }
  // This is the child class CD which inherit parent Media properties, getters and methods.
  class Cd extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = [songs];
    }
    get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  }
  //Create a new book istance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything.author);
  console.log(historyOfEverything.title);
  console.log(historyOfEverything.pages);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5)
  historyOfEverything.getAverageRating();
  console.log(historyOfEverything.getAverageRating());
  
  //create a new movie instance
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  console.log(speed.director);
  console.log(speed.title);
  console.log(speed.runTime);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5)
  speed.getAverageRating();
  console.log(speed.getAverageRating());