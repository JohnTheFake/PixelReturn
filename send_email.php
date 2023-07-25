<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  
  $name = $data["name"];
  $email = $data["email"];
  $message = $data["message"];

  $to = "johnthefake002@gmail.com";
  $subject = "Contact Form Submission from $name";
  $messageBody = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $messageBody, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
}
?>
