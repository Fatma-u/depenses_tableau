// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  let n=0;
  for(let i=0;i<depenses.length;i++){
    n=depenses[i]+n;
  }
  return n;
}
let total=calculerTotal(depensesSemaine);


// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  let Moy=0;
  for(let i=0;i<depenses.length;i++){
  if (depenses===0){
    console.log(0);
  }
  else{
    let my=0;
    let moy=calculerTotal(depenses);
    Moy=moy/depenses.length;
  }
}
  return Moy;
}
let moyenne=calculerMoyenne(depensesSemaine);


// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  const GrosseDepense=depenses.filter(a=>a>2000);
  return GrosseDepense;
}

let filterGrosse=filtrerGrossesDepenses(depensesSemaine);

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if(depenses.length===0) return 0;
  let max=0;
  for(let i=0;i<depenses.length;i++){
    if(depenses[i]>max){
      max=depenses[i];
    }
  }
  return max;
}
let maximum=trouverMaximum(depensesSemaine);

const depensestries=[...depensesSemaine].sort((a,b)=>a-b);


// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log(" Analyse des dépenses");
console.log(`le total :${total}`);
console.log(`Moyenne:${moyenne}`);
console.log(`Les dépenses strictement supérieures à 2000FCFA:${filterGrosse}`);
console.log(`Le maximum du tableau:${maximum}`);
console.log(`Le tableau trié: ${depensestries}`);
console.log(`Le tableau initial: ${depensesSemaine}`);

