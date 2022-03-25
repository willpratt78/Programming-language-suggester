$(document).ready(function() {
  $("#dark-mode").click(function() {
    $("body").addClass("dark-mode");
    $("#dark-mode").hide();
    $("#light-mode").show();
  });
});

$(document).ready(function() {
  $("#light-mode").click(function() {
    $("body").removeClass("dark-mode");
    $("#light-mode").hide();
    $("#dark-mode").show();
  });
});

$(document).ready(function() {
$("#quiz-form").submit(function(e) {
  e.preventDefault();
  const data = parseInt($("#data").val());
  const animal = parseInt($("#animal").val());
  const color = parseInt($("#color").val());
  const orginized = parseInt($("#orginized").val());
  const active = parseInt($("#active").val());
  const name =$("input#name").val();

  const total = data + animal + color + orginized + active

  let result;
  let image;

  if(total <= 7) {
    result = "Python"
    image = "<img src='img/python.png'>"
  } else if (total <=11) {
    result = "C#"
    image = "<img src='img/c.png'>"
  } else if (total > 11) {
    result = "Ruby"
    image = "<img src='img/ruby.png'>"
  }

  $("#output").text("");
  $("#output").append(`<p> Wow, ${name} you should study ${result} you've got great compatibility with it!!! <p>`);
  $("#output").append(image);
  });
});
