# Peel Off Sticker Buttons

CSS-only sticker button with animated folding corner.

Demo: https://yepteam.github.io/sticker-button/

Using with Bootstrap 5
---

1. Include Bootstrap 5 style file and compiled `sticker.css` file inside `<head>` tag:
```
<head>

...

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">
      
<link rel="stylesheet" href="dist/example.css">

...

</head>
```

2. Add class `btn-sticker` to bootstrap button:

```
<button type="button" class="btn-sticker">Sticker Button</button>
<a href="#" class="btn-sticker">Sticker Button</a>

```

Sass customization
---

You will find the complete list of variables in `scss/_variables.scss`

```
// Default variable overrides
$sticker-line-height: 1;
$sticker-padding-y: .5rem;
$sticker-font-size: 1.25rem;
$sticker-border-width: 2px;
$sticker-corner-angle-default: 45deg;

@import "dist/sticker.scss"
```
