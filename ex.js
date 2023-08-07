let container = document.querySelector(".container");

let set =setInterval(cntdown,1000);
let cnt = window.prompt("숫자 입력 : ")   

window.onload = function(){  
    set;
}


function cntdown(){
    cnt--;
    container.lastChild.nodeValue = (`${cnt+1}초 후에 이미지가 로드됩니다.`);
    if(cnt+1<=0){
        clearInterval(set);
        container.innerHTML = `<img src="images/hero15.png">`
    }
}
