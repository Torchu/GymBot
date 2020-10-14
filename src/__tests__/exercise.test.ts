import Exercise from '../models/exercise';

const exercise = new Exercise("Press banca", 40);

describe('exercise model test', () => {
    it('should give me the weight of the exercise', () => {
        expect(exercise.weight()).toBe(40);
    });
    it('should let me change the weight', () => {
        exercise.weight = 45;
        expect(exercise.weight()).toBe(45);
    });
    it('should throw an error while setting weight', () => {
        expect(exercise.weight(-40)).toThrowError('negative');
    });
    it('should let me increasse the weight', () => {
        exercise.increase(5);
        expect(exercise.weight()).toBe(50);
    });
    it('should throw an error while incresing weight', () => {
        expect(exercise.increase(-5)).toThrowError('positive');
    });
});