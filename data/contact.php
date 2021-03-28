<html lang='ko'>
    <head>
      <meta charset="UTF-8" />
<style>
    p{
        border:1px solid gray
    }
</style>
    </head>
<body>


<h1>Hi,<span><?php echo $_POST["name"]; ?></span></h1>
<span>We got your message</span>
<p> <?php echo $_POST["message"]; ?></p>
<span>We will contact you by e-mail :  <?php echo $_POST["email"]; ?></span>
</body>
</html>