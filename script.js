//Declaring varialbles 

let slider = document.querySelector(".slider").children;
let prev = document.querySelector(".left");
let next = document.querySelector(".right");
let indicator = document.querySelector(".indicators");


//declaring iteration state
let index = 0;

//next button function
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


//previous button funtion
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


//indicat current slide function
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

//add id to indicator function
indicateChange = (element) => {
    index = element.id;
    changeSlide();
    updateIndicators();
    resetTimer();
}

//indicate current slide on control function
updateIndicators = () => {
    for (let i = 0; i < indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}


//change slide function
changeSlide = () => {
    for(let i = 0; i < slider.length; i++){
        slider[i].classList.remove("active");
    }
    slider[index].classList.add("active");
    
}


// autoplay slide function
autoPlay = () => {
    nextSlide();
}

//reset slide timer when any slide is clicked
resetTimer = () => {
    clearInterval(timer);
    timer =  setInterval(autoPlay, 5000);
}

//Declare timer
let timer = setInterval(autoPlay, 5000);

//event listerners to triger controls
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);