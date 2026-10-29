let appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

function formatDate(input){
  let d = new Date(input);
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

function render(){
  let list = document.getElementById("list");
  list.innerHTML = "";
  
  if(appointments.length === 0){
    list.innerHTML = "<p style='color:#999;font-size:13px'>No appointments yet</p>";
    return;
  }

  appointments.slice().reverse().forEach(a => {
    list.innerHTML += `
      <div class="appt">
        <strong>${a.service}</strong>
        <span>${a.showDate} at ${a.time}</span>
        <span>${a.name} (${a.email})</span>
        <span class="booked">Booked</span>
        <button onclick="cancelAppointment(${a.id})">Cancel</button>
        <button onclick="rescheduleAppointment(${a.id})">Reschedule</button>
      </div>
    `;
  });
}

document.getElementById("bookBtn").onclick = function(){
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if(!service || !date || !time || !name || !email){
    alert("Please fill all fields");
    return;
  }

  appointments.push({
    id: Date.now(),
    service: service,
    showDate: formatDate(date),
    rawDate: date,
    time: time,
    name: name,
    email: email
  });

  localStorage.setItem("appointments", JSON.stringify(appointments));
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  render();
};

function cancelAppointment(id){
  appointments = appointments.filter(a => a.id !== id);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  render();
}

function rescheduleAppointment(id){
  let newDate = prompt("Enter new date (YYYY-MM-DD):");
  let newTime = prompt("Enter new time (e.g. 10:00 AM):");
  if(newDate && newTime){
    let appt = appointments.find(a => a.id === id);
    appt.rawDate = newDate;
    appt.showDate = formatDate(newDate);
    appt.time = newTime;
    localStorage.setItem("appointments", JSON.stringify(appointments));
    render();
  }
}

render();