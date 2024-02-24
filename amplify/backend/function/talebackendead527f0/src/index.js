"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = (event, context, callback) => {
    console.log(`Event^^ ${JSON.stringify(event)}`);
    const concatKey = `${event.key1} ${event.key2} ${event.key3}`;
    callback(null, concatKey);
};
exports.handler = handler;
