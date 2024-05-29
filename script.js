// console.log('script.js has been linked, you dummy!');
let stars = document.getElementsByClassName("fa fa-star");

function rate(n){
    remove();
    for(let i = 0; i < n; i++){
        stars[i].className = "fa fa-star checked";
    }
}

// To remove any previous selection
function remove(){
    for(let i = 0; i < 5; i++){
        stars[i].className = "fa fa-star";
    }
}