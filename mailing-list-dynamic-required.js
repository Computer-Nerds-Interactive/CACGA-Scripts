document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("wf-form-mailing-list");
    const checkbox = document.getElementById("receive-brochure");
    const addressField = document.getElementById("mailing-address");
  
    //console.log("Form element:", form);
    //console.log("Checkbox element:", checkbox);
    //console.log("Mailing address field:", addressField);
  
    if (!form || !checkbox || !addressField) {
      //console.warn("One or more form elements are missing. Validation script will not run.");
      return;
    }
  
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        //console.log("Checkbox checked: setting address field to required");
        addressField.setAttribute("required", "required");
      } else {
        //console.log("Checkbox unchecked: removing required from address field");
        addressField.removeAttribute("required");
      }
    });
  
    form.addEventListener("submit", function (e) {
      //console.log("Form submission triggered");
  
      const wantsBrochure = checkbox.checked;
      const address = addressField.value.trim();
  
      //console.log("Checkbox checked?", wantsBrochure);
      //console.log("Mailing address value:", address);
  
      if (wantsBrochure && address === "") {
        //console.log("Blocking submission: Address required but missing");
        e.preventDefault();
        alert("Please enter your mailing address to receive the brochure.");
        addressField.focus();
        return false;
      }
  
      //console.log("Form passed custom validation, submitting...");
    });
  });