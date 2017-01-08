<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>test</title>

		<style type="text/css">
			.contenuToCheck { 
				border: 1px solid red;
			    margin-top: 30px;
			    padding: 10px;
			    overflow: auto;
			    width: 65%;
			    height: 500px;
			    display: inline-block;
			}
			.insertionLink {
				margin: 30px 0;
    			text-align: center;
			}
			[name="link"] {
				width: 50%;
    			height: 25px;
    			padding: 0 6px;
			}
			[name="valider"] {
				width: 4%;
    			height: 30px;
			}
			span { font-size: 80%; color: red; }
			.baliseSelection { background-color: yellow; }
			.creationDesBlocks {
				display: inline-block;
			    border: 1px solid #000;
			    width: 25%;
			    height: 500px;
			    margin-top: 30px;
			    padding: 10px;
			    overflow: auto;
			}
			.annonces {
				border: 1px solid #000;
			    margin-bottom: 15px;
			    border-radius: 6px;
			    padding: 9px;
			}
		</style>
	</head>
	<body>

		<form>
			<div class="insertionLink">
				<input type="text" name="link" placeholder="Coller le lien de la page a afficher .." />
				<input type="submit" name="valider" value="ok" />
			</div>

			<div class="contenuToCheck">

				<div class="annonces">
					<h4 class="titre2">Lorem ipsum dolor sit amet <span>Annonce Premium</span></h4>
					<a class="lien2" href="#" title="La réponse D" >Réponse D</a>
					<p class="description2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
				</div>
				<?php
					for ($i=0; $i < 3; $i++) { 	
				?>
					<div class="annonces">
						<h4 class="titre">Lorem ipsum dolor sit amet <span>Annonce n. <?= $i; ?></span></h4>
						<a class="lien" href="#" title="La réponse D" >Réponse D</a>
						<p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
					</div>
				<?php
					}
				?>
			</div>

			<aside class="creationDesBlocks">
				
			</aside>
		</form>
		<!-- <iframe src="http://www.formasup.fr/" name="contenuToCheck" width="98%" height="500">
		  <p>Your browser does not support iframes.</p>
		</iframe> -->
		<button id="resetBalise">Selctionner une autre balise</button>

		<!-- <script
		  src="https://code.jquery.com/jquery-1.12.4.min.js"
		  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
		  crossorigin="anonymous">  
		</script> -->
		<script type="text/javascript" src="jquery-1.12.3.min.js"></script>
		<script type="text/javascript">

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
								console.log('il y a ' +nbrClasse+ ' objet(s) recurent avec la classe ' +test+ '!');
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

		</script>
	</body>
</html>