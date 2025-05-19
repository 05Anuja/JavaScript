// let  api = "https://jsonplaceholder.typicode.com/todos";

// fetch(api).then(function(res) {
//     return res.json();
// }).then(function(data) {
//     // console.log(data);
//     let table = document.getElementById("table_body");
//     let x = data.map((item) => {
//         return `<tr>
//         <td>${item.id}</td>
//         <td>${item.title}</td>
//         <td>${item.completed ? 'True <span>✔️</span>' : 'False <span>❌</span>'}</td>
//         </tr>`
//     }).join("");
//     table.innerHTML = x;
// });

let api = "https://jsonplaceholder.typicode.com/todos";
 
fetch(api).then(function (res) {
    return res.json();
}).then(function (data) {
    let table = document.getElementById("table_body");
    let x = "";

    data.map((item) => {
        let complete_status = "";

        if (item.completed) {
            complete_status = 'True <span>✔️</span>';
        } else {
            complete_status = 'False <span>❌</span>';
        }

        x += `<tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${complete_status}</td>
        </tr>`;
    }).join("");

    table.innerHTML = x;

});