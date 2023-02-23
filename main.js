import { Application } from '@splinetool/runtime'

const canvas = document.getElementById('canvas3d')

canvas.width = 1024
canvas.height = 700

const app = new Application(canvas)

console.log(app)

app.load('https://prod.spline.design/PmqLtt2IxkQxoICp/scene.splinecode')

// const img = document.querySelector('.image')

// document.addEventListener('mousemove', (e) => rotateElement(e, img))

// const rotateElement = (event, element) => {
//   const x = event.clientX
//   const y = event.clientY

//   //   console.log(x, y)
// }
