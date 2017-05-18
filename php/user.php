<?php
	
	$uname=$_GET["username_register"];
	$conn=mysql_connect("localhost:3306","root","");
	if(!$conn)
		die("数据库连接出错".mysql_error);
	mysql_select_db("project");
	$sql="SELECT COUNT(*) from fruit WHERE username='$uname'";
	$result=mysql_query($sql,$conn);
	if($row=mysql_fetch_array($result)){
		if($row[0]>=1){
			echo '{"status":1,"message":"user exists"}';
		}else{
			echo '{"status":0,"message":"user not exists"}';
		}
	}
	mysql_close($conn);
?>