function toggleMode() {
    const body = document.body
    body.classList.toggle('light')
/*
    if (body.classList.contains('light')){
        body.classList.remove('light')
    } else {
        body.classList.add('light')
    }
*/
    const img = document.querySelector("#profile img")

    if (body.classList.contains('light')) {
        img.setAttribute("src", "./assets/avata-light.jpg")
    } else {
        img.setAttribute("src", "https://github.com/breno-saraiva.png")
    }

}