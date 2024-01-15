
// function httpGetAsync(theUrl, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp);
//     };
//     xmlHttp.open('GET', theUrl, true);
//     xmlHttp.send(null);
// };


// // =================== Callback hell =======================
// // httpGetAsync('https://picsum.photos/200/300', (data) => {
// //     console.log(data);
// //     document.getElementById('img_1').setAttribute('src', data.responseURL);

// //     httpGetAsync('https://picsum.photos/200/300', (data) => {
// //         console.log(data);
// //         document.getElementById('img_2').setAttribute('src', data.responseURL);

// //         httpGetAsync('https://picsum.photos/200/300', (data) => {
// //             console.log(data);
// //             document.getElementById('img_3').setAttribute('src', data.responseURL);
// //         });
// //     });
// // });



// // ====================== Promise =======================
// function httpGetAsync(theUrl, resolve, reject) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             resolve(xmlHttp);
//     };
//     xmlHttp.open('GET', theUrl, true);
//     xmlHttp.send(null);
// };

// const currentPromise = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve);
// });

// const promise2 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve);
// });

// const promise3 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', resolve);
// });


// // currentPromise
// //     .then((data) => {
// //         console.log(data);
// //         document.getElementById('img_1').setAttribute('src', data.responseURL);

// //         return promise2;
// //     })
// //     .then(data => {
// //         console.log(data);
// //         document.getElementById('img_2').setAttribute('src', data.responseURL);

// //         return promise3;
// //     })
// //     .then(data => {
// //         console.log(data);
// //         document.getElementById('img_3').setAttribute('src', data.responseURL);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     })


// // ===================== Async await ===================
// const executeAsync = async () => {
//     try {
//         const response = await currentPromise;
//         document.getElementById('img_1').setAttribute('src', response.responseURL);

//         const response2 = await promise2;
//         document.getElementById('img_2').setAttribute('src', response2.responseURL);

//         const response3 = await promise3;
//         document.getElementById('img_3').setAttribute('src', response3.responseURL);
    
//     } catch (err) {
//         console.log(err);
//     }
// }

// executeAsync();




// ====================== My check ======================
const promise1 = new Promise(
    function (reslove) {
        setTimeout(function() {
            reslove('First API');
        }, 3000);
    }
)
const promise2 = new Promise((resolve) => {
    setTimeout(function() {
        resolve('Second API');
    }, 7000);
})

// promise1
//     .then(data => {
//         console.log(data);
//         return promise2;
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err))

const checkAsync = async () => {
    let secondAPI = await promise2;
    console.log(secondAPI);

    let firstAPI = await promise1;
    console.log(firstAPI);
}

checkAsync();