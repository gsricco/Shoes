<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST["form_name"] == "form1") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Отправка данных на электронную почту
        $to = "footwearfusion@gmail.com";
        $subject = "New Message from $name";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            // Перенаправление на страницу "спасибо"
            header("Location: thanks1.html");
            exit;
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }
    } elseif ($_POST["form_name"] == "form2") {
        $name_contact = $_POST["name_contact"];
        $email_contact = $_POST["email_contact"];
        $message_contact = $_POST["message_contact"];

        // Отправка данных на электронную почту
        $to = "footwearfusion@gmail.com";
        $subject = "New Contact Message from $name_contact";
        $body = "Name: $name_contact\nEmail: $email_contact\nMessage: $message_contact";
        $headers = "From: $email_contact";

        if (mail($to, $subject, $body, $headers)) {
            // Перенаправление на страницу "спасибо"
            header("Location: thanks.html");
            exit;
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }
    } else {
        echo "Invalid request";
    }
}
?>
