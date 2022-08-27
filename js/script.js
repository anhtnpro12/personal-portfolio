// typing animation
let typed = new Typed('.typing', {
    strings: ['', 'Web Designer', 'Web Developer', 'Fullstack Developer', 'YouTuber'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Aside
const nav = document.querySelector('.nav')
const navList = nav.querySelectorAll('li')
const sectionList = document.querySelectorAll('section')

for (const item of navList) {
    item.querySelector('a').addEventListener('click', function () {
        for (const li of navList) {            
            li.querySelector('a').classList.remove('active')            
        }
        this.classList.add('active')
        showSection(this)
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })
}

function showSection(element) {
    for (const sec of sectionList) {
        sec.classList.remove('back-section')
        if (sec.classList.contains('active')) {
            sec.classList.add('back-section')
            sec.classList.remove('active')
        } 
    }
    
    const section = document.querySelector(element.getAttribute('href'))
    section.classList.add('active')
}

// Aside section toggle
const navTogglerBtn = document.querySelector('.nav-toggler')
const aside = document.querySelector('.aside')
navTogglerBtn.addEventListener('click', function() {
    asideSectionTogglerBtn()
})

function asideSectionTogglerBtn() {
    aside.classList.toggle('open')
    navTogglerBtn.classList.toggle('open')
    for (const item of sectionList) {
        item.classList.toggle('open')
    }
}

// hire me button
function updateNav(aElement) {
    for (const li of navList) {            
        const temp = li.querySelector('a')
        temp.classList.remove('active')            
        if (temp.getAttribute('href') === aElement.getAttribute('href')) {
            temp.classList.add('active')
        }
    }       
}

document.querySelector('.hire-me').addEventListener('click', function() {
    showSection(this)
    updateNav(this)
})