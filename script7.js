function dblFunction(){
    alert("I got dublie clicked!!!");
}

const bt3 = document.getElementById('b3');
const td3 = document.getElementById('d3');

function f3() {
    console.log("button 3 was clicked");
    td3.style.backgroundColor = 'yellow';
    td3.innerText = "yeay";
}

bt3.addEventListener('click', f3);



