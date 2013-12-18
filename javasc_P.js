 
 var fixed = false;		//variable détermine si le menue onglet est fixe ou flottant
 
 /*Fonction appeler lors du scoll*/  
 

$(document).scroll(function() {	
    if( $(this).scrollTop() > 110 ) {				// Se lance à partir de 115px de défilement
		if( !fixed ) {								// S'il est pas fixe on le rend fixe	
		fixed = true;
		$('#menu').css({position:'fixed', top:60});
		}
	} else {
		if( fixed ) {
		fixed = false;
		$('#menu').css({position:'relative', top:0}, 500);	//se remet bien au retour
		}
	}
});



/*Fait défiler une page jusqu'à l'onglet quand on clique dessus*/
	
function afficher(elem, id) {
	var liens = ['presentation', 'forum', 'diagramme', 'agenda', 'dropdoc', 'dispo', 'discussion'];
	for (lien in liens) {
		$("#"+liens[lien]).hide();	//On les cache tous puis parce qu'on ne sait pas lequel est affiché en ce moment	
		$(".bouton[value="+liens[lien]+"]").removeClass('active');
	}
		
	$("#"+id).show();			//On affiche la page demandée
	$(".bouton[value="+id+"]").addClass('active');
	
	jQuery('html,body').animate({scrollTop:0},500,'swing',function(){	//anime le scrolltop pour le mettre en haut en 1000ms avec un effet swing
				window.location.hash = '#';
			});	
}

/*$( "#presentation" ).show(function() {
	$(".bouton[value=presentation]").css("background-color","white");})	
*/