var bannerprincipal = "../img/banner/banner.png";
var defaultBackground = "#3C5075";

function changeImage(imagePath, backgroundColor) {
  var x = document.getElementById("mainbanner");
  x.style.opacity = "0";
  setTimeout(function() {
    x.src = imagePath;
    x.style.opacity = "1";
    document.body.style.backgroundColor = backgroundColor;
  }, 300);
}

function resetImage() {
  var x = document.getElementById("mainbanner");
  x.style.opacity = "0";
  setTimeout(function() {
    x.src = bannerprincipal;
    x.style.opacity = "1";
    document.body.style.backgroundColor = defaultBackground;
  }, 300);
}
