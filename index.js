import { makePizza, deliverPizza } from './makePizza.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is your order? ', async (pizza) => {
    const order = pizza;

    try {
        const madePizza = await makePizza(order);
        const deliveredPizza = await deliverPizza(madePizza);
        console.log(`Pay for ${deliveredPizza} Pizza`);
        console.log(`Finish eating ${deliveredPizza} Pizza`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
}
)
