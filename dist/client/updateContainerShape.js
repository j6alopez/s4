export function updateContainerShape() {
    const containerElement = document.getElementById('main-content');
    const containerImages = [
        'url("../../images/blobs/main.svg")',
        'url("../../images/blobs/auxiliar-one.svg")',
        'url("../../images/blobs/auxiliar-two.svg")',
    ];
    if (containerElement) {
        const image = containerImages[getRandomPosition(containerImages.length)];
        containerElement.style.backgroundImage = image;
    }
}
function getRandomPosition(length) {
    const minimum = 0;
    const maximum = --length;
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
//# sourceMappingURL=updateContainerShape.js.map