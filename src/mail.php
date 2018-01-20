<?php
header("Access-Control-Allow-Origin: *");

	$headers = 'From: ' . $_POST['nom'] . ' <' . $_POST['email'] . '>' . "\r\n";

	mail('hello@actweb.fr', $_POST['sujet'], $_POST['message'], $headers);

	echo "Merci, votre email a bien été envoyé.";

exit;