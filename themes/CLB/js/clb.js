$(document).ready(function(){

	$('#wrapper-table').DataTable();
	//dedication
	$( "#confirm_dedication" ).click(function() {
		$(".dedication").hide();
		$("#ded_div").removeClass('hidden');
		$("header .navbar").css("padding-right","0");
		$("header").css("display","flex");
		setHomepageOffset(128, 148);
		Cookies.set('dedication', 'yes');
		location.reload(true);
	});
	$( "#ded_div" ).click(function() {
		$(".dedication").removeClass('hidden');
		$( "#ded_div" ).hide();
		$("header .navbar").css("padding-right","10%");
		$("header").css("display","block");
		Cookies.set('dedication', 'no');
		location.reload(true);
	});

	if(Cookies.get('dedication')!='yes'){
		//console.log("D neni");
		$(".dedication").removeClass('hidden');
		$("header .navbar").css("padding-right","10%");
		$("header").css("display","block");
		//82, 102
		setHomepageOffset(313, 313);
	}else{
		//console.log("D JE");
		$("#ded_div").removeClass('hidden');
		setHomepageOffset(128, 128);
	}

// alternativa schovani dedikace
//	$("#confirm_dedication").click(function () {
//		if ($(this).html() == "-") {
//		    $(this).html("+");
//		} else {
//		    $(this).html("-");
//		}
//		var thisParent = $(this).parent().parent();console.log($(thisParent));
//		$(thisParent).slideToggle();
//		$('.main').css('margin-top', '128px');
//		console.log($(window).width());
//	});


	function setHomepageOffset(one, two){
	// one = 82, 277 +46-10,
	// two = 102, 297 +46-10,
		// homepage offset
		if ( $( ".search-home-facets" ).length ) {
			$('.main').css('margin-top', one+'px');
			$('#title_text').css('display','inline-block');
			$('.navbar-header').css('margin-right','50%');
		}else if ( !$( ".active-filters" ).length ) {
			if ($(window).width() > '768'){
				$('.main').css('margin-top', one+'px');
			}else{
				if ($(".dedication").hasClass("hidden")) {
					$('.main').css('margin-top', '148px');
				}else{
					$('.main').css('margin-top', '333px');
				}
			}
		}else if ( $('.record-nav').length || $( "#wrapper" ).length) {
			$('.main').css('margin-top', two+'px');
		}
	}

	var toggle_switch = document.getElementById("toggle_switch");
        $('#side-switch').click(function(){
    		if($('#side-switch').is(':checked')){
			toggle_switch.classList.remove("ph-toggle-left");
			toggle_switch.classList.add("ph-toggle-right");
			$('#search-sidebar').hide();
    			$('.mainbody').css("width","100%");

			$('#toggle_switch').css('color','#a7011d');
    			//Cookies.remove('facets')
    			Cookies.set('facets', 'no');
    		}else{
    			$('#search-sidebar').show();
    			$('.mainbody').css("width","75%");
			toggle_switch.classList.remove("ph-toggle-right");
			toggle_switch.classList.add("ph-toggle-left");
    			$('#toggle_switch').css('color','inherit');
			//Cookies.remove('facets')
    			Cookies.set('facets', 'yes');
    		}
        });
	if(Cookies.get('facets')=='no'){
		//$('#side-switch').prop('checked', true);
		//$('#side-switch').click();
		$('#search-sidebar').hide();
                $('.mainbody').css("width","100%");
                toggle_switch.classList.remove("ph-toggle-left");
                toggle_switch.classList.add("ph-toggle-right");
                $('#toggle_switch').css('color','#a7011d');
		$('#side-switch').prop( "checked", true );
	}

//	var wrapper = document.getElementById("wrapper");	
//	if(Cookies.get('layout')=='list'){
//		wrapper.classList.add("list");
//	}else if(Cookies.get('layout')=='grid'){
//		wrapper.classList.add("grid");
//	}else if(Cookies.get('layout')=='table'){
//		setTable();
//	}
//
//	$("#grid").click(function (event) {
//	  if (event.target.matches("#grid")) {
//		  //console.log('grid');
//		  Cookies.set('layout', 'grid');
//		  wrapper.classList.remove("list");
//		  if ( $("#wrapper").parent().is( "table" ) ) {
//			  unsetTable();
//  		  }
//		  wrapper.classList.add("grid");
//		  return;
//	  }
//	});
//	$("#list").click(function (event) {
//	  if (event.target.matches("#list")) {
//		  //console.log('list');
//		  Cookies.set('layout', 'list');
//		  if ( $("#wrapper").parent().is( "table" ) ) {
//			  unsetTable();
//  		  }
//		  wrapper.classList.remove("grid");
//		  wrapper.classList.add("list");
//		  return;
//	  }
//	});
//	$("#table_view").click(function (event) {
//	  if (event.target.matches("#table_view")) {
//		  //console.log('table');
//		if( $("#wrapper").parent('table.results_table').length ){
//			console.log('wrapped');
//			return;
//		}
//		  Cookies.set('layout', 'table');
//		  wrapper.classList.remove("list");
//		  wrapper.classList.remove("grid");
//		  //$("#wrapper").wrap( '<table class="results_table"></table>' );
//		  setTable();  
//		  return;
//	  }
//	});

//	function setTable() {
//		//console.log('SETTABLE');
//		
//		$("#wrapper").wrap( '<table class="results_table"></table>' );
//		$( "li.result" ).each(function() {
//    			//$( this ).replaceWith( "<tr>" + $( this ).html() + "</tr>" );
//			$(this).wrap( '<tr class="results"></tr>' );
//			//$(this).children(".record-checkbox").before('<td class="first_col">');
//			//$(this).children(".media").before('</td><td class="second_col">');
//
//  		});
//	
//		var $set = $("li.result").children();
//		for(var i=0, len = $set.length; i < len; i+=6){
//		    $set.slice(i, i+5).wrapAll('<td class="result_col"/>');
//		    $set.slice(i+5, i+6).wrapAll('<td class="result_col_media"/>');
//		}
//	  	return;
//	}
//
//	function unsetTable() {
//		$("#wrapper").unwrap();
//		$( "li.result" ).each(function() {
//			$(this).unwrap();
//                });
//		$( "label.record-checkbox" ).each(function() {
//			$(this).unwrap();
//                });
//		$( "div.media" ).each(function() {
//			$(this).unwrap();
//                });
//		return;
//	}
});


