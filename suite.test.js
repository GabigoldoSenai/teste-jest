function concatenaString(str1, str2) {
    return str1 + str2;
}

describe("Exercícios de teste", () => {
    test('Verifica se um número é igual ao outro', () => {
        expect(1).toBe(1);
    });
    test('Verificar se um valor é estritamente igual', () => {
        expect('1').not.toBe(1)
    })
    test('Verificar concatenação', () => {
        expect(concatenaString("Olá ", "bondia")).toBe("Olá bondia")
    })
});