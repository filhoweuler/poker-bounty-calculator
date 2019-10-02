
var bet = document.getElementById('bet-size');
var chips = document.getElementById('chips');
var pot = document.getElementById('pot');
var initialStack = document.getElementById('initial-stack')
var bounty = document.getElementById('bounty');
var bi = document.getElementById('buy-in');
var out = document.getElementById('output');

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            event.stopPropagation();
            calculate();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function calculate() {

    var bountyChips = bounty.value/(bi.value/2.0) * (initialStack.value/2.0);

    var totalChips = parseFloat(pot.value) + bountyChips;

    var callingChips = bet.value - chips.value;

    var equity = callingChips/(totalChips+callingChips) * 100.0;

    var ans = "Needed equity: " + equity.toFixed(2) + "%";

    out.innerHTML = ans;
}

function clearAll() {
    console.log('clearing things out');
    /* bet.value="";
    chips.value="";
    pot.value="";
    bounty.value="";
    bi.value="";
    out.innerHTML=""; */

    document.getElementById("bounty-form").reset();
    document.getElementById("bounty-form").classList.remove('was-validated');
}

/* var submit = document.getElementById('submit-btn');
submit.addEventListener('click', function() {
    calculate();
}, false); */

var clear = document.getElementById('clear-btn');
clear.addEventListener('click', function() {
    clearAll();
}, false);

