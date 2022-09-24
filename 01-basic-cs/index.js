'use strict'

const { sumBy,orderBy,flatten,map,filter, groupBy } = require('lodash') // https://lodash.com/docs/4.17.4
const assert = require('assert')

const database = require('./database.json')

const values = filter(database, (o) => { return o.hats.length > 0 })
const valuesHats = map(values, (o) =>  o.hats )
const valuesFlatten = flatten(valuesHats, (o) =>  o.id )
const valuesgroupBy = groupBy(valuesFlatten, (o) =>  o.id )
const valuesMap = map(valuesgroupBy, (o) =>  o )
const cuantos = valuesMap.length
let arrayNew = []

for(let i = 0; i < cuantos;i++) {
        arrayNew.push({
           id:  valuesMap[i][0].id,
           price: valuesMap[i][0].price,
           name: valuesMap[i][0].name,
           count: valuesMap[i].length
        })
}

const valuesOrderBy = orderBy(arrayNew, ['count'], ['desc']);
valuesOrderBy.splice(3, cuantos - 1);

const total  = sumBy(valuesOrderBy, function (item) {
    return item.count;
})

const tests = []
const test = (name, fn) => tests.push({ name, fn})

// Throws error on failure
test(`Throws error on failure `, () => {
    assert.equal(total, 23)
})

console.log('result', total)

tests.forEach(({name , fn}) => {
    try {
        fn()
        console.log(`Success! test ${name}`)
    } catch (error) {
        console.error(`Error test ${name} Expected ${error.expected} but got ${error.actual}`)
    }
})
/**
 * Time and space complexity in O() notation is:
 *   - time complexity: TODO
 *   - space complexity: TODO
 * 
 * 
    manages to analyze the complexity of an algorithm is something very important since in programming
    it is always sought that the algorithms are very fast and less complex
 */
