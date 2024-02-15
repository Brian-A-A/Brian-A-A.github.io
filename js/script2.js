$(document).ready(function () {
  // Initial setup
  var currentIndex = 0;
  var images = $(".col-md-6").find('img[class^="img"]');
  var texts = $(".col-md-6").find('div[class^="am"]');

  // Show the first image and text
  $(images[currentIndex]).show();
  $(texts[currentIndex]).show();

  // Function to switch to the next image and text with fade animation
  function switchToNext() {
    $(images[currentIndex]).fadeOut(1000, function () {
      $(texts[currentIndex]).hide();
      currentIndex = (currentIndex + 1) % images.length;
      $(images[currentIndex]).fadeIn(1000);
      $(texts[currentIndex]).fadeIn(1000);
    });
  }

  // Set interval to switch to the next image every 5 seconds
  setInterval(switchToNext, 8000);
});
