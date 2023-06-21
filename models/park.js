const Park = function(name, ticketPrice, collectionOfDinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
};

Park.prototype.name = function(){
    return this.name
};

Park.prototype.ticketPrice = function(){
    return this.ticketPrice
};

Park.prototype.collectionOfDinosaurs = function(){
    return this.collectionOfDinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(index, 1)
}

Park.prototype.mostVisitedDinosaur = function(){
    this.collectionOfDinosaurs.sort((a,b) => {
        let fa = a.guestsAttractedPerDay
        let fb = b.guestsAttractedPerDay
        if(fa < fb){
            return -1
        }
        if(fa > fb){
            return 1
        }
        return 0
    });

    return this.collectionOfDinosaurs[0].species
}



module.exports = Park;