function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';

}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.querySelectorAll('.call-back-btn').forEach(function(button) {
    button.addEventListener('click', openModal);
});

document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', closeModal);
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});

document.getElementById('menu-btn').addEventListener('click', function (event) {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    document.body.classList.toggle('menu-open');

    if (event.target.tagName === 'A') {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('show');
        document.body.classList.remove('menu-open');
    }
});


const scrollToTopBtns = document.querySelectorAll('.scroll-to-top-btn');

scrollToTopBtns.forEach(button => {
    window.addEventListener('scroll', function () {
        button.classList.toggle('show', window.scrollY > 100);
    });

    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function redirectToPage(url) {
    window.location.href = url;
}

document.querySelectorAll('.product-card').forEach(function(card) {
    const description = card.querySelector('.product-description');
    const detailsButton = description.querySelector('.description-preview');

    description.classList.add('collapsed');

    detailsButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события, чтобы не активировать событие клика на карточке товара
        description.classList.toggle('collapsed');
        description.classList.toggle('expanded');
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.slider');
    let currentIndex = 0;
    let intervalId; // Переменная для хранения идентификатора интервала

    function showReview(index) {
        reviews.forEach(review => review.classList.remove('active'));
        reviews[index].classList.add('active');
    }

    function prevReview() {
        if (currentIndex === 0) {
            currentIndex = reviews.length - 1;
        } else {
            currentIndex--;
        }
        showReview(currentIndex);
    }

    function nextReview() {
        if (currentIndex === reviews.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        showReview(currentIndex);
    }

    function startSlideShow() {
        intervalId = setInterval(nextReview, 3000);
    }

    function stopSlideShow() {
        clearInterval(intervalId);
    }

    document.getElementById('prevButton').addEventListener('click', function() {
        stopSlideShow();
        prevReview();
        startSlideShow();
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        stopSlideShow();
        nextReview();
        startSlideShow();
    });

    showReview(currentIndex);

    startSlideShow();
});
