<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', 'php-error.log');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $company = $data['company'] ?? '';
    $serviceType = $data['serviceType'] ?? '';
    $budget = $data['budget'] ?? '';
    $message = $data['message'] ?? '';

    if (empty($name) || empty($email)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Name and Email are required"]);
        exit;
    }

    $to = "contacto@tecnoatom.com";
    $subject = "Nueva solicitud de cotización de $name";
    $body = "Nombre: $name\nEmail: $email\nEmpresa: $company\nTipo de Servicio: $serviceType\nPresupuesto: $budget\n\nMensaje:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Quote request sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to send quote request"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
}
?>