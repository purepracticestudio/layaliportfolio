


$(function(){

	$("#BTN").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#NAV").slideDown(300);
		$("#XX").on("click", CLOSECLOSE );
	}
	
	function CLOSECLOSE(){
		$("#NAV").slideUp(300);
		$("#XX").off("click");
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#NAV").attr("style","");
		}
	}
	
});

