window.onload = function() {
  // محو البيانات من localStorage عند إعادة تحميل الصفحة
  localStorage.removeItem('selectedValue'); // لحذف عنصر معين
  console.log('LocalStorage cleared on page load');
};
  let x;
  function handclick(w) {
    for (let i = 1; i < 6; i++) {
      let mydiv = document.getElementById(`mydiv${i}`);
      if (mydiv) {
        mydiv.classList.remove("active");
      }
    }
    let mydivs = document.getElementById(`mydiv${w}`);
    if (mydivs !== null) {
      mydivs.classList.add("active");
    }
    x = w;
    // تخزين قيمة x في localStorage
    localStorage.setItem('selectedValue', x);
    return x;
  }
  function submitt() {
    window.location.href = "index2.html";
  }
  let currentPath = window.location.pathname;
  if (currentPath === '/index2.html') {
    let mySpan = document.getElementById('mySpan');
    if (mySpan !== null) {
      // استرجاع قيمة x من localStorage
      let storedValue = localStorage.getItem('selectedValue');
      if (storedValue) {
        mySpan.textContent = storedValue;
      }
    }
  }
