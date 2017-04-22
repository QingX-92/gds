<?php
	$page=(int)$_GET['page'];
	$links="http://apps.game.qq.com/lol/act/website2013/video.php?page=".$page."&p4=0&p2=0&p3=9999&r1=1&pagesize=10&source=lolapp";
	$data = file_get_contents($links);
	echo $_GET['callback'].'('.$data.')';
?>