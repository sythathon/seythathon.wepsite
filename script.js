const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")
const followBtn = document.querySelector("follow-btn")

yesBtn.addEventListener("click", ()=> {
  question.innerHTML = "Wow You is Very Happy";
  gif.src="https://i.pinimg.com/originals/86/2e/c7/862ec75ee522180c764122a218eff794.gif"
})

followBtn.addEventListener("click", ()=> {
  question.innerHTML = "Thank You So Much";
  gif.src="https://i.pinimg.com/originals/b8/f3/f3/b8f3f38721dbd37544ccc0bb90fce117.gif"
})

noBtn.addEventListener("mouseover", ()=> {
  const noBtnRent = noBtn.gatBoundingclientRect();
  const maxX = window.innerWidth - noBtnRent.width;
  const maxY = window.innerHeight - noBtnRent.height;

  const randomX = Math.floor(Math.random() * maxX)
  const randomY = Math.floor(Math.random() * maxY)

  noBtn.computedStyleMap.left
})

