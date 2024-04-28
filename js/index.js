document.getElementById('call-back-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});


document.getElementById('menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    document.body.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links li a').forEach(function(link) {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('show');

        document.body.classList.remove('menu-open');
    });
});


window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

document.getElementById('scroll-to-top-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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
        intervalId = setInterval(nextReview, 3000); // 5000 миллисекунд = 5 секунд
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

function redirectToPage(url) {
    window.location.href = url;
}