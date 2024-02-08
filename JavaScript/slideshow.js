var maxDuration = 2500;

var slideIndexBoho = 0;
showSlides('boho-style',maxDuration);

var slideIndexMinimalist = 0;
showSlides('minimalist',maxDuration);

var slideIndexModern = 0;
showSlides('modern',maxDuration);

var slideIndexCoastal = 0;
showSlides('coastal',maxDuration);

var slideIndexIndustrial = 0;
showSlides('industrial',maxDuration);

var slideIndexContemp = 0;
showSlides('contemporary',maxDuration);

function showSlides(category, duration) {
    var i;
    var slides = document.querySelectorAll('#' + category + ' .mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    if (category === 'boho-style') {
        slideIndexBoho++;
        if (slideIndexBoho > slides.length) {
            slideIndexBoho = 1;
        }
        slides[slideIndexBoho - 1].style.display = 'block';
    }

    else if (category === 'minimalist') {
        slideIndexMinimalist++;
        if (slideIndexMinimalist > slides.length) {
            slideIndexMinimalist = 1;
        }
        slides[slideIndexMinimalist - 1].style.display = 'block';
    }

    else if (category === 'modern') {
        slideIndexModern++;
        if (slideIndexModern > slides.length) {
            slideIndexModern = 1;
        }
        slides[slideIndexModern - 1].style.display = 'block';
    }

    else if (category === 'coastal') {
        slideIndexCoastal++;
        if (slideIndexCoastal > slides.length) {
            slideIndexCoastal = 1;
        }
        slides[slideIndexCoastal - 1].style.display = 'block';
    }

    else if (category === 'industrial') {
        slideIndexIndustrial++;
        if (slideIndexIndustrial > slides.length) {
            slideIndexIndustrial = 1;
        }
        slides[slideIndexIndustrial - 1].style.display = 'block';
    }

    else if (category === 'contemporary') {
        slideIndexContemp++;
        if (slideIndexContemp > slides.length) {
            slideIndexContemp = 1;
        }
        slides[slideIndexContemp - 1].style.display = 'block';
    }

    setTimeout(function() {
        showSlides(category, duration);
    }, duration);
}
