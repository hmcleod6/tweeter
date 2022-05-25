$(document).ready(function () {
  const $inputForm = $("#tweet-text");
  let charactersRemaining = 140;

  $inputForm.on("keyup", function () {
    const lengthOfInput = $(this).val().length;
   
    const siblings = $(this).siblings();
    console.log('sibliings:', siblings)
    const children = $(siblings[1]).children()
    console.log('children:', children)
    const counter = $(children[1]);
    console.log('counter:', counter)

    if (lengthOfInput < 140) {
      counter.css("color", "#545149");
      counter.text(charactersRemaining - lengthOfInput);
    } else {
      counter.css("color", "#FF0000");
      counter.text(charactersRemaining - lengthOfInput);
    }
  });
});
