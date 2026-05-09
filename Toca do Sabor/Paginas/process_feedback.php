<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verifica se o método de solicitação é POST
    $name = htmlspecialchars($_POST['name']);
    $feedback = htmlspecialchars($_POST['feedback']);

    // Sanitiza os dados recebidos do formulário para evitar XSS
    $file = 'feedback.txt';

    // Define o caminho para o arquivo feedback.txt
    $data = "Nome: $name\nFeedback: $feedback\n------------------\n";

    // Prepara a string a ser gravada no arquivo
    if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX)) {
        // Tenta abrir o arquivo para adicionar dados
        $message = 'Feedback enviado com sucesso!';
    } else {
        $message = 'Erro ao enviar o feedback. Tente novamente.';
    }

    // Redireciona de volta à página principal com uma mensagem de feedback
    header('Location: index.php?message=' . urlencode($message));
    exit;
} else {
    // Redireciona para a página principal se a solicitação não for POST
    header('Location: index.php');
    exit;
}
?>