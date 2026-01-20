let participants = JSON.parse(localStorage.getItem("participants")) || [];

function displayParticipants() {
  let table = document.getElementById("participants");
  table.innerHTML = "";

  participants.forEach(p => {
    let row = `
      <tr>
        <td>${p.name}</td>
        <td>${p.usn}</td>
        <td>${p.dept}</td>
        <td>${p.activity}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let participant = {
    name: name.value,
    usn: usn.value,
    dept: dept.value,
    activity: activity.value
  };

  participants.push(participant);
  localStorage.setItem("participants", JSON.stringify(participants));

  displayParticipants();
  this.reset();
});

displayParticipants();
