const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.species = function(){
  return this.dinosaur.species
}

Dinosaur.prototype.diet = function() {
  return this.dinosaur.diet
}

Dinosaur.prototype.guestsAttractedPerDay = function(){
  return this.dinosaur.guestsAttractedPerDay
}

module.exports = Dinosaur;
