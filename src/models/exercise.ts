class Exercise {
  private _weight: number;

  constructor(readonly name: string, _weight: number) {
    if (_weight < 0) {
      throw new Error("Invalid weight: Weights can't be negative numbers");
    }
    this._weight = _weight;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(newWeight: number) {
    if (newWeight < 0) {
      throw new Error("Invalid weight: Weights can't be negative numbers");
    }
    this._weight = newWeight;
  }

  increaseWeight(increase: number) {
    if (increase < 0) {
      throw new Error("Increases must be positive");
    }
    this._weight += increase;
  }
}

export default Exercise;
