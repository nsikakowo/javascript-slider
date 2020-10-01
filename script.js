let slider = document.querySelector(".slider").children;
let prev = document.querySelector(".left");
let next = document.querySelector(".right");
let indicator = document.querySelector(".indicators");


//declaring iteration state
let index = 0;

nextSlide = () => {
    if(index == slider.length-1 ){
        index = 0;
    }else {
        index++;
    }
    changeSlide();
    updateIndicators();
    resetTimer();
}

prevSlide = () => {
    if (index == 0){
    index = slider.length-1;
    }else {
        index--;
    }
    changeSlide();
    updateIndicators();
    resetTimer();
}

indicateSlide = () => {
    for(let i = 0; i < slider.length; i++){
        const div = document.createElement("div");
                div.id = i;
                div.setAttribute('onclick','indicateChange(this)');
                indicator.appendChild(div);
                if(i == 0){
                    div.classList.add("active");
                }
    }
}

indicateSlide();

indicateChange = (element) => {
    index = element.id;
    changeSlide();
    updateIndicators();
    resetTimer();
}

updateIndicators = () => {
    for (let i = 0; i < indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

changeSlide = () => {
    for(let i = 0; i < slider.length; i++){
        slider[i].classList.remove("active");
    }
    slider[index].classList.add("active");
    
}

autoPlay = () => {
    nextSlide();
}

resetTimer = () => {
    clearInterval(timer);
    timer =  setInterval(autoPlay, 5000);
}

let timer = setInterval(autoPlay, 5000);


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);