"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// SPREAD é conhecido por utilizar -> ... 
// REST ele pega o resto das propriedades/chaves
console.log('******* REST *******'); // REST

var usuario = {
  nome: 'Rodrigo',
  idade: 25,
  facul: true,
  endereco: {
    rua: 'Viela 19'
  }
};

var rua = usuario.endereco.rua,
    resto = _objectWithoutProperties(usuario, ["endereco"]);

console.log(resto); // vai imprimir o resto das propriedades que não foi atribuido alguma variavel
// REST + DESESTRUTURAÇÃO + ARRAY

var arr = [1, 3, 5, 6];
var a = arr[0],
    rest = arr.slice(1);
console.log(rest); // REST + DESESTRUTURAÇÃO + PARAMETROS

function teste(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(teste(1, 2, 10, 11, 12, 13));
/************** SPREAD ************ */

console.log('******* SPREAD *******'); // SPREAD - EXEMPLO 01

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log('SPREAD NO ESCOPO DE ARRAY');
console.log(arr3); // SPREAD - EXEMPLO 02

var user = {
  nome: 'Viturino',
  idade: 18,
  facul: true
};

var user1 = _objectSpread({}, user, {
  nome: "Rodrigo"
}); // ao usar o spread, ele ja acessa as propriedades do OBJETO/VETOR que foi usado


console.log('REST EXEMPLO COM OBJETO, alteramos a propriedade nome, poque usamos o SPREAD e isso faz uma copia da estrutura do OBJETO/VETOR');
console.log(user1);
