let currentIdx = 0

let items = document.getElementById('storage').children

function updateCurrent() {
    const toBeCurrent = items[currentIdx].cloneNode(true)
    toBeCurrent.setAttribute('id', 'current')

    document.getElementById('current').replaceWith(toBeCurrent)
}

function previous() {
    currentIdx = currentIdx == 0 ? items.length - 1 : currentIdx - 1
    updateCurrent()
}

function next() {
    currentIdx = currentIdx == items.length - 1 ? 0 : currentIdx + 1
    updateCurrent()
}

for (const [idx, image] of [...items].entries()) {
    image.onclick = function () {
        currentIdx = idx
        updateCurrent()
    }
}

updateCurrent()
