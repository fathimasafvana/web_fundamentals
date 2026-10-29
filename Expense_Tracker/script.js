let data = JSON.parse(localStorage.getItem("exp") || "[]");
let filter = "all";

document.getElementById("addBtn").onclick = () => {
  let title = document.getElementById("title").value;
  let amount = Number(document.getElementById("amount").value);
  let category = document.getElementById("category").value || "General";
  let type = document.getElementById("type").value;
  let date = document.getElementById("date").value;

  if(!title || !amount || !type || !date) return alert("Fill all fields");

  data.push({id:Date.now(), title, amount, category, type, date});
  localStorage.setItem("exp", JSON.stringify(data));
  document.getElementById("title").value="";
  document.getElementById("amount").value="";
  render();
};

function render(){
  let inc=0, exp=0;
  data.forEach(d=>{
    if(d.type=="income") inc+=d.amount;
    else exp+=d.amount;
  });
  document.getElementById("income").innerText="₹"+inc;
  document.getElementById("expense").innerText="₹"+exp;
  document.getElementById("balance").innerText="₹"+(inc-exp);

  let list = document.getElementById("list");
  list.innerHTML="";
  data.filter(d=> filter=="all" || d.type==filter).slice().reverse().forEach(d=>{
    list.innerHTML+=`
      <div class="transaction ${d.type}">
        <div>
          ${d.title} (${d.category})
          <small>${d.date}</small>
        </div>
        <div>₹${d.amount} <span class="del" onclick="del(${d.id})">x</span></div>
      </div>
    `;
  });
}

function del(id){
  data = data.filter(d=>d.id!=id);
  localStorage.setItem("exp", JSON.stringify(data));
  render();
}

document.querySelectorAll(".f").forEach(b=>{
  b.onclick=()=>{
    filter=b.dataset.f;
    document.querySelectorAll(".f").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    render();
  }
});

render();