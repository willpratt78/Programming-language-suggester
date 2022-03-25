$(document).ready(function() {
$("#quiz-form").submit(function(e) {
  e.preventDefault();
  const data = parseInt($("#data").val());
  const animal = parseInt($("#animal").val());
  const color = parseInt($("#color").val());
  const orginized = parseInt($("#orginized").val());
  const active = parseInt($("#active").val());

console.log(data);
console.log(animal);
  });
});