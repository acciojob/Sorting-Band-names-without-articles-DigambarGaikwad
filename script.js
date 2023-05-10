//your code here

const bandNames = ["The Beatles", "Aerosmith", "Red Hot Chili Peppers", "The Rolling Stones", "Guns N' Roses", "The Who", "Anthrax"];

const sortedBandNames = bandNames.sort((a, b) => {
  // Remove articles from band names for comparison
  const bandA = a.replace(/^(a |an |the )/i, "");
  const bandB = b.replace(/^(a |an |the )/i, "");
  
  return bandA.localeCompare(bandB); // Sort the band names lexicographically
});

const ul = document.getElementById("bands");

sortedBandNames.forEach((band) => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});
