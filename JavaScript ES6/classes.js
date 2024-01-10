// function Course(name, price) {
//     this.name = name;
//     this.price = price;

//     this.getName = function () {
//         return this.name;
//     }
// }

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }   
    
    getPrice() {
        return this.price;
    }

}

var jsCourse = new Course('Javascript', 1000);
console.log((jsCourse));