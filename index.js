// P1S3
console.log('===== P1S3 =====');
let ticket = {
  nomFilm: 'Akira',
  prix: 35,
  numeroSalle: 11
}

let nom = 'Marc';

let texteAffichage = 'Bonjour ' + nom + ', votre film ' + ticket.nomFilm + ' est en salle ' + ticket.numeroSalle + '.';

console.log(texteAffichage);

// P1S4
console.log('===== P1S4 =====');
// Creation tableau
let playlist = ['Ask Me Know', 'op18 Moderato', 'Violets'];

// Ajouter 2 nouveaux morceaux
playlist.push('Doudou', '297');

// Retirer le dernier
playlist.pop();

console.log('Contenu de la playlist :\n', playlist);
