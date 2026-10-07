const startJourneyBtns = document.querySelectorAll("#startJourneyBtn");
const dialog = document.getElementById("dialog");
const closeBtn = document.getElementById("closeBtn")

startJourneyBtns.forEach(startJourneyBtn=>{
  startJourneyBtn.addEventListener("click",()=>{
    dialog.showModal();
  })
})

closeBtn.addEventListener("click",()=>{
  dialog.close()
})
