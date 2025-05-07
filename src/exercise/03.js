"use client"
/* eslint-disable no-unused-vars */
// Décomposition et Shorthand property names
// http://localhost:3000/alone/exercise/03.js

import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init("Décomposition et Shorthand property names")

  // propiétes d'un terrain de foot
  const longueur = 120
  const largeur = 90
  const type = "footbal"

  // 🐶 Créé un object `terrainFoot` avec les propietes `longueur` et `largeur` initialisés avec les constantes ci-dessus
  // en utilisant les shorthand property names
  const terrainFoot = { longueur, largeur, type }

  // 🐶 Créé un object `terrainBasket` avec les propietes `longueur` 28 et `largeur` 15 (sans créer de variables intermédiaires)
  const terrainBasket = { longueur: 28, largeur: 15, type: "basket" }

  // 🐶 Créé une fonction `calculAir` avec 1 paramètre : le terrain (utilise la décomposition)
  // 🐶 affiche avec `displayText` : "La surface du terrain de footbal/basket est x m² "
  const calculAir = ({ longeur, largeur, type }) => {
    let lib = `La surface du terrain de ${type} est de ${longueur * largeur} m² `
    return displayText(lib)
  }

  // 🐶 Appelle cette fonction avec le terrain de footbal puis de basket
  calculAir(terrainFoot)
  calculAir(terrainBasket)
}
export default () => <App exercice={exercice} />
