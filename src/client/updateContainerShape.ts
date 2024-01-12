export function updateContainerShape(): void {
  const containerElement = document.getElementById('main-content');
  const containerImages: string[] = [
    'url("../../images/blobs/main.svg")',
    'url("../../images/blobs/auxiliar-one.svg")',
    'url("../../images/blobs/auxiliar-two.svg")',
  ];

  if (containerElement) {
    const image: string = containerImages[getRandomPosition(containerImages.length)];
    containerElement.style.backgroundImage = image;
  }
}

function getRandomPosition(length: number): number {
  const minimum = 0;
  const maximum: number = --length;
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
