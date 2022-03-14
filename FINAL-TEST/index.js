const show_popup = function () {
    document.getElementById("popup").style.display = "initial";
    document.getElementById("header").style.display = "none";
}
setTimeout(show_popup, 2000);
document.getElementById("close_popup").addEventListener('click', function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("header").style.display = "block";
})
const json_value = function (res) {
    return res.json();
}
const handle_data = function (Aaqib) {

    console.log(Aaqib);
    console.log(Aaqib.main.temp);
    console.log(Aaqib.wind.speed);
    console.log(Aaqib.weather[0].description);
    console.log(Aaqib.weather[0].id);
    let celcius = Math.round(((Aaqib.main.temp) - 273));
    let max_cel = Math.round(((Aaqib.main.temp_max) - 273));
    let min_cel = Math.round(((Aaqib.main.temp_min) - 273));

    const parent_container = document.getElementById("parent-container");
    parent_container.innerHTML = '';
    const div_el = document.createElement("div");
    const first_p_el = document.createElement("p");
    const second_p_el = document.createElement("p");
    const third_p_el = document.createElement("p");
    const fourth_p_el = document.createElement("p");
    const fift_p_el = document.createElement("p");
    const six_p_el = document.createElement("p");
    const image = document.createElement("img");
    first_p_el.innerText = `City-${Aaqib.name}`;
    first_p_el.style.textAlign = "center";
    second_p_el.innerText = `Tempareture :- ${celcius}\u00B0 C`;
    third_p_el.innerText = `Wind Speed :- ${Aaqib.wind.speed}`;
    fourth_p_el.innerText = `Maxium Tempareture :- ${max_cel}\u00B0 C`;
    fift_p_el.innerHTML = `Minimum Tempareture :- ${min_cel}\u00B0 C`;
    six_p_el.innerHTML = `Sky Condition :- ${Aaqib.weather[0].description}`;
    // image.style.height="200px";
    if (Aaqib.weather[0].id < 250 && Aaqib.weather[0].id >= 200) {
        image.src = "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if (Aaqib.weather[0].id < 322 && Aaqib.weather[0].id >= 300) {
        image.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if (Aaqib.weather[0].id < 532 && Aaqib.weather[0].id >= 500) {
        image.src = "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if (Aaqib.weather[0].id < 623 && Aaqib.weather[0].id >= 600) {
        image.src = "https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if (Aaqib.weather[0].id < 782 && Aaqib.weather[0].id <= 701) {
        image.src = "https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if (Aaqib.weather[0].id == 800) {
        image.src = "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if (Aaqib.weather[0].id < 805 && Aaqib.weather[0].id >= 701) {
        image.src = "https://openweathermap.org/img/wn/02d@2x.png";
    }

    div_el.classList.add("weather-card");
    div_el.appendChild(first_p_el);
    div_el.appendChild(second_p_el);
    div_el.appendChild(third_p_el);
    div_el.appendChild(fourth_p_el);
    div_el.appendChild(fift_p_el);
    div_el.appendChild(six_p_el);
    div_el.appendChild(image);

    parent_container.appendChild(div_el);
    document.getElementById("default").classList.add("hide");  // problem line



}
const fetch_Api = function () {
    const search_value = search_feild.value;
    // document.getElementById("default").classList.add("hide");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
}
document.getElementById("search_btn").addEventListener('click', fetch_Api);
const enter_fn = function (e) {
    if (e.key == 'Enter') {
        // document.getElementById("default").classList.add("hide");
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
    }
}

document.getElementById("search_feild").addEventListener('keyup', enter_fn);





//   live location weather part





const location_lat = function (Aaqib) {
    console.log(Aaqib);

    document.getElementById("popup").style.display = "none";
    document.getElementById("header").style.display = "block";
    let celcius = Math.round(((Aaqib.main.temp) - 273));
    let max_cel = Math.round(((Aaqib.main.temp_max) - 273));
    let min_cel = Math.round(((Aaqib.main.temp_min) - 273));
    //   <div class="weather-card">
    //   <p>City</p>
    //   <p>Tempareture</p>
    //   <p>Wind speed</p>
    //   <p>Maxium tepareture</p>
    //   <p>Lowest tempareture</p>
    // </div>
    const parent_container = document.getElementById("default");
    parent_container.innerHTML = '';
    const div_el = document.createElement("div");
    const first_p_el = document.createElement("p");
    const second_p_el = document.createElement("p");
    const third_p_el = document.createElement("p");
    const fourth_p_el = document.createElement("p");
    const fift_p_el = document.createElement("p");
    const six_p_el = document.createElement("p");
    const image = document.createElement("img");
    first_p_el.innerText = `City-${Aaqib.name}`;
    first_p_el.style.textAlign = "center";
    second_p_el.innerText = `Tempareture :- ${celcius}\u00B0 C`;
    third_p_el.innerText = `Wind Speed :- ${Aaqib.wind.speed}`;
    fourth_p_el.innerText = `Maxium Tempareture :- ${max_cel}\u00B0 C`;
    fift_p_el.innerHTML = `Minimum Tempareture :- ${min_cel}\u00B0 C`;
    six_p_el.innerHTML = `Sky Condition :- ${Aaqib.weather[0].description}`;

    // div_el.id='default_weather';
    if (Aaqib.weather[0].id < 250 && Aaqib.weather[0].id >= 200) {
        image.src = "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if (Aaqib.weather[0].id < 322 && Aaqib.weather[0].id >= 300) {
        image.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if (Aaqib.weather[0].id < 532 && Aaqib.weather[0].id >= 500) {
        image.src = "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if (Aaqib.weather[0].id < 623 && Aaqib.weather[0].id >= 600) {
        image.src = "https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if (Aaqib.weather[0].id < 782 && Aaqib.weather[0].id <= 701) {
        image.src = "https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if (Aaqib.weather[0].id == 800) {
        image.src = "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if (Aaqib.weather[0].id < 805 && Aaqib.weather[0].id >= 701) {
        image.src = "https://openweathermap.org/img/wn/02d@2x.png";
    }
    div_el.classList.add("weather-card");
    div_el.appendChild(first_p_el);
    div_el.appendChild(second_p_el);
    div_el.appendChild(third_p_el);
    div_el.appendChild(fourth_p_el);
    div_el.appendChild(fift_p_el);
    div_el.appendChild(six_p_el);
    div_el.appendChild(image);
    parent_container.appendChild(div_el);



}

const fetch_Location = function () {
    const loaction_value = document.getElementById("location_feild").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loaction_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
}

const enter_location = function (e) {
    if (e.key == 'Enter') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
    }
}

document.getElementById("submit_btn").addEventListener('click', fetch_Location);
document.getElementById("location_feild").addEventListener('keyup', enter_location);