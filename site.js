function bmi() {

    var num1 = +document.getElementById('height').value;
    if (num1 <= 0 || Number.isNaN(num1)) {
      var text1 = " Wrong Height Input " + "<br>check everything one more time, will ya?";
      document.getElementById('messagePanel').innerHTML = text1;
      document.getElementById('height').value = "";
      document.getElementById('weight').value = "";
      return;
    }
    var num2 = +document.getElementById('weight').value;
    if (num2 <= 0 || Number.isNaN(num2)) {
      var text2 = " Wrong Weight Input " + "<br>check everything one more time, will ya?";
      document.getElementById('messagePanel').innerHTML = text2;
      document.getElementById('height').value = "";
      document.getElementById('weight').value = "";
      return;
    }
    var num1 = num1 / 100;
    var sum = num2 / (num1 * num1);
    var fixedSum = sum.toFixed(1);

    if ( fixedSum < 18.5){
    document.getElementById('messagePanel').innerHTML = fixedSum + "<br>Underweight";
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    return;
    }
    if ( fixedSum >= 18.5 && fixedSum <= 24.9){
      document.getElementById('messagePanel').innerHTML = fixedSum + "<br>Normal";
      document.getElementById('height').value = "";
      document.getElementById('weight').value = "";
    return;
    }
    if ( fixedSum >= 25.0 && fixedSum <= 29.0){
        document.getElementById('messagePanel').innerHTML = fixedSum + "<br>Overweight";
        document.getElementById('height').value = "";
        document.getElementById('weight').value = "";
    return;
    }
    if ( fixedSum >= 30.0 && fixedSum <= 40.0){
          document.getElementById('messagePanel').innerHTML = fixedSum + "<br>Obese";
          document.getElementById('height').value = "";
          document.getElementById('weight').value = "";
    return;
    }
    if ( fixedSum > 40.0){
          document.getElementById('messagePanel').innerHTML = fixedSum + "<br>Extreme Obese";
          document.getElementById('height').value = "";
          document.getElementById('weight').value = "";
    return;
    }
  }