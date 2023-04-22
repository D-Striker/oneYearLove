const btn = document.querySelector(".btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");


btn.addEventListener("click", ()=>{
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'sound/pr3.mp3'; // Указываем путь к звуку "клика"
    audio.play() // Автоматически запускаем
    img1.style.display = "none";
    img2.style.display = "block";
})

window.addEventListener("keyup", function(e){
    if(e.code == "Space") {
        let audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'sound/pr3.mp3'; // Указываем путь к звуку "клика"
        audio.play() // Автоматически запускаем
        img1.style.display = "none";
        img2.style.display = "block";
    }
})
