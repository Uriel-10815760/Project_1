<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>LogIn | PerfectHomeSch</title>
<link href="login.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
</head>

<body>
   <div class="signin">

<form>
<h2 style="color:#fff;">Log In</h2>
<input type="text" name="username" placeholder="Username"/><br /><br />
<input type="password" name="password" placeholder="Password" /><br /><br />
<a href="main.php"><input name="logn" type="button" value="Log In" /></a><br /><br />
<div id="container">
    <a href="for.php" style="text-align:center ; font-size:13px; font-family:Tahoma, Geneva, sans-serif;">Forgot password?</a>
    </div><br /><br /><br /><br /><br /><br />
Don't have an account?<a href="index.php" style="font-family:'Play', sans-serif;">&nbsp;Sign Up</a>

</form>
</div>

</body>

<?php

require_once 'connect.php';

if(isset($_POST['logn'])){

    // get all values from form submitted using their names
    $username_or_email = $_POST['username']; // sends the data to the database to be checked
    $password = $_POST['password']; 


    // check if user exists in database
    $get_user_details = mysqli_query($connectionString,"SELECT * FROM registrations WHERE `username`='{$username_or_email}'  AND `password` = '{$password}' LIMIT 1")or die(mysqli_error($connectionString));

    if(mysqli_num_rows($get_user_details) > 0){ //counts the number of rows in the database to see if any of them matches
        // user exists in the database

        $get_details = mysqli_fetch_array($get_user_details); // gets the users details takes the info from the database then put it in an array form
        $users_id = $get_details['id']; //array get keys...what should i use to seelect this

        setcookie("id",$id, time() + (86400 * 30), '/');// setcookie

        echo "<script>alert('Login Success');window.location.href='main.php'</script>"; // takes you in if succcefful
    }else{
        // user does not exist in the database
        echo "<script>alert('Login Failed');</script>";
    }
}


?>

</html>
