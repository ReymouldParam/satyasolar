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
    $to = "naresh.narnapati@reymould.com";

    // Email subject and body
    $subject = "Email Enquiry from krisol.com website";
    $body = "Email: $email\n";

    // Optional: Set headers (better email formatting)
    $headers = "From: noreply@krisol.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    $emailSent = mail($to, $subject, $body, $headers);

    // Redirect based on result
    if ($emailSent) {
        header("Location: index.html?emailSuccess=true");
    } else {
        header("Location: contact.html?emailSuccess=false");
    }
    exit;
}
?>
