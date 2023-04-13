
import lottie from 'lottie-web'
import hDialog from "../h-dialog/h-dialog.vue"
import { h } from "vue"


class LottieAnimation {
 lottieInstance = null;
 appendToBody = false;
 element = null;
 mask = null
 constructor(options) {
  if (options.element) {
   this.appendToBody = false
   this.element = options.element
  } else {
   this.appendToBody = true
   this.element = this.getDefaultElement()
  }
  this.lottieInstance = lottie.loadAnimation({
   container: this.element, // the dom element that will contain the animation
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: this.path, // the path to the animation json
   speed: 1,
   ...options
  })

  // this.play()
 }

 getDefaultElement () {
  const lottieAnimation = document.createElement('div')
  lottieAnimation.style.width = '100%'
  lottieAnimation.style.height = '200px'
  const loadingText = document.createElement('div')
  loadingText.innerText = '处理中...'
  loadingText.style.width = '100%'
  loadingText.style.height = '40px'
  loadingText.style.textAlign = 'center'
  loadingText.style.color = '#333'
  loadingText.style.fontSize = '20px'
  loadingText.style.lineHeight = '40px'
  // lottieContainer.appendChild(lottieAnimation)
  // lottieContainer.appendChild(loadingText)
  const hDialogRef = h(hDialog, {}, [lottieAnimation, loadingText])
  // const mask = document.createElement('div')
  // mask.style.position = 'fixed'
  // mask.style.top = '0'
  // mask.style.left = '0'
  // mask.style.width = '100%'
  // mask.style.height = '100%'
  // mask.style['z-index'] = '999999'
  // mask.style.background = 'rgba(0, 0, 0, 0.2)'
  // this.mask = mask
  // const lottieContainer = document.createElement('div')
  // lottieContainer.style.position = 'absolute'
  // lottieContainer.style.top = '50%'
  // lottieContainer.style.left = '50%'
  // lottieContainer.style.width = '200px'
  // lottieContainer.style.height = '240px'
  // lottieContainer.style.transform = 'translate(-50%, -50%)'
  // lottieContainer.style['z-index'] = '9999999'
  // mask.appendChild(lottieContainer)

  return lottieAnimation
 }

 play () {
  if (this.appendToBody) {
   document.body.appendChild(this.mask)
  }
  this.lottieInstance.play()
 }

 pause () {
  this.lottieInstance.pause()
 }

 stop () {
  if (this.appendToBody) {
   document.body.removeChild(this.mask)
  }
  this.lottieInstance.stop()
 }

}



export default function (type, option = {}) {
 if (type === 'lottie') {
  const loadingAnimation = new LottieAnimation({
   path: 'https://assets4.lottiefiles.com/packages/lf20_g7dnFTvMeQ.json',
   loop: true,
   ...option
  })

  return loadingAnimation
 } 
}

