const allergies = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs']

export class Allergies {
  allergenIndex: number
  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
  }

  public list(): string[] {
    const allergens = this.getAllergens();
    return allergens.reverse();
  }

  private getAllergens(): string[] {
    let result: string[] = [];
    const binaryIndex = this.allergenIndex.toString(2);
    const paddedIndex = binaryIndex.padStart(8, '0')
    paddedIndex.split('').forEach((val, i) => {
      if (parseInt(val)) {
        result.push(allergies[i]);
      }
    })
    return result;
  }

  public allergicTo(allergen: string): boolean {
    const allergens = this.getAllergens();
    return allergens.includes(allergen);
  }
}
