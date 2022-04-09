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

  }
}
