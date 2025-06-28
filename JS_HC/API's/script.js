// The "old" way to fetch API data in JavaScript
const userBtn = document.querySelector("#userBtn");
const details = document.querySelector(".details");

const xhr = new XMLHttpRequest();
// const api = "https://api.github.com/users/hiteshchoudhary";
const api = "https://api.github.com/users/05Anuja";

xhr.open('GET', api);
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        userBtn.addEventListener('click', () => {
            details.innerHTML = `
            <div class = "outer-div">
                <h3>${data.name}</h3>
                <img src= ${data.avatar_url} class = "image"/>
                <p>GitHub ID: ${data.login}</p>
            </div>
            `
        })
    }
}
xhr.send();