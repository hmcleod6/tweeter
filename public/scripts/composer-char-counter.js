$(document).ready(function () {
  const $inputForm = $("#tweet-text");
  let charactersRemaining = 140;

  $inputForm.on("keyup", function () {
    const lengthOfInput = $(this).val().length;
   
    const sibling = $(this).siblings();
    console.log('sibliings:', sibling)
    const children = $(sibling[1]).children()
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
