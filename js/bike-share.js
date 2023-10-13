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

    function fetchBikeShares() {
        const bikeIndexList = document.getElementById("station-index-list");

        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const bikeShareData = JSON.parse(localStorage.getItem(key));

                const listItem = document.createElement("li");
                listItem.textContent = `${bikeShareData.id}:      ${bikeShareData.stationName}`;
                listItem.id = `station-index-item-${bikeShareData.id}`

                listItem.addEventListener("click", function () {
                    console.log(`clicked ${listItem.innerHTML}`)

                    document.getElementById("station-detail").innerHTML = `
                    <h3>Station Details</h3>
                    <p>Station ID: ${bikeShareData.id} </p>
                    <p>Station Name: ${bikeShareData.stationName} </p>
                    <p>Available Docks: ${bikeShareData.availableDocks} </p>
                    <p>Available Bikes: ${bikeShareData.availableBikes} </p>
                    <p>Status: ${bikeShareData.statusValue} </p>
                    <p>City: ${bikeShareData.city} </p>
                    `
                })

                bikeIndexList.appendChild(listItem);
            }
        }
    }

    fetchBikeShares();
});
