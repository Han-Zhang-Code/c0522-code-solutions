function graduate(credential) {
  return function (fullName) {
    return fullName + ' ' + credential;
  };

}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
const a = medicalSchool('Dan Abramov');
const b = lawSchool('Ryan Florence');
console.log(a);
console.log(b);
