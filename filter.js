const fs = require('fs')
const csvConverter = require('./csv');
const _ = require('lodash')

const sampleName = process.argv[2];
const samples = require(`./${sampleName}`)
const filterQuery = process.argv[3];

const filter = require(`./${filterQuery.replace('.js', '')}`);

const filtered = filter(samples);
fs.writeFileSync(`./result-${sampleName}`, JSON.stringify(filtered, null, 2))

const csv = csvConverter(filtered);
fs.writeFileSync(`./result-${sampleName}.csv`, csv)