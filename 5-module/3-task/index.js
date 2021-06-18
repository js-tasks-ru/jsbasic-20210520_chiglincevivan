function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const innerGallery = carousel.querySelector('.carousel__inner');
  const leftControl = carousel.querySelector('.carousel__arrow_left');
  const rightControl = carousel.querySelector('.carousel__arrow_right');

  const totalSlides = innerGallery.querySelectorAll('.carousel__slide').length;
  const startSlide = 0;
  const lastSlide = totalSlides - 1;
  let curPos = startSlide;

  // у крайних элементов убираем стрелки
  function ArrowCheck() {
    (curPos == startSlide) ? leftControl.style.display = 'none' : leftControl.style.display = '';
    (curPos == lastSlide) ? rightControl.style.display = 'none' : rightControl.style.display = '';
  }

  // убираем левую стрелку при 1-м отображении
  ArrowCheck();

  // определяем ширигу верхнего блока, чтобы сдвигать галлерею на эту ширину.
  const carouselWidth = innerGallery.offsetWidth;
  function move() {
    innerGallery.style.transform = `translateX(${curPos * -carouselWidth}px)`;
  }

  leftControl.addEventListener('click', () => {curPos--; move(); ArrowCheck()}); // меняем позицию элемента, сдвигаем галерею. проверяем нужду в стрелках
  rightControl.addEventListener('click', () => {curPos++; move(); ArrowCheck()}); 
}
