<?php
class Database{
    private $host = "localhost";
    private $database_name = "myfood";
    private $username = "/...";
    private $password = "/...";

    public $conn;
    public function setConnection(){
        $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
        return $this->conn;
    }
}
