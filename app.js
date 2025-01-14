/*
  - Construa uma aplicação de conversão de moedas. O HTML e CSS são os que você
    está vendo no browser;
  - Você poderá modificar a marcação e estilos da aplicação depois. No momento, 
    concentre-se em executar o que descreverei abaixo;
    - Quando a página for carregada: 
      - Popule os <select> com tags <option> que contém as moedas que podem ser
        convertidas. "BRL" para real brasileiro, "EUR" para euro, "USD" para 
        dollar dos Estados Unidos, etc.
      - O option selecionado por padrão no 1º <select> deve ser "USD" e o option
        no 2º <select> deve ser "BRL";
      - O parágrafo com data-js="converted-value" deve exibir o resultado da 
        conversão de 1 USD para 1 BRL;

      - Quando um novo número for inserido no input com 
        data-js="currency-one-times", o parágrafo do item acima deve atualizar 
        seu valor;
      - O parágrafo com data-js="conversion-precision" deve conter a conversão 
        apenas x1. Exemplo: 1 USD = 5.0615 BRL;
      - O conteúdo do parágrafo do item acima deve ser atualizado à cada 
        mudança nos selects;
      - O conteúdo do parágrafo data-js="converted-value" deve ser atualizado à
        cada mudança nos selects e/ou no input com data-js="currency-one-times";
      - Para que o valor contido no parágrafo do item acima não tenha mais de 
        dois dígitos após o ponto, você pode usar o método toFixed: 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    - Para obter as moedas com os valores já convertidos, use a Exchange rate 
      API: https://www.exchangerate-api.com/;
      - Para obter a key e fazer requests, você terá que fazer login e escolher
        o plano free. Seus dados de cartão de crédito não serão solicitados.
*/

// Selects 
const currency_one = document.querySelector('[data-js="currency-one"]')
const currency_two = document.querySelector('[data-js="currency-two"]')

// valores e resultado
const currency_one_times = document.querySelector('[data-js="currency-one-times"]')
const  converted_value = document.querySelector('[data-js="converted-value"]')


function criador_de_tags() {
  const frame = document.createDocumentFragment()
  const frame2 = document.createDocumentFragment()
  const moedas = ["BRL","USD","EUR"]
  const moedas_op = ["USD" ,"BRL","EUR"]


    moedas.forEach((m)=>{
      var option = document.createElement("option")
      option.value = m
      option.text = m
      frame.appendChild(option)
    })
    moedas_op.forEach((m)=>{
      var option = document.createElement("option")
      option.value = m
      option.text = m
      frame2.appendChild(option)
    })
    
    
    currency_one.appendChild(frame)
  
    
    currency_two.appendChild(frame2)   
}
criador_de_tags()


function conversao() {
  const converte = {
    "USDBRL": currency_one_times.value * 4.95,
    "BRLUSD": (currency_one_times.value)/4.95,
    "USDEUR": currency_one_times.value/1.10,
    "EURUSD": currency_one_times.value*1.10,
    "BRLEUR": currency_one_times.value/5.49,
    "EURBRL": currency_one_times.value*5.49
    
  
  }
  if(currency_one.value == currency_two.value)converted_value.innerText = currency_one_times.value
  else converted_value.innerText = (converte[(currency_one.value+currency_two.value)].toFixed(2));
  


}

conversao()




currency_one.addEventListener('change',()=>{
   
    conversao()
})
currency_two.addEventListener('change',()=>{
    
    conversao()
})

currency_one_times.addEventListener('input',()=>{
  
  conversao()
})