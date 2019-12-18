<?php
$server='localhost';
$username='root';
$password='';
$database='letters';

$con=mysqli_connect($server,$username,$password,$database);


 if(isset($_POST['object'])){

	$person = json_decode($_POST['object'], true);
	

    for($i=0;$i<count($person);$i++)
    {
      
        $Event=$person[$i]['_event'];
        $Time=$person[$i]['_time'];
        $Target=$person[$i]['_target'];
       
        $q="insert into table_leters values('$Event','$Time','$Target')";
         $result=$con->query($q);
	
           
    }
    
    
	//Converting it back to a JSON String
	echo json_encode($person);  //important
	
}


	 if(isset($_GET['person'])){
   $sql = "Select * from table_leters"; 

   if ($result = $con->query($sql)){
     $rows = array();
     if($result->num_rows > 0){
      while($row = $result->fetch_assoc()){
       array_push($rows, $row);
      }
     //Convert to JSON Before Sending to Client
     echo json_encode($rows);
	  //echo $rows;
    }
  }
  else{
   echo "No Data to Retrieve";
  }
 }
	


?>