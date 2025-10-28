registerState("NM", {
  fields: [
    "FIRSTNAME", "MIDDLENAME", "LASTNAME", "ADDRESS", "CITY", "ZIP",
    "CLASS", "SEX", "DONOR", "RESTRICTIONS", "ENDORSEMENT",
    "HEIGHT", "WEIGHT", "EYE", "DOB", "DOI", "DOE", "NUMBER", "ICN"
  ],
  defaults: {
    CITY: "Los Lunas",
    ZIP: "87031",
    CLASS: "D",
    SEX: "M",
    DONOR: "YES",
    RESTRICTIONS: "NONE",
    ENDORSEMENT: "NONE",
    HEIGHT: "67",
    WEIGHT: "160",
    EYE: "HAZ"
  },
  generateICN: function(data) {
    return data.NUMBER + "01";
  }
});