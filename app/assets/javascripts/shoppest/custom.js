function topNavToSelect() {
	// building select menu
	$('<select class="upper-nav" />').appendTo('.topHeader .container');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choise Page...'
	}).appendTo('.topHeader .container select');

	$('.topHeader ul.inline li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('.topHeader .container select');
	});
	// on clicking on link
	$('.topHeader .container select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
}


// building select .navbar for mobile width only
function NavToSelect() {
	// building select menu
	$('<select />').appendTo('.navbar');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choise Page...'
	}).appendTo('.navbar select');

	$('.navbar ul.nav li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('.navbar select');
	});
	// on clicking on link
	$('.navbar select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
}


//show your latest tweets
function recentTweets() {

    $(".tweet").tweet({
        username: "seaofclouds",
        join_text: "auto",
        avatar_size: 0,
        count: 2,
        auto_join_text_default: "we said,", 
        auto_join_text_ed: "we",
        auto_join_text_ing: "we were",
        auto_join_text_reply: "we replied to",
        auto_join_text_url: "we were checking out",
        loading_text: "loading tweets..."
    });
      
}

// bootstrap tooltip invocking
function showtooltip() {
	$('a[data-tip=tooltip], button[data-tip=tooltip], input[data-tip=tooltip]')
	.tooltip({
		animation:false
	});
}

// stop escaping on clickin on downdown
function cartContent() {
	var $cartContent = $('.cart-content');
	$cartContent.find('table').click(function(e){
		e.stopPropagation();
	});
}

// bootstrap carousel in caregories grid and list
function productSlider() {
	$('.carousel').carousel();
}

// link fancybox plugin on product detail
function productFancyBox() {

}

// dropdown mainnav
function dropdownMainNav() {
	var navLis = $('div.navbar > ul.nav > li');
	navLis.hover(
		function () {
			// hide the css default behavir
			$(this).children('ul').css('display', 'none');
			//show its submenu
			$(this).children('ul').slideDown(150);
		}, 
		function () {
			//hide its submenu
			$(this).children('ul').slideUp(350);		
		}
	);
}


// open and hide the side panel
function openSidePanel() {

}


// change background pattern
function changeBackgroundPattern() {

}



// range price product
function rangePriceSlider() {
	var $slideRange = $("#slider-range"),
		amount = $( "#amount" );
		
	$slideRange.slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        amount.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    amount.val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $slideRange.slider( "values", 1 ) );
}

//intial all
$(document).ready(function(){
	topNavToSelect();
	NavToSelect();
	showtooltip();
	cartContent();
	productSlider();
	productFancyBox();
	dropdownMainNav();
	recentTweets();
	openSidePanel();
	changeBackgroundPattern();
	rangePriceSlider();
});