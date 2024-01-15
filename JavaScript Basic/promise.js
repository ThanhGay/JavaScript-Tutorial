// Bài toán: sau 1s sẽ in ra lần lượt 1, 2, 3, 4, ... , n.



// Step to create promise
//   1. new promise
//   2. executor phải trả lại 1 trong 2 resole hoặc reject
//      nếu không sẽ bị treo gây rò rỉ bộ nhớ

// 3 trạng thái của promise:
//   1. Pending: khi bắt đầu khai báo, không trả về resolve hay reject
//   2. Fulfilled: chuyển sang trạng thái này khi trả về resolve
//   3. Rejected: chuyển sang trạng thái này khi trả về reject


var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic processing
        // Success: call resolve()
        // Fail: call reject()
        resolve();
    }
);

promise
    .then(function() {      // duoc goi khi resolve
        console.log('Successfully!');
    })
    .catch(function() {     // duoc goi khi reject
        console.log('Failure!');
    })
    .finally(function() {   // duoc goi khi reject || resolve
        console.log('Done!');
    })



// Chain: tính chất chuỗi

promise
    .then(function () {
        // return 1;               // nếu ở đây không return thì sẽ nhảy xuống chuỗi ở dưới
                                // nếu ở đây return là 1 promise thì vẫn chạy promise này trước, rồi mới chạy xuống chuỗi tiếp theo
        return new Promise(function(resovle) {
            setTimeout(function() {
                resovle(1);
            }, 1000)
        });
    })
    .then(function(data) {
        console.log(data);
        return new Promise()
    })
    .catch(function() {
        console.log('Failure!');
    })
    .finally(function() {
        console.log('Done!');
    })



// =================== VD2 ====================
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
  
promise
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(reslove, reject) {
            reject('bug here');
        });
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    })
    

// ====================== VD3 =======================

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

const promise1 = new Promise(
    function (reslove) {
        setTimeout(function() {
            reslove([1]);
        }, 2000);
    }
)

var promise2 = new Promise (
    function(reslove) {
        setTimeout(function() {
            reslove([2, 3]);
        }, 5000);
    }
)

promise1
    .then(function(data) {
    console.log(data);
})
promise2
    .then(function(data) {
    console.log(data);
})

// nếu chạy lần lượt đoạn code trên sẽ mất tận 7s, mặc dù nó không hề bị phụ thuộc nhau
// nhưng nếu chạy Promise.all thì sẽ chỉ mất 5s

promise2 = Promise.reject('Co loi!')

Promise.all([promise1, promise2])
    .then(function(result) {
        let result1 = result[0];
        let result2 = result[1];
        console.log(result1.concat(result2));
    })
    .catch(function(error) {
        console.log(error);
    })


// Promise.all mà có một cái có lỗi thì ngay lập tức sẽ nhảy sang .catch luôn, không care đến những promise khác