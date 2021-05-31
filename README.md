## Smooth Scroll Animation Using Vanilla JavaScript
---
Provides smooth scroll functionality on clicking buttons with different eeasing properties. The "smoothSCroll(target, duration, effect)" function accepts three arguments: 

- target: the section to be scrolled. e.g: '.section-2'
- duration: the duration for the animation to be executed It accepts the value in miliseconds(1s = 1000ms)
- effect(optional): the effect to be applied during scroll animation. e.g: easeInOutCirc, easeInOutQuad, etc. The default effet is easeInOutQuad.

#### Available Effects:
- easeInOutCirc
- linearTween
- easeInQuad
- easeInCubic
- easeInOutQuad(default)