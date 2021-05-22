function smoothScroll(target, duration, effect) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top; // distance wwith respect to element
	var startPosition = window.pageYOffset; // distance with respect to browser
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var scroll = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, scroll);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		switch (effect) {
			case "easeInOutCirc":
				t /= d / 2;
				if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
				t -= 2;
				return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
				break;
			case "linearTween":
				return (c * t) / d + b;
				break;
			case "easeInQuad":
				t /= d;
				return c * t * t + b;
				break;
			case "easeOutQuad":
				t /= d;
				return -c * t * (t - 2) + b;
				break;
			case "easeInCubic":
				t /= d;
				return c * t * t * t + b;
				break;
			// easeInOutQuad
			default:
				t /= d / 2;
				if (t < 1) return (c / 2) * t * t + b;
				t--;
				return (-c / 2) * (t * (t - 2) - 1) + b;
				break;
		}
	}

	requestAnimationFrame(animation);
}
