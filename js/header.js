const hamburgerMenuIcon = document.getElementById('hamMenuIcon');
let alreadyopen = 0;


hamburgerMenuIcon.onclick = () => {
    if (alreadyopen == 0) {
        headerStuff('white');
        document.getElementsByClassName('headerFullScreen')[0].style.animationName = 'headerFullScreenBackground';
        document.getElementsByClassName('headerFullScreen')[0].style.display = 'flex';
        alreadyopen = 1;
    } else {
        headerStuff('black');
        document.getElementsByClassName('headerFullScreen')[0].style.animationName = 'headerFullScreenStop';
        setTimeout(() => {
            document.getElementsByClassName('headerFullScreen')[0].style.display = 'none';
            alreadyopen = 0;
        }, 400)
    }
}

function headerStuff(color) {
    hamburgerMenuIcon.classList.toggle("change");
    document.getElementsByTagName('body')[0].classList.toggle('overflowBlocked');
    for(let i = 1; i < 4; i++) {
        document.getElementsByClassName(`bar${i}`)[0].style.background = color;
    }
}