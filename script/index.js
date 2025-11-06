/* 
1. Registrati per ottenere la tua API key: https://www.pexels.com/join/

2. La key, quando ottenuta, dovrà essere usata negli header della tua HTTP request con la proprietà:

 {Authorization: LA TUA API KEY}

questo dovrebbe essere abbastanza per fare la richiesta GET con successo.

ESERCIZIO:  

1) Premere sul bottone "Load Images" farò in modo the tutte le immagini già presenti nel documento vengano sostituite dai risultati di ricerca forniti dalla chiamata API: 

https://api.pexels.com/v1/search?query=hamsters

2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:https://api.pexels.com/v1/search?query=tigers

3) Il tasto "Edit" andrà sostituito con un tasto "Hide".

4) Quando si preme "Hide", l'intera card dovrebbe scomparire.

5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente.

6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.

7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.

Documentazione URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

[EXTRA]

8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.

9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.

API Docs:

Documentazione : https://www.pexels.com/it-it/api/documentation/

Documentazione dell'endpoint per la ricerca foto: https://www.pexels.com/it-it/api/documentation/#photos-search
*/

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
