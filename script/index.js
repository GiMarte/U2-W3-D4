// I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg -->

/* 
Pexels Album

Scarica lo starting template dalla sezione Materiali, e implementa le seguenti funzionalità:

PER PRIMA COSA: 


2. La key, quando ottenuta, dovrà essere usata negli header della tua HTTP request con la proprietà:

 {Authorization: LA TUA API KEY}

questo dovrebbe essere abbastanza per fare la richiesta GET con successo.

                ESERCIZIO:  

1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina: 

https://api.pexels.com/v1/search?query=hamsters

Questa parte è sufficiente

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

const urlHam = "https://api.pexels.com/v1/search?query=hamsters";
const urlTig = "https://api.pexels.com/v1/search?query=tigers";

const cycle = function (arr) {
  arr.photos.forEach((img) => {
    const row = document.getElementById("row-container");
    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "col-md-4");
    createDiv.innerHTML = `
                 <div class="card mb-4 shadow-sm">
                <img
                  src="${img.src.portrait}"
                  class="bd-placeholder-img card-img-top"
                  width="300px"
                  height="200px"
                   />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button
                       onclick="hideCard(this, event)"
                        type="button"
                        class="btn btn-sm btn-outline-secondary">
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${img.id}</small>
                  </div>
                </div>
              </div>`;
    row.appendChild(createDiv);
  });
};

const loadHamImages = function () {
  fetch(urlHam, {
    headers: {
      Authorization: "I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} siamo nel throwNewError`);
      }
      return res.json();
    })
    .then((arr) => {
      cycle(arr);
    })
    .catch((err) => {
      console.log(`${err} siamo nel catch`);
    });
};

const loadTigImages = function () {
  fetch(urlTig, {
    headers: {
      Authorization: "I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} siamo nel throwNewError`);
      }
      return res.json();
    })
    .then((arr) => {
      cycle(arr);
    })
    .catch((err) => {
      console.log(`${err} siamo nel catch`);
    });
};

const hideCard = function (event) {
  const del = event.closest(".col-md-4");
  del.remove();
};
