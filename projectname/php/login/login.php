<?php
include "conn.php";
if(isset($_POST['username'])){
    $username=$_POST['username'];
    $password=md5($_POST['password']);
    $result=mysql_query("select * from user where username='$username' and password='$password'");
    if(mysql_fetch_array($result,MYSQL_ASSOC)){
        echo 1;
    }else{
        echo 2;
    };
}else{
    echo "非法操作";
};
?>