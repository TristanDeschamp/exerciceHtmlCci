// Modofie la couleur des li au click
document.querySelectorAll("li").forEach(item => {
	item.addEventListener("click", () => {
		item.style.color = item.style.color === "red" ? "black" : "red";
	});
});

// Affiche une petite alerte avant de rediriger vers le site des impôts
document.getElementById('impots').addEventListener("click", (e) => {
	e.preventDefault();
	alert("Vous allez être redirigé vers une page externe.");
	window.location.href = e.target.href;
});

// Permet d'afficher ou masquer l'image en cliquant sur le bouton avec l'id "toggleImage"
document.getElementById('toggleImage').addEventListener("click", () => {
	const img = document.querySelector('img');
	img.style.display = img.style.display === "none" ? "block" : "none";
});

document.getElementById('toggleSite').addEventListener('click', () => {
	const siteContent = document.getElementById('siteContent');
	const toggleButton = document.getElementById('toggleSite');

	if (siteContent.style.display === 'none') {
		siteContent.style.display = 'block';
		toggleButton.innerText = 'Cacher le site';
	} else {
		siteContent.style.display = 'none';
		toggleButton.innerText = 'Afficher le site';
	}
});