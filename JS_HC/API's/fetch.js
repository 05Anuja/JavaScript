fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    // console.log(data);
    data.map((val) => {
        console.log(val.name)
    })
})
.catch((error) => {
    console.log(error);
})