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

// PARTE 01
const dragonDamage = () => {
  const DAMAGE_MIN = dragon.strength;
  return parseInt(Math.random() * (DAMAGE_MIN - 15) + 15, 10);
};

const warriorDamage = () => {
  const DAMAGE_MIN = warrior.strength;
  const DAMAGE_MAX = warrior.strength * warrior.weaponDmg;
  return parseInt(Math.random() * (DAMAGE_MAX - DAMAGE_MIN) + DAMAGE_MIN, 10);
};

const mageDamage = () => {
  if (mage.mana > 15) {
    const DAMAGE_MIN = mage.intelligence;
    const DAMAGE_MAX = mage.intelligence * 2;
    const totalOfDamage = parseInt(
      Math.random() * (DAMAGE_MAX - DAMAGE_MIN) + DAMAGE_MIN,
      10
    );
    return { damage: totalOfDamage, mana: 15 };
  }
  return { damage: 'Não possui mana suficiente', mana: 0 };
};

// PARTE 02
const gameActions = {
  warriorTurn: (callback) => {
    const DAMAGE = callback();
    dragon.healthPoints -= DAMAGE;
    warrior.damage = DAMAGE;
  },
  mageTurn: (callback) => {
    const DAMAGE = callback();
    dragon.healthPoints -= DAMAGE.damage
      ? typeof DAMAGE.damage === 'number'
      : 0;
    mage.damage = DAMAGE.damage;
    mage.mana -= DAMAGE.mana;
  },
  dragonTurn: (callback) => {
    const DAMAGE = callback();
    dragon.damage = DAMAGE;
    warrior.healthPoints -= DAMAGE;
    mage.healthPoints -= DAMAGE;
  },
  battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.mageTurn(mageDamage);

console.log(gameActions.battleMembers);
