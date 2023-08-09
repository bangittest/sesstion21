let data = { id: 1, name: "Nguyen Van A" }


localStorage.setItem("data", JSON.stringify(data));
localStorage.setItem("data", JSON.stringify(data));
localStorage.setItem("data", JSON.stringify(data));
localStorage.setItem("data", JSON.stringify(data));
//lay dl ve
let dataGetLocal = JSON.parse(localStorage.getItem("data"));
console.log(dataGetLocal);