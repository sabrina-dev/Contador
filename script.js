function calcular() {
  var inicio = document.querySelector('.inicio').value
  var pass = document.querySelector('.pass').value
  var fi = document.querySelector('.fim').value
  var res = window.document.querySelector('div#res')

   if ((inicio ==00) || (fi == 00 )) {
    res.innerHTML += `Impossível contar`
   }else if((pass == 00) && (inicio && fi !== 00 )){
     window.alert('Não dá pra contar de 0 em 0, será 1 hehehe')
     pass = 1;     
    var resu = Number(inicio)
    res.innerHTML += ` ${resu}👉`
    var resu = Number(inicio) + Number(pass)
    res.innerHTML += ` ${resu}👉`

    while (resu <= Number(fi)) {
      resu = resu + Number(pass)

      if (resu <= Number(fi)) {
        res.innerHTML += `${resu}👉`
      }
    }
  }
  res.innerHTML += `🏴`
}
