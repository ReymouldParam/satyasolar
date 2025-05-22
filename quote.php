<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect data from form
    $name    = $_POST['name'];
    $number  = $_POST['number'];
    $email   = $_POST['email'];
    $city    = $_POST['city'];
    $message = $_POST['message'];

    // Recipient email
    $to = "naresh.narnapati@reymould.com";

    // Email subject and body
    $subject = "Email Enquiry from shekara.com website";
    $body = "Name: $name\n"
          . "Email: $email\n"
          . "Phone: $number\n"
          . "Message:\n$message";

    // Send the email
    $emailSent = mail($to, $subject, $body);

    // Redirect based on result
    if ($emailSent) {
        header("Location: index.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>
