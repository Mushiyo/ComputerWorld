$(function() {
	var isDay = true;
	document.getElementById('toggle').onclick = function () {
		if (isDay){
			document.getElementById('blogTheme').href = '/css/computerWorldNight.css';
			document.getElementById('shTheme').href = 'http://dl.dropbox.com/u/46484098/blog_script/syntaxhighlighter_3.0.83/styles/shThemeEmacs.css';
			document.getElementById('toggle').innerHTML = "ON";
			isDay = false;
		} else {
			document.getElementById('blogTheme').href = '/css/computerWorldDay.css';
			document.getElementById('shTheme').href = 'http://dl.dropbox.com/u/46484098/blog_script/syntaxhighlighter_3.0.83/styles/shThemeDefault.css';
			document.getElementById('toggle').innerHTML = "OFF";
			isDay = true;
		}
	};
});