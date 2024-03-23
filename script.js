// show menu

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*validate if constant exists*/
    if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }


/*MENU HIDDEN */
/*Validates if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// Add Blur to Header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                                : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// Email Js
const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // ServiceID - templateID - form -publickey
    emailjs.sendForm('service_vkbwfnc','template_quwtg9n','#contact-form','ljIFcURL4Mo1CMQ0E')

                .then(() =>{
                    // Show sent message
                    contactMessage.textContent = 'Message sent successfully✅'

                    // Remove message after 5 seconds
                    setTimeout(() =>{
                        contactMessage.textContent =''
                    }, 5000)

                    // Clear input fields
                    contactForm.reset()
                    
                }, () =>{
                    // Show Error Message
                    contactMessage.textContent = 'Message not sent (service error ❌'
                })
                
}
contactForm.addEventListener('submit',sendEmail)


// SHow Scrollup
const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay:400,
    // reset:true
})

sr.reveal('.home__data, home__social , .contact__container, .footer__container')
sr.reveal('.home__image', {origin:'bottom'})
sr.reveal('.about__data , .skills__data', {origin:'left'})
sr.reveal('.about__image , .skills__content', {origin:'right'})
sr.reveal('.services__card , .projects__card', {interval:100})
