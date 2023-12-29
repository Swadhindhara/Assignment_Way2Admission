const accordions = document.querySelectorAll('.accordian');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {
        accordions.forEach(item => {
            if (item !== accordion) {
                const itemIcon = item.querySelector('.icon');
                const itemAnswer = item.querySelector('.answer');

                itemIcon.classList.remove('active');
                itemAnswer.classList.remove('active');
            }
        });

        icon.classList.toggle('active');
        answer.classList.toggle('active');
    });
});

    


        var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    document.addEventListener('DOMContentLoaded', function() {
        const hamburgerButton = document.getElementById('hamburger_id');
        const closeButton = document.getElementById('close_id');
        const rightMenu = document.querySelector('.right-menu');
    
        function addActiveClass() {
            rightMenu.classList.add('active-hamburger');
        }


        function removeActiveClass() {
            rightMenu.classList.remove('active-hamburger');
        }


        hamburgerButton.addEventListener('click', function() {
            addActiveClass();
        });


        closeButton.addEventListener('click', function() {
            removeActiveClass();
        });
    });
    