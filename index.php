<!DOCTYPE html>
<html>

	<head>

		<meta charset="utf-8" />
		<title>Simply Harvest V0.1</title>

		<link rel="stylesheet" type="text/css" href="css/style.css" />

	</head>

	<body>

		<!-- Row haut -->
		<section class="insertionLink">

			<form method="post">

				<input type="text" name="link" placeholder="Coller le lien de la page a afficher .." />
				<input type="submit" name="valider" value="ok" />

			</form>

		</section>

		<section>

			<!-- Row milieu - colonne gauche -->
			<article class="contenuToCheck">

				<!-- CONTENU FACTICE (ici le site s'affichera) -->
					<div class="annonces">
						<h2 class="titre2">Lorem ipsum dolor sit amet <span>Annonce Premium</span></h2>
						<a class="lien2" href="#" title="La réponse D" >Réponse D</a>
						<p class="description2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
					</div>

					<?php $link = array('la reponse A', 'la reponse B', 'la reponse C'); ?>
					<?php for ($i=0; $i < 3; $i++) { ?>
						<div class="annonces">
							<h2 class="titre">Lorem ipsum dolor sit amet <span>Annonce n. <?= $i; ?></span></h2>
							<a class="lien" href="#" title="<?= $link[$i] ?>" ><?= $link[$i] ?></a>
							<p class="description"><?= $i; ?> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
						</div>
					<?php } ?>
				<!-- END CONTENU FACTICE -->

			</article>

			<!-- Row milieu - colonne droite -->
			<aside class="creationDesBlocks">
				
			</aside>

		</section>
		
			<!-- test (ici pour le moment) -->
			<button id="resetBalise">Selctionner une autre balise</button>

		<script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>

	</body>

</html>