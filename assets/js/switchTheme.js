var isDay = true;
function switchTheme() {
	if (isDay){
		document.getElementById('blogTheme').href = '/css/computerWorldNight.css';
		document.getElementById('shTheme').href = 'http://dl.dropbox.com/u/46484098/blog_script/syntaxhighlighter_3.0.83/styles/shThemeEmacs.css';
		document.getElementById('toggle').innerHTML = "ON";
		isDay = false;
		$.cookie('theme', 'night', {path: '/' });
	} else {
		document.getElementById('blogTheme').href = '/css/computerWorldDay.css';
		document.getElementById('shTheme').href = 'http://dl.dropbox.com/u/46484098/blog_script/syntaxhighlighter_3.0.83/styles/shThemeDefault.css';
		document.getElementById('toggle').innerHTML = "OFF";
		isDay = true;
		$.cookie('theme', 'day', {path: '/' });
	}	
}

$(function() {
	$.cookie.defaults.path = '/';
	var theme = $.cookie('theme');
	
	if (theme == 'day' && isDay == false) {
		//isDay = true;
		switchTheme();
	} else if(theme == 'night' && isDay){
		//isDay = false;
		switchTheme();
	}
});