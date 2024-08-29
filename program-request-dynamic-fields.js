// Unhides other clarify option for age group if "other" is selected


document.addEventListener("DOMContentLoaded", function() {
  // For the "Age-Group" select field
  document.getElementById("Age-Group").addEventListener("change", function() {
    const selectedValue = this.value;
    const otherAgeGroupDiv = document.getElementById("other-age-group");
    const ageGroupSpacer = document.getElementById("age-group-spacer");

    if (selectedValue === "Other") {
      otherAgeGroupDiv.classList.remove("hidden");
      ageGroupSpacer.classList.remove("hide");
    } else {
      otherAgeGroupDiv.classList.add("hidden");
      ageGroupSpacer.classList.add("hide");
    }
  });

  // For the "Desired-Class" select field
  document.getElementById("Desired-Class").addEventListener("change", function() {
    const selectedValue = this.value;
    const otherClassDiv = document.getElementById("other-class");
    const classSpacer = document.getElementById("desired-class-spacer");

    if (selectedValue === "Propose your own idea") {
      otherClassDiv.classList.remove("hidden");
      classSpacer.classList.remove("hide");
    } else {
      otherClassDiv.classList.add("hidden");
      classSpacer.classList.add("hide");
    }
  });
});