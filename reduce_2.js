// Làm phẳng mảng - Flat
var deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = deptArray.reduce(function(flatOutput, deptItem) {
    return flatOutput.concat(deptItem);
}, []);

// console.log(deptArray);
// console.log(flatArray);


// Lấy ra các khóa học, đưa vào mảng mới
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 0,
                title: 'HTML, CSS',
            },
            {
                id: 1,
                title: 'JavaScript',
            },
        ],
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 0,
                title: 'PHP',
            },
            {
                id: 1,
                title: 'NodeJS',
            }
        ]
    }
]


var newCourses = topics.reduce(function(course, topic) {
    return course.concat(topic.courses);
}, [])
console.log(newCourses);