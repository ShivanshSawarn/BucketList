# 📓 Personal Bucket List

A visually engaging, notebook-styled personal bucket list webpage built with pure HTML and CSS.

## 🚀 Getting Started

No installation or setup required.

1. Download or clone the project files.
2. Open `bucket-list.html` in any modern web browser.
3. That's it — it runs entirely in the browser with no dependencies.

---

## ✨ Features

- **Notebook aesthetic** — cream paper background, horizontal ruled lines, pink margin line, and spiral binding holes on the left edge
- **Handwritten fonts** — uses Google Fonts: `Caveat` for the title, `Kalam` for body text, and `Special Elite` for section stamps
- **Categorised sections** — items are grouped under Adventure & Travel, Personal Growth, and Wild Experiences
- **Interactive checkboxes** — click any item to toggle it as completed; completed items get a green strikethrough
- **Hover effects** — items shift color on hover for subtle interactivity
- **Fully responsive** — adapts cleanly to mobile and tablet screen sizes using CSS media queries

---

## 🗂️ Project Structure

```
bucket-list/
└── bucket-list.html     # Single self-contained file (HTML + CSS + JS)
```

Everything lives in one file for simplicity — the CSS is in a `<style>` block in the `<head>` and the small JavaScript snippet is at the bottom of the `<body>`.

---

## 🛠️ Built With

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and semantics |
| CSS3 | Styling, layout (Flexbox), animations, media queries |
| Vanilla JavaScript | Toggle completed state on click |
| Google Fonts | Caveat, Kalam, Special Elite |

---

## 📐 Key CSS Concepts Used

- **CSS Custom Properties (variables)** — for consistent theming across the whole page
- **Flexbox** — for aligning list items, section headers, and the footer
- **`repeating-linear-gradient`** — to draw the ruled lines and dashed section dividers
- **CSS transitions** — for smooth hover and toggle animations
- **Media queries** — `@media (max-width: 520px)` for mobile layout adjustments
- **`box-shadow`** — to simulate the depth and binding of a physical notebook

---

## 🎨 Design Decisions

The notebook aesthetic was chosen to give the page a personal, handmade feel — as if the bucket list was actually written down in a journal. Key choices:

- **Cream paper** (`#faf6ee`) instead of white to feel warm and physical
- **Pink margin line** and **grey ruled lines** to mimic real notebook paper
- **Spiral holes** rendered purely in CSS on the left edge
- **Red section stamps** with uppercase lettering for contrast against the soft ink tones
- **Green strikethrough** on completed items to feel satisfying and deliberate

---

## 📱 Responsive Behaviour

| Screen Size | Behaviour |
|-------------|-----------|
| Desktop (> 520px) | Full layout with tags visible, wide margins |
| Mobile (≤ 520px) | Tags hidden, reduced padding, tighter binding holes |

---

## 🔧 Customisation

To make this your own:

1. **Change the items** — edit the `<li>` elements inside each `<ul class="bucket-list">` in the HTML
2. **Change the sections** — update the `<div class="section-head">` labels and icons
3. **Mark items as done by default** — add the `done` class to any `<li class="bucket-item">` element
4. **Update the date** — change the text inside `<div class="nb-date">`
5. **Change the footer quote** — edit the text inside `<span class="nb-footer-left">`

---

## 📋 Learning Outcomes

This project demonstrates:

- Structuring content with semantic HTML lists (`<ul>`, `<li>`)
- Styling lists with custom CSS instead of default browser bullets
- Using CSS Flexbox for consistent alignment
- Creating responsive layouts with media queries
- Adding interactivity with a small JavaScript `toggle` function
- Applying a cohesive visual theme using CSS variables and custom fonts

---

## 📄 License

This project was built as part of a Web Development Internship. Free to use and modify for personal or educational purposes.
