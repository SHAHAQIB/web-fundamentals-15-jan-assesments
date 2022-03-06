function popup(n) {
    var a = document.getElementById(n);

    console.log(n);
    if(a.classList.contains("details")){
        a.classList.remove("details");
        a.classList.add("initial");

    }else {
        a.classList.remove("initial");
        a.classList.add("details");
    }
   

}