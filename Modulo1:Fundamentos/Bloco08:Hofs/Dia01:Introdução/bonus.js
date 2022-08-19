const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  
  const dragonDamage = () => {
    const minDamage = Math.ceil(15);
    const maxDamage = Math.floor(dragon.strength);
    return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  }

  const warriorDamage = () => {
    const warriorStrength = warrior.strength;
    const minDamage = Math.ceil(warriorStrength);
    const maxDamage = Math.floor(warriorStrength * warrior.weaponDmg);
    return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  }

  const mageDamage = () => {
    const minDamage = Math.ceil(mage.intelligence);
    const maxDamage = Math.floor(mage.intelligence * 2);
    let Damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    let mana = mage.mana;
    mana -= 15;
    if(mana < 15){
        Damage = 'Não possui mana suficiente';
        mana -= 0;
    }

    return {
        dano: Damage,
        mana: mana,
    }
  }
//console.log(mageDamage().dano)
  //console.log(mageDamage())

  //Parte II

  const gameActions = {
    warriorXdragon: (callback) => {
        warrior.damage = callback();
       const dragonHealth = dragon.healthPoints - warrior.damage;
       dragon.healthPoints -= dragonHealth;
      
       
    },
    mageXdragon: (callback) => {
        const mageDamage = callback().dano;
        const dragonHealth = dragon.healthPoints - mageDamage;
        dragon.healthPoints -= dragonHealth;
        mage.damage = mageDamage;
        mage.mana = callback().mana;
       

    },

    dragonTurn: (callback) => {
        const dragonDamage = callback()
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
        console.log(dragonDamage)

    },
    battleMembers: () =>{
        return battleMembers
    }

  };
  gameActions.warriorXdragon(warriorDamage);
  gameActions.mageXdragon(mageDamage);
  gameActions.dragonTurn(dragonDamage)
  console.log(gameActions.battleMembers());
  
  
  
  