<?php
// Adatbázis kapcsolódási adatok
$servername = "localhost";   // Adatbázis szerver (általában 'localhost')
$username = "root";          // Adatbázis felhasználó (cseréld ki a sajátodra)
$password = "";              // Adatbázis jelszó (cseréld ki a sajátodra)
$dbname = "website_logs";    // Az adatbázis neve

// Kapcsolódás az adatbázishoz
$conn = new mysqli($servername, $username, $password, $dbname);

// Kapcsolódás ellenőrzése
if ($conn->connect_error) {
    die("Kapcsolódási hiba: " . $conn->connect_error);
}

// A látogató IP-címének lekérése
$visitor_ip = $_SERVER['REMOTE_ADDR'];

// Az aktuális dátum és időpont lekérése
$visit_time = date('Y-m-d H:i:s');

// SQL lekérdezés a látogatás rögzítéséhez
$sql = "INSERT INTO visits (ip_address, visit_time) VALUES ('$visitor_ip', '$visit_time')";

// Lekérdezés végrehajtása
if ($conn->query($sql) === TRUE) {
    echo "A látogatás sikeresen rögzítve!";
} else {
    echo "Hiba történt: " . $sql . "<br>" . $conn->error;
}

// Kapcsolat lezárása
$conn->close();
?>
