function returnProgrammerAge(name) {
  if (name === "edu") {
    return 24;
  }
  if (name === "barril") {
    return 27;
  }

  return -1;
}

function returnProgrammerAge(name) {
  let age = null;
  if (name === "edu") {
    age = 24;
  } else if (name === "barril") {
    age = 27;
  } else {
    age = -1;
  }

  return age;
}
