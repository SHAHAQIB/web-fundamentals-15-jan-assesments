function clicked(n) {
    if (n == 'home') {
        document.getElementById('home').style.display = "inline";
        document.getElementById('search').style.display = "none";
    }
    else  {
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "inline";
    }
}