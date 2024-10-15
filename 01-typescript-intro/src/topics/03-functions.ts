function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// const result1: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({ multiplyResult });
// console.log({ result1, result2 });


interface Character {
    name: string;
    hp: number;
    showHp: () => number;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Health points: ${this.hp}`);
        return this.hp;
    }
}

healCharacter(strider, 20);
healCharacter(strider, 50);


strider.showHp();


export { };