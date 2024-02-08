document.addEventListener('DOMContentLoaded', function () {
    const pictures = document.querySelectorAll('.carousel .picture');
    let currentIndex = 0;

    function showPicture(index) {
        pictures.forEach((picture, i) => {
            picture.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextPicture() {
        currentIndex = (currentIndex + 1) % pictures.length;
        showPicture(currentIndex);
    }

    function prevPicture() {
        currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        showPicture(currentIndex);
    }

    showPicture(currentIndex);

    document.getElementById('nextBtn').addEventListener('click', nextPicture);
    document.getElementById('prevBtn').addEventListener('click', prevPicture);
});
