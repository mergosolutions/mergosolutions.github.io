$.getJSON('https://ipapi.co/', function(data){
    $('#ip').text(data.ip);
    $('#isp').text(data.org);
    $('#country').text(data.country_name);
    $('#city').text(data.region);
})

function appendToFile(data) {
    // Létrehozzuk az új sorban elhelyezett adatokat
    const newDataLine = `IP-cím: ${data.ip}\nOrszág: ${data.country}\nVáros: ${data.city}\n\n`;

    // Az adatokat hozzáadjuk a result.txt fájlhoz
    fetch('https://api.ipinfo.io/result.txt', {
        method: 'POST',  // A fájl módosításához POST kérést küldünk
        body: newDataLine,  // Az új sorban elhelyezett adatokat küldjük el
        headers: {
            'Content-Type': 'text/plain',  // A tartalom típusa szöveg
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP hiba! Állapotkód: ${response.status}`);
        }
        console.log('Adatok hozzáadva a fájlhoz.');
    })
    .catch(error => console.error('Hiba történt:', error));
}

// Az IP-cím lekérdezése a szerverről
fetch('https://api.ipinfo.io', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    // Az ország és város kiírása a konzolba
    console.log('Ország: ' + data.country);
    console.log('Város: ' + data.city);

    // Az adatokat hozzáadjuk a result.txt fájlhoz
    appendToFile(data);
})
.catch(error => console.error('Hiba történt:', error));