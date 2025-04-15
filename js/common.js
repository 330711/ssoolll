$(function(){
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { 
			$('#scroll').fadeIn(); 
		} else { 
			$('#scroll').fadeOut(); 
		} 
	}); 
	$('#scroll').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); 
		return false; 
	});
    
     // 리스트 탭
    $('.menu_list .list li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.menu_list .list li').removeClass('on');
        $('.work_area').removeClass('on');

        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
    });
    
    $(".sitemap_btn").click(function(){
        $(".header .gnb_menu_box").slideToggle();
        $(this).children("img").toggleClass("on");
        
        
    });
    
    $(window).load(function(){
		/* contents */
		var footH = $("#footer").outerHeight();
		$(".contents").css("padding-bottom", footH);
	});

	$(window).resize(function(){
		/* contents */
		var footH = $("#footer").outerHeight();
		$(".contents").css("padding-bottom", footH);
	});
	$(window).trigger("resize");
    
    
    
    
});