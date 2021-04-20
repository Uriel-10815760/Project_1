<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SignUp | PerfectHomeSch</title>
<link href="index.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">   
   
   <style>
    #msg {
    visibility: hidden;
    min-width: 250px;
    background-color:yellow;
    color: #000;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    right: 30%;
    top: 30px;
    font-size: 17px;
	margin-right:30px;
}

#msg.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {top: 0; opacity: 0;} 
    to {top: 30px; opacity: 1;}
}

@keyframes fadein {
    from {top: 0; opacity: 0;}
    to {top: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {top: 30px; opacity: 1;} 
    to {top: 0; opacity: 0;}
}

@keyframes fadeout {
    from {top: 30px; opacity: 1;}
    to {top: 0; opacity: 0;}
}
    </style>

</head>

<body>
    <div class="signup">
        <div id="error"></div>
        <form action="connect.php" method="POST" id="sform">
            <h2 style="color: #fff;">Sign Up</h2>
            <div>
                <input id="fname" type="text" name="name" placeholder="First name" >
                <div id="fname_error"></div>
            </div><br>
            <div>
                <input id="lname" type="text" name="name" placeholder="Last name" >
                <div id="lname_error"></div>
            </div><br>
            <div>
                <input id="username" type="text" name="username" placeholder="Username" >
                <div id="username_error"></div>
            </div><br>    
            <div>
                <input id="password" type="password" name="password" placeholder="Password" >
                <div id="password_error"></div>
            </div><br>   
            <div>
                <input id="email" type="text" name="email" placeholder="Email address" >
                <div id="email_error"></div>
            </div><br />
            <div id="container">
                <input class="selector1" type="radio" name="Occ" value="l"/><span class="Occname1">Lecturer</span>
                <input class="selector2" type="radio" name="Occ" value="s" required/><span class="Occname2">Student</span> 
            </div><br /><br />
            <input name="sub_btn" type="submit" value="Sign up"><br><br>
            Already have account?<a href="login.php" style="text-decoration: none; font-family: 'Play', sans-serif; color: yellow; font-weight: 200;">&nbsp;Log In</a>
        </form>
    </div>
</body>
</html>

<?php

  require_once 'connect.php'; // copy the contents of connect.php come here
  
  if(isset($_POST['sub_btn'])){ // if some values dey there or if somebody press the submit button 
  
      // get all values from form submitted using their names
      $fname = $_POST['name'];// getting data from submitted form
      $username = $_POST['username'];
      $email = $_POST['password'];
      $password = $_POST['email'];
      $Occ = $_POST['Occ'];      // not compulsory for the names to add up
  
  
      // insert into database now
      $add_user = mysqli_query($connectionString,"INSERT INTO `registrations` (`id`, `name`, `username`, `password`, `email`, `Occ`) VALUES (NULL, '{$fname}', '{$username}', '{$password}', '{$email}', '{$Occ}')") or die(mysqli_error($connectionString));//or die throws an error when there is an error in the connection string
  //get something or put something into the database
  //connection string ties appllication to the application to the database
  //tick is advisable to use instead of the single quotation
  //them for add to each other
      if(add_user) {
          echo "<script>alert('Sign Up Successful');window.location.href='login.php';</script>";//if sign up is succesful
      }else{
          echo "<script>alert('Sorry, Error Occured')"; //else this occurs
      }
  }
  ?>