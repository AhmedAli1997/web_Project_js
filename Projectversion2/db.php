<?php
$server='localhost';
$username='root';
$password='';
$database='Letters';
$table='table_leters';

$con=mysqli_connect($server,$username,$password);

    if(!$con)
    echo "Don't connected ."."<br>";
    echo("the connection is done .<br>");

    //create the database .
    $q="create database if not exists $database ";
    $result=$con->query($q);
    if(!$result)
    {echo("database $database not created .<br> ");}
    else{{echo("database $database is created .<br> ");}}
    
    if(mysqli_select_db($con,$database)===true)
    {
     echo("the connection with database ".$database." is done . <br>");  
    }
    
    //create the table . 
    $q="create table if not exists $table(_event varchar(110),
    _time varchar(110),_target varchar(110)
    )";
    $result=$con->query($q);
    if(!$result)
    {echo("table $table not created . ");}
    else{{echo("table $table is created . ");}}
    
?>