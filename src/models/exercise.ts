//Clase sin métodos que define el objeto ejercicio
class Exercise { 
    constructor(
        readonly name: string,
        private _weight: number
    ) {
        if(_weight < 0){
            throw new Error("Invalid weight: Weights can't be negative numbers")
        }
    }

    get weight(): number{
        return this._weight;
    }

    set weight(newWeight: number){
        if(newWeight < 0){
            throw new Error("Invalid weight: Weights can't be negative numbers")
        }
    }

    increaseWeight(increase: number){
        if(increase < 0){
            throw new Error("Increases must be positive");
        }
        this._weight += increase;
    }
}