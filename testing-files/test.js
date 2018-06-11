"use strict";
exports.__esModule = true;
var jsf = require('json-schema-faker');
var fs = require("fs");
console.log(jsf.version);
console.log('Hello World');
var schema = {
    type: 'object',
    properties: {
        user: {
            type: 'object',
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt'
                },
                name: {
                    type: 'string',
                    faker: 'name.findName'
                },
                email: {
                    type: 'string',
                    format: 'email',
                    faker: 'internet.email'
                }
            },
            required: ['id', 'name', 'email']
        }
    },
    required: ['user'],
    definitions: {
        positiveInt: {
            type: 'integer',
            minimum: 0,
            exclusiveMinimum: true
        }
    }
};
jsf.resolve(schema).then(function (sample) {
    console.log(sample);
    // "[object Object]"
    console.log(sample.user.name);
    // "John Doe"
});
var schema2 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "display",
    "type": "string"
};
var schema3 = JSON.parse(fs.readFileSync("/home/jp39/Desktop/master_thesis/testbench/Resources/SchemasSimpleString/Requests/displayProperty.json", "utf8"));
console.log(schema3);
jsf.resolve(schema3).then(function (sample) {
    console.log('mysample:', sample);
    // "[object Object]"
});