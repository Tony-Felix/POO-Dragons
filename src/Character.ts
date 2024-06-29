import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const ramdomNumber = getRandomInt(1, 10);

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = ramdomNumber;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = ramdomNumber;
    this._defense = ramdomNumber;
    this._energy = { type_: this._archetype.energyType,
      amount: ramdomNumber };
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damege = attackPoints - this._defense;
    if (damege > 0) {
      this._lifePoints -= damege;
    }
    if (damege <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints = Math.min(this._maxLifePoints + ramdomNumber, this._race.maxLifePoints);
    this._strength += ramdomNumber;
    this._dexterity += ramdomNumber;
    this._defense += ramdomNumber;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special() {
    this._strength += getRandomInt(100, 1000);
    this._dexterity += getRandomInt(100, 1000);
    this._defense += getRandomInt(100, 1000);
  }
}