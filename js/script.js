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
        found = { room, subject };
        break;
      }
    }

    if (found) {
      result.innerHTML = `
        <b>Room:</b> ${found.room} <br>
        <b>Subject:</b> ${found.subject}
      `;
    } else {
      result.innerHTML = "Seat not found (check Roll/Branch/Sem)";
    }

  } catch (error) {
    console.error(error);
    result.innerHTML = "Error loading seating data";
  }
}