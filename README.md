# SVG Icon Sprites Injector

> Inject a defined svg sprites file into HTML to make it avaible for svg <use>

## Usage

Includes the script in your HTML head.

``` html
<script src="https://cdn.jsdelivr.net/gh/guiwuff/icon-sprites-inject@1.0.0/dist/index.js"></script>
```
The script will automatically `inject` an SVG documentElement at the bottom of your HTML document with `display:none` in the `style` properties.

That way it will made the content of your sprites file available for inline SVG using `svg use`

``` html
<svg stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
  <use xlink:href="#spritesId"></use>
</svg>
```

## Sprites

By default it will import a `sprites.svg` file inside `assets` directory. You can attach your own sprites file using the existing file as the example. The Sprite file roughly have the following structure.

``` svg
<svg>
  <symbol id="symbolId">
    <path />
    <line />
  </symbol>
  <symbol id="symbolId2">
    <path />
    <line />
  </symbol>
</svg>
```

## ESM and COMMONJS Module

`esm` and `commonjs` module is available in `dist` with suffix format `index.esm.js` and `index.cjs.js`

Include the module in yout node using `npm i https://cdn.jsdelivr.net/gh/guiwuff/icon-sprites-inject@1.0.0/dist/` and use it in your app through `spriteInject()`

``` node
import {spriteInject} from 'icon-sprites-inject';

spriteInject('url/of/your/sprites', {});
```
