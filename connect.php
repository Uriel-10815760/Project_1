<?php

$fname = $_POST['name']; // getting data from submitted form
$username = $_POST['username'];
$email = $_POST['password'];
$password = $_POST['email'];
$Occ = $_POST['Occ'];

$host = "localhost";
$user = "root";
$password = "";
$database = "web_app";

$connectionString = mysqli_connect($host,$user,$password,$database);// we go fit change the dollar all for the php inside    mysqli_connect be php syntax

// Check connection
if (!$connectionString) {
    die("Connection failed: " . mysqli_connect_error());
}

?>