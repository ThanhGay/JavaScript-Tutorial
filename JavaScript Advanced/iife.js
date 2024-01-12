// const callNow = function() {
//     console.log('Now');
// }

// callNow();


// IIFE
/* Là hàm chạy ngay
 * Trước IIFE phải có dấu ';'
 * giúp bảo toàn tính toàn vẹn dữ liệu
 */

(function () {                  // default
    console.log("NOW NOW");
})();

(() => {                        // arrow function
    console.log('NOW!');
})();

(function(message) {            // function has parameters
    console.log('Message: ' + message);
})('Duc Thanh');


// ví dụ sử dụng IIFE
const app = {
    cars: [],
    add(car) {
        this.cars.push(car);
    },
    edit(index, car) {
        this.cars[index] = car;
    },
    delete(index) {
        this.cars.slice(index, 1)
    }
}   //=> khi 'app.cars = null'  -> toàn bộ dữ liệu sẽ bị hỏng


// => Áp dụng IIFE để tạo tính private như OOP
const app_fix = (function() {
    const cars = []
    return {
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1)
        },
        get(index) {
            return cars[index]
        },
        getAll() {
            return cars
        },
    }
})()


