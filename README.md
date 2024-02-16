# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub](https://github.com/Shcracoziabra/newsletter-sign-up-with-success-message)
- Live Site URL: [Netlify](https://shcraco-newsletter-signup.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS screen media queries
- Vanilla JS

### What I learned

In this challenge I learned to create slide animation with CSS
```css
.overlay {
    transition: all .3s ease-in
}

.overlay_shown {
    transform: translate(0, 0);
    opacity: 1
}

.overlay_hidden {
    transform: translate(0, -100%);
    opacity: 0
}
```

Used `RegExp` pattern to validate an e-mail input
```js
const pattern = /^[a-z0-9-_]+(?:\.?[a-z0-9-_]+)*@[a-z]+\.[a-z]+$/;
```

Made gradient background for buttons
```css
button:focus {
    background-image: linear-gradient(to right, var(--pink) 5%, var(--tomato) 95%);
}
```

Changed the element's order to fit its position in the mobile design
```css
.form__illustration {
        order: 0;
}
```
Added show/hide footer behavior on page scroll

## Author

- GitHub - [Tetiana B.](https://github.com/Shcracoziabra)
- Frontend Mentor - [@Shcracoziabra](https://www.frontendmentor.io/profile/Shcracoziabra)
