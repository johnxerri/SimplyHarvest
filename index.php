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

				<!-- CONTENU FACTICE DE TEST (ici le site s'affichera) -->
					<div class="annonces">
						<h2 class="titre2">Lorem ipsum dolor sit amet <span>Annonce Premium</span></h2>
						<a class="lien2" href="#" title="La réponse D" >Réponse D</a>
						<p class="description2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
					</div>

					<?php $img = array('https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/10575158_783553525040027_6967185626754443436_o.jpg?oh=b5f193e0863ac38449b25e9b133b45a8&oe=591039A9','https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/10003652_783553528373360_5849515899304776083_o.jpg?oh=a91c7b6000a216ab306a7f8126462dc4&oe=592388CE','https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/1614306_783553511706695_6092934285515763786_o.jpg?oh=75078d493b14ebd8e42ce31799364544&oe=5909F1CE'); ?>
					<?php $link = array('la reponse A', 'la reponse B', 'la reponse C'); ?>

					<?php for ($i=0; $i < 3; $i++) { ?>
						<div class="annonces">
							<h2 class="titre">Lorem ipsum dolor sit amet <span>Annonce n. <?= $i; ?></span> <span>test <?= $i; ?></span></h2>
							<a class="lien" href="#<?= $i; ?>" title="<?= $link[$i] ?>" ><?= $link[$i] ?></a>
							<hr />
							<div class="img">
								<img src="<?= $img[$i] ?>" alt="<?= $link[$i] ?>" title="balise img sans class dans une div parent" width="150" height="100" />
								<a href="#<?= $i; ?>" title="<?= $link[$i] ?>" ><?= $link[$i] ?></a>
							</div>
							<hr />
							<img class="image" src="<?= $img[$i] ?>" alt="<?= $link[$i] ?>" title="balise img avec class" width="150" height="100" />
							<p class="description"><?= $i; ?> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
						</div>
					<?php } ?>
				<!-- END CONTENU FACTICE -->

			</article>

			<!-- Row milieu - colonne droite -->
			<aside class="creationDesBlocks">

				<div>
					<!-- Bouton ADD -->
					<!-- Bouton EXPORT JSON -->
					<!-- (plus tard) Bouton SAVE IN BDD -->
				</div>
				
			</aside>

		</section>
		
			<!-- test (ici pour le moment) -->
			<button id="resetBalise">Selctionner une autre balise</button>

		<script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>

	</body>

</html>