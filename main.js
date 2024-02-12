document.addEventListener("DOMContentLoaded", function () {
    fetch('races.json')
        .then(response => response.json())
        .then(data => renderRaceCards(data.races));
});

function renderRaceCards(races) {
    races.forEach(race => {
        Card(
            race.name,
            race.description,
            race.image,
            race.attributes,
            race.speed,
            race.size,
            race.languages
        );
    });
}
