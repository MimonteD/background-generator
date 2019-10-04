let h3Tag = document.querySelector('h3');
let color1 = document.querySelector('[data-col="color1"]');
let color2 = document.querySelector('[data-col="color2"]');
let backcolor = document.getElementById('back');

color1.addEventListener('input', changeback) 

function changeback() {
    backcolor.style.background = 'linear-gradient(to right,' + color1.value +","
    + color2.value + ")";
    }

color2.addEventListener('input', changeback)
    