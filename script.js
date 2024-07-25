const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
  question.innerHTML = "Yayy I Love You";
  gif.src="https://i.pinimg.com/originals/fc/50/45/fc504576b225dddb40e38ba7c05a5bf4.gif"
})

noBtn.addEventListener("mouseover", ()=> {
  const noBtnRent = noBtn.getBoundingclientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRent.height;

  const randomX = Math.floor(Math.random() * maxX)
  const randomY = Math.floor(Math.random() * maxY)

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

})