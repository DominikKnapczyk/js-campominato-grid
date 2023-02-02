const generaGriglia = document.getElementById("genera-griglia");
const grigliaGioco = document.getElementById("gioco");

generaGriglia.addEventListener("click", function() {
  grigliaGioco.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const riga = document.createElement("div");
    riga.style.display = "flex";

    for (let j = 1; j <= 10; j++) {
      const cella = document.createElement("div");
      cella.style.width = "40px";
      cella.style.height = "40px";
      cella.style.border = "1px solid black";
      cella.style.textAlign = "center";
      cella.style.lineHeight = "40px";
      cella.innerHTML = (i - 1) * 10 + j;
      cella.addEventListener("click", function() {
        cella.style.backgroundColor = "lightblue";
        console.log(cella.innerHTML);
      });
      riga.appendChild(cella);
    }

    grigliaGioco.appendChild(riga);
  }
});



