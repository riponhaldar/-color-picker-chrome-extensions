// color picker

const input = document.getElementById('colorPicker');
const input1 = document.getElementById('input1');
const copy = document.getElementById('btn');
input.addEventListener('input', setColor);
const atag = document.querySelectorAll('a');
const h6tag = document.querySelector('h6');
console.log(atag);
function setColor() {
  document.querySelector('.container_color-piker').style.backgroundColor =
    input.value; //color background
  atag.forEach((data) => {
    data.style.color = input.value; //font color
  });
  h6tag.style.color = input.value; //font color
  input1.value = input.value;
}
setColor();
//  click button
copy.onclick = function () {
  var slect = input1.select();
  console.log(slect);
  document.execCommand('copy');
};
