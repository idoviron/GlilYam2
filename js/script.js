var video_state = 0; //splash_video


function videoEnded() {
	//alert ('video ended');
	if (video_state == 0) {
		showAerialBG();
	} else if (video_state == 1) {
		//do nothing
	}
}

function buttonSplashClicked() {
	//alert ('button clicked');
	showAerialBG();
}

function showAerialBG() {
	document.getElementById('splash_video').pause(); 
	document.getElementById('background_image').src = "images/bg_environment.jpg";
	document.getElementById('background_image').className = "animated fadeIn";
	document.getElementById('background_image').src = "images/bg_environment.jpg";
	document.getElementById('button_splash').className = "animated fadeOut";
	document.getElementById('button_project').src="images/btn_project_normal.png";
	document.getElementById('button_project').className = "animated fadeIn";
	document.getElementById('button_project_pressed').src="images/btn_project_press.png"
	document.getElementById('button_project_pressed').className = "animated fadeIn";
	video_state = 1;
	setTimeout(function(){ document.getElementById('splash_video').innerHTML = "<source src='' type='video/mp4'>"}, 1000);
}



function buttonProjectClicked() {
	//alert ('project clicked');
	document.getElementById('background_image').className = "animated fadeOut";
	document.getElementById('button_project').className = "animated fadeOut";
	document.getElementById('button_project_pressed').className = "animated fadeOut";
	document.getElementById('menu').style.display = "block";
	document.getElementById('menu').className = "animated fadeIn";
	document.getElementById('splash_video').src = 'videos/extirior_720.mp4';
	document.getElementById('splash_video').play();
}

function menuButton5Clicked() {
}

function menuButton4Clicked() {
}

function menuButtonPentClicked() {
}

//setTimeout(function(){ document.getElementById('splash_video').play(); document.getElementById('background_image').className = "animated fadeOut";}, 3000);