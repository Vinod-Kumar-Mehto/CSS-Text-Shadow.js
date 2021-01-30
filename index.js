const hero = document.querySelector(".shadow");
const text = document.querySelector("h1");
const walk = 100;

function shadow(e){
    console.log(this);
    console.log(e.target);
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(e.offsetY);
        if(this !== e.target){

            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;

        };
         const xWalk = Math.round((x / width * walk) - (walk / 2));
         const yWalk = Math.round((y / height * walk) - (walk / 2));
            text.style.textShadow = `
            ${xWalk}px ${yWalk}px 0  rgb(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px 0  rgb(0,255,255,0.7) 
            `;
    };

    hero.addEventListener("mousemove", shadow)