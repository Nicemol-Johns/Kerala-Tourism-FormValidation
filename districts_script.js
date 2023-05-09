const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const book = document.querySelector('#book');
const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');
const paper7 = document.querySelector('#p7');
const paper8 = document.querySelector('#p8');
const paper9 = document.querySelector('#p9');
const paper10 = document.querySelector('#p10');
const paper11 = document.querySelector('#p11');
const paper12 = document.querySelector('#p12');
const paper13 = document.querySelector('#p13');
const paper14 = document.querySelector('#p14');
const paper15 = document.querySelector('#p15');

nextButton.addEventListener('click',goNextPage());
prevButton.addEventListener('click',goPrevPage());

let currentPage = 1;
let numberOfPapers=15;
let maxPages = currentPage+1;

function openBook(){

}
function closeBook(){

}
function goNextPage(){
    if(currentPage < maxPages){
        switch(currentPage){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                break;
            case 2:
                paper2.classList.add("flipped");
                break;
            case 3:
                paper4.classList.add("flipped");
                break;
            case 4:
                paper3.classList.add("flipped");
                break;
            case 5:
                paper5.classList.add("flipped");
                break;
            case 6:
                paper6.classList.add("flipped");
                break;
            case 7:
                paper7.classList.add("flipped");
                break;
            case 8:
                paper8.classList.add("flipped");
                break;
            case 9:
                paper9.classList.add("flipped");
                break;
            case 10:
                paper10.classList.add("flipped");
                break;
            case 11:
                paper11.classList.add("flipped");
                break;
            case 12:
                paper12.classList.add("flipped");
                break;
            case 13:
                paper13.classList.add("flipped");
                break;
            case 14:
                paper1.classList.add("flipped");
                break;
            case 14:
                paper1.classList.add("flipped");
                break;
            case 15:
                paper15.classList.add("flipped");
                closeBook();
                break;
            default:
                throw new Error("Unknown state");
        }
        currentPage++;
    }

}
function goPrevPage(){

}