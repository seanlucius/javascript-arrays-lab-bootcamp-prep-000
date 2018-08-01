var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return [kittens.push(name)];
}

function destructivelyPrependKitten(name) {
  return [kittens.unshift(name)];
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return [kittens.splice(2, 0, name)];
}