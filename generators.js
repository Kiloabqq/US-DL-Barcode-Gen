function getRandomDateByYear(minYear, maxYear) {
  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(year, month - 1, day);
}

function getFormattedDate_MMDDYYYY(date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${mm}${dd}${yyyy}`;
}

function getRandomNumericString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

function makeRandomDOB(minYear = 1965, maxYear = 1999) {
  const dobInput = document.getElementById("input-DOB");
  if (!dobInput) return;
  dobInput.value = getFormattedDate_MMDDYYYY(getRandomDateByYear(minYear, maxYear));
}

function makeRandomDOI(minYear = 2016, maxYear = new Date().getFullYear() - 1) {
  const doiInput = document.getElementById("input-DOI");
  if (!doiInput) return;
  doiInput.value = getFormattedDate_MMDDYYYY(getRandomDateByYear(minYear, maxYear + 1));
}

function makeRandomDOE(diff = 4) {
  const doiInput = document.getElementById("input-DOI");
  const doeInput = document.getElementById("input-DOE");
  if (!doiInput || !doeInput) return;

  const year = parseInt(doiInput.value.slice(-4)) + diff;
  const mmdd = doiInput.value.slice(0, 4);
  doeInput.value = mmdd + year;
}

function getRandomFirstName(gender) {
  const male = ["John", "Paul", "Mike", "David", "Chris"];
  const female = ["Lisa", "Sarah", "Emily", "Jessica", "Karen"];
  const pool = gender === "F" ? female : male;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getRandomMiddleName(gender) {
  const male = ["James", "Lee", "Thomas", "Ray", "Scott"];
  const female = ["Marie", "Ann", "Lynn", "Jean", "Rose"];
  const pool = gender === "F" ? female : male;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getRandomLastName() {
  const names = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
  return names[Math.floor(Math.random() * names.length)];
}