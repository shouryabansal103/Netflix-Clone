let answer = document.getElementsByClassName("answer");
let cross_img = document.getElementsByClassName("cross-img");

function toggle_answer(e){

    if (answer[e].style.maxHeight !== "0px") {
        answer[e].style.maxHeight = "0px";
        answer[e].style.padding = "0px 1.5rem";
        answer[e].style.margin = "0px auto";
        cross_img[e].style.transform = "rotate(0deg)";
    }
    else {
        answer[e].style.maxHeight = "75rem";
        answer[e].style.padding = "1.5rem";
        answer[e].style.margin = "2px auto";
        cross_img[e].style.transform = "rotate(45deg)";
    }
    
    for (let i = 0; i < answer.length; i++) {
        if (i===e) {continue}
        answer[i].style.maxHeight = "0px";
        answer[i].style.padding = "0px 1.5rem";
        answer[i].style.margin = "0px auto";
        cross_img[i].style.transform = "rotate(0deg)";
    }
}