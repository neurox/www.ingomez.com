<?php 

define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
if(!IS_AJAX) { die('Restricted access'); }

$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_var($_POST['message'], FILTER_SANITIZE_SPECIAL_CHARS);

require '../vendor/autoload.php';
use Mailgun\Mailgun;

try {

    $mg = Mailgun::create('key-06bb37710dfeb3de1bd270ebf1507362'); // For US servers

    $mg->messages()->send('mg.ingomez.com', [
        'from'    => 'postmaster@mg.ingomez.com',
        'to'      => 'juanjose@ingomez.com',
        'subject' => 'Contacto desde ingomez.com',
        'html'    => 'Nombre: ' . $name . '<br>Email: ' . $email . '<br>Mensaje: ' . $message
      ]);

    echo json_encode(true);

  } catch (Exception $e) {

    echo json_encode(false);

}