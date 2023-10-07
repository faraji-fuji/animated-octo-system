document.addEventListener("DOMContentLoaded", function () {
    function fetchData() {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            const data = JSON.parse(xhttp.responseText);
            document.getElementById("header-paragraph").innerHTML += `${data.name} / ${data.studentNumber}`;
            document.getElementById("footer-paragraph").innerHTML = `${data.name} / ${data.campus}`;
        }

        xhttp.open("GET", "http://127.0.0.1:5500/data/profile.json", true);

        xhttp.send()
    }

    fetchData()
})