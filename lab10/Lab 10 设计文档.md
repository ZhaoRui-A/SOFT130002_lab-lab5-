# Lab 10 设计文档

```
<?php
define('DBHOST', 'localhost');
define('DBNAME', 'art');
define('DBUSER', 'testuser');
define('DBPASS', 'mypassword');
define('DBCONNSTRING','mysql:dbname=art;charset=utf8mb4;'); ?>
```

分别定义

服务器 :localhost

数据库名:art

账户名:testuser

密码:mypassword

```
<?php require_once('config.php'); ?>
<!DOCTYPE html>
<html>
<body>
<h1>Database Tester (PDO)</h1> <?php
try {
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "select * from Artists order by LastName";
    $result = $pdo->query($sql);
    while ($row = $result->fetch()) {
        echo $row['ArtistID'] . " - " . $row['LastName'] . "<br/>";
    }
    $pdo = null;
}catch (PDOException $e) {
    die( $e->getMessage() );
}
?>
</body>
</html>
```

用pdo对象连接了数据库并设置了属性

利用lastname排序并遍历每个序列

最后设置了出错的返回代码

```
function outputArtists() {
    try {
        $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "select * from Artists order by LastName limit 0,30";
        $result = $pdo->query($sql);
        while ($row = $result->fetch()) {
            echo '<a href="' . $_SERVER["SCRIPT_NAME"] . '?id=' . $row['ArtistID'] . '" class="';
            if (isset($_GET['id']) && $_GET['id'] == $row['ArtistID']) echo 'active ';
            echo 'item">';
            echo $row['LastName'] . '</a>';
        }
        $pdo = null;
    }
    catch (PDOException $e) {
        die( $e->getMessage() );
    }
}
```

再次建立pdo并选取了前三十个作为展示

```
$pdo = null；
```

删除了链接

```
function outputPaintings() {
    try {
        if (isset($_GET['id']) && $_GET['id'] > 0) {
            $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = 'select * from Paintings where ArtistId=' . $_GET['id'];
            $result = $pdo->query($sql);
            while ($row = $result->fetch()) {
                outputSinglePainting($row);
            }
            $pdo = null;
        }
    }catch (PDOException $e) {
        die( $e->getMessage() );
    }
}
```

```
 if (isset($_GET['id']) && $_GET['id'] > 0) 
```

检测上传至本页面的ID

```
$sql = 'select * from Paintings where ArtistId=' . $_GET['id'];
```

寻找artistid为ID的（从paintings中）

```
function outputSinglePainting($row) {
    echo '<div class="item">';
    echo '<div class="image">';
    echo '<img  src="images/art/works/square-medium/' . $row['ImageFileName'] .'.jpg">';
    echo '</div>';
    echo '<div class="content">';
    echo '<h4 class="header">';
    echo $row['Title'];
    echo '</h4>';
    echo '<p class="description">';
    echo $row['Excerpt'];
    echo '</p>';
    echo '</div>';  // end class=content
    echo '</div>';  // end class=item
}
```

直接绑定了对应ID并执行语句

可根据genreid排序并输出图片

## 其他

无