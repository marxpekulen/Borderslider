# Borderslider 
Borderslider is an navbars animation jQuery plugin for sliding bottom border on hover

<a href="https://marxpekulen.github.io/Borderslider" target="_blank">Demo</a>

## Usage

1. Connect jQuery 1.12.1 or higher

2. Add some HTML Code

```html
<nav class="navbar">
  <span class="navbar-line"></span>
  <ul class="navbar-list">
    <li>
      <a href="#">Hover it!</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Portfolio</a>
    </li>
  </ul>
</nav>
```

2. Connect jQuery 1.12.1 or higher and Borderslider lib
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

<script src="borderSlider.js"></script>
```

3. Initialize

```js
$(".navbar-list").borderSlider({
  line : ".navbar-line",
  height : "4px",
  backgroundColor : "#69c",
  transition : ".3s ease-in-out"
});
```

## Dependencies
- jQuery 1.12.1 or higher
