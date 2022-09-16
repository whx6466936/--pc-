var float = document.getElementById('float')
window.onscroll = function(){
	var top = document.documentElement.scrollTop||document.body.scrollTop
	if(top>=410){
		float.style.position = 'fixed'
		float.style.top = 342+'px'
	}else{
		float.style.position = 'absolute'
		float.style.top = 770+'px'
	}
}