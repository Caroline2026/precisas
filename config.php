<?php

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = 'CMSç96';
    $dbName = 'precisas_banco';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

?>
    
    <?php
    if(isset(|$_POST['submit'])){
        print_r($_POST['nome completo']);
        print_r($_POST['idade']);
        print_r($_POST['CPF']);
        print_r($_POST['email']);

        include_once('config.php');

        $nome completo = $_POST['nome completo'];
        $idade = $_POST['idade'];
        $CPF = $_post['CPF'];
        $email = $_POST['email'];


        $result = mysql_query($conexao, "INSERT INTO clientes(nome completo, idade, cpf, email) VALUES ($nome completo, $idade, $cpd, $email)")


    }


?>










