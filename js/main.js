color = ["red", "green", "blue", "#e4e4e4"];
btn = document.getElementById("click");
bodyColor = document.querySelector(".color");

btn.addEventListener('click', function(){
    let random = randomNo();
    bodyColor.textContent = color[random];
    document.body.style.backgroundColor = color[random];
}
);

const randomNo = () => {
   return Math.floor(Math.random() * color.length);
}


