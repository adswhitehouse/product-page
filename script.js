// Variables
let sizeOption = document.querySelectorAll(".jsSizeOption");
let imageSelection = document.querySelectorAll(".jsImageSelection");
let mainImage = document.querySelector(".jsMainImage");

// Highlights size selection
sizeOption.forEach((option) => {
  option.addEventListener("click", () => {
    sizeOption.forEach((option) => {
      option.style.color = "#242021";
    });
    option.style.color = "rgb(71, 64, 208)";
  });
});

// Changes product image and highlights image selector button
imageSelection.forEach((selection) => {
  let id = selection.dataset.id;
  selection.addEventListener("click", () => {
    mainImage.src = `./images/image${id}.png`;
    imageSelection.forEach((selection) => {
      selection.style.backgroundColor = "#fefefe";
    });
    selection.style.backgroundColor = "rgb(71, 64, 208)";
  });
});
