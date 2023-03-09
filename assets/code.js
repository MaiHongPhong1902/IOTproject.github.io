//light
const switchImg1 = document.querySelector(".form-check-input01-1");
const switchImg2 = document.querySelector(".form-check-input01-2");
const switchImg3 = document.querySelector(".form-check-input01-3");
const lampImg = document.getElementById("lamp-img");

let isOn01 = true;
switchImg1.addEventListener("click", function() {
  isOn01 = true;
  // coi v1 nhu thiet bi 1
  fetch("https://blynk.cloud/external/api/batch/update?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V1=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  lampImg.src = "./assets/img/light-bulb.png";
});

switchImg2.addEventListener("click", function() {
  fetch("https://blynk.cloud/external/api/batch/update?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V1=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
  isOn01 = false;
  lampImg.src = "./assets/img/turned-off.png";
});

switchImg3.addEventListener("click", function() {
  isOn01 = "";
  lampImg.src = "./assets/img/engineering.png";
});

//temp

const TswitchImg1 = document.querySelector(".form-check-input02-1");
const TswitchImg2 = document.querySelector(".form-check-input02-2");
const TswitchImg3 = document.querySelector(".form-check-input02-3");
const sTempImg = document.getElementById("stemp-img");

let isOn02 = true;
TswitchImg1.addEventListener("click", function() {
  isOn02 = true;
  fetch("https://blynk.cloud/external/api/batch/update?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V0=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
  sTempImg.src = "./assets/img/temperature.png";
});

TswitchImg2.addEventListener("click", function() {
  isOn02 = false;
  fetch("https://blynk.cloud/external/api/batch/update?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V0=0")
  .then((response) => response.json())
  .then((data) => console.log(data));
  sTempImg.src = "./assets/img/cold.png";
});

TswitchImg3.addEventListener("click", function() {
  isOn02 = "";
  sTempImg.src = "./assets/img/engineering.png";
});






//Humidity
const HswitchImg1 = document.querySelector(".form-check-input03-1");
const HswitchImg2 = document.querySelector(".form-check-input03-2");
const HswitchImg3 = document.querySelector(".form-check-input03-3");
const sHumidityImg = document.getElementById("sHumidity-img");

let isOn03 = true;
HswitchImg1.addEventListener("click", function() {
  isOn03 = true;
  sHumidityImg.src = "./assets/img/humidity1.png";
});

HswitchImg2.addEventListener("click", function() {
  isOn03 = false;
  sHumidityImg.src = "./assets/img/humidity.png";
});

HswitchImg3.addEventListener("click", function() {
  isOn03 = "";
  sHumidityImg.src = "./assets/img/engineering.png";
});

//temp
var Temp = 25;

      function updateTemp() {
        var newTemp = parseInt(document.getElementById('newTemp').value);
        if (newTemp >= 0 && newTemp <= 100) {
          Temp = newTemp;
          updateDisplay01();
        }
      }

      function updateOnEnterTemp(event) {
        if (event.keyCode === 13) {
          updateTemp();
        }
      }

      function updateDisplay01() {
        var TempDisplay = document.getElementById('Temp');
        TempDisplay.innerHTML = Temp + ' độ C';

        var alertDisplay01 = document.getElementById('alert01');
        if (Temp > 35) {
          alertDisplay01.innerHTML = 'Cảnh báo: Nhiệt độ quá cao!';
        } else if (Temp < 20) {
          alertDisplay01.innerHTML = 'Cảnh báo: Nhiệt độ quá thấp!';
        } else {
          alertDisplay01.innerHTML = '';
        }
      }

      updateDisplay01();

//Noise
var Noise = 16;

      function updateNoise() {
        var newNoise = parseInt(document.getElementById('newNoise').value);
        if (newNoise >= 0 && newNoise <= 100) {
          Noise = newNoise;
          updateDisplay02();
        }
      }

      function updateOnEnterNoise(event) {
        if (event.keyCode === 13) {
          updateNoise();
        }
      }

      function updateDisplay02() {
        var NoiseDisplay = document.getElementById('Noise');
        NoiseDisplay.innerHTML = Noise + ' Db';

        var alertDisplay02 = document.getElementById('alert02');
        if (Noise > 30) {
          alertDisplay02.innerHTML = 'Cảnh báo: Độ ồn quá cao!';
        } else {
          alertDisplay02.innerHTML = '';
        }
      }

      updateDisplay02();

//humidity
var Humidity = 50;

      function updateHumidity() {
        var newHumidity = parseInt(document.getElementById('newHumidity').value);
        if (newHumidity >= 0 && newHumidity <= 100) {
          Humidity = newHumidity;
          updateDisplay03();
        }
      }

      function updateOnEnterHumidity(event) {
        if (event.keyCode === 13) {
          updateHumidity();
        }
      }

      function updateDisplay03() {
        var HumidityDisplay = document.getElementById('Humidity');
        HumidityDisplay.innerHTML = Humidity + '%';

        var alertDisplay = document.getElementById('alert03');
        if (Humidity < 40 ) {
          alertDisplay.innerHTML = 'Cảnh báo: Độ ẩm dưới 40%';
        } else if( Humidity >90 ){
          alertDisplay.innerHTML = 'Cảnh báo: Độ ẩm quá 90%';
        }else{
          alertDisplay.innerHTML = '';
        }
      }

      updateDisplay03();

      //blink
      // đèn
      fetch( "https://blynk.cloud/external/api/get?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V1" )
      .then((response) => response.json())
      .then((data) => {
        if( data == 1){
          lampImg.src = "./assets/img/light-bulb.png";
          isOn01 = !isOn01;
        }else{
          isOn01 = !isOn01;
          lampImg.src = "./assets/img/turned-off.png";
        }
        // console.log(data)
      }
      );

      // nhiệt
      fetch( "https://blynk.cloud/external/api/get?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V0" )
      .then((response) => response.json())
      .then((data) => {
        if( data == 1){
          sTempImg.src = "./assets/img/temperature.png";
          isOn02 = !isOn02;
        }else{
          isOn02 = !isOn02;
          sTempImg.src = "./assets/img/cold.png";
        }
        // console.log(data)
      }
      );
      // độ ẩm
      fetch( "https://blynk.cloud/external/api/get?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V3" )
      .then((response) => response.json())
      .then((data) => {
        if( data == 1){
          sHumidityImg.src = "./assets/img/humidity1.png";
          isOn03 = !isOn03;
        }else{
          isOn03 = !isOn03;
          sHumidityImg.src = "./assets/img/humidity.png";
        }
        // console.log(data)
      }
      );

      // fetch( "https://blynk.cloud/external/api/get?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V0" )
      // .then((response) => response.json())
      // .then((data) => console.log(data)); 

      // fetch("https://blynk.cloud/external/api/batch/update?token=L60La6eNjOXHgvT3UxmDRozL6MTiwNLt&V1=1&V0=1")
      // .then((response) => response.json())
      // .then((data) => console.log(data));