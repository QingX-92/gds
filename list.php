<?php
	$page=(int)$_GET['page'];
	$id=(int)$_GET['id'];
	$links="http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=".$id."&page=".$page."&plat=ios&version=33";
	$data = file_get_contents($links);
	echo $_GET['callback'].'('.$data.')';
?>