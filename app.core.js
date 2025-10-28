function renderForm(stateCode) {
  const state = DL_STATES[stateCode];
  if (!state) return;
  const formFields = document.getElementById("formFields");
  formFields.innerHTML = "";

  state.fields.forEach(field => {
    const label = document.createElement("label");
    label.textContent = field;
    const input = document.createElement("input");
    input.name = field;
    input.id = `input-${field}`;
    input.value = state.defaults[field] || "";
    formFields.appendChild(label);
    formFields.appendChild(input);
  });
}

function collectData() {
  const inputs = document.querySelectorAll("#dlForm input");
  const data = {};
  inputs.forEach(input => {
    data[input.name] = input.value.trim();
  });
  return data;
}

function buildANSIPayload(data) {
  if (!data.FIRSTNAME || !data.LASTNAME || !data.ADDRESS || !data.NUMBER || !data.ICN) return null;

  const city = data.CITY || "Sampletown";
  const stateCode = document.getElementById("stateSelector").value;

  return [
    "@\nANSI 6360000101DL00010288",
    `DCSD${data.LASTNAME}`,
    `DCT${data.FIRSTNAME}`,
    `DCU${data.MIDDLENAME || ""}`,
    `DAG${data.ADDRESS}`,
    `DAI${city}`,
    `DAJ${stateCode}`,
    `DAK${data.ZIP}`,
    `DBA${data.DOE}`,
    `DBD${data.DOI}`,
    `DBB${data.DOB}`,
    `DBC${data.SEX === "M" ? "1" : "2"}`,
    `DAU${data.HEIGHT}`,
    `DAY${data.EYE}`,
    `DAZ${data.WEIGHT}`,
    `DCG${data.CLASS}`,
    `DCA${data.RESTRICTIONS}`,
    `DCB${data.ENDORSEMENT}`,
    `DAQ${data.NUMBER}`,
    `DCF${data.ICN}`,
    `DCI${data.DONOR === "YES" ? "1" : "2"}`
  ].join("\n");
}

function generateBarcode(payload) {
  if (!payload || typeof payload !== "string" || payload.length < 10) {
    console.error("Invalid payload:", payload);
    return;
  }

  const encoded = encodeURIComponent(payload);
  const img = document.createElement("img");
  img.src = `https://barcode.tec-it.com/barcode.ashx?data=${encoded}&code=PDF417&translate-esc=false`;
  img.alt = "PDF417 Barcode";
  img.style.maxWidth = "100%";

  const container = document.getElementById("barcodeImageContainer");
  container.innerHTML = "";
  container.appendChild(img);
  document.getElementById("downloadLink").href = img.src;
}