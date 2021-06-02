// const getExchangeApi = function(input){
//     const xhr = new XMLHttpRequest();
//     const url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='05-28-2021'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
//     xhr.open("GET", url, true);
//     xhr.send();
//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//            // Typical action to be performed when the document is ready:
//            const res = xhr.responseText
//            const resJs = JSON.parse(res)
//            const cotacaoVenda = resJs.value[0].cotacaoVenda
//         }
//     }    
// }

const getUrl = (date) => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${date}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao` 

const getToday = () => {
    const today = new Date()
    const date = (today.getMonth()+1+'-'+today.getDate()+'-'+today.getFullYear())
    return date
}

async function getExchangeApiFetch(){
    const response = await fetch(getUrl(getToday()))
    return await response.text()
}

async function extractExchange(dropdownIndex,send){
    const data = await getExchangeApiFetch()
    const extractExc = JSON.parse(data).value[0].cotacaoVenda
    console.log(extractExc)
   
    const formBrlUsd = `
    <form class="exchangeForm" method="GET" action="/exchange">
    <div>
        <label>Exchange Rate</label>
        <input name="exchangeRate" type="number" placeholder="BRL/USD" value="${extractExc}">
    </div>   
    <div>
        <label>Amount</label>
        <input id="amount" name="amount" type="text" inputmode="numeric" placeholder="R$ 0,00">
    </div>

    <div class="button">
        <button type="submit" name="currencyExchange" value="brlusd">Convert</button>
    </div>
    </form>
    `
    const formUsdBrl = `
    <form class="exchangeForm" method="GET" action="/exchange">
        <div>
            <label>Exchange Rate</label>
            <input name="exchangeRate" type="number" placeholder="BRL/USD" value="${extractExc}">
        </div>   
        <div>
            <label>Amount</label>
            <input id="amount" name="amount" type="text" inputmode="numeric" placeholder="USD 0.00">
        </div>
        <div class="button">
            <button type="submit" name="currencyExchange" value="usdbrl">Convert</button>
        </div>
    </form>
    `
    const exchangeForm = document.querySelector('.exchangeFormDiv') 
    if(dropdownIndex === 1){
        exchangeForm.innerHTML = formBrlUsd
    }
    if(dropdownIndex === 2){
        exchangeForm.innerHTML = formUsdBrl
    }
}

const args = {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
}

const dropdown = document.querySelector('select')
const eventListener = dropdown.addEventListener('change', (event)=>{
    event.preventDefault()
    if(dropdown.selectedIndex === 0){
    alert("Please, select a currency!")
    }
    if(dropdown.selectedIndex === 1){
        const extract = async () => {
            await extractExchange(dropdown.selectedIndex)
            const input = document.querySelector('#amount')
            const simpleMask = SimpleMaskMoney.setMask(input, args)
            const simpleMaskNumber = SimpleMaskMoney.formatToNumber(input.value)
        }      
        extract()
    }
    if(dropdown.selectedIndex === 2){
        const extract = async () => {
            await extractExchange(dropdown.selectedIndex)
            const input = document.querySelector('#amount')
            const simpleMask = SimpleMaskMoney.setMask(input, args)
            const simpleMaskNumber = SimpleMaskMoney.formatToNumber(input.value)
        }      
        extract()
    }
})