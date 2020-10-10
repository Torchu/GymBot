//Clase sin métodos que define el objeto ejercicio
class Exercise { 
    constructor(
        public name: string,
        public muscles: string[], 
        public description: string,
        public weight: number
    ) {}
}