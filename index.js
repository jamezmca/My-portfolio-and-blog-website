const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

const sections = document.querySelector('.sections');

var j = 2;

navToggle.addEventListener('click', () => {

    document.body.classList.toggle('nav-open');
    console.log(document.body.classList.contains('nav-open'));
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});


sections.addEventListener('click', () => {
    if (document.body.classList.contains('nav-open')) {
        document.body.classList.toggle('nav-open');
    }
});



const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        target.classList.add('active');
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active')
        target.classList.add('active');
    })
})