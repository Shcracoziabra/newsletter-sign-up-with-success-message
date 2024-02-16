document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const footer = document.querySelector('.footer');
    const emailInput = document.querySelector('#email');
    const overlay = document.querySelector('.overlay')
    const dialogBtn = overlay.querySelector('.dialog button');
    const formatEmailWarning = form.querySelector('.form__format-msg');

    if (window.scrollY + window.innerHeight > form.scrollHeight - 20) {
        footer.classList.replace('footer_hidden', 'footer_shown');
    } else {
        footer.classList.replace('footer_shown', 'footer_hidden');
    }

    const pattern = /^[a-z0-9-_]+(?:\.?[a-z0-9-_]+)*@[a-z]+\.[a-z]+$/;
    
    emailInput.focus();

    emailInput.addEventListener('input', () => {

        if (formatEmailWarning.classList.contains('form__format-msg_shown')) {
            formatEmailWarning.classList.replace('form__format-msg_shown', 'form__format-msg_hidden');
            emailInput.classList.remove('form__input_wrong-format');
        }
        
    });

    window.addEventListener('resize', (e) => {
        if (window.scrollY + window.innerHeight > form.scrollHeight - 20) {
            footer.classList.replace('footer_hidden', 'footer_shown');
        } else {
            footer.classList.replace('footer_shown', 'footer_hidden');
        }
    });

    document.addEventListener('scroll', (e) => {
        if (window.scrollY + window.innerHeight > form.scrollHeight - 20) {
            footer.classList.replace('footer_hidden', 'footer_shown');
        } else {
            footer.classList.replace('footer_shown', 'footer_hidden');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;
        
        if(!pattern.test(email)) {
            formatEmailWarning.classList.replace('form__format-msg_hidden', 'form__format-msg_shown');
            emailInput.classList.add('form__input_wrong-format');
            emailInput.focus();
        } else {
            e.target.reset();
            overlay.classList.replace('overlay_hidden', 'overlay_shown');
            overlay.scrollIntoView('start');
            document.body.style.overflow = 'hidden';

            dialogBtn.focus();

        }
    });

    dialogBtn.addEventListener('click', () => {
        overlay.classList.replace('overlay_shown', 'overlay_hidden');
        document.body.style.overflow = '';
    });
});