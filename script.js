function calcular() {
  
  // PEGANDO OS VALORES
  
  let minutosBanho = Number(document.getElementById("banhozinQuentin").value);
  
  let lavagemRoupa = Number(document.getElementById("lavagem_de_roupa").value);
  
  // PEGANDO OS SELECTS
  
  let selects = document.querySelectorAll("select");
  
  let louca = selects[0].value;
  
  let dentes = selects[1].value;
  
  let quintal = selects[2].value;
  
  // CONSUMOS MÉDIOS
  
  // Banho → 12 litros por minuto
  let consumoBanho = minutosBanho * 12;
  
  // Roupa → 120 litros por lavagem
  let consumoRoupa = (lavagemRoupa * 120) / 7;
  
  // Louça
  let consumoLouca = 0;
  
  if (louca == "Sim") {
    consumoLouca = 40;
  } else {
    consumoLouca = 15;
  }
  
  // Escovar dentes
  let consumoDentes = 0;
  
  if (dentes == "Sim") {
    consumoDentes = 5;
  } else {
    consumoDentes = 1;
  }
  
  // Quintal
  let consumoQuintal = 0;
  
  if (quintal == "Mangueira") {
    consumoQuintal = 50;
  } else {
    consumoQuintal = 5;
  }
  
  // SOMA TOTAL
  
  let consumoDia =
    consumoBanho +
    consumoRoupa +
    consumoLouca +
    consumoDentes +
    consumoQuintal;
  
  let consumoMes = consumoDia * 30;
  
  let consumoAno = consumoDia * 365;
  
  // CLASSIFICAÇÃO
  
  let situacao = "";
  let mensagem = "";
  
  if (consumoDia <= 110) {
    
    situacao = "✅ Consumo BOM";
    
    mensagem = "Parabéns! Você está usando água de forma consciente.";
    
  }
  else if (consumoDia <= 150) {
    
    situacao = "⚠️ Consumo MODERADO";
    
    mensagem = "Seu consumo pode melhorar com algumas pequenas mudanças.";
    
  }
  else {
    
    situacao = "❌ Consumo RUIM";
    
    mensagem = "Seu consumo está alto. É importante reduzir desperdícios.";
    
  }
  
  // DICAS PERSONALIZADAS
  
  let dicas = "";
  
  // Banho
  if (minutosBanho > 10) {
    
    dicas += `
        <li>🚿 Tente diminuir o tempo do banho para até 10 minutos.</li>
        `;
  }
  
  // Roupa
  if (lavagemRoupa > 3) {
    
    dicas += `
        <li>👕 Junte mais roupas antes de lavar para usar menos água.</li>
        `;
  }
  
  // Louça
  if (louca == "Sim") {
    
    dicas += `
        <li>🧽 Feche a torneira enquanto ensaboa a louça.</li>
        `;
  }
  
  // Dentes
  if (dentes == "Nao") {
    
    dicas += `
        <li>🪥 Feche a torneira enquanto escova os dentes.</li>
        `;
  }
  
  // Quintal
  if (quintal == "Mangueira") {
    
    dicas += `
        <li>🪣 Use balde ou água da chuva em vez de mangueira.</li>
        `;
  }
  
  // Caso esteja tudo bem
  if (dicas == "") {
    
    dicas = `
        <li>💧 Continue mantendo hábitos conscientes para economizar água!</li>
        `;
  }
  
  // MOSTRAR RESULTADO
  
  document.getElementById("resultado").innerHTML = `

        <p><strong>🚿 Banho:</strong> ${consumoBanho.toFixed(1)} L/dia</p>

        <p><strong>👕 Lavagem de roupas:</strong> ${consumoRoupa.toFixed(1)} L/dia</p>

        <p><strong>🧽 Louças:</strong> ${consumoLouca} L/dia</p>

        <p><strong>🪥 Escovar dentes:</strong> ${consumoDentes} L/dia</p>

        <p><strong>🪣 Quintal:</strong> ${consumoQuintal} L/dia</p>

        <hr>

        <p><strong>💧 Consumo por dia:</strong> ${consumoDia.toFixed(1)} litros</p>

        <p><strong>📅 Consumo por mês:</strong> ${consumoMes.toFixed(1)} litros</p>

        <p><strong>🗓️ Consumo por ano:</strong> ${consumoAno.toFixed(1)} litros</p>

        <hr>

        <h3>${situacao}</h3>

        <p>${mensagem}</p>

        <hr>

        <h3>💡 Dicas para economizar água:</h3>

        <ul>
            ${dicas}
        </ul>
    `;
}