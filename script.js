function calcularNota() {
    const p1 = parseFloat(document.getElementById("p1").value) || 0;
    const p2 = parseFloat(document.getElementById("p2").value) || 0;
    const nac = parseFloat(document.getElementById("nac").value) || 0;
    const simulado = parseFloat(document.getElementById("simulado").value) || 0;

    const notaFinal = (p1 * 0.35) + (p2 * 0.35) + (nac * 0.2) + (simulado * 0.1);

    document.getElementById("resultado").textContent = `Sua nota final é: ${notaFinal.toFixed(2)}`;
}
