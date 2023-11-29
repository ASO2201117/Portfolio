<?php
// データベースに接続
function connectDB() {
    $param = 'mysql:dbname=LAA1417869-product;host=mysql207.phy.lolipop.lan';
    try {
        $pdo = new PDO($param, 'LAA1417869', 'Pass2201117');
        return $pdo;

    } catch (PDOException $e) {
        exit($e->getMessage());
    }
}
?>