// const promise1 = new Promise((resolve, reject) => {
//   /* 
//     Do an async task
//     Ex. DB calls, cryptography, network calls
//     */
//   setTimeout(() => {
//     const date = new Date();
//     console.log(date.toLocaleDateString());
//     console.log("Async Task Complete");
//     resolve();
//   }, 1000);
// });

// promise1.then(() => {
//   console.log("Promise Consumed");
// });
// // console.log(promise1);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Asyn Task 2");
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("Promise2 Completed");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "Anuja",
//       email: "anuja@gmail.com",
//     });
//   }, 3000);
// });

// promise3.then((user) => {
//   console.log(user);
//   console.log("Promise3 Completed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "Anuja",
//         password: "anuja@1312",
//       });
//     } else {
//       reject("ERROR: Something went wrong!");
//     }
//   }, 100);
// })
//   .then((user) => {
//     return user;
//   })
//   .then((user) => {
//     console.log(`Username: ${user.username}`);
//     console.log(`Password: ${user.password}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise is either resolved or rejected");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "JavaScript",
//         password: "JS@1312",
//       });
//     } else {
//       reject("ERROR: JS went wrong!");
//     }
//   }, 10);
// });

// const consumePromise5 = async () => {
//     try {
//         const response = await promise5;
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise5()

const getAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    data.map((val) => {
        console.log(val.name);
    })
}

getAllUsers();