export const cssCourse = {
  slug: "css",
  categorySlug: "web-dev",
  title: "CSS - Complete Web Styling & Layout",
  description:
    "Learn CSS from the fundamentals to professional responsive web design. Build real interfaces using selectors, the box model, Flexbox, Grid, responsive design, forms, animations, variables, accessibility, and reusable UI components.",
  level: "Débutant" as const,
  icon: "🎨",

  modules: [
    // ============================================================
    // MODULE 1
    // ============================================================
    {
      title: "Module 1: CSS Fundamentals",
      lessons: [
        {
          slug: "introduction-to-css",
          title: "1. Introduction to CSS",
          duration: "12 min",
          description:
            "Understand what CSS is, why it exists, and how HTML and CSS work together to create websites.",

          objectives: [
            "Understand the purpose of CSS.",
            "Understand the relationship between HTML and CSS.",
            "Write your first CSS rule.",
            "Connect an external CSS file to an HTML document.",
            "Understand how the browser applies CSS.",
          ],

          content: [
            `# What is CSS?

CSS stands for **Cascading Style Sheets**.

HTML gives a webpage its **structure and meaning**.

CSS controls how that structure **looks and behaves visually**.

For example, HTML can tell the browser:

\`\`\`html
<h1>Welcome to my website</h1>
<p>This is my first website.</p>
<button>Get Started</button>
\`\`\`

Without CSS, the browser displays the elements using its default styles.

CSS allows us to control:

- Colors
- Fonts
- Spacing
- Width and height
- Borders
- Layout
- Responsive behavior
- Animations
- Hover effects
- Positioning
- Grid and Flexbox layouts
`,

            `# Your first CSS rule

A CSS rule normally looks like this:

\`\`\`css
selector {
  property: value;
}
\`\`\`

For example:

\`\`\`css
h1 {
  color: blue;
}
\`\`\`

Here:

- \`h1\` is the selector.
- \`color\` is the property.
- \`blue\` is the value.

The browser finds every \`h1\` element and applies the rule.
`,

            `# Connecting CSS to HTML

The recommended approach for real projects is to use an external stylesheet.

### HTML

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Welcome</h1>
  <p>Learning CSS is fun.</p>
</body>
</html>
\`\`\`

### CSS

\`\`\`css
h1 {
  color: #2563eb;
}

p {
  color: #555;
}
\`\`\`

The \`link\` element tells the browser to load \`style.css\`.

This is the approach you will normally use in professional websites.
`,

            `# HTML + CSS: A real example

Imagine you are building a landing page for a company.

### HTML

\`\`\`html
<section class="hero">
  <h1>Build Better Websites</h1>
  <p>Learn modern web development step by step.</p>
  <button>Start Learning</button>
</section>
\`\`\`

### CSS

\`\`\`css
.hero {
  text-align: center;
  padding: 80px 20px;
  background: #f5f7ff;
}

.hero h1 {
  color: #111827;
  font-size: 48px;
}

.hero p {
  color: #6b7280;
}

.hero button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
}
\`\`\`

Notice how HTML describes **what the content is**, while CSS controls **how it looks**.
`,

            `# Why CSS matters in real projects

Almost every modern website needs CSS.

You will use CSS to create:

- Navigation bars
- Cards
- Dashboards
- Login pages
- E-commerce pages
- Blogs
- Landing pages
- Forms
- Buttons
- Mobile layouts
- Responsive websites

CSS is not just about making a page "pretty".

Good CSS also controls:

- Layout
- Accessibility
- Maintainability
- Responsive behavior
- User experience
- Visual hierarchy
`,

            `# Common beginner mistake

Avoid putting all your styling directly inside HTML:

\`\`\`html
<h1 style="color: red; font-size: 40px;">
  Hello
</h1>
\`\`\`

Inline CSS works, but it becomes difficult to maintain.

Prefer:

\`\`\`html
<h1 class="page-title">Hello</h1>
\`\`\`

and:

\`\`\`css
.page-title {
  color: red;
  font-size: 40px;
}
\`\`\`

This separates structure from presentation.
`,

            `# Real-world challenge

Create a simple profile section containing:

- A heading
- A paragraph
- An image
- A button

Then use CSS to:

1. Change the heading color.
2. Center the content.
3. Add spacing.
4. Style the button.
5. Add a background color.

Do not use inline styles.
`,
          ],

          examples: [
            `HTML:

<h1 class="title">Learn Web Development</h1>
<p class="description">
  Build real websites with HTML, CSS and JavaScript.
</p>
<button class="btn">Start Learning</button>

CSS:

.title {
  color: #1d4ed8;
}

.description {
  color: #64748b;
}

.btn {
  background: #1d4ed8;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
}`,
          ],

          practice: [
            "Create an HTML profile card.",
            "Connect an external CSS file.",
            "Change the card background.",
            "Style the heading and paragraph.",
            "Create a styled button.",
            "Experiment with different colors.",
          ],

          quiz: [
            {
              question: "What does CSS primarily control?",
              options: [
                "The visual presentation and layout of HTML",
                "The database",
                "The server",
                "The URL",
              ],
              answer: 0,
              explanation:
                "CSS controls presentation, layout, spacing, colors, typography and visual behavior.",
            },
            {
              question: "Which syntax represents a CSS rule?",
              options: [
                "selector { property: value; }",
                "<selector> property value",
                "css(selector=value)",
                "selector -> value",
              ],
              answer: 0,
              explanation:
                "A CSS rule contains a selector followed by declarations inside curly braces.",
            },
          ],
        },

        {
          slug: "css-syntax-selectors",
          title: "2. CSS Syntax & Selectors",
          duration: "15 min",
          description:
            "Learn how CSS targets HTML elements using element, class, ID, grouping, descendant, child, and attribute selectors.",

          objectives: [
            "Understand CSS selectors.",
            "Use element selectors.",
            "Use class selectors.",
            "Use ID selectors.",
            "Use grouping selectors.",
            "Understand descendant and child selectors.",
            "Use attribute selectors.",
          ],

          content: [
            `# CSS Selectors

A selector tells CSS **which HTML elements should receive a style**.

For example:

\`\`\`css
p {
  color: gray;
}
\`\`\`

This selects every \`<p>\` element.
`,

            `# Element selectors

HTML:

\`\`\`html
<h1>My Website</h1>
<p>Welcome to my website.</p>
<p>Learn CSS today.</p>
\`\`\`

CSS:

\`\`\`css
p {
  color: #555;
}
\`\`\`

Every paragraph receives the style.

Element selectors are useful when you want a general rule.
`,

            `# Class selectors

Classes are extremely common in real projects.

HTML:

\`\`\`html
<button class="btn">Login</button>
<button class="btn">Register</button>
\`\`\`

CSS:

\`\`\`css
.btn {
  padding: 12px 20px;
  border-radius: 8px;
  background: #2563eb;
  color: white;
}
\`\`\`

The \`.\` means "select a class".

Classes allow you to reuse styles across many elements.
`,

            `# IDs

HTML:

\`\`\`html
<header id="main-header">
  My Website
</header>
\`\`\`

CSS:

\`\`\`css
#main-header {
  background: #111827;
}
\`\`\`

The \`#\` selects an ID.

In modern application development, classes are generally more reusable than IDs for styling.
`,

            `# Descendant selectors

Suppose you have:

\`\`\`html
<div class="card">
  <h2>Product</h2>
  <p>Description</p>
</div>
\`\`\`

You can write:

\`\`\`css
.card h2 {
  color: #111827;
}

.card p {
  color: #6b7280;
}
\`\`\`

This means:

"Select h2 elements inside .card."

This becomes very useful when building components.
`,

            `# Child selector

The \`>\` selector targets direct children.

\`\`\`css
.card > h2 {
  margin-bottom: 10px;
}
\`\`\`

This is different from:

\`\`\`css
.card h2 {
}
\`\`\`

The second selector can match deeper descendants.
`,

            `# Attribute selectors

HTML:

\`\`\`html
<input type="text">
<input type="email">
<input type="password">
\`\`\`

CSS:

\`\`\`css
input[type="email"] {
  border-color: blue;
}
\`\`\`

This allows CSS to target elements based on their attributes.
`,

            `# Real-world example: login form

HTML:

\`\`\`html
<form class="login-form">
  <label>Email</label>
  <input type="email">

  <label>Password</label>
  <input type="password">

  <button class="btn">Login</button>
</form>
\`\`\`

CSS:

\`\`\`css
.login-form {
  max-width: 400px;
}

.login-form label {
  display: block;
  margin-bottom: 6px;
}

.login-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
}

.login-form .btn {
  width: 100%;
}
\`\`\`

This is the type of selector combination you will use constantly in real applications.
`,
          ],

          examples: [
            `/* Element */
p {
  color: gray;
}

/* Class */
.card {
  padding: 20px;
}

/* ID */
#header {
  background: black;
}

/* Descendant */
.card p {
  color: #666;
}

/* Direct child */
.card > h2 {
  margin: 0;
}

/* Attribute */
input[type="email"] {
  border-color: blue;
}`,
          ],

          practice: [
            "Create a product card.",
            "Use a class for the card.",
            "Use descendant selectors for the title and description.",
            "Create an attribute selector for an email input.",
            "Create three buttons sharing one class.",
          ],

          quiz: [
            {
              question: "Which symbol selects a class?",
              options: [".", "#", "@", ":"],
              answer: 0,
              explanation:
                "A period followed by the class name selects an element by class.",
            },
            {
              question: "What does .card p select?",
              options: [
                "Paragraphs inside .card",
                "Only .card",
                "All cards",
                "Paragraph IDs",
              ],
              answer: 0,
              explanation:
                "It selects paragraph elements that are descendants of an element with the card class.",
            },
          ],
        },

        {
          slug: "colors-backgrounds",
          title: "3. Colors & Backgrounds",
          duration: "15 min",
          description:
            "Learn how to use colors, gradients, background images, and overlays to create professional interfaces.",

          objectives: [
            "Use named colors.",
            "Use HEX, RGB and HSL colors.",
            "Apply background colors.",
            "Use gradients.",
            "Use background images.",
            "Create overlays.",
          ],

          content: [
            `# CSS Colors

CSS supports several color formats.

### Named colors

\`\`\`css
color: red;
\`\`\`

### HEX

\`\`\`css
color: #2563eb;
\`\`\`

### RGB

\`\`\`css
color: rgb(37, 99, 235);
\`\`\`

### HSL

\`\`\`css
color: hsl(217, 91%, 60%);
\`\`\`

HEX is very common in design systems.
`,

            `# Background colors

\`\`\`css
.card {
  background-color: #ffffff;
}

.page {
  background-color: #f8fafc;
}
\`\`\`

Background colors are commonly used to separate sections visually.
`,

            `# Gradients

Gradients are useful for hero sections and visual backgrounds.

\`\`\`css
.hero {
  background: linear-gradient(
    135deg,
    #2563eb,
    #7c3aed
  );
}
\`\`\`

The browser smoothly transitions between the colors.
`,

            `# Background images

\`\`\`css
.hero {
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: center;
}
\`\`\`

\`background-size: cover\` makes the image cover the available area.
`,

            `# Real-world hero section

HTML:

\`\`\`html
<section class="hero">
  <div class="hero-content">
    <h1>Learn Web Development</h1>
    <p>Build modern websites from scratch.</p>
    <a href="#">Start Learning</a>
  </div>
</section>
\`\`\`

CSS:

\`\`\`css
.hero {
  min-height: 500px;
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url("hero.jpg");

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  color: white;
  text-align: center;
}
\`\`\`

The dark gradient makes the text easier to read over the image.

This technique is common in real landing pages.
`,
          ],

          examples: [
            `.hero {
  min-height: 500px;

  background:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("hero.jpg");

  background-size: cover;
  background-position: center;
}`,
          ],

          practice: [
            "Create a hero section.",
            "Add a background image.",
            "Add a dark overlay.",
            "Center the hero content.",
            "Create a gradient button.",
          ],
        },

        {
          slug: "css-units",
          title: "4. CSS Units: px, %, rem, em, vw and vh",
          duration: "14 min",
          description:
            "Understand CSS measurement units and learn which units are useful for responsive interfaces.",

          objectives: [
            "Understand px.",
            "Understand percentages.",
            "Understand rem and em.",
            "Understand viewport units.",
            "Choose appropriate units for real-world layouts.",
          ],

          content: [
            `# CSS Units

CSS values often require a unit.

For example:

\`\`\`css
font-size: 16px;
padding: 20px;
width: 80%;
\`\`\`

Different units behave differently.
`,

            `# Pixels

\`px\` is an absolute CSS unit.

\`\`\`css
.card {
  border-radius: 12px;
  padding: 20px;
}
\`\`\`

Pixels are useful for precise values such as:

- Borders
- Small spacing
- Border radius
- Icons
`,

            `# Percentages

Percentages are relative to a containing element.

\`\`\`css
.container {
  width: 80%;
}
\`\`\`

This allows the element to grow and shrink with its parent.
`,

            `# rem

\`rem\` is relative to the root font size.

If the root font size is 16px:

\`\`\`css
2rem = 32px
1rem = 16px
0.5rem = 8px
\`\`\`

This is very useful for consistent spacing and typography.
`,

            `# Viewport units

\`vw\` means viewport width.

\`vh\` means viewport height.

For example:

\`\`\`css
.hero {
  min-height: 100vh;
}
\`\`\`

This can make a hero section fill the screen.
`,

            `# Practical rule

A modern project might use:

\`\`\`css
.container {
  width: min(90%, 1200px);
}

h1 {
  font-size: 3rem;
}

.card {
  padding: 1.5rem;
}

.hero {
  min-height: 100vh;
}
\`\`\`

The goal is not to memorize one "correct" unit.

The goal is to understand what each unit represents and choose appropriately.
`,
          ],

          examples: [
            `.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}

.card {
  padding: 1.5rem;
  border-radius: 0.75rem;
}

.hero {
  min-height: 100vh;
}`,
          ],

          practice: [
            "Create a container that never becomes wider than 1200px.",
            "Use rem for spacing.",
            "Use percentage width for mobile-friendly layouts.",
            "Create a hero section using vh.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 2
    // ============================================================
    {
      title: "Module 2: The CSS Box Model",
      lessons: [
        {
          slug: "box-model",
          title: "5. The CSS Box Model",
          duration: "18 min",
          description:
            "Understand content, padding, border and margin — one of the most important concepts in CSS.",

          objectives: [
            "Understand the CSS box model.",
            "Understand content, padding, border and margin.",
            "Use box-sizing.",
            "Debug unexpected element sizes.",
          ],

          content: [
            `# The Box Model

Every HTML element can be thought of as a box.

The box contains:

1. Content
2. Padding
3. Border
4. Margin

Imagine a product card.

The text is the **content**.

The space around the text is **padding**.

The visible outline is the **border**.

The space outside the card is the **margin**.
`,

            `# Padding

Padding creates space **inside** an element.

\`\`\`css
.card {
  padding: 24px;
}
\`\`\`

HTML:

\`\`\`html
<div class="card">
  <h2>Product</h2>
  <p>Product description.</p>
</div>
\`\`\`

Padding prevents the content from touching the edges.
`,

            `# Margin

Margin creates space **outside** an element.

\`\`\`css
.card {
  margin-bottom: 24px;
}
\`\`\`

This is useful when separating multiple components.
`,

            `# Border

\`\`\`css
.card {
  border: 1px solid #e5e7eb;
}
\`\`\`

A common professional card might use:

\`\`\`css
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}
\`\`\`
`,

            `# box-sizing

One of the most useful global CSS rules is:

\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

This makes width calculations much easier.

For most modern projects, this is included in the global stylesheet.
`,

            `# Real-world debugging

Suppose you write:

\`\`\`css
.card {
  width: 300px;
  padding: 30px;
}
\`\`\`

Without border-box, the actual rendered width can become larger than expected because padding is added to the declared width.

With:

\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

the padding is included inside the 300px width.

This prevents many layout surprises.
`,
          ],

          examples: [
            `* {
  box-sizing: border-box;
}

.card {
  width: 320px;
  padding: 24px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}`,
          ],

          practice: [
            "Create a 320px card.",
            "Add 24px padding.",
            "Add a 1px border.",
            "Add rounded corners.",
            "Create three cards with spacing between them.",
            "Use box-sizing: border-box.",
          ],

          quiz: [
            {
              question: "Which property creates space inside an element?",
              options: ["padding", "margin", "outline", "position"],
              answer: 0,
              explanation:
                "Padding creates space between an element's content and its border.",
            },
            {
              question: "Which property creates space outside an element?",
              options: ["margin", "padding", "content", "width"],
              answer: 0,
              explanation:
                "Margin creates space outside the element's border.",
            },
          ],
        },

        {
          slug: "width-height-overflow",
          title: "6. Width, Height & Overflow",
          duration: "16 min",
          description:
            "Learn how dimensions work and how to handle content that does not fit inside an element.",

          objectives: [
            "Set width and height.",
            "Understand min-width and max-width.",
            "Understand min-height and max-height.",
            "Control overflow.",
            "Build flexible containers.",
          ],

          content: [
            `# Width and Height

You can define dimensions using:

\`\`\`css
.card {
  width: 300px;
  height: 200px;
}
\`\`\`

However, fixed dimensions are not always appropriate for responsive websites.
`,

            `# max-width

A very common pattern is:

\`\`\`css
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
\`\`\`

This means:

- The container can shrink on small screens.
- It will not grow beyond 1200px.
- It stays centered.
`,

            `# Overflow

Suppose an element has too much content.

\`\`\`css
.card {
  height: 200px;
  overflow: hidden;
}
\`\`\`

Other options include:

\`\`\`css
overflow: auto;
overflow: scroll;
overflow-x: auto;
overflow-y: auto;
\`\`\`

For example, tables on mobile often use horizontal scrolling.
`,

            `# Real-world responsive table

HTML:

\`\`\`html
<div class="table-wrapper">
  <table>
    ...
  </table>
</div>
\`\`\`

CSS:

\`\`\`css
.table-wrapper {
  overflow-x: auto;
}

table {
  min-width: 700px;
}
\`\`\`

On small screens, the user can horizontally scroll the table instead of breaking the entire page.
`,
          ],

          examples: [
            `.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.table-wrapper {
  overflow-x: auto;
}`,
          ],

          practice: [
            "Create a responsive page container.",
            "Give it a maximum width of 1200px.",
            "Center it using margin auto.",
            "Create a wide table.",
            "Make the table horizontally scrollable on small screens.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 3
    // ============================================================
    {
      title: "Module 3: Display & Layout",
      lessons: [
        {
          slug: "display-property",
          title: "7. Display: Block, Inline & Inline-Block",
          duration: "15 min",
          description:
            "Understand how elements participate in layout using display values.",

          objectives: [
            "Understand block elements.",
            "Understand inline elements.",
            "Understand inline-block.",
            "Use display: none.",
          ],

          content: [
            `# Block elements

Block elements normally take the available width.

Examples include:

- div
- section
- header
- main
- p
- h1

For example:

\`\`\`css
.card {
  display: block;
}
\`\`\`
`,

            `# Inline elements

Inline elements normally stay within the same line.

Examples include:

- span
- a
- strong
- em

\`\`\`css
.badge {
  display: inline;
}
\`\`\`
`,

            `# Inline-block

\`inline-block\` allows an element to remain inline while accepting width and height.

\`\`\`css
.badge {
  display: inline-block;
  padding: 6px 10px;
}
\`\`\`

This is useful for badges, tags and small UI elements.
`,

            `# display: none

\`\`\`css
.mobile-menu {
  display: none;
}
\`\`\`

This completely removes the element from the layout.

Be careful: this is different from \`visibility: hidden\`, which hides the element while preserving its layout space.
`,
          ],

          examples: [
            `.badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #e0f2fe;
}`,
          ],

          practice: [
            "Create three category badges.",
            "Use inline-block.",
            "Add padding.",
            "Add rounded corners.",
            "Add different text values.",
          ],
        },

        {
          slug: "flexbox",
          title: "8. Flexbox - Build Modern One-Dimensional Layouts",
          duration: "25 min",
          description:
            "Master Flexbox for navigation bars, cards, buttons, toolbars, forms and responsive layouts.",

          objectives: [
            "Understand flex containers and flex items.",
            "Use flex-direction.",
            "Use justify-content.",
            "Use align-items.",
            "Use gap.",
            "Use flex-wrap.",
            "Use flex-grow and flex-shrink.",
            "Build real navigation and card layouts.",
          ],

          content: [
            `# What is Flexbox?

Flexbox is a CSS layout system designed for arranging elements along one dimension.

It is extremely useful for:

- Navigation bars
- Button groups
- Card rows
- Toolbars
- Form layouts
- Centering elements
- Headers
- Footers
`,

            `# Creating a flex container

HTML:

\`\`\`html
<nav class="navbar">
  <div class="logo">MySite</div>

  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">About</a>
  </div>
</nav>
\`\`\`

CSS:

\`\`\`css
.navbar {
  display: flex;
}
\`\`\`

Now the direct children of the navbar participate in a flex layout.
`,

            `# justify-content

This controls alignment along the main axis.

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
}
\`\`\`

Common values:

- flex-start
- center
- flex-end
- space-between
- space-around
- space-evenly
`,

            `# align-items

This controls alignment along the cross axis.

\`\`\`css
.navbar {
  display: flex;
  align-items: center;
}
\`\`\`

A common combination is:

\`\`\`css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
\`\`\`

You will use this combination constantly.
`,

            `# gap

Instead of adding margins to every child:

\`\`\`css
.nav-links {
  display: flex;
  gap: 24px;
}
\`\`\`

This creates consistent spacing between the children.
`,

            `# Real-world navbar

HTML:

\`\`\`html
<header class="navbar">
  <a class="logo" href="/">DevLearn</a>

  <nav class="nav-links">
    <a href="/">Home</a>
    <a href="/courses">Courses</a>
    <a href="/about">About</a>
  </nav>

  <button class="login-btn">Login</button>
</header>
\`\`\`

CSS:

\`\`\`css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.login-btn {
  padding: 10px 18px;
}
\`\`\`

This is a realistic use of Flexbox.
`,

            `# Flex-wrap

If there is not enough room:

\`\`\`css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
\`\`\`

Items can move onto another line.

This is useful for responsive card collections.
`,

            `# Flex-grow

Suppose two elements need to share available space.

\`\`\`css
.sidebar {
  width: 250px;
}

.content {
  flex: 1;
}
\`\`\`

The content area expands to use the remaining space.

This pattern is very common in dashboards.
`,

            `# Real-world dashboard

HTML:

\`\`\`html
<div class="dashboard">
  <aside class="sidebar">
    Sidebar
  </aside>

  <main class="content">
    Dashboard content
  </main>
</div>
\`\`\`

CSS:

\`\`\`css
.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
}

.content {
  flex: 1;
  padding: 32px;
}
\`\`\`

This is one of the most important Flexbox patterns to understand.
`,

            `# Centering with Flexbox

A very useful pattern:

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

This centers an item horizontally and vertically.

For example:

\`\`\`css
.login-page {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

This is commonly used for login screens and empty states.
`,
          ],

          examples: [
            `/* Center an element */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navigation */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Card list */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

/* Dashboard */
.dashboard {
  display: flex;
}

.content {
  flex: 1;
}`,
          ],

          practice: [
            "Build a responsive navigation bar.",
            "Build a row of three cards using Flexbox.",
            "Use gap instead of individual margins.",
            "Build a sidebar + content dashboard.",
            "Create a login page with centered content.",
          ],

          quiz: [
            {
              question: "Which property enables Flexbox?",
              options: [
                "display: flex",
                "position: flex",
                "layout: flex",
                "flex: display",
              ],
              answer: 0,
              explanation:
                "A parent becomes a flex container using display: flex.",
            },
            {
              question: "Which property creates space between flex items?",
              options: ["gap", "spacing", "margin-all", "space"],
              answer: 0,
              explanation:
                "The gap property creates consistent spacing between flex/grid items.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 4
    // ============================================================
    {
      title: "Module 4: CSS Grid",
      lessons: [
        {
          slug: "css-grid",
          title: "9. CSS Grid - Professional Two-Dimensional Layouts",
          duration: "25 min",
          description:
            "Learn CSS Grid and use it to build dashboards, galleries, product layouts and complex page structures.",

          objectives: [
            "Understand Grid containers.",
            "Create rows and columns.",
            "Use gap.",
            "Use repeat().",
            "Use minmax().",
            "Use grid-template-areas.",
            "Build responsive card grids.",
          ],

          content: [
            `# What is CSS Grid?

Grid is a two-dimensional layout system.

While Flexbox is primarily useful for one-dimensional layouts, Grid is excellent when you need to control **rows and columns**.

Examples:

- Product galleries
- Admin dashboards
- Image galleries
- Pricing tables
- Page layouts
`,

            `# Basic Grid

HTML:

\`\`\`html
<div class="products">
  <article>Product 1</article>
  <article>Product 2</article>
  <article>Product 3</article>
  <article>Product 4</article>
</div>
\`\`\`

CSS:

\`\`\`css
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
\`\`\`

This creates three equal columns.
`,

            `# Understanding 1fr

\`fr\` means a fraction of the available space.

For example:

\`\`\`css
grid-template-columns: 1fr 1fr;
\`\`\`

creates two equal columns.

\`\`\`css
grid-template-columns: 2fr 1fr;
\`\`\`

creates a layout where the first column receives twice the available fraction of the second.
`,

            `# Responsive Grid

One of the most useful patterns:

\`\`\`css
.products {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 24px;
}
\`\`\`

This allows the browser to automatically decide how many columns fit.

It is extremely useful for responsive cards.
`,

            `# Real-world product grid

HTML:

\`\`\`html
<section class="products">
  <article class="product-card">
    <img src="laptop.jpg" alt="Laptop">
    <h2>Laptop</h2>
    <p>$899</p>
    <button>Buy Now</button>
  </article>

  <article class="product-card">
    <img src="phone.jpg" alt="Phone">
    <h2>Phone</h2>
    <p>$599</p>
    <button>Buy Now</button>
  </article>
</section>
\`\`\`

CSS:

\`\`\`css
.products {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.product-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}
\`\`\`

This pattern can be used in real e-commerce websites.
`,

            `# Grid areas

Grid can also describe an entire page.

\`\`\`css
.page {
  display: grid;

  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";

  grid-template-columns: 240px 1fr;
}
\`\`\`

Then:

\`\`\`css
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
\`\`\`

This makes complex page structures easier to understand.
`,
          ],

          examples: [
            `.products {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.product-card {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}`,
          ],

          practice: [
            "Build a four-card product grid.",
            "Make the grid responsive.",
            "Use minmax().",
            "Use auto-fit.",
            "Build a dashboard using grid-template-areas.",
          ],

          quiz: [
            {
              question: "Which CSS layout system is designed for rows and columns?",
              options: ["Grid", "Float", "Inline", "Position"],
              answer: 0,
              explanation:
                "CSS Grid is designed for two-dimensional row and column layouts.",
            },
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 5
    // ============================================================
    {
      title: "Module 5: Typography & Professional UI",
      lessons: [
        {
          slug: "css-typography",
          title: "10. Typography",
          duration: "20 min",
          description:
            "Learn how to create readable, professional typography for websites and applications.",

          objectives: [
            "Use font-family.",
            "Control font size.",
            "Control font weight.",
            "Use line-height.",
            "Control letter spacing.",
            "Build a typography hierarchy.",
          ],

          content: [
            `# Typography matters

Typography affects:

- Readability
- Brand identity
- Accessibility
- Visual hierarchy
- User experience

A page can have perfect layout but still feel unprofessional if its typography is poor.
`,

            `# Font family

\`\`\`css
body {
  font-family: Arial, sans-serif;
}
\`\`\`

You can provide fallback fonts:

\`\`\`css
body {
  font-family:
    Inter,
    Arial,
    sans-serif;
}
\`\`\`

If the first font is unavailable, the browser uses the next one.
`,

            `# Font size

\`\`\`css
body {
  font-size: 16px;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 32px;
}
\`\`\`

A consistent type scale creates visual hierarchy.
`,

            `# Line height

For paragraphs:

\`\`\`css
p {
  line-height: 1.6;
}
\`\`\`

Line height improves readability, especially for longer content.
`,

            `# Professional typography example

\`\`\`css
body {
  font-family: Inter, Arial, sans-serif;
  color: #111827;
  line-height: 1.6;
}

h1 {
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  line-height: 1.2;
}

p {
  color: #4b5563;
}
\`\`\`

This gives the page a clear hierarchy.
`,

            `# Real-world article

HTML:

\`\`\`html
<article>
  <h1>How CSS Works</h1>

  <p class="intro">
    CSS controls the visual presentation of web pages.
  </p>

  <p>
    Understanding CSS is essential for creating
    modern responsive websites.
  </p>
</article>
\`\`\`

CSS:

\`\`\`css
article {
  max-width: 720px;
  margin: 0 auto;
}

article h1 {
  font-size: 3rem;
  line-height: 1.1;
}

.intro {
  font-size: 1.25rem;
  color: #475569;
}

article p {
  line-height: 1.8;
}
\`\`\`

This is similar to how a professional blog/article layout can be structured.
`,
          ],

          examples: [
            `body {
  font-family: Inter, Arial, sans-serif;
  color: #111827;
  line-height: 1.6;
}

h1 {
  font-size: 3rem;
  line-height: 1.1;
}

p {
  color: #475569;
  line-height: 1.7;
}`,
          ],

          practice: [
            "Create a blog article.",
            "Create a clear h1/h2 hierarchy.",
            "Use a readable line-height.",
            "Limit article width to around 700-800px.",
            "Style the introductory paragraph differently.",
          ],
        },

        {
          slug: "borders-shadows",
          title: "11. Borders, Border Radius & Shadows",
          duration: "15 min",
          description:
            "Learn the visual properties commonly used to create cards, buttons, inputs and modern interfaces.",

          objectives: [
            "Create borders.",
            "Create rounded corners.",
            "Use box-shadow.",
            "Build professional cards and buttons.",
          ],

          content: [
            `# Borders

\`\`\`css
.card {
  border: 1px solid #e5e7eb;
}
\`\`\`

You can control:

\`\`\`css
border-width
border-style
border-color
\`\`\`
`,

            `# Border radius

\`\`\`css
.card {
  border-radius: 12px;
}
\`\`\`

A large radius can create pill-shaped controls:

\`\`\`css
.badge {
  border-radius: 999px;
}
\`\`\`
`,

            `# Box shadows

\`\`\`css
.card {
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08);
}
\`\`\`

Shadows create visual depth.

Do not add huge shadows everywhere. Use them intentionally.
`,

            `# Real-world card

\`\`\`css
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.06);
}
\`\`\`

This pattern appears in dashboards, SaaS applications and landing pages.
`,
          ],

          examples: [
            `.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}`,
          ],

          practice: [
            "Create a professional profile card.",
            "Add a subtle border.",
            "Add rounded corners.",
            "Add a subtle shadow.",
            "Create a pill-shaped status badge.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 6
    // ============================================================
    {
      title: "Module 6: Positioning & Layering",
      lessons: [
        {
          slug: "css-position",
          title: "12. Position: Static, Relative, Absolute, Fixed & Sticky",
          duration: "25 min",
          description:
            "Understand CSS positioning and learn how to create badges, overlays, floating buttons, headers and sticky navigation.",

          objectives: [
            "Understand static positioning.",
            "Use relative positioning.",
            "Use absolute positioning.",
            "Use fixed positioning.",
            "Use sticky positioning.",
            "Understand z-index.",
          ],

          content: [
            `# Positioning

CSS positioning controls how an element is placed relative to its normal position or another element.

The main values are:

- static
- relative
- absolute
- fixed
- sticky
`,

            `# Relative positioning

\`\`\`css
.card {
  position: relative;
}
\`\`\`

Relative positioning is particularly important because it creates a positioning reference for absolutely positioned children.
`,

            `# Absolute positioning

HTML:

\`\`\`html
<div class="card">
  <span class="badge">New</span>
  <h2>Course</h2>
</div>
\`\`\`

CSS:

\`\`\`css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
}
\`\`\`

The badge is positioned relative to the card.
`,

            `# Fixed positioning

A fixed element stays attached to the viewport.

For example:

\`\`\`css
.help-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
\`\`\`

This can be used for:

- Floating action buttons
- Chat buttons
- Help widgets
- Cookie controls
`,

            `# Sticky positioning

\`\`\`css
.navbar {
  position: sticky;
  top: 0;
}
\`\`\`

A sticky element behaves normally until a scroll threshold is reached.

This is useful for navigation bars and table headers.
`,

            `# z-index

When elements overlap, \`z-index\` controls stacking order.

\`\`\`css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
\`\`\`

A larger z-index generally places the element above another positioned element within the relevant stacking context.
`,

            `# Real-world notification badge

HTML:

\`\`\`html
<button class="notification">
  🔔
  <span class="count">3</span>
</button>
\`\`\`

CSS:

\`\`\`css
.notification {
  position: relative;
}

.count {
  position: absolute;
  top: -6px;
  right: -6px;

  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
}
\`\`\`

This is a very common real-world UI pattern.
`,
          ],

          examples: [
            `.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
}

.help-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}`,
          ],

          practice: [
            "Create a product card with a New badge.",
            "Create a notification icon with a notification count.",
            "Create a fixed help button.",
            "Create a sticky navigation bar.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 7
    // ============================================================
    {
      title: "Module 7: Responsive Web Design",
      lessons: [
        {
          slug: "responsive-design",
          title: "13. Responsive Web Design",
          duration: "25 min",
          description:
            "Learn how to build websites that work properly on phones, tablets and desktop screens.",

          objectives: [
            "Understand responsive design.",
            "Use media queries.",
            "Build mobile-first layouts.",
            "Make images responsive.",
            "Create responsive navigation.",
            "Test layouts at different screen sizes.",
          ],

          content: [
            `# What is responsive design?

A responsive website adapts to different screen sizes.

The same website should work on:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors
`,

            `# The viewport meta tag

Your HTML should normally contain:

\`\`\`html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>
\`\`\`

This helps browsers correctly scale the page on mobile devices.
`,

            `# Media queries

A media query allows CSS to change based on screen conditions.

\`\`\`css
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
\`\`\`

When the viewport is 768px or smaller, the styles inside the media query apply.
`,

            `# Mobile-first development

Instead of designing only for desktop and then trying to fix mobile later, a common approach is mobile-first CSS.

Start with:

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: 1fr;
}
\`\`\`

Then add larger-screen behavior:

\`\`\`css
@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
\`\`\`

And:

\`\`\`css
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`
`,

            `# Responsive images

A common rule is:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

This prevents images from overflowing their containers.
`,

            `# Real-world responsive card layout

HTML:

\`\`\`html
<section class="cards">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</section>
\`\`\`

CSS:

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

This is a practical responsive layout.
`,

            `# Real-world rule

Do not choose breakpoints simply because they are popular numbers.

Choose them when your design actually needs to change.

For example:

"If the navigation no longer fits in one row, change the layout."

That is more useful than blindly adding media queries for every device.
`,
          ],

          examples: [
            `img {
  max-width: 100%;
  height: auto;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
          ],

          practice: [
            "Build a three-card layout.",
            "Make it one column on mobile.",
            "Make it two columns on tablets.",
            "Make it three columns on desktop.",
            "Make all images responsive.",
            "Test the page using browser DevTools device emulation.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 8
    // ============================================================
    {
      title: "Module 8: Forms & Interactive UI",
      lessons: [
        {
          slug: "styling-forms",
          title: "14. Styling Forms & Inputs",
          duration: "22 min",
          description:
            "Learn how to build professional forms including labels, inputs, buttons, focus states and validation feedback.",

          objectives: [
            "Style text inputs.",
            "Style labels.",
            "Style textareas.",
            "Style select elements.",
            "Create focus states.",
            "Build accessible forms.",
          ],

          content: [
            `# Forms are everywhere

You will use forms for:

- Login
- Registration
- Search
- Checkout
- Contact pages
- User profiles
- Admin dashboards
- Job applications
`,

            `# Basic form

HTML:

\`\`\`html
<form class="form">
  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
  >

  <button type="submit">
    Sign In
  </button>
</form>
\`\`\`

The \`label\` should be associated with the input using \`for\` and \`id\`.
`,

            `# Styling inputs

\`\`\`css
input {
  width: 100%;
  padding: 12px 14px;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 16px;
}
\`\`\`
`,

            `# Focus states

When a user clicks or tabs into an input:

\`\`\`css
input:focus {
  outline: none;
  border-color: #2563eb;

  box-shadow:
    0 0 0 3px rgba(37, 99, 235, 0.15);
}
\`\`\`

Focus styles are important for keyboard users.

Do not remove focus indicators without replacing them with a visible alternative.
`,

            `# Complete form example

\`\`\`html
<form class="contact-form">
  <div class="field">
    <label for="name">Name</label>
    <input id="name" type="text">
  </div>

  <div class="field">
    <label for="email">Email</label>
    <input id="email" type="email">
  </div>

  <div class="field">
    <label for="message">Message</label>
    <textarea id="message"></textarea>
  </div>

  <button type="submit">
    Send Message
  </button>
</form>
\`\`\`

CSS:

\`\`\`css
.contact-form {
  max-width: 600px;
}

.field {
  margin-bottom: 20px;
}

.field label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.field input,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.field textarea {
  min-height: 150px;
  resize: vertical;
}
\`\`\`
`,
          ],

          examples: [
            `.field {
  margin-bottom: 20px;
}

.field label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.field input,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}`,
          ],

          practice: [
            "Build a login form.",
            "Build a registration form.",
            "Style labels and inputs.",
            "Add visible focus states.",
            "Style a textarea.",
            "Create a responsive form layout.",
          ],
        },

        {
          slug: "pseudo-classes",
          title: "15. Pseudo-Classes: :hover, :focus, :active, :checked",
          duration: "18 min",
          description:
            "Learn how CSS responds to user interaction and element state.",

          objectives: [
            "Use :hover.",
            "Use :focus.",
            "Use :active.",
            "Use :disabled.",
            "Use :checked.",
            "Create interactive UI without JavaScript.",
          ],

          content: [
            `# What are pseudo-classes?

Pseudo-classes allow CSS to style an element based on its state.

Examples:

\`\`\`css
button:hover {
  background: #1d4ed8;
}
\`\`\`

The style applies when the user hovers over the button.
`,

            `# Hover

\`\`\`css
.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}
\`\`\`

This creates a small interaction when the user moves over the card.
`,

            `# Focus

\`\`\`css
input:focus {
  border-color: blue;
}
\`\`\`

Focus is particularly important for keyboard navigation.
`,

            `# Disabled

\`\`\`css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
\`\`\`
`,

            `# Checked

Checkboxes and radio buttons can use:

\`\`\`css
input[type="checkbox"]:checked {
  accent-color: #2563eb;
}
\`\`\`
`,

            `# Real-world button

\`\`\`css
.btn {
  background: #2563eb;
  color: white;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.btn:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.3);
}
\`\`\`

This creates a polished interactive button.
`,
          ],

          examples: [
            `.btn {
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.btn:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.3);
}`,
          ],

          practice: [
            "Create a button with hover animation.",
            "Create a card hover effect.",
            "Create a disabled button style.",
            "Create a visible keyboard focus state.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 9
    // ============================================================
    {
      title: "Module 9: Pseudo-Elements & Advanced Selectors",
      lessons: [
        {
          slug: "pseudo-elements",
          title: "16. ::before and ::after",
          duration: "16 min",
          description:
            "Learn how pseudo-elements can create decorative UI elements without adding extra HTML.",

          objectives: [
            "Understand pseudo-elements.",
            "Use ::before.",
            "Use ::after.",
            "Create decorative elements.",
            "Understand the content property.",
          ],

          content: [
            `# Pseudo-elements

Pseudo-elements allow you to style a specific virtual part of an element.

Common examples:

\`\`\`css
::before
::after
\`\`\`
`,

            `# Example

HTML:

\`\`\`html
<h2 class="title">Featured Courses</h2>
\`\`\`

CSS:

\`\`\`css
.title::after {
  content: "";
  display: block;

  width: 60px;
  height: 4px;

  margin-top: 10px;

  background: #2563eb;
}
\`\`\`

This creates a decorative line under the heading without adding another HTML element.
`,

            `# Important rule

When using \`::before\` or \`::after\`, the \`content\` property is usually required.

For decorative elements:

\`\`\`css
content: "";
\`\`\`
`,

            `# Real-world badge

\`\`\`css
.sale {
  position: relative;
}

.sale::before {
  content: "SALE";

  position: absolute;
  top: 12px;
  left: 12px;

  padding: 4px 8px;
  border-radius: 4px;

  background: #dc2626;
  color: white;

  font-size: 12px;
  font-weight: 700;
}
\`\`\`

This adds a visual label without modifying the HTML.
`,
          ],

          examples: [
            `.title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  margin-top: 10px;
  background: #2563eb;
}`,
          ],

          practice: [
            "Create a heading with a decorative underline.",
            "Create a card with a New badge using ::before.",
            "Create a quote component using ::before.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 10
    // ============================================================
    {
      title: "Module 10: CSS Variables & Maintainable CSS",
      lessons: [
        {
          slug: "css-variables",
          title: "17. CSS Variables",
          duration: "20 min",
          description:
            "Learn CSS custom properties and use them to build reusable design systems.",

          objectives: [
            "Create CSS variables.",
            "Use var().",
            "Create reusable colors.",
            "Create spacing variables.",
            "Build a simple design system.",
          ],

          content: [
            `# What are CSS variables?

CSS variables allow you to store reusable values.

For example:

\`\`\`css
:root {
  --primary: #2563eb;
  --text: #111827;
  --radius: 8px;
}
\`\`\`

Then:

\`\`\`css
button {
  background: var(--primary);
  border-radius: var(--radius);
}
\`\`\`
`,

            `# Why variables matter

Imagine your website uses the same blue in 50 places.

Without variables:

\`\`\`css
color: #2563eb;
\`\`\`

appears repeatedly.

With variables:

\`\`\`css
color: var(--primary);
\`\`\`

If your brand changes, you update one variable.
`,

            `# Build a small design system

\`\`\`css
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;

  --text: #111827;
  --muted: #64748b;

  --surface: #ffffff;
  --background: #f8fafc;

  --border: #e5e7eb;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
}
\`\`\`

Now your components can use the same design language.
`,

            `# Real-world button

\`\`\`css
.btn {
  background: var(--primary);
  color: white;
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

.btn:hover {
  background: var(--primary-dark);
}
\`\`\`

This makes your CSS easier to maintain.
`,
          ],

          examples: [
            `:root {
  --primary: #2563eb;
  --text: #111827;
  --muted: #64748b;
  --border: #e5e7eb;
  --radius-md: 10px;
  --space-md: 16px;
}

.btn {
  background: var(--primary);
  color: white;
  padding: var(--space-md);
  border-radius: var(--radius-md);
}`,
          ],

          practice: [
            "Create a color system.",
            "Create spacing variables.",
            "Create border-radius variables.",
            "Use the variables in cards.",
            "Use them in buttons.",
            "Use them in forms.",
          ],
        },

        {
          slug: "css-architecture",
          title: "18. Writing Maintainable CSS",
          duration: "20 min",
          description:
            "Learn practical techniques for keeping CSS organized as projects become larger.",

          objectives: [
            "Understand reusable classes.",
            "Avoid overly specific selectors.",
            "Create component-based styles.",
            "Understand naming conventions.",
            "Organize CSS files.",
          ],

          content: [
            `# Why CSS becomes difficult

Small projects can start with:

\`\`\`css
h1 {
  color: red;
}
\`\`\`

But as the application grows, CSS can become difficult to maintain.

A professional project should make it easy to answer:

- Where is this style defined?
- Which component owns it?
- Can I reuse it?
- What happens if I change it?
`,

            `# Prefer reusable classes

Instead of:

\`\`\`css
header div nav ul li a {
  color: blue;
}
\`\`\`

Prefer:

\`\`\`css
.nav-link {
  color: blue;
}
\`\`\`

The second approach is easier to understand and maintain.
`,

            `# Component-based CSS

For example:

\`\`\`css
.card {}
.card__title {}
.card__description {}
.card__button {}
\`\`\`

This resembles the BEM naming convention.

HTML:

\`\`\`html
<article class="card">
  <h2 class="card__title">
    CSS Course
  </h2>

  <p class="card__description">
    Learn modern CSS.
  </p>

  <button class="card__button">
    Start
  </button>
</article>
\`\`\`
`,

            `# Avoid !important

Do not solve every CSS conflict using:

\`\`\`css
color: red !important;
\`\`\`

It can make future CSS conflicts harder to understand.

Instead, understand:

- Specificity
- Cascade
- Source order
- Inheritance
`,

            `# A practical CSS structure

A larger project might organize styles like:

\`\`\`
styles/
├── reset.css
├── variables.css
├── base.css
├── layout.css
├── components/
│   ├── button.css
│   ├── card.css
│   ├── navbar.css
│   └── form.css
└── pages/
    ├── home.css
    └── dashboard.css
\`\`\`

The exact structure depends on the project, but the principle is important:

**Keep related styles together.**
`,
          ],

          examples: [
            `.card {
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.card__title {
  margin: 0;
}

.card__description {
  color: var(--muted);
}

.card__button {
  margin-top: 16px;
}`,
          ],

          practice: [
            "Build a reusable card component.",
            "Use meaningful class names.",
            "Avoid styling based on deeply nested selectors.",
            "Create reusable button classes.",
            "Organize your CSS into logical sections.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 11
    // ============================================================
    {
      title: "Module 11: Transitions & Animations",
      lessons: [
        {
          slug: "css-transitions",
          title: "19. CSS Transitions",
          duration: "15 min",
          description:
            "Create smooth visual changes for buttons, cards, links and interactive components.",

          objectives: [
            "Understand transitions.",
            "Use transition-property.",
            "Use duration and timing functions.",
            "Create smooth hover effects.",
          ],

          content: [
            `# Why transitions?

Without a transition:

\`\`\`css
.button:hover {
  background: blue;
}
\`\`\`

The change happens immediately.

With:

\`\`\`css
.button {
  transition: background 0.2s ease;
}
\`\`\`

the change becomes smooth.
`,

            `# Multiple properties

\`\`\`css
.card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.1);
}
\`\`\`

This is a common professional card interaction.
`,

            `# Keep animations subtle

Animations should improve the interface rather than distract users.

Good examples:

- Button hover
- Card elevation
- Modal entrance
- Menu opening
- Loading indicators

Avoid excessive animations on every element.
`,
          ],

          examples: [
            `.card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}`,
          ],

          practice: [
            "Create a hover effect for a card.",
            "Create a button transition.",
            "Animate a link underline.",
            "Create a subtle image zoom effect.",
          ],
        },

        {
          slug: "css-animations",
          title: "20. CSS Keyframe Animations",
          duration: "18 min",
          description:
            "Learn how to create custom CSS animations using @keyframes.",

          objectives: [
            "Understand @keyframes.",
            "Create simple animations.",
            "Control animation duration.",
            "Control animation iteration.",
            "Create loading animations.",
          ],

          content: [
            `# Keyframes

CSS animations can define multiple stages.

\`\`\`css
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
\`\`\`

Then:

\`\`\`css
.modal {
  animation: fadeIn 0.3s ease;
}
\`\`\`
`,

            `# Loading animation

HTML:

\`\`\`html
<div class="spinner"></div>
\`\`\`

CSS:

\`\`\`css
.spinner {
  width: 40px;
  height: 40px;

  border: 4px solid #ddd;
  border-top-color: #2563eb;
  border-radius: 50%;

  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
\`\`\`

This pattern is commonly used for loading indicators.
`,
          ],

          examples: [
            `.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ddd;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
          ],

          practice: [
            "Create a spinning loader.",
            "Create a fade-in animation.",
            "Create a slide-in notification.",
            "Experiment with animation duration.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 12
    // ============================================================
    {
      title: "Module 12: Accessibility & Professional CSS",
      lessons: [
        {
          slug: "css-accessibility",
          title: "21. CSS Accessibility",
          duration: "20 min",
          description:
            "Learn how CSS decisions affect keyboard users, readability, contrast and accessible interfaces.",

          objectives: [
            "Understand visible focus states.",
            "Understand color contrast.",
            "Avoid using color as the only indicator.",
            "Respect reduced-motion preferences.",
            "Create accessible responsive interfaces.",
          ],

          content: [
            `# Accessibility is part of professional CSS

A website should not only look good.

People may use:

- Keyboard navigation
- Screen readers
- High zoom
- Touch devices
- Reduced motion settings
- Different display sizes
`,

            `# Never remove focus without replacement

Avoid:

\`\`\`css
button:focus {
  outline: none;
}
\`\`\`

unless you provide another clear focus indicator.

Prefer:

\`\`\`css
button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
\`\`\`
`,

            `# Do not rely only on color

Bad example:

"Red means error and green means success."

Some users may not distinguish those colors easily.

Instead combine color with:

- Text
- Icons
- Borders
- Clear messages
`,

            `# Reduced motion

Some users request reduced motion at the operating-system level.

You can respect that preference:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    transition-duration: 0.01ms;
  }
}
\`\`\`

This is an important professional consideration.
`,

            `# Accessible form example

HTML:

\`\`\`html
<label for="email">
  Email address
</label>

<input
  id="email"
  type="email"
  aria-describedby="email-help"
>

<p id="email-help">
  We'll never share your email.
</p>
\`\`\`

CSS can then make the relationship visually clear:

\`\`\`css
label {
  display: block;
  font-weight: 600;
}

input:focus-visible {
  outline: 3px solid rgba(37, 99, 235, 0.3);
}
\`\`\`
`,
          ],

          examples: [
            `button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms;
    transition-duration: 0.01ms;
  }
}`,
          ],

          practice: [
            "Review an existing website for focus states.",
            "Make all buttons keyboard accessible.",
            "Make form inputs have visible focus states.",
            "Check that errors are not communicated only through color.",
            "Add reduced-motion support.",
          ],
        },
      ],
    },

    // ============================================================
    // MODULE 13
    // ============================================================
    {
      title: "Module 13: Real-World CSS Project",
      lessons: [
        {
          slug: "build-responsive-landing-page",
          title: "22. Project: Build a Responsive Landing Page",
          duration: "45 min",
          description:
            "Combine HTML and CSS knowledge to build a professional responsive landing page from scratch.",

          objectives: [
            "Structure a real landing page.",
            "Create a responsive navbar.",
            "Build a hero section.",
            "Create reusable cards.",
            "Use Flexbox and Grid.",
            "Create responsive layouts.",
            "Add hover interactions.",
            "Organize CSS professionally.",
          ],

          content: [
            `# Project goal

Build a landing page for a fictional online learning platform.

The page should contain:

1. Navigation
2. Hero section
3. Features
4. Course cards
5. Call-to-action section
6. Footer
`,

            `# HTML structure

Start with semantic HTML:

\`\`\`html
<header class="navbar">
  <a class="logo" href="#">DevLearn</a>

  <nav class="nav-links">
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">About</a>
  </nav>

  <a class="btn" href="#">Get Started</a>
</header>

<main>
  <section class="hero">
    <div class="hero-content">
      <span class="badge">Learn by Building</span>

      <h1>
        Become a Professional Web Developer
      </h1>

      <p>
        Learn HTML, CSS and JavaScript through
        practical projects.
      </p>

      <div class="hero-actions">
        <a class="btn" href="#">Start Learning</a>
        <a class="btn btn-outline" href="#">
          View Courses
        </a>
      </div>
    </div>
  </section>

  <section class="courses">
    <h2>Popular Courses</h2>

    <div class="course-grid">
      <article class="course-card">
        <h3>HTML</h3>
        <p>Build the structure of websites.</p>
        <a href="#">Learn HTML →</a>
      </article>

      <article class="course-card">
        <h3>CSS</h3>
        <p>Create beautiful responsive interfaces.</p>
        <a href="#">Learn CSS →</a>
      </article>

      <article class="course-card">
        <h3>JavaScript</h3>
        <p>Add behavior and interactivity.</p>
        <a href="#">Learn JavaScript →</a>
      </article>
    </div>
  </section>
</main>
\`\`\`
`,

            `# Global CSS

Start with:

\`\`\`css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #111827;
  background: #ffffff;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}
\`\`\`
`,

            `# Container

Create a reusable container:

\`\`\`css
.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}
\`\`\`

This pattern keeps content from becoming excessively wide on large monitors.
`,

            `# Navbar

\`\`\`css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 5%;
  border-bottom: 1px solid #e5e7eb;
}

.nav-links {
  display: flex;
  gap: 24px;
}
\`\`\`
`,

            `# Hero

\`\`\`css
.hero {
  padding: 100px 5%;
  background: #f8fafc;
  text-align: center;
}

.hero h1 {
  max-width: 800px;
  margin: 20px auto;

  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1;
}

.hero p {
  max-width: 650px;
  margin: 0 auto 30px;
  color: #64748b;
}
\`\`\`

Notice the use of \`clamp()\`.

This allows the heading to scale between a minimum and maximum size.
`,

            `# Course Grid

\`\`\`css
.course-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));

  gap: 24px;
}

.course-card {
  padding: 24px;

  border: 1px solid #e5e7eb;
  border-radius: 16px;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 15px 30px rgba(0, 0, 0, 0.08);
}
\`\`\`

This single grid rule gives us a responsive card layout.
`,

            `# Responsive navigation

On smaller screens:

\`\`\`css
@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
\`\`\`

The page now adapts to smaller screens.
`,

            `# Project challenge

Do not simply copy the example.

Modify the project.

Add:

- A pricing section
- A testimonials section
- A newsletter form
- A footer
- Mobile navigation
- Course images
- Hover effects
- A dark mode design using CSS variables

Your goal is to make the project look like a real website rather than a coding exercise.
`,
          ],

          examples: [
            `/* Responsive course grid */

.course-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

/* Responsive heading */

.hero h1 {
  font-size: clamp(
    2.5rem,
    6vw,
    5rem
  );
}

/* Card interaction */

.course-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}`,
          ],

          practice: [
            "Build the complete landing page.",
            "Make it responsive.",
            "Use semantic HTML.",
            "Use CSS Grid for the course section.",
            "Use Flexbox for the navigation.",
            "Add hover states.",
            "Add form styling.",
            "Test the site on mobile and desktop.",
            "Use browser DevTools to debug layout problems.",
          ],
        },

        {
          slug: "css-final-project",
          title: "23. Final Project: Build a Responsive Dashboard",
          duration: "60 min",
          description:
            "Apply everything learned in the course by building a realistic responsive admin dashboard.",

          objectives: [
            "Combine Flexbox and Grid.",
            "Build reusable components.",
            "Create responsive layouts.",
            "Style tables and forms.",
            "Create cards and navigation.",
            "Use CSS variables.",
            "Apply accessibility principles.",
            "Debug CSS using browser DevTools.",
          ],

          content: [
            `# Final project

Build an admin dashboard containing:

- Sidebar
- Top navigation
- Statistics cards
- Recent activity
- Data table
- User profile
- Search field
- Buttons
- Responsive mobile layout
`,

            `# Recommended structure

\`\`\`html
<div class="dashboard">

  <aside class="sidebar">
    ...
  </aside>

  <div class="dashboard-main">

    <header class="topbar">
      ...
    </header>

    <main class="dashboard-content">

      <section class="stats">
        ...
      </section>

      <section class="dashboard-grid">
        ...
      </section>

    </main>

  </div>

</div>
\`\`\`
`,

            `# Desktop layout

Use Flexbox:

\`\`\`css
.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.dashboard-main {
  flex: 1;
  min-width: 0;
}
\`\`\`

The \`min-width: 0\` is an important real-world detail.

It can prevent flex children containing wide content from causing unexpected overflow.
`,

            `# Statistics cards

Use Grid:

\`\`\`css
.stats {
  display: grid;
  grid-template-columns:
    repeat(4, 1fr);
  gap: 20px;
}
\`\`\`

Then make it responsive:

\`\`\`css
@media (max-width: 1000px) {
  .stats {
    grid-template-columns:
      repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
\`\`\`
`,

            `# Debugging requirement

When your dashboard breaks, do not immediately change random CSS.

Use DevTools.

Inspect:

- Computed styles
- Box model
- Flexbox overlay
- Grid overlay
- Width
- Height
- Margin
- Padding
- Overflow
- Position
- z-index

Professional CSS developers spend significant time debugging layouts.

Learning to inspect the browser is just as important as learning CSS syntax.
`,

            `# Final challenge

Your dashboard should:

- Work on mobile.
- Work on tablet.
- Work on desktop.
- Have no horizontal overflow.
- Have visible keyboard focus.
- Use reusable classes.
- Use CSS variables.
- Use semantic HTML.
- Use responsive Grid/Flexbox.
- Have consistent spacing.
- Have readable typography.

This is your final CSS assessment.
`,
          ],

          examples: [
            `:root {
  --primary: #2563eb;
  --background: #f8fafc;
  --surface: #ffffff;
  --text: #111827;
  --muted: #64748b;
  --border: #e5e7eb;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.dashboard-main {
  flex: 1;
  min-width: 0;
  background: var(--background);
}

.stats {
  display: grid;
  grid-template-columns:
    repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1000px) {
  .stats {
    grid-template-columns:
      repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .dashboard {
    display: block;
  }

  .sidebar {
    width: 100%;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}`,
          ],

          practice: [
            "Build the complete dashboard.",
            "Create a responsive sidebar.",
            "Create four statistics cards.",
            "Create a recent activity section.",
            "Create a responsive table.",
            "Create a search form.",
            "Create a user profile card.",
            "Add hover and focus states.",
            "Test keyboard navigation.",
            "Test the dashboard on mobile.",
            "Fix every horizontal overflow issue.",
            "Organize your CSS before submitting the project.",
          ],
        },
      ],
    },
  ],
};

export const cssExamQuestions = [
  {
    question: "Which property enables Flexbox on an element?",
    options: [
      "display: flex",
      "position: flex",
      "layout: flex",
      "flex-display: true",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which property creates space inside an element?",
    options: ["margin", "padding", "border", "gap"],
    correctAnswer: 1,
  },
  {
    question: "Which CSS layout system is designed for rows and columns?",
    options: ["Flexbox", "Grid", "Float", "Inline-block"],
    correctAnswer: 1,
  },
  {
    question: "Which selector selects an element with class='card'?",
    options: ["#card", ".card", "card", "@card"],
    correctAnswer: 1,
  },
  {
    question: "What does max-width: 1200px do?",
    options: [
      "Forces the element to always be 1200px",
      "Prevents the element from becoming wider than 1200px",
      "Makes the element exactly 1200px on mobile",
      "Adds 1200px of padding",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which property is commonly used to create space between Flexbox items?",
    options: ["spacing", "gap", "distance", "flex-space"],
    correctAnswer: 1,
  },
  {
    question: "Which property creates space outside an element?",
    options: ["padding", "margin", "border", "outline"],
    correctAnswer: 1,
  },
  {
    question: "Which value keeps an element attached to the viewport?",
    options: ["absolute", "relative", "fixed", "static"],
    correctAnswer: 2,
  },
  {
    question: "Which CSS feature is used to change styles at different screen sizes?",
    options: [
      "Media queries",
      "CSS variables",
      "Pseudo-elements",
      "Keyframes",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS function is useful for responsive values with minimum and maximum limits?",
    options: ["range()", "clamp()", "responsive()", "scale()"],
    correctAnswer: 1,
  },
  {
    question: "What does box-sizing: border-box do?",
    options: [
      "Removes the border",
      "Includes padding and border in the declared width and height",
      "Adds a box shadow",
      "Makes every element inline",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which pseudo-class represents an element receiving keyboard or pointer focus?",
    options: [":hover", ":focus", ":active", ":checked"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of CSS variables?",
    options: [
      "Store reusable CSS values",
      "Execute JavaScript",
      "Create HTML elements",
      "Connect to a database",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which property controls the stacking order of positioned elements?",
    options: ["stack", "layer", "z-index", "order-index"],
    correctAnswer: 2,
  },
  {
    question: "Which CSS property creates smooth changes between property values?",
    options: ["animation-only", "transition", "smooth", "change"],
    correctAnswer: 1,
  },
];