const url = "https://api.pexels.com/v1/search?query=";

const getImages = function (word) {
  fetch(url + word, {
    headers: {
      Authorization: "I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((arr) => {
      console.log(arr);
      const everyDog = document.querySelectorAll(".bd-placeholder-img");
      arr.photos.forEach((img, i) => {
        if (everyDog[i]) {
          everyDog[i].setAttribute("src", img.src.tiny);
          document.getElementsByTagName("small")[i].innerText = img.id;
        }
      });
    })
    .catch((err) => {
      console.log("siamo nell catch", err);
    });
};

const form = document.getElementById("main-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const wordSearched = document.getElementById("search").value;
  getImages(wordSearched);
  form.reset();
});
