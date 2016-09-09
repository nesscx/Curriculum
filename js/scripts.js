function jsFunction() {	
	function inIframe () { 
		try { 
			return window.self !== window.top; 
		} 
		catch (e) { 
			return true; 
		} 
	}

	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

	var color = Math.floor(Math.random() * colors.length);
	$("html body").animate({
		backgroundColor: colors[color],
		color: colors[color]
		}, 1000);
}