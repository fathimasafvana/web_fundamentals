const students = ["Ameen", "Rahul", "Sneha", "Fathima", "Arjun"];
let attendanceDB = JSON.parse(localStorage.getItem("attendanceDB") || "{}");

const tbody = document.getElementById("tbody");
const reportList = document.getElementById("reportList");
const dateInput = document.getElementById("date");

// 1. Render student table
function renderTable(){
  tbody.innerHTML = "";
  students.forEach(name => {
    tbody.innerHTML += `
      <tr>
        <td>${name}</td>
        <td><input type="radio" name="${name}" value="Present"></td>
        <td><input type="radio" name="${name}" value="Absent"></td>
      </tr>
    `;
  });
}

// 2. Render Attendance Report like in your photo
function renderReport(){
  reportList.innerHTML = "";
  let dates = Object.keys(attendanceDB).sort().reverse();

  if(dates.length === 0){
    reportList.innerHTML = `<p style="color:#999; font-size:13px;">No records yet</p>`;
    return;
  }

  dates.forEach(date => {
    let dayData = attendanceDB[date];
    let presentCount = Object.values(dayData).filter(v => v === "Present").length;
    let total = students.length;
    let percent = Math.round((presentCount / total) * 100);

    reportList.innerHTML += `
      <div class="report-box">
        <b>${date}</b>
        <span>Present: ${presentCount}/${total}</span>
        <span>Attendance: ${percent}%</span>
      </div>
    `;
  });
}

// 3. Load data when date changes
dateInput.addEventListener("change", () => {
  let date = dateInput.value;
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

  if(attendanceDB[date]){
    for(let name in attendanceDB[date]){
      let radio = document.querySelector(`input[name="${name}"][value="${attendanceDB[date][name]}"]`);
      if(radio) radio.checked = true;
    }
  }
});

// 4. Save Attendance
document.getElementById("saveBtn").onclick = () => {
  let date = dateInput.value;
  if(!date){
    alert("Please select date");
    return;
  }

  let dayData = {};
  let allMarked = true;

  students.forEach(name => {
    let selected = document.querySelector(`input[name="${name}"]:checked`);
    if(!selected) allMarked = false;
    else dayData[name] = selected.value;
  });

  if(!allMarked){
    alert("Please mark attendance for all students");
    return;
  }

  attendanceDB[date] = dayData;
  localStorage.setItem("attendanceDB", JSON.stringify(attendanceDB));
  alert("Attendance Saved for " + date);
  renderReport();
};

renderTable();
renderReport();