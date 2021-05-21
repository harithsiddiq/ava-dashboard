// Navbar Show //

const showNavbar  = (toggleId, navId, bodyId) => {
    const toggle = document.querySelector(`#${toggleId}`),
    nav = document.querySelector(`#${navId}`),
    bodyPd = document.querySelector(`#${bodyId}`);

    // check if variable exist
    if(toggle && nav) {
        toggle.addEventListener('click', () => {

            // show navbar
            nav.classList.toggle('show');

            // change icon
            toggle.classList.toggle('fa-times');

            // add padding to body
            bodyPd.classList.toggle('body-pd');
            // add padding to header
        });
    }
}

showNavbar('menu-toggle', 'nav-bar', 'body-pd')

// active link

const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    if(linkColor) {
        linkColor.forEach(l => l.classList.remove('active_link'));
        this.classList.add('active_link');
    }
}

linkColor.forEach(el => el.addEventListener('click', colorLink))
