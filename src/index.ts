import Debug from 'debug';
import express from 'express';
import { JSONSchemaType, ajv } from './ajv';

const debug = Debug('app');
const app = express();

type SomeType = {
    id: string;
    name: string;
    value: string;
}

const SomeSchema: JSONSchemaType<SomeType> = {
    type: 'object',
    required: ['id', 'name', 'value'],
    additionalProperties: false,
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        value: { type: 'string' },
    },
};

const someValidator = ajv.compile(SomeSchema);

app.get('/ping', function(req, res) {
    // please type here something
    // e.g. type "res." then  CTR + SPACE for getting list of suggestions
    res.send('pong');
});

app.listen(2000, function() {
    debug('Listen to 2000');
});