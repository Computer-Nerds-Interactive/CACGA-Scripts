// Unhides other clarify option for age group if "other" is selected


document.addEventListener("DOMContentLoaded", function() {
  // For the "Age-Group" select field
  document.getElementById("Age-Group").addEventListener("change", function() {
    const selectedValue = this.value;
    const otherAgeGroupDiv = document.getElementById("other-age-group");

    if (selectedValue === "Other") {
      otherAgeGroupDiv.classList.remove("hidden");
      console.log("Age Field Visible");
    } else {
      otherAgeGroupDiv.classList.add("hidden");
    }
  });

  // For the "Desired-Class" select field
  document.getElementById("Desired-Class").addEventListener("change", function() {
    const selectedValue = this.value;
    const otherClassDiv = document.getElementById("other-class");

    if (selectedValue === "Propose your own idea") {
      otherClassDiv.classList.remove("hidden");
      console.log("Class Field Visiblle");
    } else {
      otherClassDiv.classList.add("hidden");
    }
  });
});