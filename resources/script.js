let balls = document.getElementsByClassName('ball');

let reset = (event) => {
    for (let i = 0; i < balls.length; i++) {
        let ball = balls.item(i);
        ball.style.margin = '';
        ball.style.borderWidth = '';
        ball.style.borderRadius = '';

        ball.style.zIndex = '';
        if (ball === event.target) {event.target.style.zIndex = '10';};
    }
    event.target.removeEventListener("click", reset);
    
};

let fillScreen = (event) => {
    for (let i = 0; i < balls.length; i++) {
        let ball = balls.item(i);
        if ([0,1,2].includes(i)) {
            ball.style.marginTop = '150px';
        }
        if ([3,4,5].includes(i)) {
            ball.style.marginTop = '400px';
        }
        if ([6,7,8].includes(i)) {
            ball.style.marginTop = '650px';
        }
        if ([0,3,6].includes(i)) {
            ball.style.marginLeft = '150px';
        }
        if ([1,4,7].includes(i)) {
            ball.style.marginLeft = '400px';
        }
        if ([2,5,8].includes(i)) {
            ball.style.marginLeft = '650px';
        }
        ball.style.borderWidth = '0px';
    
    }
    event.target.style.margin = '0px';
    event.target.style.borderRadius = '0';
    event.target.style.borderWidth = '400px';
    event.target.style.zIndex = '50';
    event.target.addEventListener("click", reset)
};

for (let i = 0; i < balls.length; i++) {
    balls.item(i).addEventListener("click", fillScreen);
}