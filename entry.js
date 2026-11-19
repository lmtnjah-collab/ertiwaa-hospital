'use strict';
// A client-only reconstruction of the original report's role-selection and booking screens.
// This is an educational demo: there is no real authentication or appointment server.
(function(){
const overlay=document.getElementById('entryOverlay');
const steps=['entryChoose','entryLogin','entryBooking','entryConfirmed'];
function show(id){steps.forEach(x=>document.getElementById(x).hidden=x!==id)}
function close(){overlay.hidden=true;window.scrollTo(0,0)}
document.getElementById('entryStaff').onclick=()=>show('entryLogin');
document.getElementById('entryPatient').onclick=()=>show('entryBooking');
document.querySelectorAll('[data-back]').forEach(x=>x.onclick=()=>show('entryChoose'));
document.getElementById('entryLoginForm').onsubmit=e=>{e.preventDefault();close()};
document.getElementById('entryBookingForm').onsubmit=e=>{
 e.preventDefault();const data=new FormData(e.target);const name=String(data.get('patientName')).trim();if(!name)return;
 const priority=Number(data.get('priority'));
 const date=String(data.get('date'));const department=String(data.get('department'));
 const reference='ERT-'+String(Date.now()).slice(-7);
 // TextContent is used to avoid injecting user input into HTML.
 const lines=[`Appointment booked successfully!`,`Patient: ${name}`,`Appointment date: ${date}`,`Department: ${department}`,`Priority level: ${priority}`,`Reference: ${reference}`];
 document.getElementById('bookingConfirmation').textContent=lines.join('\n');
 document.getElementById('bookingConfirmation').style.whiteSpace='pre-line';
 show('entryConfirmed');
};
document.getElementById('bookAgain').onclick=()=>{document.getElementById('entryBookingForm').reset();show('entryBooking')};
document.getElementById('goDashboard').onclick=close;
})();
