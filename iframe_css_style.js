var interval = setInterval(function(){
	if (jQuery("#collection-component-1592488907380 iframe").length) {
		var head = jQuery("#collection-component-1592488907380 iframe").contents().find("head");
		var css = '<style type="text/css">' +
			'.shopify-buy__product__title,.shopify-buy__product__actual-price,.shopify-buy__option-select__label{color:white}; ' +
			'</style>';
		head.append(css);
		clearInterval(interval);
	}
}, 500);
