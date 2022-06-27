
let Temperature = function (celsius) {
    this.celsius = celsius;
    this.getFahrenheit = function () {
        return 9/5 * this.celsius + 32;
    }
    this.getKalvin = function () {
        return this.celsius + 273.15;
    }
}
let celsius = new Temperature(25);
let Fahrenheit = celsius.getFahrenheit();
let Kalvin = celsius.getKalvin();
document.write('Nhiet do F : ' + Fahrenheit + '<br>');
document.write('Nhiet do K : ' + Kalvin);

