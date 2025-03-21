let count = 0;
box=document.querySelector("div"); 
box.innerText = `beat me!\nyou clicked me ${count} times`;
function increment_count() {
    count++;
}

box.addEventListener("click", () => {
    increment_count()
    box.innerText = `beat me!\nyou clicked me ${count} times` ;
})

