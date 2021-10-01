import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  let container = document.getElementById("app");
  container.appendChild(
    createDog(
      "Shetlanninlammaskoira",
      "tekstia",
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shetland_Sheepdog_600.jpg"
    )
  );
  container.appendChild(
    createDog(
      "Espanjanvesikoira",
      "tekstia",
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Perro_agua.jpg"
    )
  );
  container.appendChild(
    createDog(
      "Sheltti",
      "tekstia",
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shetland_Sheepdog_600.jpg"
    )
  );
  container.appendChild(
    createDog(
      "Sheltti",
      "tekstia",
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shetland_Sheepdog_600.jpg"
    )
  );
  container.appendChild(
    createDog(
      "Sheltti",
      "tekstia",
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shetland_Sheepdog_600.jpg"
    )
  );
}

function createDog(breed, text, image) {
  let dog = document.createElement("div");
  dog.className = "wiki-item";
  let head = document.createElement("h1");
  head.innerHTML = breed;
  head.className = "wiki-header";
  dog.appendChild(head);
  let div1 = document.createElement("div");
  div1.className = "wiki-content";
  let wikiText = document.createElement("p");
  wikiText.className = "wiki-text";
  wikiText.innerHTML = text;
  div1.appendChild(wikiText);
  let imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  let img = document.createElement("img");
  img.className = "wiki-img";
  img.src = image;
  imgContainer.appendChild(img);
  div1.appendChild(imgContainer);
  dog.appendChild(div1);
  return dog;
}
