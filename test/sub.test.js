const assert = require('node:assert');
const { test } = require('node:test');
const { sub } = require('../src/sub.js');

test('subtracts two numbers (UC-1)', () => {
  assert.strictEqual(sub(5, 3), 2);
});

test('subtracting a larger number from a smaller one is negative (UC-1)', () => {
  assert.strictEqual(sub(3, 5), -2);
});

test('subtracting zero from zero is zero (UC-1)', () => {
  assert.strictEqual(sub(0, 0), 0);
});
