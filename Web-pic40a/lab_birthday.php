#!/usr/local/bin/php
<?php print'<?xml version = "1.0" encoding="utf-8"?>'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>PHP: for loop example</title>
</head>
<body>


<?php
date_default_timezone_set('America/Los_Angeles'); 
$year = 1993;

echo "<table border='1'>";
for($year = 1993; $year < 2017; $year++)
{
    $ts = mktime(0,0,0,11,12,$year);
    echo "<tr><td>", date('n/j/Y', $ts), "</td><td>", date('l', $ts), "</td></tr>";
}
echo "</table>";
?>


<p>
    <a href="http://validator.w3.org/check?uri=referer"><img
      src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
  </p>

</body>
</html>