import enums from '../core//enums';

export default class ErrorGeneratorSvc {
    constructor() {
        this.errorIndex = this.getRandomInt(0, 3);
    }

    generate() {
        return enums.errors[this.errorIndex];
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}