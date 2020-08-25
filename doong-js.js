//흉둥이

human.onclick = function(){
	human.style.opacity = "0%";
	human_1.style.opacity = "100%";
}

human1_1.onclick = function(){
	human1_1.style.opacity = "100%";
}


//human1-.onclick = function(){	bodyy.style.position = "relative";}

//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

		if (t > 4620) {
			location.href = "https://jjoohee.github.io/battle_0826/";
		}
}