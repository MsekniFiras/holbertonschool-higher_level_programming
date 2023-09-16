const apiUrl = "https://swapi-api.hbtn.io/api/people/5/?format=json";
const characterElement = document.getElementById("character");

async function fetchCharacterName() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    characterElement.textContent = data.name;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchCharacterName();
