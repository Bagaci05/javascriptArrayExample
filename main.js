let cars = []; //létrehozom a listát az autúknak
let cost = []; //létrehozom a listát az áraknak

let numberOfItems = prompt("Hány árúcikket szeretnél a listához adni ?"); //Megkérdezzük, hány elemet szeretne a listába rakni
for (let i = 0; i < numberOfItems; i++) {
  //Ismétlőciklus létrehozása
  cars.push(
    //listához hozzáadjuk az elemet amit be fogunk kérni
    prompt(
      //Bekérjük az elemet
      parseInt(i + 1) + ". Autó neve"
    )
  );

  cost.push(
    //listához hozzáadjuk az elemet amit be fogunk kérni
    prompt(
      //Bekérjük az elemet
      parseInt(i + 1) + ". Autó ára"
    )
  );
}

let finalText = "Az autóink és áraik: \n"; //Létrehozunk egy végső szöveget anit ki fogunk írni
for (let i = 0; i < cars.length; i++) {
  //Ismétlő cikls ami végigfuta listánk elemein (Meg lehet oldani for in-el is)
  finalText += " " + cars[i] + " " + cost[i] + "\n"; //hozzáadjuk a végső szöveghez az autóinkat és az áraikat
}
alert(finalText); //Kiírjuk a végső szöveget
