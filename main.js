const img = document.querySelector('.image')

document.addEventListener('mousemove', (e) => rotateElement(e, img))

const rotateElement = (event, element) => {
  const x = event.clientX
  const y = event.clientY

  //   console.log(x, y)
}
