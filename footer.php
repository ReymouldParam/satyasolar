<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect data from form safely
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?emailSuccess=false&error=invalidEmail");
        exit;
    }

    // Recipient email
    $to = "sales@krisolsolar.com";

    // Email subject and body
    $subject = "Email Enquiry from krisol.com website";
    $body = "Email: $email\n";

    // Send the email
    $emailSent = mail($to, $subject, $body, $headers);

    // Redirect based on result
    if ($emailSent) {
        header("Location: contact.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>
