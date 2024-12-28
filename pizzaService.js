const time = 2000;
const inSecond = Math.ceil(time / 1000);

const makePizza = (pizza) => {
    return new Promise((resolve, reject) => {

        console.log(`Starting to make ${pizza} Pizza in ${inSecond} sec`);

        setTimeout(() => {
            const number = Math.random();
            const isSuccess = number > 0.3;

            if (!isSuccess) {
                reject(new Error(`Failed creating ${pizza} Pizza`));
                return;
            }

            console.log(`Finish Making ${pizza} Pizza`);
            resolve(pizza);
        }, time);

    })
}

const deliverPizza = (pizza) => {
    return new Promise((resolve, reject) => {

        console.log(`Delivering ${pizza} Pizza in ${inSecond} sec`);

        setTimeout(() => {
            const number = Math.random();
            const isSuccess = number > 0.3;

            if (!isSuccess) {
                reject(new Error(`Failed on delivering ${pizza.name}`))
                return;
            }

            console.log(`${pizza} Pizza Delivered`);
            resolve(pizza);
        }, time);
    })
}

export { makePizza, deliverPizza };
