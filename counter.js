// code block for the lower "count button"

document.querySelector('.countdown').addEventListener('click', function set() {
  const currentnumber = parseInt(document.querySelector('.number').innerHTML);
  if (currentnumber <= 0) {
    const newnumber = currentnumber;
    document.querySelector('.number').innerHTML = newnumber;
    alert(`minimum limit reached`);
  } else {
    const newnumber = currentnumber - 1;
    document.querySelector('.number').innerHTML = newnumber;
  }
});

// code block for the add "count button"

document.querySelector('.countup').addEventListener('click', function set() {
  const currentnumber = parseInt(document.querySelector('.number').innerHTML);
  if (currentnumber >= 50) {
    const newnumber = currentnumber;
    document.querySelector('.number').innerHTML = newnumber;
    alert(`maximum limit reached`);
  } else {
    const newnumber = currentnumber + 1;
    document.querySelector('.number').innerHTML = newnumber;
  }
});