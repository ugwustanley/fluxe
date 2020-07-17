<?php

$email = "";

$email = $_POST['email'] ;

    $link =  mysqli_connect("localhost:3307","root", "" , "mydata") ; 
   if($link === false){
       die("ERROR: Could not  connect." . mysqli_connect_error()) ;
   }
   $sql = "INSERT INTO registration VALUES ('$email')"; 

   if(mysqli_query($link , $sql)){
    echo "sucessfully";
    echo header('Location:index.html');
  }
  else{
      echo "ERROR: could not execute $sql. " . mysqli_error($link);
  }
  mysqli_close($link);
    ?>