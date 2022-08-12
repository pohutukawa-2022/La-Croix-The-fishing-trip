const randomNo = Math.floor(Math.random() * 3)

console.log('hi')

let squares = document.getElementsByTagName('td')

console.log(squares)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

let whichSquare

function showSplash() {
  whichSquare = squares[getRndInteger(0, squares.length)]
  whichSquare.innerHTML =
    '<img id="splash" src="/Images/splash.png" alt="splash" width="75px">'
}

showSplash()

document.getElementById('splash').onclick = click
let clickcounter = 0

function click() {
  clickcounter++
  console.log(clickcounter)

  if (clickcounter === 2) {
    console.log(clickcounter)
    window.location.replace(
      window.location.origin + window.location.pathname + '/1'
    )
  }
}
