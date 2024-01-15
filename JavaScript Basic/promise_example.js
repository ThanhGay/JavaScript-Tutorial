var users = [
    {
        id: 0,
        name: 'Kien Dam',
    },
    {
        id: 1,
        name: 'Duc Thanh',
    },
    {
        id: 2,
        name: 'Hung Dam',
    },
    //....

];


var comments = [
    {
        id: 1,
        user_id: 0,
        content: 'Anh Son chua ra video :(',
    },
    {
        id: 2,
        user_id: 1,
        content: 'Vua ra xong em ei!',
    },
    {
        id: 3,
        user_id: 0,
        content: 'Oke anh oi, em thay roi',
    },
];


// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user tương ứng

// Cần nắm vững kiến thức về
// - Array
// - Function, callback
// - Promise
// - DOM elements

// Fake API
// function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 2000);
//     });
// };

// function getUsersByIds(userIds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let result = users.filter((user) => {
//                 return userIds.includes(user.id)
//             })
//             resolve(result);
//         }, 1000);
//     });
// };

// getComments()
//     .then(comments => {
//         var userIDs = comments.map((comments) => {
//             return comments.user_id;
//         })

//         return getUsersByIds(userIDs);
//     })
//     .then(users => {
//         return {
//             users: users,
//             comments: comments,
//         }}
//     )
//     .then(data => {
//         var commentBlock = document.getElementById('comment-block');
//         var html = '';

//         data.comments.forEach((comment) => {
//             let user = data.users.find((user) => {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         commentBlock.innerHTML = html;
//     })


// ============ Vận dụng ================

function getUsersByIds(userIds, resolve) {
    setTimeout(() => {
        let result = users.filter((user) => {
            return userIds.includes(user.id)
        })
        resolve(result);
    }, 1000);
};


const promiseGetComments = new Promise((resolve) => {
    setTimeout(() => {
        resolve(comments);
    }, 2000);
});

const promiseGetUserById = new Promise((resolve) => {
    let userIDs = comments.map((comments) => {
        return comments.user_id;
    })
    getUsersByIds(userIDs, resolve);
});

generate = (data) => {
    var commentBlock = document.getElementById('comment-block');
    var html = '';

    data.comments.forEach((comment) => {
        let user = data.users.find((user) => {
            return user.id === comment.user_id;
        });
        html += `<li>${user.name}: ${comment.content}</li>`;
    });

    commentBlock.innerHTML = html;
};


const execAsync = async () => {
    const comments = await promiseGetComments;

    const result = await promiseGetUserById;
    const usersComment = {
        users: result,
        comments: comments,
    }
    generate(usersComment);
}

execAsync();