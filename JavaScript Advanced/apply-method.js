// Apply làm được hết các chức năng mà call có thể làm
// apply nhận đối số dạng mảng


const teacher = {
    firstname: 'Minh',
    lastname: 'Thu',
};

function greet(greeting, message) {
    return `${greeting} ${this.firstname} ${this.lastname}. ${message}`;
}

let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ?'])
console.log(result);

result = greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì thế ạ?');
console.log(result);