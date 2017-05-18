<?php 
	$username=$_POST["username"];
	$password=$_POST["password"];
	$conn=mysql_connect("localhost:3306","root","");
	if(!$conn)
		die("数据库连接出错".mysql_error());
	//成功
	mysql_select_db("project");
	$sql="INSERT INTO fruit VALUES(NULL,'$username','$password')";
	$result=mysql_query($sql,$conn);
	if($result)
		echo '{"status":1, "message":"success"}';
	else
		echo '{"status":0, "message":"'. mysql_error() .'"}';

	mysql_close($conn);
?>
