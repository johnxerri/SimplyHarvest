$(document).ready(function(){

	/**
	*	Formulaire pour afficher une page distante
	*/

		// Quand on soumet le form
		$('form').submit(function(event){
			event.preventDefault();

			// On recupere la value de l input name='link'
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

			/**
			*	Effet visuel pour le survol des balises
			*/

			$( balise ).hover(function() {
				// Ajouter en ::after la class au survol (ou des infos : .class #id balise)
			    $( this ).addClass('baliseHover');
			  }, function() {
			  	// faire une boucle pour compter le nbr de .baliseHover , si + de 1 remove .baliseHover du parent du
			  	// dernier .baliseHover
			    $( this ).removeClass('baliseHover');
			  }
			);

			$( balise ).click(function(){

				if (i == 0) {

					// on recupere la class du click
					var test = $( this ).attr('class');

					test = test.replace(' baliseHover', '');

					// ajout de la couleur pour le visuelle du click
					$('.'+test).addClass('baliseSelection');

					// on efface a l affichage, la class du visuelle
					test = test.replace(' class="baliseSelection"','');
					test = test.replace(' baliseSelection','');

					
					// on compte l'occurence
					var nbrClasse	= $('.contenuToCheck').find('.'+test).length; 

					// on cueille et on stock le contenu ;)
					var tableauHtmlContenu = [];
					var tableauTextContenu = [];
					var tableauHrefContenu = [];

					for (var j = 0; j < nbrClasse; j++) 
					{
						// Recuperation du HTML
						var baliseHtmlContenu = $('.contenuToCheck .'+test ).eq(j)[0].outerHTML;
						baliseHtmlContenu = baliseHtmlContenu.replace(' baliseHover', '');
						baliseHtmlContenu = baliseHtmlContenu.replace(' class="baliseSelection"','');
						baliseHtmlContenu = baliseHtmlContenu.replace(' baliseSelection','');
						tableauHtmlContenu.push( baliseHtmlContenu );
						// Recuperation du Text
						var baliseTextContenu = $('.contenuToCheck .'+test ).eq(j).text();
						if (baliseTextContenu == '') {
							baliseTextContenu = 'Aucun text';
						}
						tableauTextContenu.push( baliseTextContenu );
						// Recuperation du Href (lien page) ou Src (lien image)
						if (balise == '.contenuToCheck img') {
							var baliseHrefContenu = $('.contenuToCheck .'+test ).eq(j).attr('src');
						} else {
							var baliseHrefContenu = $('.contenuToCheck .'+test ).eq(j).attr('href');
						}
						tableauHrefContenu.push( baliseHrefContenu );
					}

					// Superbe affichage des résultats dans la console :
					console.log('%c===============================================','color:blue');
					console.log('%cTableau HTML : ','color:green');
					console.table(tableauHtmlContenu);
					console.log('%c----------------------------------','color:purple');
					console.log('%cTableau Text : ','color:green');
					console.table(tableauTextContenu);
					console.log('%c----------------------------------','color:purple');
					console.log('%cTableau Href/Src : ','color:green');
					console.table(tableauHrefContenu);
					console.log('%c----------------------------------','color:purple');
					// on affiche la reponse
					console.log('il y a ' +nbrClasse+ ' objet(s) recurent avec la classe ' +test+ '! ');
					console.log('%c===============================================','color:blue');
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

		clickOnBtn('.contenuToCheck p');
		clickOnBtn('.contenuToCheck a');
		clickOnBtn('.contenuToCheck span');
		clickOnBtn('.contenuToCheck div');
		clickOnBtn('.contenuToCheck H2');
		clickOnBtn('.contenuToCheck img');


});