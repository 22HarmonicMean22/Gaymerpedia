const images = [
    {
        src: "movie1.png",
        caption: 'Marcellus is exiled to Purgatory by <a href="https://en.wikipedia.org/wiki/Hoax">Cornelius</a> on the D floor of DLS.'
    },
    {
        src: "movie2.png",
        caption: 'Marcellus fends off against a swarm of his children in <a href="https://en.wikipedia.org/wiki/Sweet_as_Sugar">Brooklyn.</a> (Although they are <a href="https://en.wikipedia.org/wiki/Jason_Cleere">clearly</a> no match for him.)'
    },
    {
        src: "movie4.png",
        caption: 'Marcellus <a href="https://en.wikipedia.org/wiki/TALON_(database)">ascends</a> the <a href="https://en.wikipedia.org/wiki/House_of_Gods">stairs</a> to escape Purgatory having defeated <a href="https://www.zippia.com/tank-driver-jobs/">the army</a> of his offspring.'
    },
    {
        src: "movie3.png",
        caption: 'Cornelius travels the <a href="https://en.wikipedia.org/wiki/List_of_bridges_in_Belgium">bridge</a> between worlds to return to Earth, <a href="https://en.wikipedia.org/wiki/Kutsy_Vaptsarov">scarred</a> by his father.'
    }
];

let currentImage = 0;

function showImage() {
    document.getElementById("gallery-image").src =
        images[currentImage].src;

    document.getElementById("gallery-caption").innerHTML =
        images[currentImage].caption;

    document.getElementById("gallery-counter").textContent =
        (currentImage + 1) + " / " + images.length;
}

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}

showImage();