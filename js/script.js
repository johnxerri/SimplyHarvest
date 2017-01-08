$(document).ready(function(){

	/**
	*	Formulaire pour afficher une page distante
	*/

		// Quand on soumet le form
		$('form').submit(function(event){
			event.preventDefault();

			// On recuoere la value de l input name='link'
			var lienAOuvrir = $("input[name='link']").val();

			// $('[name="contenuToCheck"]').attr('src','lienAOuvrir');

		});

	/**
	*	Bouton de selection d'une autre balise
	*/

		var i = 0;

		$('#resetBalise').click(function(e){
			e.preventDefault();

			baliseSelection = $('body').find('.baliseSelection').removeClass('baliseSelection');
			i = 0;

		});

	/**
	*	Fonction de recuperation des informations au click
	*/

		function clickOnBtn(balise){

			$(balise).click(function(){

				if (i == 0) {

					// on recupere la class du click
					var test = $(this).attr('class');

					// ajout de la couleur pour le visuelle du click
					$('.'+test).addClass('baliseSelection');

					// on efface a l affichage, la class du visuelle
					test = test.replace(' class="baliseSelection"','');
					test = test.replace(' baliseSelection','');

					
					// on compte l'occurence
					var nbrClasse	= $('.contenuToCheck').find('.'+test).length; 

					console.log(nbrClasse);

					// on affiche la reponse
					console.log('il y a ' +nbrClasse+ ' objet(s) recurent avec la classe ' +test+ '! ');
					i++;

				}


				// =================================================================
				// if (i == 0) {

				// 	var baliseSelection 	= $(this).addClass('baliseSelection');

				// 	var baliseHtmlContenu 	= $(this)[0].outerHTML;
				// 	var baliseTextContenu 	= $(this).text();
				// 	var baliseAttrClass		= $(this).attr('class');
				// 	var baliseAttrId		= $(this).attr('id');
				// 	var baliseHref			= $(this).attr('href');

				// 	baliseHtmlContenu = baliseHtmlContenu.replace(' class="baliseSelection"','');
				// 	baliseHtmlContenu = baliseHtmlContenu.replace(' baliseSelection','');

				// 	console.log('%c===============================================','color:blue');

				// 	console.log('\nVous avez cliquer sur une balise <'+balise+'>[.]</'+balise+'>' +
				// 		'\n\nhtml : ' + baliseHtmlContenu +
				// 		'\n\ntext : ' + baliseTextContenu +'\n\n');

				// 	// Affichage du HREF si la balise est a
				// 	if (balise == 'a') {
				// 		console.log('%c✔ href = '+baliseHref,'color:green');
				// 	}

				// 	// Affichage de la class css
				// 	if(baliseAttrClass == null){
				// 		console.log('%c✘ Aucune class css.','color:red');
				// 	}else if(baliseAttrClass == 'baliseSelection'){
				// 		console.log('%c✘ Aucune class css.','color:red');
				// 	}else{
				// 		baliseAttrClass = baliseAttrClass.replace('baliseSelection','');
				// 		console.log('%c✔ class = '+baliseAttrClass,'color:green');
				// 	}

				// 	// Affichage de l'ID css
				// 	if(baliseAttrId == null){
				// 		console.log('%c✘ Aucun id css.','color:red');
				// 	}else{
				// 		console.log('%c✔ id = '+baliseAttrId,'color:green');
				// 	}

				// 	console.log('%c===============================================','color:blue');

				// 	// console.log(baliseHtmlContenu + ' |||||| ' + baliseTextContenu + ' |||||| ' + baliseAttrClass + ' |||||| ' + baliseAttrId + ' |||||| ' + baliseHref);

				// 	i++;

				// }

			});

		};

	/**
	*	Appel de la fonction utilisateur
	*/

		clickOnBtn('p');
		clickOnBtn('a');
		clickOnBtn('span');
		clickOnBtn('div');
		clickOnBtn('H4');

});