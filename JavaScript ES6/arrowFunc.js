function sum(a, b) {
    return a + b;
}

const sum = function(a, b) {
    return a + b;
}

// Arrow function
// sau dấu => nếu cần xử lý code thì dùng {} và yêu cầu return
// nếu không thì viết luôn kết quả cần return như bên dưới
const sum = (a, b) => a + b;

const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 7));