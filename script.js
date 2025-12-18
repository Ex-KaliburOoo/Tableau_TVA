const btnCalculer = document.querySelector('.btn-calculer');
const btnEffacer = document.querySelector('.btn-effacer')
const btnSuprrimer = document.querySelector('.btn-supprimer')
const btnAjouterLigne = document.querySelector('.btn-ajouter-ligne')
/////////// ICI pseudo table avec div
// const conteneurLignes = document.getElementById('conteneur-lignes');
// const ligneModele = conteneurLignes.querySelector('.ligne');
/////////// ICI table
const conteneurTable = document.getElementById('conteneur-table');
const lineModele = conteneurTable.querySelector('.model-ligne');

const btnEffacerChamps = document.querySelector('.btn-effacer-champs');
const btnEffacerLigne = document.querySelector('.btn-suppr-ligne')

initLigne(lineModele)

const journal = document.getElementById('journal-actions');

function initLigne(ligne) {
  // Récupérer les boutons DE CETTE LIGNE
  const btnCalculer  = ligne.querySelector('.btn-calculer');
  const btnEffacer   = ligne.querySelector('.btn-effacer');
  const btnSuprrimer = ligne.querySelector('.btn-supprimer');

  // Récupérer les champs DE CETTE LIGNE
  const inputHT   = ligne.querySelector('.input-ht');
  const selectTVA = ligne.querySelector('.select-tva');
  const inputTTC  = ligne.querySelector('.input-ttc');
  const inputLib  = ligne.querySelector('.input-libelle');

  btnCalculer.addEventListener('click', function () {
    const htvalue  = inputHT.value;
    const ttcvalue = inputTTC.value;
    const tva      = Number(selectTVA.value);

    if (htvalue !== '' && ttcvalue === '') {
      const ht  = Number(htvalue);
      const ttc = ht * (1 + tva / 100);
      inputTTC.value = ttc.toFixed(2);
      journal.textContent = 'Prix TTC calculé à partir du prix HT.';
    } else if (htvalue !== '') {
      const ht  = Number(htvalue);
      const ttc = ht * (1 + tva / 100);
      inputTTC.value = ttc.toFixed(2);
      journal.textContent = 'Prix TTC recalculé à partir du prix HT.';
    } else if (ttcvalue !== '') {
      const ttc = Number(ttcvalue);
      const ht  = ttc / (1 + tva / 100);
      inputHT.value = ht.toFixed(2);
      journal.textContent = 'Prix HT calculé à partir du prix TTC.';
    } else {
      journal.textContent = 'Les champs sont vides.';
    }
  });

  btnEffacer.addEventListener('click', function () {
    inputHT.value  = '';
    inputTTC.value = '';
    inputLib.value = '';
    selectTVA.value = '5.5';
    journal.textContent = 'Ligne effacée.';
  });

  btnSuprrimer.addEventListener('click', function () {
    ligne.remove();
    journal.textContent = 'Ligne supprimée.';
  });
}

btnAjouterLigne.addEventListener('click', function () {
  const newLine = lineModele.cloneNode(true)
  
  
  
  newLine.querySelector('.input-libelle').value = '';
  newLine.querySelector('.input-ht').value = '';
  newLine.querySelector('.input-ttc').value = '';
  newLine.querySelector('.select-tva').value = '5.5';
  
  
  
  conteneurTable.appendChild(newLine);   
  
  initLigne(newLine);
  journal.textContent = 'Nouvelle ligne ajoutée.';
  // const nouvelleLigne = ligneModele.cloneNode(true);
  
  // nouvelleLigne.querySelector('.input-libelle').value = '';
  // nouvelleLigne.querySelector('.input-ht').value = '';
  // nouvelleLigne.querySelector('.input-ttc').value = '';
  // nouvelleLigne.querySelector('.select-tva').value = '5.5';
  
  // conteneurLignes.appendChild(nouvelleLigne);   
  
  // initLigne(nouvelleLigne);
  // journal.textContent = 'Nouvelle ligne ajoutée.';
  

});

btnEffacerChamps.addEventListener('click',function (){

    const allHT = document.querySelectorAll('.input-ht')
    allHT.forEach(function(input){
      input.value = '';
    });
    const allTTC = document.querySelectorAll('.input-TTC')
    allTTC.forEach(function(input){
      input.value = '';
    });
    const allTVA = document.querySelectorAll('.select-tva')
    allTVA.forEach(function(select){
      select.value = '5.5';
    });
    const allLibelle = document.querySelectorAll('.input-libelle')
    allLibelle.forEach(function(input){
      input.value = '';
    });

    const inputHT   = document.querySelectorAll('.input-ht');
    const selectTVA = document.querySelectorAll('.select-tva');
    const inputTTC  = document.querySelectorAll('.input-ttc');
    const inputLib  = document.querySelectorAll('.input-libelle');

    inputHT.value = '';
    inputTTC.value = '';
    inputLib.value = '';
    selectTVA.value = '5.5';
    journal.textContent = "Tout les champs ont été effaçés."
});

btnEffacerLigne.addEventListener('click',function(){
    const allLines = document.querySelectorAll('.ligne')
    allLines[allLines.length-1].remove();
});

