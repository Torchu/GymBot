//Clase sin métodos que define el objeto ejercicio
class Exercise { 
    constructor(
        readonly name: string,
        readonly muscles: string[], 
        readonly description: string,
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
}