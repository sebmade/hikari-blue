<?php
header("Access-Control-Allow-Origin: *");

	$headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";

	mail('contact@libertyfinances.fr', $_POST['demand'], $_POST['message'] . "\r\n\r\nentreprise : " . $_POST['company'] . "\r\n\r\nconnu via : " . $_POST['from'], $headers);

	echo "Merci, votre email a bien été envoyé.";

exit;