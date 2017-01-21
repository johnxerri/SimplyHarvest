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

			// $( '.contenuToCheck ' + balise ).hover(function() {
			// 	// Ajouter en ::after la class au survol (ou des infos : .class #id balise)
			//     $( this ).addClass('baliseHover');
			//   }, function() {
			//   	// faire une boucle pour compter le nbr de .baliseHover , si + de 1 remove .baliseHover du parent du
			//   	// dernier .baliseHover
			//     $( this ).removeClass('baliseHover');
			//   }
			// );

			$( '.contenuToCheck ' + balise ).click(function(){

				if (i == 0) {

					// on recupere la class du click
					var className = $( this ).attr('class');
					
					// Si il n y a pas de class on prend celle du parent ;)
					if ( className == undefined ) {

						className = $( this ).parent().attr('class');
						// Et pour s y retrouver on creer une variable Parent
						var classNameParent = 1;

						// ajout de la couleur pour le visuelle du click
						$('.'+className).children().addClass('baliseSelection');

					// Si il y a une class presente
					} else {

						// ajout de la couleur pour le visuelle du click
						$('.'+className).addClass('baliseSelection');

						// on efface a l affichage, la class du visuelle
						className = className.replace(' class="baliseSelection"','');
						className = className.replace(' baliseSelection','');

					}
					console.log(className);

					// className = className.replace(' baliseHover', '');
					
					// on compte l'occurence
					var nbrClasse	= $('.contenuToCheck').find('.'+className).length; 

					// on cueille et on stock le contenu dans les tableaux respectifs ;)
					var tableauHtmlContenu = [];
					var tableauTextContenu = [];
					var tableauHrefContenu = [];

					for (var j = 0; j < nbrClasse; j++) 
					{

						// Recuperation du HTML :
						// On recupere le HTML Parent
						var baliseHtmlContenu = $('.contenuToCheck .'+className ).eq(j)[0].outerHTML;
						baliseHtmlContenu = baliseHtmlContenu.replace(' class="baliseSelection"','');

						// SI on a recuperer la class Parent
						if ( classNameParent == 1 ) {
							// et pour chaque ligne
							baliseHtmlContenu = baliseHtmlContenu.match(/<span>([\s\S]*?)<\/span>/g);
							tableauHtmlContenu.push( baliseHtmlContenu );
						} else {
							// baliseHtmlContenu = baliseHtmlContenu.replace(' baliseHover', '');
							baliseHtmlContenu = baliseHtmlContenu.replace(' baliseSelection','');
							tableauHtmlContenu.push( baliseHtmlContenu );
						}
						// =====================================================

						// Recuperation du Text :
						var baliseTextContenu = $('.contenuToCheck .'+className ).eq(j).text();
						if ( classNameParent == 1 ) {
							baliseTextContenu = $('.contenuToCheck .'+className ).eq(j).children().text();
						}
						if ( baliseTextContenu == '' ) {
							baliseTextContenu = 'Aucun text';
						} 
						tableauTextContenu.push( baliseTextContenu );
						// =====================================================

						// Recuperation du Href (lien page) ou Src (lien image) :
						if (balise == 'img') {
							var baliseHrefContenu = $('.contenuToCheck .'+className ).eq(j).attr('src');
						} else {
							var baliseHrefContenu = $('.contenuToCheck .'+className ).eq(j).attr('href');
						}
						tableauHrefContenu.push( baliseHrefContenu );
						// =====================================================
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
					console.log('il y a ' +nbrClasse+ ' objet(s) recurent avec la classe ' +className+ '! ');
					console.log('%c===============================================','color:blue');
					i++;

				}

			});

		};

	/**
	*	Appel de la fonction utilisateur
	*/

		clickOnBtn('p');
		clickOnBtn('a');
		clickOnBtn('span');
		clickOnBtn('div');
		clickOnBtn('H2');
		clickOnBtn('img');


});