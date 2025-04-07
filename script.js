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

/*FORMA*/

document.querySelector(".forma").addEventListener("submit", function(event) {
    event.preventDefault();

    const ime = document.getElementById("ime").value;
    const prezime = document.getElementById("prezime").value;
    const pol = document.querySelector('input[name="pol"]:checked')?.value;
    const email = document.getElementById("email").value;
    const tema = document.getElementById("tema").value;
    const poruka = document.getElementById("poruka").value;
    const uslovi = "Da";

    alert(
        "Poslati podaci:\n\n" +
        "Ime: " + ime + "\n" +
        "Prezime: " + prezime + "\n" +
        "Pol: " + pol + "\n" +
        "Email: " + email + "\n" +
        "Tema poruke: " + tema + "\n" +
        "Poruka: " + poruka + "\n" +
        "Slažem se sa uslovima: " + uslovi
    );

    // Resetovanje forme
    this.reset();

    setTimeout(() => {
        location.reload();
    }, 100);
});