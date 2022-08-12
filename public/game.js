document.getElementById('button1').onclick = click;
let clickcounter = 0;

function click() {
  clickcounter++;
  console.log(clickcounter);

  if (clickcounter === 2) {
    console.log(clickcounter);
    window.location.replace(
      window.location.origin + window.location.pathname + '/1'
    );
  }
}
