var bannerprincipal = "../img/banner/banner.png";

function changeImage(imagePath, backgroundColor) {
  var x = document.getElementById("mainbanner");
  x.style.opacity = "0";
  setTimeout(function() {
    x.src = imagePath;
    x.style.opacity = "1";
  }, 300);
}

function resetImage() {
  var x = document.getElementById("mainbanner");
  x.style.opacity = "0";
  setTimeout(function() {
    x.src = bannerprincipal;
    x.style.opacity = "1";
  }, 300);
}
