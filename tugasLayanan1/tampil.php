<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>Data MySQL</h1>
<ul>
    <?php
        $username = "root"; 
        $password = ""; 
        $server = "127.0.0.1"; 
        $db = "layanan1"; 
        $connect = mysqli_connect($server,$username,$password,$db); 
        $query = "SELECT first_name, last_name, email FROM layanan1 ORDER BY nomor DESC LIMIT 10;";
        $tampil = mysqli_query($connect,$query);
        while ($data = mysqli_fetch_array($tampil)) {
            echo "<li>" . $data['first_name'] . ", " . $data['last_name'] . ", " . $data['email'] . "</li>";
        }
    ?> 
</ul>

<a href="web.html">Insert kembali</a>

</body>
</html>
