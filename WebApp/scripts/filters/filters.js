app.filter('fontbBlod',function(){
	return function(input,para){
		var out = "";
		var num = parseInt(input);
		if(num == "NaN"){
			num = 0;
		}
		num = num.toFixed(2);

		switch(para){
			case 'cn':
				out = '￥ '+num;
				break;
			case 'en':
				out = 'USD$ '+num;
				break;
			default:
				out = '￥ '+num;
				break;
		}

		return out;
	}
});