# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](<img width="1319" height="655" alt="Image" src="https://github.com/user-attachments/assets/ed52a213-2d20-4c57-99b6-3308906081dd" />)


**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
1. To load CSS Files async, you can check the code block below.

`<link rel="preload" href="style.css" as="style" onload="this.rel='stylesheet'">`

## Mistakes & Learning Points (HTML)

### **1. Misuse of `<legend>`**

* `<legend>` must be used **only inside** a `<fieldset>` to label a group of related form controls.
* Using `<legend>` to wrap individual inputs is **invalid HTML**.
  **Learning:** Use `<div>` or `<fieldset>` appropriately depending on context.

---

### **2. Missing or Improper Labels**

* Some inputs (e.g., "Custom Tip") relied solely on a placeholder.
* Placeholders are **not** a replacement for `<label>` — they disappear when typing and are not read by screen readers consistently.
  **Learning:** Always provide accessible labels, even if visually hidden.

---

### **3. Incorrect Input Types**

* "Bill" was `type="text"` instead of `type="number"`.
  **Learning:** Use `type="number"` for numeric input to prevent invalid characters and trigger numeric keyboards on mobile.

---

### **4. Tip Buttons Accessibility**

* Tip percentage buttons work visually, but they’re semantically better as **radio inputs** if they represent a single choice in a set.
  **Learning:** Use the correct control type for the intended interaction.

---

### **5. Reset Button Behavior**

* Used `type="reset"` when functionality may need custom logic.
  **Learning:** Use `type="button"` and handle reset in JavaScript for predictable behavior.

---

### **6. Font Loading Optimization**

* Requested many font weights (`300–800`) for **Space Mono**, but the font family doesn’t even have all those weights.
  **Learning:** Only load the font weights you actually use to reduce page load.

---

### **7. Semantic Section Naming**

* Sections named only `input-section` / `output-section`.
  **Learning:** Use descriptive, semantic names (`form-section`, `result-section`) to improve maintainability.

---

### **8. Form Structure**

* Unnecessary `action="#"` if not submitting to a server.
  **Learning:** Remove unused attributes for cleaner HTML.


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
