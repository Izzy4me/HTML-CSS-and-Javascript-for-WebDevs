(function (window) {

  var helloSpeaker = Object.create(null);
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);


