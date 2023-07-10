const boxes = document.querySelectorAll('.box')

//What for things to happened to the window, with the scroll. That will check the boxes.
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes () {
    //console.log(window.innerHeight /5*4) //This checks the inner height, and makes it less, then what is shown.
    const triggerBottom = window.innerHeight /5*4

boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
        box.classList.add('show')
    }
    else {
        box.classList.remove('show')
    }

    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
});
}