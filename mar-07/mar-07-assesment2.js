function show_home()
{
    let img=document.getElementById("image1");
    let container=document.getElementById("parent-div");
    container.style.display="flex";
    let container3=document.getElementById("profile-container");
    let container1=document.getElementById("search-container");
    let container2=document.getElementById("activity-container")
    container1.style.display="none";
    container2.style.display="none";
    container3.style.display="none";
}
function show_search()
{
    let img=document.getElementById("image2");
    let container1=document.getElementById("search-container");
    let container=document.getElementById("parent-div");
    let container3=document.getElementById("profile-container");
    let container2=document.getElementById("activity-container")
    container.style.display="none";
    container1.style.display="block";
    container2.style.display="none";
    container3.style.display="none";
}
function show_like()
{
    let img=document.getElementById("image3");
    let container1=document.getElementById("search-container");
    let container=document.getElementById("parent-div");
    let container2=document.getElementById("activity-container");
    let container3=document.getElementById("profile-container");
    container.style.display="none";
    container1.style.display="none";
    container2.style.display="block";
    container3.style.display="none";
}
function show_user()
{
    let img=document.getElementById("image4");
    let container3=document.getElementById("profile-container");
    let container1=document.getElementById("search-container");
    let container=document.getElementById("parent-div");
    let container2=document.getElementById("activity-container")
    container.style.display="none";
    container1.style.display="none";
    container2.style.display="none";
    container3.style.display="block";
}
let counter=0;

function like() 
{
    counter+= 1;
    render();
}
function render() 
{
    let disp = document.getElementById('likes');
    disp.innerText = counter+" "+"Likes";
}
