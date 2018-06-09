const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
  it('Si la palabra termina con "ar", se le quitan esas dos letras',function(){
const translation = platzom("programar")
expect(translation).to.equal("program")
  })
  it('Si la palabra empieza con "z" se le añade "pe" al final de esta', function () {
    const translation = platzom("zorro")
    const translation1 = platzom("zarpar")
    expect(translation).to.equal("zorrope")
    expect(translation1).to.equal("zarppe")
  })
  it('Si la palabra traducida tiene mas de 10 letrass, se debe partir por la mitad y unir con un guion ejemplo abecedario = abece-dario', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Por ultimo, si la palabra es un palindromo se devuelve la misma palabra pero intercalado con letras mayusculas y minusculas', function () {
    const translation = platzom("somos")
    expect(translation).to.equal("SoMoS")
  })

})
