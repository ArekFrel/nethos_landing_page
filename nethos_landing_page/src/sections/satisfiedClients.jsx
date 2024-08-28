import bmwLogo from "../img/make-logo-color-bmw.svg";
import fordLogo from "../img/make-logo-color-ford.svg";
import peugeotLogo from "../img/make-logo-color-peugeot.svg";
import toyotaLogo from "../img/make-logo-color-toyota.svg";
import vwLogo from "../img/make-logo-color-volkswagen.svg";
import volvoLogo from "../img/make-logo-color-volvo.svg";

export const CLIENTS = [
  {
    id: 1,
    name: "Ford",
    pic: fordLogo,
    receommend: "text polecający usługi nethos od klienta."
  },
  {
    id: 2,
    name: "bmw",
    pic: bmwLogo,
    receommend: "text polecający usługi nethos od klienta."
  },
  {
    id: 3,
    name: "peugeot",
    pic: peugeotLogo,
    receommend: "text polecający usługi nethos od klienta."
  },
  {
    id: 4,
    name: "volvo",
    pic: volvoLogo,
    receommend: "text polecający usługi nethos od klienta."
  },
  {
    id: 5,
    name: "toyota",
    pic: toyotaLogo,
    receommend: "text polecający usługi nethos od klienta."
  },
  {
    id: 6,
    name: "volkswagen",
    pic: vwLogo,
    receommend: "text polecający usługi nethos od klienta."
  },
];

export const clientsNum = CLIENTS.length

export const SIZES = {
  width: 300,
  height: 150,
  extraSpace: 100,
}
