import helpers from './helper.js';

// Navbar Show //
let nav;

// document.querySelector('#body-pd').classList.add('body-pd');
// document.querySelector('.l-navbar').classList.add('show')

const showNavbar  = (toggleId, navId, bodyId) => {
    const toggle = document.querySelector(`#${toggleId}`);
    nav = document.querySelector(`#${navId}`);
    const bodyPd = document.querySelector(`#${bodyId}`);
    // check if variable exist
    if(toggle && nav) {
        toggle.addEventListener('click', () => {

            // show navbar
            nav.classList.toggle('show');
            if(!nav.classList.contains('show')) {
                helpers.NavRemoveClass(document.querySelectorAll('.nav__dropdown'));
            }
            
            document.querySelectorAll('.nav__link').forEach(link => {
                link.classList.toggle('opacity-1');
            });

            document.querySelectorAll('.sidebar-title').forEach(link => {
                link.classList.toggle('opacity-1');
            });
            
            // change icon
            // toggle.classList.toggle('fa-bars');
            
            // add padding to body
            bodyPd.classList.toggle('body-pd');
            // add padding to header
        });
    }
}

showNavbar('menu-toggle', 'nav-bar', 'body-pd')


let lnavBar = document.querySelector('.l-navbar');

lnavBar.addEventListener('mouseleave', () => {
    if(window.outerWidth < 787)
        helpers.NavRemoveClass(document.querySelectorAll('.nav__dropdown'));
})

// active link

const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    if(linkColor) {
        linkColor.forEach(l => l.classList.remove('active_link'));
        this.classList.add('active_link');
    }
}

linkColor.forEach(el => el.addEventListener('click', colorLink))

// End Navbar Show //


// toggle fullscreen body

const fscreenBtn = document.querySelector('#toggle-expanded');
const body = document.querySelector('html');
function toggleScreen() {
    if(body) {
        if(body.requestFullscreen) {
            body.requestFullscreen()
        }
    }
}

fscreenBtn.addEventListener('click', toggleScreen);

// end toggling full scrren

// Side bar collapse menu
let dropdownbtns = document.querySelectorAll('.nav__dropdown');

let navDropDown = Array.from(dropdownbtns);
console.log(navDropDown)

// add ''open__collapse-menu'' class to current elemnt and remov it form others 
function navMenuCollapse() {
    if(nav.classList.contains('show')) {
        let hasOpenClass = this.classList.contains('open__collapse-menu');
        helpers.NavRemoveClass(navDropDown)
    
        if(!hasOpenClass)
            this.classList.add('open__collapse-menu')
    }
}

navDropDown.forEach(el => el.addEventListener('click', navMenuCollapse));



// switch themes
// document.documentElement.style.setProperty('--sidebar-color', 'red');

