console.log("Inheritance");
console.log("");

class Kendaraan {
  nyalakanKlakson() {
    console.log("Tiinnnnn!!!!");
  }
}

class Mobil extends Kendaraan {
  nyalakanKlakson() {
    console.log("Teloleet!!!!");
  }
}
class Motor extends Kendaraan {
  nyalakanKlakson() {
    console.log("Titinnn!!!!");
  }
}
class Sepeda extends Kendaraan {
  nyalakanKlakson() {
    console.log("Kring!");
  }
}

const kendaraan = new Kendaraan();
const mobil = new Mobil();
const motor = new Motor();
const sepeda = new Sepeda();

kendaraan.nyalakanKlakson();
mobil.nyalakanKlakson();
motor.nyalakanKlakson();
sepeda.nyalakanKlakson();
