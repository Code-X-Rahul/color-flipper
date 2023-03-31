hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn = document.getElementById("click");
bodyColor = document.querySelector(".color");


btn.addEventListener('click', function(){
    let hexColor = "#";
    for(let i = 0;i<6;i++){
        hexColor += hex[randomNo()];
    }
    bodyColor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}
);

const randomNo = () => {
   return Math.floor(Math.random() * hex.length);
}