<!DOCTYPE html>
<html lang="en">


<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Search Engine</title>
   <link rel="stylesheet" href="style.css">
   <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>


<body>
   <header class="header">
      <!-- <i class="bx bx-menu" id="menu-icon"></i> -->
      <nav class="navbar">
         <a href="https://www.gmail.com">Gmail</a>
         <a href="https://photos.google.com">Images</a>
      </nav>
   </header>

   <div class="body">
      <h1>Information&nbsp;Systems</h1>

      <div class="container">
         <div class="input-box">
            <i class='bx bx-search'></i>
            <input name="text" class="text" placeholder="How Can We Help You Today" id="Query">
         </div>
      </div>

      <button class="btn">Google Search</button>
      <a href="https://www.google.com/doodles/"><button class="btn">I'm Feeling Lucky</button></a>
      <button onclick=show_history(); class="btn">Show last search</button>
      <button onclick=clear_search_history(); class="btn">Clear history</button>

      <br><br>
      <div>
      <H3>Search History</H3>
      <br>
      <ul id="history_List"> </ul>
      </div>

   </div>

   <script src="app.js"></script>

   <div>


</body>

<footer class="footer">
   <div class="footer-text">
      <p>Copyright &copy; 2023 by IFS 23 | All Rights Reserved.</p>
   </div>
</footer>
</html>