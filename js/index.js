document.addEventListener("DOMContentLoaded", function () {
    function fetchProfileData() {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            const data = JSON.parse(xhttp.responseText);
            document.getElementById("header-paragraph").innerHTML += `${data.name} / ${data.studentNumber}`;
            document.getElementById("footer-paragraph").innerHTML = `${data.name} / ${data.campus}`;

            sessionStorage.setItem("studentNumber", data.studentNumber)
        }

        xhttp.open("GET", "http://127.0.0.1:5500/data/profile.json", true);

        xhttp.send()
    }

    fetchProfileData()
})


document.getElementById("fetch-btn").addEventListener("click", function () {

    fetch("http://127.0.0.1:5500/data/bikeshare.json")
        .then(response => response.json())
        .then(data => {
            let studentNumber = sessionStorage.getItem("studentNumber")

            data.forEach(item => {
                const bikeShare = new BikeShare(item.id, item.stationName, item.availableDocks, item.availableBikes, item.statusValue, item.city, studentNumber)
                bikeShare.save()
            })

            alert("Data fetched and saved successfully.")
        })
})


class BikeShare {
    constructor(id, stationName, availableDocks, availableBikes, statusValue, city, stdId) {
        this.id = id;
        this.stationName = stationName;
        this.availableDocks = availableDocks;
        this.availableBikes = availableBikes;
        this.statusValue = statusValue;
        this.city = city;
        this.stdId = stdId;
    }

    save() {
        localStorage.setItem(this.id, JSON.stringify(this))
    }
}

