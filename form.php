<?php

$email = "";

$email = $_POST['email'] ;

$link =  mysqli_connect("85.10.205.173:3306" , "ugwustanley" , "unn247790" , "ugwustanley") ;  
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