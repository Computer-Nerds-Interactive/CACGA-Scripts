// Unhides other clarify option for exhibit if "other" is selected


document.addEventListener("DOMContentLoaded", function() {
    // For the "Exhibition-Name-2" select field
    document.getElementById("Exhibition-Name-2").addEventListener("change", function() {
      const selectedValue = this.value;
      const otherExhibitDiv = document.getElementById("other-exhibit-clarification");
  
      if (selectedValue === "Other") {
        otherExhibitDiv.classList.remove("hide-me");
      } else {
        otherExhibitDiv.classList.add("hide-me");
      }
    });
  });