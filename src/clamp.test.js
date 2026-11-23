const { test } = require('node:test');
const assert = require('node:assert');
const { clamp } = require('./clamp');

test('clamp keeps a value inside the bounds', () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
  assert.strictEqual(clamp(-1, 0, 10), 0);
  assert.strictEqual(clamp(11, 0, 10), 10);
});
