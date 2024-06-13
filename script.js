const clientId = "BwbPJ5iMWHjY-Ecu4BnizmQTIgybna3i6cHo1mgD41g";
const allImageIds = {
  popularDishIds: [
    "a-plate-of-pasta-with-shrimp-and-tomatoes-zW65PndoBC0",
    "three-tacos-are-sitting-on-a-plate-next-to-a-glass-of-beer-5mpht0M5H0E",
    "a-bowl-of-soup-on-a-wooden-board-with-a-spoon-oxt845mzyLs",
    "uramaki-on-chopping-boards-sfldz1LjzNY",
    "cooked-food-on-white-ceramic-bowl-8qFMa9-ljD8",
    "a-couple-of-bowls-of-food-on-a-table-fSeJO8sODlE",
    "a-white-bowl-filled-with-rice-and-vegetables-983dXLfFWBE",
  ],
  chefIds: [
    "woman-in-white-chef-uniform-holding-green-plate-with-food-DdglEoIC2y4",
    "man-in-white-button-up-shirt-and-black-vest-FMh5o5m5N9E",
    "man-in-black-nike-jacket-wearing-white-cap-SiQgni-cqFg",
    "man-in-black-crew-neck-t-shirt-smiling-lRAWcT7uwhY",
  ],
};

const fetchImages = (img, imgId) => {
  fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${clientId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new error("Network response was not ok: " + response.statusText);
      }
    })
    .then((data) => {
      img.src = data.urls.regular;
    })
    .catch((error) => {
      console.error(error);
    });
};

const popularDishImgs = document.querySelectorAll(".popular-dish-img");
const chefImgs = document.querySelectorAll(".chef-img");

popularDishImgs.forEach((img, index) => {
  fetchImages(img, allImageIds.popularDishIds[index]);
});

chefImgs.forEach((img, index) => {
  fetchImages(img, allImageIds.chefIds[index]);
});
