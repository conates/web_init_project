
var App = {
	var1:'var1',
	init:function () {

		console.log('init success!!!');

		$('.link').on('click', function(event) {
			event.preventDefault();
			App.alert("apreto la imagen");
			return true;
		});


	},
	alert: function(message){
		alert(message);
		return false;
	}
}


App.init();