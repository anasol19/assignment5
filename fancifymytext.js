function showAlert() {
    alert("Hello, world!");
}

function biggerText() {
    document.getElementById("myTextArea").style.fontSize = "1.5em";
  }
  
  function applyStyle() {
    alert("Style is changing!")
    var textarea = document.getElementById("myTextArea");
    var fancyRadio = document.getElementById("fancy");
    
    //if "FancyShmancy" is selected,
    if (fancyRadio.checked) {
      textarea.style.fontWeight = "bold";
      textarea.style.color = "blue";
      textarea.style.textDecoration = "underline";
    }
    else {
      textarea.style.fontWeight = "normal";
      textarea.style.color = "black"; 
      textarea.style.textDecoration = "none"; 
    }
  }

  function mooify() {
    var textarea = document.getElementById("myTextArea");
    var text = textarea.value.toUpperCase();
    var sentences = text.split("."); 
    
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].trim().split(" "); 
      if (words.length > 1) { 
        words[words.length - 1] = words[words.length - 1] + "-Moo"; 
        sentences[i] = words.join(" "); 
      }
    }
    textarea.value = sentences.join(". ");
  }
