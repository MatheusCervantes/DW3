const calculadora = (req, res) => (async () => {
    const { num1, num2, operacao } = req.body;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
    }
    res.json({ num1, num2, operacao, resultado });
})();

module.exports = {
    calculadora
}