const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

const body = document.querySelector('.body-content');

var j = 2;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

if (navToggle.classList.contains('nav-open')) {
    body.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
}


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