let body = document.querySelector("body");
let div = document.createElement("div");

let h1 = document.createElement("h1");
let userAgentDataText = document.createTextNode(`Type of device: ${navigator.userAgentData["platform"]}`);
h1.appendChild(userAgentDataText)

if (navigator.userAgentData["platform"] === "Windows") {
    div.appendChild(h1)
    body.appendChild(div);
} else {
    div.appendChild(h1)
    body.appendChild(div);
}


let h12 = document.createElement("h1");
let userAgentDataText2 = document.createTextNode("mobile");
let userAgentDataText3 = document.createTextNode("not mobile");



if (navigator.userAgentData["mobile"] === true) {
    h12.appendChild(userAgentDataText2)
    div.appendChild(h12)
    body.appendChild(div);
} else {
    h12.appendChild(userAgentDataText3)
    div.appendChild(h12)
    body.appendChild(div);
}