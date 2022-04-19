const allergies = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs']

export class Allergies {
  allergenIndex: number
  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex;
  }

  public list(): string[] {
    if (this.allergenIndex === 0) return [];
    // remove all scores that are greater than the allergen index
    const scoresInRange = new Map([...allergies].filter(([allergy, score]) => score <= this.allergenIndex))
    const scoresArr = [...scoresInRange];
    if (scoresArr.length === 1) {
      const arr = scoresArr.find(elem => elem[1] === this.allergenIndex);
      return !!arr ? [arr[0]] : [];
    }
    for (let i = scoresArr.length - 1; i >= 0; i--) {
      const topElement = scoresArr[i];
      if (topElement[1] === this.allergenIndex) return [topElement[0]];
      const solutionsList: Array<[string, number]> = [topElement];
      for (let j = scoresArr.length - 2; j >= 0; j--) {
        const bottomElement = scoresArr[j];
        // the sum is more than the allergenIndex; just move on and don't do anything
        if (topElement[1] + bottomElement[1] > this.allergenIndex) {
          continue;
          // the sum equals the allergenIndex; we have our solution.
        } else if (this.findSum(solutionsList) + bottomElement[1] === this.allergenIndex) {
          solutionsList.push(bottomElement);
          return this.sortAllergies(solutionsList).map(([allergen, score]) => allergen);
        } else if (topElement[1] + bottomElement[1] < this.allergenIndex) {
          solutionsList.push(bottomElement);
        }
      }
    }
    return [];
  }

  private findSum(arr: [string, number][]): number {
    return arr.reduce((acc, curr) => { return acc + curr[1] }, 0)
  }

  private sortAllergies(arr: [string, number][]): [string, number][] {
    return arr.sort((a, b) => {
      const aVal = a[1];
      const bVal = b[1];
      if (aVal < bVal) {
        return -1;
      }
      if (aVal > bVal) {
        return 1;
      }
      // a must be equal to b
      return 0;
    })
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
