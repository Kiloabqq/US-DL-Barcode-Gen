document.addEventListener("DOMContentLoaded", () => {
  const stateSelector = document.getElementById("stateSelector");
  const form = document.getElementById("dlForm");

  function showPayload(payload) {
    const output = document.getElementById("payloadOutput");
    if (output) output.value = payload;

    const copyBtn = document.getElementById("copyPayloadBtn");
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(payload);
        copyBtn.textContent = "✅ Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy to Clipboard"), 1500);
      };
    }
  }

  function showAuditOverlay(data) {
    const auditList = document.getElementById("auditList");
    if (!auditList) return;

    auditList.innerHTML = "";

    Object.entries(data).forEach(([key, value]) => {
      const li = document.createElement("li");
      li.textContent = `${key}: ${value}`;
      auditList.appendChild(li);
    });
  }

  function populateSample(stateCode) {
    const state = DL_STATES[stateCode];
    if (!state) return;

    const firstNameInput = document.getElementById("input-FIRSTNAME");
    if (firstNameInput) firstNameInput.value = getRandomFirstName("M");

    const middleNameInput = document.getElementById("input-MIDDLENAME");
    if (middleNameInput) middleNameInput.value = getRandomMiddleName("M");

    const lastNameInput = document.getElementById("input-LASTNAME");
    if (lastNameInput) lastNameInput.value = getRandomLastName();

    const addressInput = document.getElementById("input-ADDRESS");
    if (addressInput) addressInput.value = state.defaults.ADDRESS || "123 Main St";

    const cityInput = document.getElementById("input-CITY");
    if (cityInput) cityInput.value = state.defaults.CITY || "Sampletown";

    const zipInput = document.getElementById("input-ZIP");
    if (zipInput) zipInput.value = state.defaults.ZIP || "00000";

    const classInput = document.getElementById("input-CLASS");
    if (classInput) classInput.value = state.defaults.CLASS || "D";

    const sexInput = document.getElementById("input-SEX");
    if (sexInput) sexInput.value = state.defaults.SEX || "M";

    const donorInput = document.getElementById("input-DONOR");
    if (donorInput) donorInput.value = state.defaults.DONOR || "NO";

    const restrictionsInput = document.getElementById("input-RESTRICTIONS");
    if (restrictionsInput) restrictionsInput.value = state.defaults.RESTRICTIONS || "NONE";

    const endorsementInput = document.getElementById("input-ENDORSEMENT");
    if (endorsementInput) endorsementInput.value = state.defaults.ENDORSEMENT || "NONE";

    const heightInput = document.getElementById("input-HEIGHT");
    if (heightInput) heightInput.value = state.defaults.HEIGHT || "68";

    const weightInput = document.getElementById("input-WEIGHT");
    if (weightInput) weightInput.value = state.defaults.WEIGHT || "160";

    const eyeInput = document.getElementById("input-EYE");
    if (eyeInput) eyeInput.value = state.defaults.EYE || "BRO";

    const hairInput = document.getElementById("input-HAIR");
    if (hairInput) hairInput.value = state.defaults.HAIR || "BRO";

    const raceInput = document.getElementById("input-RACE");
    if (raceInput) raceInput.value = state.defaults.RACE || "W";

    makeRandomDOB(1965, 1999);
    makeRandomDOI(2020, 2024);
    makeRandomDOE(4);

    const numberInput = document.getElementById("input-NUMBER");
    if (numberInput) numberInput.value = getRandomNumericString(9);

    const data = collectData();

    if (stateCode === "CO") {
      const doi = data.DOI || "01012022";
      const mmddyy = doi.slice(0, 2) + doi.slice(2, 4) + doi.slice(6);
      const audit = `CODL_0_${mmddyy}_${getRandomNumericString(5)}`;
      const dd = getRandomNumericString(7);

      const auditInput = document.getElementById("input-AUDIT");
      if (auditInput) auditInput.value = audit;

      const ddInput = document.getElementById("input-DD");
      if (ddInput) ddInput.value = dd;
    }

    data.ICN = state.generateICN(data);

    const icnInput = document.getElementById("input-ICN");
    if (icnInput) icnInput.value = data.ICN;

    const payload = buildANSIPayload(data);
    if (payload) {
      generateBarcode(payload);
      showPayload(payload);
      showAuditOverlay(data);
    }
  }

  document.getElementById("generateSampleBtn").addEventListener("click", () => {
    populateSample(stateSelector.value);
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const stateCode = stateSelector.value;
    const state = DL_STATES[stateCode];
    if (!state) return;

    const data = collectData();
    if (!data.ICN) {
      data.ICN = state.generateICN(data);
      const icnInput = document.getElementById("input-ICN");
      if (icnInput) icnInput.value = data.ICN;
    }

    const payload = buildANSIPayload(data);
    if (payload) {
      generateBarcode(payload);
      showPayload(payload);
      showAuditOverlay(data);
    }
  });

  stateSelector.addEventListener("change", () => {
    renderForm(stateSelector.value);
  });

  renderForm(stateSelector.value);
});