// =================== VD1 =================
const teacher = {
    firstname: 'Minh',
    lastname: 'Thu',
};

const me = {
    firstname: 'Duc',
    lastname: 'Thanh',
    showFullName() {
        console.log(`${this.firstname} ${this.lastname}`);
    },
};

me.showFullName.call(teacher)



// ================== VD2 =====================
// 'use strict'
// trong strict mode thì vẫn có 'this' nếu được bind

this.firstname = 'Duc'
this.lastname = 'Thanh'

function showFullName() {
    console.log(`${this.firstname} ${this.lastname}`);
}

showFullName.call(this)



// Sử dụng .call() để thể hiện tính kế thừa trong OOP
function Animals (name, weight) {
    this.name = name;
    this.weight = weight;
};

function Chicken (name, weight, legs) {
    Animals.call(this, name, weight);
    this.legs = legs;
};

const chicken = new Chicken('DucThanh', 50, 2);
console.log(chicken);
