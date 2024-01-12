console.log(age);           // undefined
console.log(fullname);      // fullname is not defined

var age = 16;


console.log(sum(4, 6));     // 10
function sum(a, b) {
    return a + b;
}




// var, let, const, function declare đều được hoisting
// var được hoist (khỏi tạo giá trị) bằng 'undefined'
// function declare được hoist
// let, const có được hoist nhưng không được khởi tạo giá trị

{
    console.log(fullname);
    let fullname = 'Nguyen Van A'
}


const counter1 = makeCounter();

console.log(counter1());

function makeCounter() {
    let counter = 0;

    return increase;

    function increase() {
        return ++counter;
    }
}
