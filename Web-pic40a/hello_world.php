#!/usr/local/bin/php
<?php 
print('<?xml version = "1.0" encoding="utf-8"?> ');
print "\n";
print('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"');
print "\n";
print('"http://www.w3.org/TR/xhtml1/DTD/xhtml11.dtd">');
print "\n";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8"/>
<title>My First PHP Embedded Page</title>
</head>
<body>
<p>
<?php print 'Hello World! <br/>'; ?>
</p>
	<p>
    <a href="http://validator.w3.org/check?uri=referer"><img
      src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
  </p>

</body>
</html>

