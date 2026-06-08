<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Methode nicht erlaubt']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$subject = htmlspecialchars(trim($data['subject'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Pflichtfelder fehlen oder sind ungültig']);
    exit;
}

$to = 'info@rm-cleanbau.de';
$subjectLine = $subject ? $subject : 'Allgemeine Anfrage';
$headers = "From: website@rm-cleanbau.de\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
$body = "Name: $name\nE-Mail: $email\nTelefon: $phone\nBetreff: $subjectLine\n\nNachricht:\n$message";

$sent = mail($to, "Neue Anfrage: $subjectLine", $body, $headers);

echo json_encode(['success' => $sent]);
