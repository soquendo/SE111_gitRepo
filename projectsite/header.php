<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>Capstone | VIPMe</title>
<style>

body {
  font-family: "Tahoma", Times, serif;
  font-size: "16px;";
  margin-left: 20px;
  margin-right: 10px;
}
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown .dropbtn {
  cursor: pointer;
  font-size: 20px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {
  background-color: #353B7D;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.show {
  display: block;
}
li {
  font-family: "Arial Black", Times, serif;
  font-size: "16px;";
}
</style>
</head>
<body>
<div class="navbar">
  
    <button class="dropbtn" onclick="dropDown()">Documents
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content" id="myDropdown">

        <a href="../projectsite/index.php">Home</a>
        <a href="../projectsite/team.php">Introduction to Team</a>
        <a href="https://docs.google.com/document/d/1ZU7MHxlpX3AfZZuNvEPtpkRoKP8elBTvvCo6OEDBW_s/edit?usp=share_link">Proposal</a>
        <a href="https://docs.google.com/document/d/1JSd9NdxsHPT6HTpJ3v4hhxCKvBEes8r4r6yho-n6gb8/edit?usp=share_link">Technical Design Document</a>
        <a href="../projectsite/final_ERD.png">Relationship Diagram</a>
        <a href="https://drive.google.com/file/d/173RBJ1UwLjZtySGoGmFbQBuFCbzPoW1B/view?usp=share_link">Prototype</a>
        <a href="../projectsite/screens.php">Screenshots</a>
        <a href="https://docs.google.com/presentation/d/1R_J7j6MD3N3YRxZXt1yjWFGBR0MfCP1Z-JDAl2abTLM/edit?usp=sharing">Presentation</a>
        <a href="https://drive.google.com/file/d/1jFsdFJHxtTkL83zGQSCJEKTDwTjR6SdO/view?usp=share_link">Zipped files</a>
        <a href="https://github.com/gordiviris/SE265">Github</a>
    </div>
  </div> 
</div>
<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
</script>