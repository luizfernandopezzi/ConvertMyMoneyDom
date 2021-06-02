const express = require('express')
const ejs = require('ejs')
const path = require('path')
const convert = require('./lib/convert')
const SimpleMaskMoney = require('simple-mask-money')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Routes
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/exchange', (req,res)=>{
    const { exchangeRate, amount, currencyExchange } = req.query
    console.log(req.query)
    console.log('Amount', amount)
    
    const amountNumber = SimpleMaskMoney.formatToNumber(amount)
    console.log('Amount Number', amountNumber)
    
    const argsUSD = {
        prefix: '$ ',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: '.',
        thousandsSeparator: ',',
        cursor: 'end'
    }
    const amountNumberUSD = SimpleMaskMoney.formatToNumber(amount,argsUSD)
    console.log('AmountUSD', amountNumberUSD)

    console.log('Exchange Rate', exchangeRate)

    if(exchangeRate && amount && currencyExchange === 'brlusd'){
        const dollars = convert.convertBrlToUsd(exchangeRate, amountNumber)
        res.render('exchange', {
            currencyExchange: 'brlusd',
            error: false,
            exchangeRate: convert.toMoney(exchangeRate), 
            amount: convert.toCurrency("pt-BR","BRL",amountNumber),
            dollars: convert.toCurrency("en-US","USD",dollars)
        })
    }
    if(exchangeRate && amount && currencyExchange === 'usdbrl'){
        const reais = convert.convertUsdToBrl(exchangeRate, amountNumberUSD)
        res.render('exchange', {
            error: false,
            currencyExchange: 'usdbrl',
            exchangeRate: convert.toMoney(exchangeRate), 
            amount: convert.toCurrency("en-US","USD",amountNumberUSD),
            reais: convert.toCurrency("pt-BR","BRL",reais)
        })
    }
    if(!exchangeRate || !amount){
        res.render('exchange', {
            currencyExchange: '',
            error: 'The inputs cannot be empty.'
        })
    }
})

//Definindo diretório de arquivos CSS
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, err=>{
    if(err){
        console.log('The server is not running. Some error was verified.')
    }else{
        console.log('ConvertMyMoney is online!')
    }
})