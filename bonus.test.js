const Bonus = require('./index.js')

describe('Testa a função Bonus', () => {
    test('Verifica se o bônus de 10% é adicionado', () => {
        const salario = 10000;
        // Chama a função e adiciona valor do salário
        const salarioComBonus = Bonus(salario);
        //Testa a função Bonus
        expect(salarioComBonus).toBe(11000);
    }) ;
});