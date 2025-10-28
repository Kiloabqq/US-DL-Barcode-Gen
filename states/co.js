registerState("CO", {
  fields: [
    "FIRSTNAME", "MIDDLENAME", "LASTNAME", "ADDRESS", "CITY", "ZIP",
    "CLASS", "SEX", "DONOR", "RESTRICTIONS", "ENDORSEMENT",
    "HEIGHT", "WEIGHT", "EYE", "HAIR", "RACE",
    "DOB", "DOI", "DOE", "NUMBER", "AUDIT", "DD", "ICN"
  ],
  defaults: {
    CITY: "Greeley",
    ZIP: "806346807",
    CLASS: "R",
    SEX: "M",
    DONOR: "NO",
    RESTRICTIONS: "NONE",
    ENDORSEMENT: "NONE",
    HEIGHT: "69",
    WEIGHT: "169",
    EYE: "BRO",
    HAIR: "BRO",
    RACE: "W"
  },
  generateICN: function(data) {
    return `${data.AUDIT || "CODL_0_010122_00000"}-${data.DD || "0000000"}`;
  }
});