// onload = () => {
//   document.body.classList.remove("container");
// };

window.onload = function() {
  document.getElementById('popup').style.display = 'block';
};

document.getElementById('closeButton').onclick = function() {
  document.getElementById('popup').style.display = 'none';
  document.body.classList.remove("container");
};

