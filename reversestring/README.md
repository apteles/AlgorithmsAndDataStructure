## Reverse String Algorithm

Given a string, return a new string with the reversed order or characters, examples:

```js
reverse("apple");
// return leppa
reverse("hello");
// return olleh
reverse("Greetings!");
// return !sgniteerG
```

### Debbuging code

```js
str = hello

reversed = ''

// 1° Interaction:

for (let char of str){
       ''     h        ''
  reversed = char + reversed
}

// 2º Interaction:

for (let char of str){
       h      e        'h'
  reversed = char + reversed
}

// 3º Interaction:

for (let char of str){
       'eh'    l        'eh'
  reversed = char + reversed
}

// 4º Interaction:

for (let char of str){
       'leh'    l        'leh'
  reversed = char + reversed
}

// 5º Interaction:

for (let char of str){
    'lleh'    o        'oleh'
  reversed = char + reversed
}

After last interaction the value of 'reverse' will be 'olleh'

```

## Testing

To run the tests: `yarn test`

## Useful links

https://alligator.io/js/for-of-for-in-loops/

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
