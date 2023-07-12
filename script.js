let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");


let listContainer = document.querySelector(".list");


let date = new Date();

const [timestamp, apikey, hashValue] = [ts, publicKey, hashVal];

function displayWords(value) {
    input.value = value;
}

function removeElements() {
    listContainer.innerHTML
}

input.addEventListener("keyup", async () => {
    removeElements();
    if (input.value.length < 4)
    return false;
})

const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${hashValue}&nameStartWith=$={input.value}`;

const response = await fetch(url);
const jsonData = await response.json();

jsonData.data["results"].forEach((result) => {
    let name =result.name;
    let div = document.createElement("div");
    div.style.cursor = "pointer";
    div.classList.add("sutocomplete-items");
    div.setAttribute("onclick", "displayWords('" + name + " ')");
    let word = "<b>" + name.substr(0, input.value.length) + "</b>";
    word += name,substr(input.value.length);
    div.innerHtml = `<p class="item">${word}</p>`;
    listContainer.appendChild(div);
});