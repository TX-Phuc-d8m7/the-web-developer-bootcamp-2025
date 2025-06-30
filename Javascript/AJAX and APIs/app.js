const req = new XMLHttpRequest();

req.onload = () => {
    console.log("IT LOADED");
    console.log(this);
}

req.onerror = () => {
    console.log("IT ERRORRED");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
