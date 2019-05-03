import {spriteInject} from './sprite-injector';
const { version } = require('../package.json');

// Inject the sprites
spriteInject(`https://cdn.jsdelivr.net/gh/guiwuff/icon-sprites-inject@${version}/dist/assets/sprites.svg`, {});
