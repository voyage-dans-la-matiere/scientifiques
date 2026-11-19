
const photosManquantes = {
  "Robert Hooke": "robert-hooke.png",
  "Antonie van Leeuwenhoek": "Antonie van Leeuwenhoek",
  "Theodor Schwann": "Theodor Schwann",
  "Louis Pasteur": "Louis Pasteur",
  "Dmitri Mendeleïev": "Dmitri Mendeleev",
  "Georges Lemaître": "Georges Lemaître"
};

scientifiques.forEach(s => {
  if (s.nom === "Robert Hooke") {
    s.image = "robert-hooke.png";
    return;
  }

  const nom = photosManquantes[s.nom];
  if (!nom) return;

  fetch(
    "https://en.wikipedia.org/w/api.php?" +
    "action=query&format=json&origin=*" +
    "&prop=pageimages&piprop=thumbnail" +
    "&pithumbsize=1000&titles=" +
    encodeURIComponent(nom)
  )
    .then(r => r.json())
    .then(data => {
      const page = Object.values(data.query.pages)[0];

      if (page.thumbnail) {
        s.image = page.thumbnail.source;

        if (typeof renderCards === "function") {
          renderCards(scientifiques);
        }
      }
    })
    .catch(() => {});
});
