var Marco = {
	// Declarer DOM variables here
	dom   : {
		_window 			: $(window) ,
		pageParent 		: $('html, body'), 
		btnNav  		: $('#btn-nav'),
		siteNav  		: $('#site-nav'),
		heroSlider 		: $('#hero-slider'),
		fullSlider 		: $('#full-slider'),
		isDropDown 		: $('.is-dropdown'),
		preLoader 		: $('#loading'),
		aboutSec 		: $('.section-about'),
		progressBars 	: $('#progress-bars'),
                contact_mapId 			: $('#map'),
	},
	// Global Variable
	vars  : {
		isDevice 		: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isMobileView 	: ( $(window).width() <= 530 )? true : false,
		isTabletView 	: ( $(window).width() <= 768 )? true : false,
	},
	// Initialize all JS function and Plug Ins
	init : function(){
		// Global Object  _this return the parent object DentalCare
		_this = this ;
		// Show the loading page 
		_this.showPreloader();
	  	// Initialize WOW Plug in
		_this.wowInit() ;

		// Wait until all images are loaded 
		_this.dom.pageParent.imagesLoaded(function(){
			// Hide the preloader page
		  	_this.hidePreloader() ;
			// Call all funtions events
			_this.events() ;
			// Function to center content in Home Slider
			_this.homeSlide();
			// Initialize all swiper sliders
			_this.swiperSliders();
			// Function to make all images in slider responsive
			_this.homeSlideImages();
			// Initialize Isotop to filter portfolio items
			_this.homePortfolio();
			// Initialize Masonry plug in for random grid
			_this.siteMasonry();
			// Call scroll events
			_this.siteScrollEvents();
			// Page team responsive background
			_this.teamSkillsBack() ;
                        _this.contact_baiduMap();
		}) ;
		_this.flexslider() ;
	},

	events : function(){
		// show menu for small screen
		_this.dom.btnNav.on('click', _this.showMobileMenu);
		_this.dom._window.on('resize', _this.homeSlide);
		_this.dom._window.on('scroll',_this.siteScrollEvents) ;
		// Mobile events
		if(_this.vars.isDevice || _this.vars.isTabletView){
			_this.dom.isDropDown.on('click','a',_this.dropDownMobileMenu);
		}
	},
	flexslider : function(){
		$('.flexslider').flexslider({
			animation: "fade" , 
			controlNav : false ,
			prevText : '<i class="fa fa-angle-left"></i>',
			nextText : '<i class="fa fa-angle-right"></i>',
			start : function(slider){
				$(slider.containerSelector).find('li').addClass('slide-animate');
				_this.dom.fullSlider.find("img").each(function(){
					var $this = $(this);
					var _img = $this.attr('src') ;
					$(this).parent('li').css('background-image','url('+_img+')');
				});	
			},

			before: function(slider){
				$(slider.containerSelector).find(".slide-animate").each(function(){
					$(this).removeClass("slide-animate");
				});
			},

			after: function(slider){
				$(slider).find(".flex-active-slide").addClass("slide-animate");
			}
 
		});
	},
	teamSkillsBack : function(){
		var _skillsSec = $('.skills-img') ;
		var _skillsImg = _skillsSec.data('team-pic');
		_skillsSec.css('background-image','url('+ _skillsImg +')');
	},
        contact_baiduMap : function() {
            if($('#map').length>0){
                var script = document.createElement("script"),
                coordinate = $('#map').attr('coordinate')||'105,25';
                script.src = "//api.map.baidu.com/api?v=2.0&ak=UrUYcuLQTqG62ArNimujPoGPLA26lqYu&callback=contact_map_func";
                document.body.appendChild(script);
                contact_map_func = function(){
                    var coo = coordinate&&coordinate.split(',');
                    var map = new BMap.Map("map");
                    map.centerAndZoom(new BMap.Point(coo[0]*1,coo[1]*1), 19);
                    map.enableScrollWheelZoom();
                    map.setMapStyle({style:"dark"});
                    var Icon = new BMap.Icon("/statics/front/imgs/point.svg\" class=\"point_svg",new BMap.Size(28,56));
                    var marker = new BMap.Marker(new BMap.Point(coo[0]*1,coo[1]*1),{icon:Icon});
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                    map.addOverlay(marker);
                }
            }
            
        },
	showPreloader : function(){
		_this.dom.pageParent.scrollTop(0) ;
		_this.dom.pageParent.css('overflow','hidden') ;
		_this.dom.preLoader.show() ;
	},

	hidePreloader : function(){
		_this.dom.pageParent.removeAttr('style') ;
		_this.dom.pageParent.fadeIn();
		_this.dom.preLoader.fadeOut();
	},

	siteScrollEvents : function(){
		var _viewPort = $(window).scrollTop() + $(window).height() - 100 ;
		// Progress Bars : init
		if(_this.dom.progressBars.length) {

			if(_viewPort > _this.dom.progressBars.offset().top){

				if(!_this.dom.progressBars.hasClass('animated')){
					_this.dom.progressBars.find('.progress').each(function(){
						var $this = $(this) ;
						var _per = $this.data('percentage') + '%' ;
						var _el  = $('<span class="progress-per"></span>').text(_per) ;
						$this.append(_el);
						$this.animate({'width':_per} , 1500 );
					})
				}

				_this.dom.progressBars.addClass('animated') ;
			}
		}
	},

	showMobileMenu : function(e){
		var $this = $(this) ;
		e.preventDefault();
		
		if($this.hasClass('open')){
			$this.removeClass('open');
			_this.dom.siteNav.slideToggle();
		}else{
			$this.addClass('open');
			_this.dom.siteNav.slideToggle();
		}
	},

	dropDownMobileMenu : function(e){
		var $this = $(this);
		e.preventDefault();
		if($this.hasClass('drop-active')){
			$this.removeClass('drop-active');
		}else{
			$this.addClass('drop-active') ;
		}
		$this.siblings("ul").slideToggle() ;
	},

	swiperSliders : function(){
		var homeSlide = new Swiper ('#hero-slider', {
		    loop: true,
		    autoplay : 3000,
		    speed : 1800,
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    effect : 'fade',
	  	})   	

	  	var portfolioSlide = new Swiper ('#single-por-slider', {
		    // Optional parameters
		    loop: true,
		    autoplay : 2000,
	  	}) 
                
                var caseSlide = new Swiper ('#case-slider', {
		    slidesPerView: 3,
                    breakpoints: {
			    // when window width is <= 320px
			    320: {
			      slidesPerView: 1,
			    },
			    // when window width is <= 480px
			    480: {
			      slidesPerView: 1,
			    },
			    // when window width is <= 640px
			    640: {
			      slidesPerView: 2, 
		    	},
		    	840: {
			      slidesPerView: 2, 
		    	}
		    },
                    paginationClickable:true,
		    pagination: '.swiper-pagination',
	  	})
	  	var testimonialsSlide = new Swiper ('#testimonials-slider', {
		    paginationClickable:true,
		    pagination: '.swiper-pagination',
 
	  	})    
	},

	homeSlide : function(){
		

		if($(window).width() >= 768 && $(window).height() >= 480){
			_this.dom.fullSlider.css('height' , $(window).height());
		}else{
			_this.dom.fullSlider.removeAttr("style");
		} 
	},

	homeSlideImages : function(){
		_this.dom.heroSlider.find('.swiper-slide').each(function(){
			var $this = $(this) ;
			var _imgLink = $this.data('slide-image');
			$this.css('background-image','url("'+_imgLink+'")');
		})
	},

	homePortfolio : function(){
		var filterBtns = $('.filter-button') ;
		var _homePortfolio = $('#home-portfolio').isotope({
		  itemSelector: '.col-md-4',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.col-md-4'
		  }
		});

		filterBtns.on( 'click', 'span', function() {
			$(this).addClass('active').siblings('span').removeClass('active');
			var filterValue = $(this).attr('data-filter');
			
			_homePortfolio.isotope({ filter: filterValue });
			_portfolio2.isotope({ filter: filterValue });
			_portfolio3.isotope({ filter: filterValue });
		});

		var _portfolio2 = $('#portfolio2').isotope({
		  itemSelector: '.col-md-3',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.col-md-3'
		  }
		});
 
		var _portfolio3 = $('#portfolio3').isotope({
		  itemSelector: '.col-md-6',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.col-md-6'
		  }
		});

 
	},

	siteMasonry : function(){
		var $coldMd6 = $('#masonry-blog').isotope({
		  itemSelector: '.col-md-6',
		  masonry: {
		    columnWidth: '.col-md-6'
		  }
		});

		var $colMd4 = $('#masonry-blog2').isotope({
		  itemSelector: '.col-md-4',
		  masonry: {
		    columnWidth: '.col-md-4'
		  }
		});
	},

	wowInit : function(){
		wow = new WOW({
              	boxClass:     'animate',      // default
              	animateClass: 'animated', // default
              	offset:       100,          // default
              	mobile:       false,       // default
              	live:         false        // default
        });
        wow.init();
	},

 

}
$(document).ready(function() {
    Marco.init() ;
    if($(".header").length){
    	$(window).scroll(function (){
            if($(".header").offset().top>1){
                $(".header").addClass("header-fixed");
                if($(window).width()>767){
                        $(".logo1").removeClass("hide").siblings().addClass("hide");
                        if($(".header").hasClass("trans")){
                                $(".header").removeClass("trans");
                        }
                }
            }else{
                $(".header").removeClass("header-fixed");
                if($(window).width()>767){
                        $(".header").addClass("trans");
                        $(".logo1").addClass("hide").siblings().removeClass("hide");
                }
            }
    	});
    }
});
