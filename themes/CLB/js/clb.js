$(document).ready(function(){
	// homepage offset
	if ( $( ".search-home-facets" ).length ) {
		$('.main').css('margin-top','82px');
		$('#title_text').css('display','inline-block');
		$('.navbar-header').css('margin-right','50%');
	}else if ( !$( ".active-filters" ).length ) {
		$('.main').css('margin-top','82px');
	}else if ( $('.record-nav').length || $( "#wrapper" ).length) {
		$('.main').css('margin-top','102px');
	}

	var toggle_switch = document.getElementById("toggle_switch");
        $('#side-switch').click(function(){
    		if($('#side-switch').is(':checked')){
    			$('#search-sidebar').hide();
    			$('.mainbody').css("width","100%");
			toggle_switch.classList.remove("ph-toggle-left");
			toggle_switch.classList.add("ph-toggle-right");
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
		$('#side-switch').click();
	}

	var wrapper = document.getElementById("wrapper");	
	if(Cookies.get('layout')=='list'){
		wrapper.classList.add("list");
	}else if(Cookies.get('layout')=='grid'){
		wrapper.classList.add("grid");
	}else if(Cookies.get('layout')=='table'){
		setTable();
	}

	$("#grid").click(function (event) {
	  if (event.target.matches("#grid")) {
		  //console.log('grid');
		  Cookies.set('layout', 'grid');
		  wrapper.classList.remove("list");
		  if ( $("#wrapper").parent().is( "table" ) ) {
			  unsetTable();
  		  }
		  wrapper.classList.add("grid");
		  return;
	  }
	});
	$("#list").click(function (event) {
	  if (event.target.matches("#list")) {
		  //console.log('list');
		  Cookies.set('layout', 'list');
		  if ( $("#wrapper").parent().is( "table" ) ) {
			  unsetTable();
  		  }
		  wrapper.classList.remove("grid");
		  wrapper.classList.add("list");
		  return;
	  }
	});
	$("#table_view").click(function (event) {
	  if (event.target.matches("#table_view")) {
		  //console.log('table');
		if( $("#wrapper").parent('table.results_table').length ){
			console.log('wrapped');
			return;
		}
		  Cookies.set('layout', 'table');
		  wrapper.classList.remove("list");
		  wrapper.classList.remove("grid");
		  //$("#wrapper").wrap( '<table class="results_table"></table>' );
		  setTable();  
		  return;
	  }
	});

	function setTable() {
		//console.log('SETTABLE');
		
		$("#wrapper").wrap( '<table class="results_table"></table>' );
		$( "li.result" ).each(function() {
    			//$( this ).replaceWith( "<tr>" + $( this ).html() + "</tr>" );
			$(this).wrap( '<tr class="results"></tr>' );
			//$(this).children(".record-checkbox").before('<td class="first_col">');
			//$(this).children(".media").before('</td><td class="second_col">');

  		});
	
		var $set = $("li.result").children();
		for(var i=0, len = $set.length; i < len; i+=6){
		    $set.slice(i, i+5).wrapAll('<td class="result_col"/>');
		    $set.slice(i+5, i+6).wrapAll('<td class="result_col_media"/>');
		}
	  	return;
	}

	function unsetTable() {
		$("#wrapper").unwrap();
		$( "li.result" ).each(function() {
			$(this).unwrap();
                });
		$( "label.record-checkbox" ).each(function() {
			$(this).unwrap();
                });
		$( "div.media" ).each(function() {
			$(this).unwrap();
                });
		return;
	}
});


