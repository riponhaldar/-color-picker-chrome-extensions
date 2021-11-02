// color picker
const body = document.querySelector('body');
const input = document.getElementById('colorPicker');
const input1 = document.getElementById('input1');
const copy = document.getElementById('btn');
input.addEventListener('input', setColor);
const atag = document.querySelectorAll('a');
console.log(atag);
function setColor() {
  //   body.style.backgroundColor = input.value;
  document.querySelector('.container_color-piker').style.backgroundColor =
    input.value;
  atag.forEach((data) => {
    data.style.color = input.value;
  });
  input1.value = input.value;
}
setColor();
//  click button

copy.onclick = function () {
  var slect = input1.select();
  console.log(slect);
  document.execCommand('copy');
};
