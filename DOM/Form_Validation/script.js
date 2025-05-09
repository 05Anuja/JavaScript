const signInBtn = document.getElementById('signInBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// signInBtn.addEventListener('click', () => {
//   overlay.classList.add('active');
// });

function signInFunc() {
    overlay.classList.add('active');
}

// closeBtn.addEventListener('click', () => {
//   overlay.classList.remove('active');
// });

function closeBtnFunc() {
    overlay.classList.remove('active');
}

// Optional: Close form when clicking outside it
// overlay.addEventListener('click', (e) => {
//   if (e.target === overlay) {
//     overlay.classList.remove('active');
//   }
// });
