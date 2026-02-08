async function findSeat() {
  const rollInput = document.getElementById("roll").value.trim();
  const branchInput = document.getElementById("branch").value.trim();
  const semInput = document.getElementById("sem").value.trim();
  const result = document.getElementById("result");

  if (!rollInput || !branchInput || !semInput) {
    result.innerHTML = "Enter Roll, Branch and Semester";
    return;
  }

  const roll = Number(rollInput);

  try {
    const response = await fetch("sample-data/seating.csv");
    const text = await response.text();
    const rows = text.split("\n").slice(1);

    let found = null;

    for (let row of rows) {
      if (!row.trim()) continue;

      const cols = row.split(",");

      const branch = cols[1]?.trim();
      const semRaw = cols[2]?.trim();   // Example: "IV A"
      const semOnly = semRaw.split(" ")[0]; // Extract "IV"

      const subject = cols[3];
      const from = Number(cols[4]);
      const to = Number(cols[5]);
      const room = cols[6];

      if (
        roll >= from &&
        roll <= to &&
        branch === branchInput &&
        semOnly === semInput
      ) {
        found = { room, subject, from, to };
        break;
      }
    }

    if (found) {
      // Clear any status text
      result.innerHTML = "";

      // Populate and show result card
      const resultCard = document.getElementById("resultCard");
      const rcShift = document.getElementById("rc-shift");
      const rcTime = document.getElementById("rc-time");
      const rcDate = document.getElementById("rc-date");
      const rcRoom = document.getElementById("rc-room");
      const rcSeat = document.getElementById("rc-seat");
      const rcBuilding = document.getElementById("rc-building");

      // Read top exam info (hidden by default) so we don't duplicate static text
      const shiftText = document.querySelector(".exam-shift")?.textContent?.trim() || "";
      const timeText = document.querySelector(".exam-time")?.textContent?.trim() || "";
      const dateText = document.querySelector(".exam-date")?.textContent?.trim() || "";

      rcShift.textContent = shiftText;
      rcTime.textContent = timeText;
      rcDate.textContent = dateText;

      // Room and building
      rcRoom.textContent = found.room || "-";
      const buildingMatch = (found.room || "").match(/^[A-Za-z]+/);
      rcBuilding.textContent = buildingMatch ? buildingMatch[0] : "-";

      // Compute bench / seat number as an offset within the room (simple heuristic)
      const seatNumber = Number(roll) - Number(found.from) + 1;
      rcSeat.textContent = seatNumber > 0 ? seatNumber : "-";

      // Show card and smooth-scroll into view for better mobile UX
      resultCard.style.display = "block";
      resultCard.setAttribute("aria-hidden", "false");

      // Small delay to ensure layout update before scrolling
      setTimeout(() => {
        resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    } else {
      // keep result card hidden on error
      const resultCard = document.getElementById("resultCard");
      if (resultCard) {
        resultCard.style.display = "none";
        resultCard.setAttribute("aria-hidden", "true");
      }
      result.innerHTML = "Seat not found (check Roll/Branch/Sem)";
    }

  } catch (error) {
    console.error(error);
    result.innerHTML = "Error loading seating data";
  }
}