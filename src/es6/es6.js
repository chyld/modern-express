/* eslint-disable new-cap, no-use-before-define, no-unused-vars */

import express from 'express';
const router = module.exports = express.Router();

router.get('/arrows', (req, res) => {
  const data = [1, 2, 3].reduce((a, b) => a + b);
  res.json({ data });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/classes', (req, res) => {
  class Dog {
    constructor(name) {
      this.name = name;
    }
    speak() {
      return `The dog's name is ${this.name}`;
    }
  }

  const d1 = new Dog('fido');
  const words = d1.speak();
  res.json({ words });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/eol', (req, res) => {
  const hello = 'world';
  const data = {
    a: 3,
    b() {
      return this.a;
    },
    c: [1, 2, 3],
    d: { x: 9, z: 10 },
    [`prop - ${hello}`]: 7,
  };
  res.json({ data });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/destructure', (req, res) => {
  const nums = [1, 2, 3, 4];
  const [first, second, ...others] = nums;
  const obj = { a: 5, b: 6, c: 7, d: 8 };
  const { a, b, ...more } = obj;
  res.json({ nums, first, second, others, obj, a, b, more });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/spread', (req, res) => {
  const n1 = [1, 2];
  const n2 = [3, 4];
  const obj = { a: 5, b: 6 };
  const nums = [...n1, ...n2];
  const etc = { x: 3, y: 2, ...obj };
  res.json({ nums });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/params', (req, res) => {
  function add(a, b = 3) {
    return a + b;
  }
  const sum = add(3);
  res.json({ sum });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/iterator', (req, res) => {
  const nums = [1, 2, 3, 4, 5];
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  res.json({ total });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //

router.get('/gen', (req, res) => {
  function * gen() {
    yield 1;
    yield 2;
  }
  const g = gen();
  const v = g.next();
  res.json({ v });
});

// -------------------------------------------------------------------------- //
// -------------------------------------------------------------------------- //
