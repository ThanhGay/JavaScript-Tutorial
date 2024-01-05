var courses = [
    {
        id: 1,
        name: 'PHP',
        coin: 150,
    },
    {
        id: 2,
        name: 'HTML',
        coin: 100,
    },
    {
        id: 3,
        name: 'Python',
        coin: 100,
    },
    {
        id: 4,
        name: 'JavaScript',
        coin: 300,
    }
]

function courseHandler(course, index) {
    return {
        id: index,
        name: `Course: ${course.name}`,
        coin: course.coin,
        coinText: `Price: ${course.coin}`,
    };
}

var newCourse = courses.map(courseHandler);
// console.log(newCourse);


var totalCoin = newCourse.reduce((a, b) => a + b.coin, 0);

console.log(totalCoin);