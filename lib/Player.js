const Potion = require('../lib/Potion');
const Character = require('./Character');

//jest.mock('../lib/Potion');

  // inherit prototype methods from Character here:
class Player extends Character {
 
    constructor (name)
  {

  super(name);
    this.inventory = [new Potion('health'), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };
  
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };

  addPotion(potion) {
    this.inventory.push(potion);
  };

  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };

  }
 

//   Player.prototype.getStats = function() {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility
//     };
//   };
  
//   Player.prototype.getInventory = function() {
//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };

//   Player.prototype.addPotion = function(potion) {
//     this.inventory.push(potion);
//   };

//   Player.prototype.usePotion = function(index) {
//     const potion = this.getInventory().splice(index, 1)[0];
  
//     switch (potion.name) {
//       case 'agility':
//         this.agility += potion.value;
//         break;
//       case 'health':
//         this.health += potion.value;
//         break;
//       case 'strength':
//         this.strength += potion.value;
//         break;
//     }
//   };



  
  module.exports = Player;
