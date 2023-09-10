<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

    <!-- BOOTSTRAP ICON -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />

    <title>Data MySQL</title>
    <head>
      <link rel="stylesheet" href="style.css" />
    </head>
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
