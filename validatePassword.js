function validatePassword(password) {
  const validLength = password.length >= 8
  console.log(validLength);
  let hasLetter = /[a-zA-Z]/g.test(password)
  let hasNumber = /[0-9]/g.test(password)
  return hasNumber && hasLetter && validLength
}
module.exports = validatePassword