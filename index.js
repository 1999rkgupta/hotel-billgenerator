function handleChange() {
  var menuType = document.getElementsByName("food");
  for (i = 0; i < menuType.length; i++) {
    if (menuType[i].checked) {
      let menuSelected = menuType[i].value;
      if (menuSelected == "veg") {
        let vegMenu = async () => {
          let data = await window.fetch("./menu.json");
          let finalData = await data.json();
          //   console.log(finalData);
          finalData.map(val => {
            let veg = val.veg;
            document.getElementById("dropdown").innerHTML = "";
            // console.log(veg);
            for (i of veg) {
              //   console.log(i.name);
              document.getElementById(
                "dropdown"
              ).innerHTML += `<option>${i.name}</option>`;
            }
          });
        };
        vegMenu();
      } else {
        let nonVegMenu = async () => {
          let data = await window.fetch("./menu.json");
          let finalData = await data.json();
          //   console.log(finalData);
          finalData.map(val => {
            document.getElementById("dropdown").innerHTML = "";
            let veg = val.nonVeg;
            // console.log(veg);
            for (i of veg) {
              //   console.log(i.name);

              document.getElementById(
                "dropdown"
              ).innerHTML += `<option>${i.name}</option>`;
            }
          });
        };
        nonVegMenu();
      }
    }
  }
}

let str = "";
let form = document.querySelector("#menuForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  str = e.target[3].value;
  let formSub = async () => {
    let data = await window.fetch("./menu.json");
    let finalData = await data.json();
    console.log(str);
    finalData.map(val => {
      let veg = val.nonVeg;
      console.log(val);
    });
  };
  formSub();
});