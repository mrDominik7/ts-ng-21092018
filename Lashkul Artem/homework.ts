// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
function isInArray(numberArray: number[], firstNumber: number, secondNumber?: number): boolean {

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === firstNumber && numberArray[i] === secondNumber) {
            return true;
        }
    }
    return false;
}

isInArray([1, 2], 1, 2);


// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...elem: number[] | string[]): number | string {
    let sum: number | string = '0';
    for (let i = 0; i < elem.length; i++) {
        sum += elem[i];
    }
    return sum;
}

summator(1, 2, 3);

// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.
function getUnique(arr: number[], ...anyNumber: number[]): number[] {
    for (let i = 0; i < anyNumber.length; i++) {
        arr.push(anyNumber[i]);
    }
    return arr;
}

getUnique([2, 3], 2, 2, 3);


// 4)
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// возвращает новый массив. Число показывает количество элементов в подмассивах,
// элементы подмассивов беруться из массива data.
// Оригинальный массив не должен быть изменен.
