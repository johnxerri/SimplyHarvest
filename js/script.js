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

		// Pour l UX/UI je creer une variable pour eviter le cliqueur fou
		// Si i = 0 Une instance peut etre lancer sinon il faut terminer l instance precedante ;)
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

				// Si aucune instance n est lancer
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
					
					// on compte l'occurence
					var nbrClasse	= $('.contenuToCheck').find('.'+className).length; 

					// on cueille et on stock le contenu dans les tableaux respectifs ;)
					var tableauHtmlContenu = [];
					var tableauTextContenu = [];
					var tableauHrefContenu = [];

					// On boucle sur le nbr de class recurente
					for (var j = 0; j < nbrClasse; j++) 
					{

						// Recuperation du HTML :
						// On recupere le HTML Parent
						var baliseHtmlContenu = $('.contenuToCheck .'+className ).eq(j)[0].outerHTML;
						// on efface la class pour l affichage
						baliseHtmlContenu = baliseHtmlContenu.replace(' class="baliseSelection"','');

						// SI on a recuperer la class Parent
						if ( classNameParent == 1 ) {
							// et pour chaque ligne on recupere la balise cliqué dans le parent qui contient une
							// .class (en plus c'est non-greedy ^_^)
							var regexBalise = new RegExp('<'+balise+'>([\\s\\S]*?)</'+balise+'>', 'g');
							baliseHtmlContenu = baliseHtmlContenu.match( regexBalise );
							// on push la reponse dans le tableau HTML
							tableauHtmlContenu.push( baliseHtmlContenu );
						} else {
							// on efface la class pour l affichage
							baliseHtmlContenu = baliseHtmlContenu.replace(' baliseSelection','');
							// on push la reponse dans le tableau HTML
							tableauHtmlContenu.push( baliseHtmlContenu );
						}
						// =====================================================

						// Recuperation du Text :
						// On recupere le text de la .class
						var baliseTextContenu = $('.contenuToCheck .'+className ).eq(j).text();

						// SI on a recuperer la class Parent
						if ( classNameParent == 1 ) {
							// On remplace baliseTextContenu par le text de l enfant de la .class
							baliseTextContenu = $('.contenuToCheck .'+className ).eq(j).children().text();
						}
						// SI aucun text n est récupéré
						if ( baliseTextContenu == '' ) {
							baliseTextContenu = 'Aucun text';
						} 
						// on push la reponse dans le tableau Text
						tableauTextContenu.push( baliseTextContenu );
						// =====================================================

						// Recuperation du Href (lien page) ou Src (lien image) :
						if (balise == 'img') {
							var baliseHrefContenu = $('.contenuToCheck .'+className ).eq(j).attr('src');
						} else {
							var baliseHrefContenu = $('.contenuToCheck .'+className ).eq(j).attr('href');
						}

						// SI aucun lien n est récupéré
						if (baliseHrefContenu == undefined) {
							baliseHrefContenu = 'Aucun lien';
						}
						// on push la reponse dans le tableau Href/Src
						tableauHrefContenu.push( baliseHrefContenu );
						// =====================================================
					}

					// Superbe affichage des résultats dans la console en attendant le .append() ^_^ :
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
	*	Appel de la fonction utilisateur ( a factoriser ;) )
	*/

		clickOnBtn('p');
		clickOnBtn('a');
		clickOnBtn('span');
		clickOnBtn('div');
		clickOnBtn('H2');
		clickOnBtn('img');


});