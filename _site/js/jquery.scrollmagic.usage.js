$(function() {
  // init controller
  var controller = new ScrollMagic();

  // assign handler "scene" and add it to Controller
  var scene = new ScrollScene({duration: 100})
          .setPin("#pin-me")   // pins the element for a scroll distance of 100px
          .addTo(controller);
});