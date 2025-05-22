<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect data from form
    $email   = $_POST['email'];
    // Recipient email
    $to = "naresh.narnapati@reymould.com";

    // Email subject and body
    $subject = "Email Enquiry from krisol.com website";
    $body ="Email: $email\n"

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
