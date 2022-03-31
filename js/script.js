// menu click triger
let checkbox = document.getElementById('humCheck');



function getMenu(){
    // navigation links container
    var tab = document.querySelector("#tabLinks");
    // menu Icon
    var bars = document.querySelector("#openMenu");
    // close menu Icon
    var x = document.querySelector("#closeMenu");
    if(checkbox.checked){
        tab.style.marginTop=0;
        x.style.display="block";
        bars.style.display="none";
        


    }else if(!checkbox.checked){
        tab.style.marginTop="-100rem";
        bars.style.display="block";
        x.style.display="none";

    }
}

