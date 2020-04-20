export function hexGen () {
  const result = '0123456789abcdef'.split('').map(function (v, i, a) {
    return i > 5 ? null : a[Math.floor(Math.random() * 16)]
  }).join('')
  return result
}

// the hexadecimal generator is not mine, you can see it here:
// https://www.paulirish.com/2009/random-hex-color-code-snippets/
