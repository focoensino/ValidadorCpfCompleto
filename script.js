const botao = document.querySelector('.botao')

botao.addEventListener('click', () => {
  const cpf = document.querySelector('.enviar').value
  const resultado = document.querySelector('.resultado')

  if (cpf != '') {
    if (validarCpf(cpf)) {
      resultado.innerHTML = 'CPF Válido'
    } else {
      resultado.innerHTML = 'CPF Inválido'
    }
  } else {
    resultado.innerHTML = 'Preecha o campo CPF'
  }
})

function validarCpf(cpf) {
  var soma
  var resto

  soma = 0
  if (cpf == '00000000000') return false

  for (i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)

  resto = (soma * 10) % 11

  if (resto == 10 || resto == 11) resto = 0

  if (resto != cpf.substring(9, 10)) return false

  soma = 0

  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)

  resto = (soma * 10) % 11
  if (resto != cpf.substring(10, 11)) return false

  return true
}
