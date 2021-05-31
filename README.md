# ConvertMyMoney

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fluizfernandopezzi%2FConvertMyMoneyDom&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

This project is the base code of ConvertMyMoney, available at: https://github.com/luizfernandopezzi/ConvertMyMoney

## Abstract

    ConvertMyMoney is a basic currency exchange application.
    The aim of its development was to study and analyse the implementation of ExpressJS for API's together with EJS as view engine/JavaScript Templating.
    The initial concept involved only the conversion from Brazilian Real to United States Dollar. However, I implemented the US Dollar to Brazilian Real conversion as well. Other currencys can be easly added to the code.
    I would like to mention some important details that were note considered in the initial concept but I thought were essential for user experience and interface quality: final results/conversion respects the original currency display format. The dividing symbol for the Brazilian Real cents is a comma while the dividing symbol for US Dollar cents is a point.
    As a conclusion, ExpressJS is an excelent Node framework for API`s, however, view engine tools are not as friendly as NextJS. I pretend to develop this same project with NextJS in the near future for comparison.
    Finally, unit tests were performed on the main functions with JestJS. Unit tests increases the chances of reaching a code with high quality.

## Instructions

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Pre-requisites:

You need NodeJS and NPM installed on your machine.
Then, inside your Node console/ambiente:

```
npm install
npm run dev
```

## Layout:

Layout prototype created with Figma. You can check it [here](https://www.figma.com/file/JDk3xfKAJ50qmhwUhmdTB2/ConvertMyMoney?node-id=0%3A1).

## Stack:

* [ExpresJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Ejs](https://ejs.co/) - Embedded JavaScript templating.
* [NodeJS](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [JestJS](https://jestjs.io/) -  Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Figma](https://figma.com/) - Online prototyping tool.

## Author:

* **Luiz Fernando Pezzi** - [LinkedIn](https://www.linkedin.com/in/luizfernandopezzi/)

## License

This project is licensed under the MIT license - see [LICENSE.md] (LICENSE.md) for more information.

## Acknowledgments

* This project was built during the classes of the Fullstack Master of the [DevPleno](https://devpleno.com).