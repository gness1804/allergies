const allergies = new Map<string, number>();
allergies.set('eggs', 1);
allergies.set('peanuts', 2);
allergies.set('shellfish', 4);
allergies.set('strawberries', 8);
allergies.set('tomatoes', 16);
allergies.set('chocolate', 32);
allergies.set('pollen', 64);
allergies.set('cats', 128);

export class Allergies {
  allergenIndex: number
  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
  }

  public list(): string[] {
    throw new Error('Remove this statement and implement this function')
  }

  public allergicTo(allergen: string): boolean {
    if (this.allergenIndex === 0) return false;
    // remove all scores that are greater than the allergen index
    const scoresInRange = new Map([...allergies].filter(([allergy, score]) => score <= this.allergenIndex))

  }
}
