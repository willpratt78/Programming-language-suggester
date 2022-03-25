$(document).ready(function() {
$("#quiz-form").submit(function(e) {
  e.preventDefault();
  const data = parseInt($("#data").val());
  const animal = parseInt($("#animal").val());
  const color = parseInt($("#color").val());
  const orginized = parseInt($("#orginized").val());
  const active = parseInt($("#active").val());

  const total = data + animal + color + orginized + active

  let result;
  let image;

  if(total <= 7) {
    result = "Python"

  } else if (total <=11) {
    result = "C#"

  } else if (total > 11) {
    result = "Ruby"
    
  }
  });
});
