let i = 2; 
console.log("Прості числа від 0 до 100:");

while (i <= 100) {
    let isSimple = true;
    let j = 2;
    
    // Перевіряємо, чи є у числа дільники
    while (j <= Math.sqrt(i)) {
        if (i % j === 0) {
            isSimple = false;
            break;
        }
        j++;
    }

    if (isSimple) {
        console.log(i);
    }
    i++;
}