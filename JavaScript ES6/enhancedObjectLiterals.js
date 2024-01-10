// Giúp
// 1. Định nghĩa key: value cho Object
// 2. Định nghĩa method cho Object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'javascipt';
var price = 1000;

// Basic
var course = {
    name: name,
    price: price,

    getName: function() {
        return this.name;
    }

    
};

// Enhanced
var course = {
    name,
    price,

    getName() {
        return this.name;
    }
};


// 3.
var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000,
};

// giống với cách viết này:
const course = {
    name: 'JavaScript',
    price: 1000,
}


console.log(course.getName());