/*NAVIGACIJA*/

fetch("navigacija.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navigacija").innerHTML = data;
    })
    .catch(error => console.error("Greska: ucitavanje navigacionog bara", error));

/*FOOTER*/

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Greska: ucitavanje footera", error));