function graduate(credential) {
  return {
    fullName(fullName) {
      return fullName + ' ' + credential;
    }
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');
const a = medicalSchool.fullName('Dan Abramov');
const b = lawSchool.fullName('Ryan Florence');
console.log(a);
console.log(b);
