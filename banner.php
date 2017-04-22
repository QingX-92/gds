<?php
	$data = file_get_contents("http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml");
	echo $_GET['callback'].'('.$data.')';
?>