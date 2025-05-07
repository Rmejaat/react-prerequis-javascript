"use client"
// Nullish coalishing / Optionnel chaining / Ternaire
// http://localhost:3000/alone/exercise/05.js

import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init("Nullish coalishing / Optionnel chaining / Ternaire")

  const pays = null
  const ville = { nom: "Paris", code: "PAR", countryCode: "FR" }
  const adresse = { rue: "mike", numero: 17, ville, pays }
  const personne = { nom: "mike", adresse }

  // 🐶 A partir d'ici, rendre la function `checkCountryCode` nullSafe grâce à l'Optionnel chaining
  // 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  const checkCountryCode = (personne) =>
    personne?.adresse?.ville?.countryCode ===
    personne?.adresse?.pays?.countryCode
      ? true
      : false

  // 🐶 Utilise une ternaire en une seul ligne à la place de ce if/else
  checkCountryCode(personne)
    ? displayText("le countryCode ville et pays sont identiques ")
    : displayText("le countryCode ville et pays sont differents ")

  // 🐶 getPaysOrDefault retourne un Pays si le pays est renseigné,
  // sinon retourne le pays france par default {nom: "France", countryCode : "FR"}
  // utilise le Nullish coalishing
  // 🤖 let nameSafe = name ?? "anonyme"
  const getPaysOrDefault = (personne) => {
    return personne.adresse.pays ?? { nom: "France", countryCode: "FR" }
  }
  displayText(`Le pays est ${getPaysOrDefault(personne).nom}`)
}
export default () => <App exercice={exercice} />

/* 
arcane
boundless
disaster
overgeread
ragnar
ranker return 
spear knight
slr
sss
assassin
lazy boss 
bas born blood
max talent  player 
murim login 
past life
mad demon
martial king
f class destiny ---
player cant level up
pick me up
light of arad
tutorial is too hard
gob ---
youngest son
archmage ---
infinte mage
lookism ---
max level hero
extra academy
mythic item
100 regression
I’m Gonna Annihilate This Land
revvenge
lwg
frozen 
novel extra
dragon slayer
swordmaster
reborn
superhuman
margrave
doctor player
hunter academy
i'm not regressor
hyper luck
rim
mount hua
hero retuns
drug
demon prince
challenger
solo leveling
sss class ranker
ending maker
31 piece

Poseidon
The Magic Tower Problem Child
Terminally III Genius Dark Knight
The Heavenly Demon Wants a Quiet Life
Ice Lord
The lengendary Hero is an academy Honor Student
Vilant want to Life
Surviving As a Genius on Borrowes Time
Legend of the Reincarneted Demon God
Absolute Necromancer
The Best Childchood Friend in the World
Reality Quest
Emepro of Solo Player
Playing the Perfect Fox Eyed Vilan
How to raise Your Skeletons

Rimu
Dungeon Architect
Surviving the Game as a Barbarian
Top Tier Providence
I Became the Genius Bastard of a Noble Dark Clan
Solo Resurrection
FROM GOBLIN TO GOBLIN GOD
Genius Martial Arts Trainer
The Nebula’s Civilization
Bloodhound’s Regression Instinct

*/
