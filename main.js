const images = document.querySelectorAll('.image img')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const close = document.querySelector('.close')
const galleryImg = document.querySelector('.gallery__inner img')
const gallery = document.querySelector('.gallery')

var currentIndex = 0

function Show() {
    if (currentIndex == 0) {
        prevBtn.classList.add('hide')
    }
    else {
        prevBtn.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        nextBtn.classList.add('hide')
    }
    else {
        nextBtn.classList.remove('hide')
    }
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach(function(image, index) {
    image.addEventListener('click', function() {
        currentIndex = index
        Show()
    })
})

close.onclick = function() {
    gallery.classList.remove('show')
}

prevBtn.onclick = function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    galleryImg.src = images[currentIndex].src
}

prevBtn.onclick = function() {
    currentIndex--;
    Show()
}

nextBtn.onclick = function() {
    currentIndex++;
    Show()
}
















