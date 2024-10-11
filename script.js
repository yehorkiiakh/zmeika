const link = document.querySelector(".windows");
const menu = document.querySelector(".a");

link.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else{
        menu.style.display = "none";
    
    }
})

const linkFolder = document.querySelector(".folder");
const menuFolder = document.querySelector(".b");

linkFolder.addEventListener("click", function() {
    if (menuFolder.style.display === "none") {
        menuFolder.style.display = "block";
        console.log("asd")
    } else{
        menuFolder.style.display = "none";
        console.log("asd")
    }
})