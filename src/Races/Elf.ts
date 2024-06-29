import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.numberOfInstances += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  get maxLife(): number {
    return this.maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.numberOfInstances;
  }
}
