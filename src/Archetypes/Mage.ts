import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyTypes: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyTypes = 'mana';
    Mage.numberOfInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this.energyTypes;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  }
}