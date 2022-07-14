$(document).ready(function(){
    $('#side-switch').click(function(){
		if($('#side-switch').is(':checked')){
			$('#search-sidebar').hide();
			$('.mainbody').css("width","100%");
			Cookies.remove('facets')
			Cookies.set('facets', 'no');
		}else{
			$('#search-sidebar').show();
			$('.mainbody').css("width","75%");
			Cookies.remove('facets')
			Cookies.set('facets', 'yes');
		}
    });

	if(Cookies.get('facets')=='no'){
		//$('#side-switch').prop('checked', true);
		$('#side-switch').click();
	}

	var wrapper = document.getElementById("wrapper");
	
	document.addEventListener("click", function (event) {
	  if (!event.target.matches(".list")) return;

	  // List view
	  event.preventDefault();
	  wrapper.classList.add("list");
	});

	document.addEventListener("click", function (event) {
	  if (!event.target.matches(".grid")) return;

	  // List view
	  event.preventDefault();
	  wrapper.classList.remove("list");
	});

});


