// Находим контейнер со слайдами
    var slides = $('.gallery .scroll');
    var slideCount = $('.gallery img').length; // Количество слайдов
    var prevButton = $('.gallery .back');
    var nextButton = $('.next');
    var slider = $('.gallery');

    let currentIndex = 0; // Текущий индекс слайда
    let autoPlayInterval; // Интервал для автопрокрутки

    /**
     * Функция смены слайда.
     * @param {number} index - Индекс слайда, на который нужно перейти.
     */
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Если нажали "Назад" на первом слайде, переходим к последнему
        } else if (index >= slideCount) {
            index = 0; // Если нажали "Вперед" на последнем слайде, переходим к первому
        }
        currentIndex = index;
        slides.style.transform = `translateX(${-index * 100}%)`; // Смещение слайдов
    }

    // Обработчики кликов для кнопок
    prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

    /**
     * Запускает автоматическую прокрутку слайдов.
     */
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 3000);
    }

    /**
     * Останавливает автоматическую прокрутку.
     */
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    startAutoPlay(); // Запускаем автопрокрутку
    slider.addEventListener('mouseenter', stopAutoPlay); // Остановка при наведении мыши
    slider.addEventListener('mouseleave', startAutoPlay); // Возобновление при уходе мыши