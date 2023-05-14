function openNav() {
  document.getElementById("mySidenav").style.width = "380px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// korean 1
function KMenuModal1() {
  let str = `
            <div id="myModal" class="modal"  >
                <div class="modal-content">
                    <div class="modalHeader">
                        <h1>PRODUCT DETAILS</h1>
                        <div class="modalLine"></div>
                    </div>
                    <div class="modalBody">
                        <h1>Gimbap</h1>
                        <img class="menuimg" src="/Menu/Korean1.jpg" alt="" class="prodImg" />
                        <h2>Gimbap, also romanized as kimbap, is a Korean dish made from cooked rice, vegetables, fish, and meat rolled in gim—dried sheets of seaweed—and served in bite-sized slices..</h2>
                    </div>
                    <div class="modalFooter">
                        <div class="modalButtonCont">
                            <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                            <button class="modalBtn modalBanBtn" onclick="Kaddtocart1()">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
                `;
  $("#modal-details").append(str);
}

function Kaddtocart1() {
  let str = `
    <tr class="" id="trItem1">
        <td>Gimbap</td>
        <td><input class="ittl" type="number" value="75" disabled></td>
        <td>
        <input id="qty1" class="qty" type="number" value="1">
        </td>
    </tr>
    `;
  $("#orders").append(str);
  updateGrandTotal();
}

// korean 2
function KMenuModal2() {
  let str = `
              <div id="myModal" class="modal"  >
                  <div class="modal-content">
                      <div class="modalHeader">
                          <h1>PRODUCT DETAILS</h1>
                          <div class="modalLine"></div>
                      </div>
                      <div class="modalBody">
                          <h1>Tteokbokki</h1>
                          <img class="menuimg" src="/Menu/Korean2.jpg" alt="" class="prodImg" />
                          <h2>Tteokbokki, or simmered rice cake, is a popular Korean food made from small-sized garae-tteok called tteokmyeon or commonly tteokbokki-tteok. Eomuk, boiled eggs, and scallions are some common ingredients paired with tteokbokki in dishes.</h2>
                      </div>
                      <div class="modalFooter">
                          <div class="modalButtonCont">
                              <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                              <button class="modalBtn modalBanBtn" onclick="Kaddtocart2()">ADD TO CART</button>
                          </div>
                      </div>
                  </div>
              </div>
                  `;
  $("#modal-details").append(str);
}

function Kaddtocart2() {
  let str = `
      <tr class="" id="trItem1">
          <td>Gimbap</td>
          <td><input class="ittl" type="number" value="110" disabled></td>
          <td>
          <input id="qty1" class="qty" type="number" value="1">
          </td>
      </tr>
      `;
  $("#orders").append(str);
  updateGrandTotal();
}

// korean 3
function KMenuModal3() {
  let str = `
                <div id="myModal" class="modal"  >
                    <div class="modal-content">
                        <div class="modalHeader">
                            <h1>PRODUCT DETAILS</h1>
                            <div class="modalLine"></div>
                        </div>
                        <div class="modalBody">
                            <h1>Bibimbap</h1>
                            <img class="menuimg" src="/Menu/Korean3.jpg" alt="" class="prodImg" />
                            <h2>Bibimbap, sometimes romanized as bi bim bap or bi bim bop, is a Korean rice dish. The term bibim means "mixing" and bap is cooked rice. It is served as a bowl of warm white rice topped with namul and gochujang. Egg and sliced meat are common additions, stirred together thoroughly just before eating.</h2>
                        </div>
                        <div class="modalFooter">
                            <div class="modalButtonCont">
                                <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                <button class="modalBtn modalBanBtn" onclick="Kaddtocart3()">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
  $("#modal-details").append(str);
}

function Kaddtocart3() {
  let str = `
        <tr class="" id="trItem1">
            <td>Gimbap</td>
            <td><input class="ittl" type="number" value="90" disabled></td>
            <td> 
            <input id="qty1" class="qty" type="number" value="1">
            </td>
        </tr>
        `;
  $("#orders").append(str);
  updateGrandTotal();
}

// korean 4
function KMenuModal4() {
  let str = `
                  <div id="myModal" class="modal"  >
                      <div class="modal-content">
                          <div class="modalHeader">
                              <h1>PRODUCT DETAILS</h1>
                              <div class="modalLine"></div>
                          </div>
                          <div class="modalBody">
                              <h1>Kimchi</h1>
                              <img class="menuimg" src="/Menu/Korean4.jpg" alt="" class="prodImg" />
                              <h2>Kimchi, is a traditional Korean banchan consisting of salted and fermented vegetables, most commonly using napa cabbage or Korean radish. A wide selection of seasonings are used, including gochugaru, spring onions, garlic, ginger, and jeotgal, etc. Kimchi is also used in a variety of soups and stews.</h2>
                          </div>
                          <div class="modalFooter">
                              <div class="modalButtonCont">
                                  <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                  <button class="modalBtn modalBanBtn" onclick="Kaddtocart4()">ADD TO CART</button>
                              </div>
                          </div>
                      </div>
                  </div>
                      `;
  $("#modal-details").append(str);
}

function Kaddtocart4() {
  let str = `
          <tr class="" id="trItem1">
              <td>Kimchi</td>
              <td><input class="ittl" type="number" value="60" disabled></td>
              <td>
              <input id="qty1" class="qty" type="number" value="1">
              </td>
          </tr>
          `;
  $("#orders").append(str);
  updateGrandTotal();
}

// korean 5
function KMenuModal5() {
  let str = `
                    <div id="myModal" class="modal"  >
                        <div class="modal-content">
                            <div class="modalHeader">
                                <h1>PRODUCT DETAILS</h1>
                                <div class="modalLine"></div>
                            </div>
                            <div class="modalBody">
                                <h1>Samgyetang</h1>
                                <img class="menuimg" src="/Menu/Korean5.jpg" alt="" class="prodImg" />
                                <h2>Samgye-tang or ginseng chicken soup, meaning ginseng - chicken - soup in Korean, consists primarily of a whole young chicken filled with garlic, rice, jujube, and ginseng. Samgye-tang is a Korean traditional soup for body health. Samgye-tang is a representative summer health food.</h2>
                            </div>
                            <div class="modalFooter">
                                <div class="modalButtonCont">
                                    <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                    <button class="modalBtn modalBanBtn" onclick="Kaddtocart5()">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
  $("#modal-details").append(str);
}

function Kaddtocart5() {
  let str = `
            <tr class="" id="trItem1">
                <td>Samgyetang</td>
                <td><input class="ittl" type="number" value="150" disabled></td>
                <td>
                <input id="qty1" class="qty" type="number" value="1">
                </td>
            </tr>
            `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Filipino 1
function FMenuModal1() {
  let str = `
              <div id="myModal" class="modal"  >
                  <div class="modal-content">
                      <div class="modalHeader">
                          <h1>PRODUCT DETAILS</h1>
                          <div class="modalLine"></div>
                      </div>
                      <div class="modalBody">
                          <h1>Kare-Kare</h1>
                          <img class="menuimg" src="/Menu/Filipino1.jpg" alt="" class="prodImg" />
                          <h2>Kare-kare is a Philippine stew that features a thick savory peanut sauce. It is generally made from a base of stewed oxtail, beef tripe, pork hocks, calves' feet, pig's feet or trotters, various cuts of pork, beef stew meat, and occasionally offal.</h2>
                      </div>
                      <div class="modalFooter">
                          <div class="modalButtonCont">
                              <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                              <button class="modalBtn modalBanBtn" onclick="Faddtocart1()">ADD TO CART</button>
                          </div>
                      </div>
                  </div>
              </div>
                  `;
  $("#modal-details").append(str);
}

function Faddtocart1() {
  let str = `
      <tr class="" id="trItem1">
          <td>Kare-Kare</td>
          <td><input class="ittl" type="number" value="70" disabled></td>
          <td>
          <input id="qty1" class="qty" type="number" value="1">
          </td>
      </tr>
      `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Filipino 2
function FMenuModal2() {
  let str = `
                <div id="myModal" class="modal"  >
                    <div class="modal-content">
                        <div class="modalHeader">
                            <h1>PRODUCT DETAILS</h1>
                            <div class="modalLine"></div>
                        </div>
                        <div class="modalBody">
                            <h1>Adobong Manok</h1>
                            <img class="menuimg" src="/Menu/Filipino2.jpg" alt="" class="prodImg" />
                            <h2>Adobong manok, often called "chicken adobo," is often considered the national dish of the Philippines. Although the origins of its name are are with the Spanish colonizers — adobo is the Spanish word for a marinade — Filipinos have been making tart, vinegar-based dishes since time immemorial.</h2>
                        </div>
                        <div class="modalFooter">
                            <div class="modalButtonCont">
                                <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                <button class="modalBtn modalBanBtn" onclick="Faddtocart2()">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
  $("#modal-details").append(str);
}

function Faddtocart2() {
  let str = `
        <tr class="" id="trItem1">
            <td>Adobong Manok</td>
            <td><input class="ittl" type="number" value="70" disabled></td>
            <td>
            <input id="qty1" class="qty" type="number" value="1">
            </td>
        </tr>
        `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Filipino 3
function FMenuModal3() {
  let str = `
                  <div id="myModal" class="modal"  >
                      <div class="modal-content">
                          <div class="modalHeader">
                              <h1>PRODUCT DETAILS</h1>
                              <div class="modalLine"></div>
                          </div>
                          <div class="modalBody">
                              <h1>Laing</h1>
                              <img class="menuimg" src="/Menu/Filipino3.jpg" alt="" class="prodImg" />
                              <h2>Laing, is a Filipino dish of shredded or whole taro leaves with meat or seafood cooked in thick coconut milk spiced with labuyo chili, lemongrass, garlic, shallots, ginger, and shrimp paste. It originates from the Bicol Region, where it is known simply as pinangat</h2>
                          </div>
                          <div class="modalFooter">
                              <div class="modalButtonCont">
                                  <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                  <button class="modalBtn modalBanBtn" onclick="Faddtocart3()">ADD TO CART</button>
                              </div>
                          </div>
                      </div>
                  </div>
                      `;
  $("#modal-details").append(str);
}

function Faddtocart3() {
  let str = `
          <tr class="" id="trItem1">
              <td>Laing</td>
              <td><input class="ittl" type="number" value="50" disabled></td>
              <td>
              <input id="qty1" class="qty" type="number" value="1">
              </td>
          </tr>
          `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Filipino 4
function FMenuModal4() {
  let str = `
                    <div id="myModal" class="modal"  >
                        <div class="modal-content">
                            <div class="modalHeader">
                                <h1>PRODUCT DETAILS</h1>
                                <div class="modalLine"></div>
                            </div>
                            <div class="modalBody">
                                <h1>Kaldereta</h1>
                                <img class="menuimg" src="/Menu/Filipino4.jpg" alt="" class="prodImg" />
                                <h2>Kaldereta or caldereta is a goat meat stew from the Philippines. Variations of the dish use beef, chicken, or pork. Commonly, the goat meat is stewed with vegetables and liver paste. Vegetables may include tomatoes, potatoes, olives, bell peppers, and hot peppers. Kaldereta sometimes includes tomato sauce.</h2>
                            </div>
                            <div class="modalFooter">
                                <div class="modalButtonCont">
                                    <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                    <button class="modalBtn modalBanBtn" onclick="Faddtocart4()">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
  $("#modal-details").append(str);
}

function Faddtocart4() {
  let str = `
            <tr class="" id="trItem1">
                <td>Kaldereta</td>
                <td><input class="ittl" type="number" value="80" disabled></td>
                <td>
                <input id="qty1" class="qty" type="number" value="1">
                </td>
            </tr>
            `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Filipino 5
function FMenuModal5() {
  let str = `
                      <div id="myModal" class="modal"  >
                          <div class="modal-content">
                              <div class="modalHeader">
                                  <h1>PRODUCT DETAILS</h1>
                                  <div class="modalLine"></div>
                              </div>
                              <div class="modalBody">
                                  <h1>Menudo</h1>
                                  <img class="menuimg" src="/Menu/Filipino5.webp" alt="" class="prodImg" />
                                  <h2>Menudo, also known as ginamay or ginagmay, is a traditional stew from the Philippines made with pork and sliced liver in tomato sauce with carrots and potatoes. Unlike the Mexican dish of the same name, it does not use tripe or red chili sauce.</h2>
                              </div>
                              <div class="modalFooter">
                                  <div class="modalButtonCont">
                                      <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                      <button class="modalBtn modalBanBtn" onclick="Faddtocart5()">ADD TO CART</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                          `;
  $("#modal-details").append(str);
}

function Faddtocart5() {
  let str = `
              <tr class="" id="trItem1">
                  <td>Menudo</td>
                  <td><input class="ittl" type="number" value="80" disabled></td>
                  <td>
                  <input id="qty1" class="qty" type="number" value="1">
                  </td>
              </tr>
              `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Coffee 1
function CMenuModal1() {
  let str = `
                <div id="myModal" class="modal"  >
                    <div class="modal-content">
                        <div class="modalHeader">
                            <h1>PRODUCT DETAILS</h1>
                            <div class="modalLine"></div>
                        </div>
                        <div class="modalBody">
                            <h1>Cappucino</h1>
                            <img class="menuimg" src="/Menu/Coffee-Cappucino.jpg" alt="" class="prodImg" />
                            <h2>A cappuccino is an espresso-based coffee drink and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.</h2>
                        </div>
                        <div class="modalFooter">
                            <div class="modalButtonCont">
                                <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                <button class="modalBtn modalBanBtn" onclick="Caddtocart1()">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
  $("#modal-details").append(str);
}

function Caddtocart1() {
  let str = `
        <tr class="" id="trItem1">
            <td>Cappucino</td>
            <td><input class="ittl" type="number" value="60" disabled></td>
            <td>
            <input id="qty1" class="qty" type="number" value="1">
            </td>
        </tr>
        `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Coffee 2
function CMenuModal2() {
  let str = `
                  <div id="myModal" class="modal"  >
                      <div class="modal-content">
                          <div class="modalHeader">
                              <h1>PRODUCT DETAILS</h1>
                              <div class="modalLine"></div>
                          </div>
                          <div class="modalBody">
                              <h1>Dark Coffee</h1>
                              <img class="menuimg" src="/Menu/Coffee-Dark.jpg" alt="" class="prodImg" />
                              <h2>Dark Roast coffees are dark brown, even close to a blackened color. The beans are characterized by drawn-out oil that glosses the surface. Coffee made from a Dark Roast has a robust, full body. The flavors from the coffee's country of origin are almost entirely roasted out, taking on a very bold and smoky taste.</h2>
                          </div>
                          <div class="modalFooter">
                              <div class="modalButtonCont">
                                  <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                  <button class="modalBtn modalBanBtn" onclick="Caddtocart2()">ADD TO CART</button>
                              </div>
                          </div>
                      </div>
                  </div>
                      `;
  $("#modal-details").append(str);
}

function Caddtocart2() {
  let str = `
          <tr class="" id="trItem1">
              <td>Dark Coffee</td>
              <td><input class="ittl" type="number" value="50" disabled></td>
              <td>
              <input id="qty1" class="qty" type="number" value="1">
              </td>
          </tr>
          `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Coffee 3
function CMenuModal3() {
  let str = `
                    <div id="myModal" class="modal"  >
                        <div class="modal-content">
                            <div class="modalHeader">
                                <h1>PRODUCT DETAILS</h1>
                                <div class="modalLine"></div>
                            </div>
                            <div class="modalBody">
                                <h1>Espresso</h1>
                                <img class="menuimg" src="/Menu/Coffee-Espresso.webp" alt="" class="prodImg" />
                                <h2>Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees.</h2>
                            </div>
                            <div class="modalFooter">
                                <div class="modalButtonCont">
                                    <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                    <button class="modalBtn modalBanBtn" onclick="Caddtocart3()">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
  $("#modal-details").append(str);
}

function Caddtocart3() {
  let str = `
            <tr class="" id="trItem1">
                <td>Espresso</td>
                <td><input class="ittl" type="number" value="80" disabled></td>
                <td>
                <input id="qty1" class="qty" type="number" value="1">
                </td>
            </tr>
            `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Coffee 4
function CMenuModal4() {
  let str = `
                      <div id="myModal" class="modal"  >
                          <div class="modal-content">
                              <div class="modalHeader">
                                  <h1>PRODUCT DETAILS</h1>
                                  <div class="modalLine"></div>
                              </div>
                              <div class="modalBody">
                                  <h1>Coffee Latte</h1>
                                  <img class="menuimg" src="/Menu/Coffee-Latte.jpg" alt="" class="prodImg" />
                                  <h2>Caffè latte, often shortened to just latte in English, is a coffee drink of Italian origin made with espresso and steamed milk.</h2>
                              </div>
                              <div class="modalFooter">
                                  <div class="modalButtonCont">
                                      <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                      <button class="modalBtn modalBanBtn" onclick="Caddtocart4()">ADD TO CART</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                          `;
  $("#modal-details").append(str);
}

function Caddtocart4() {
  let str = `
              <tr class="" id="trItem1">
                  <td>Coffee Latte</td>
                  <td><input class="ittl" type="number" value="90" disabled></td>
                  <td>
                  <input id="qty1" class="qty" type="number" value="1">
                  </td>
              </tr>
              `;
  $("#orders").append(str);
  updateGrandTotal();
}

// Coffee 5
function CMenuModal5() {
  let str = `
                        <div id="myModal" class="modal"  >
                            <div class="modal-content">
                                <div class="modalHeader">
                                    <h1>PRODUCT DETAILS</h1>
                                    <div class="modalLine"></div>
                                </div>
                                <div class="modalBody">
                                    <h1>Cortado</h1>
                                    <img class="menuimg" src="/Menu/Coffee_Cortado.jpg" alt="" class="prodImg" />
                                    <h2>A cortado is a beverage consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity. The milk in a cortado is steamed, but not frothy and "texturized" as in many Italian coffee drinks. The cortado comes from Spain, most likely Madrid, where it is commonly served.</h2>
                                </div>
                                <div class="modalFooter">
                                    <div class="modalButtonCont">
                                        <button class="modalBtn modalCancelBtn" id="modalCancel" onclick="closeModal()">CLOSE</button>
                                        <button class="modalBtn modalBanBtn" onclick="Caddtocart5()">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            `;
  $("#modal-details").append(str);
}

function Caddtocart5() {
  let str = `
                <tr class="" id="trItem1">
                    <td>Cortado</td>
                    <td><input class="ittl" type="number" value="75" disabled></td>
                    <td>
                    <input id="qty1" class="qty" type="number" value="1">
                    </td>
                </tr>
                `;
  $("#orders").append(str);
  updateGrandTotal();
}

// close modal
function closeModal() {
  $("#modal-details").empty();
}

function updateGrandTotal() {
  const itemTotalInputs = document.querySelectorAll(".ittl");
  let total = 0;
  itemTotalInputs.forEach((input) => {
    total += parseInt(input.value);
  });
  const grandTotalElement = document.getElementById("grand_total");
  grandTotalElement.textContent = "₱" + total;
}

function number_spinner_plus(id) {
  // console.log("plus okay");
  field = document.getElementById("qty" + id);
  itemtl = document.getElementById("ittl" + id);

  // Get its current value
  var qtyVal = parseInt(field.value);
  var ittlVal = parseInt(itemtl.value);
  var ittlDefVal = parseInt(itemtl.defaultValue);

  // If is not undefined
  if (!isNaN(qtyVal)) {
    // Increment
    field.value = qtyVal + 1;
    itemtl.value = ittlVal + ittlDefVal;
    updateGrandTotal();
    // grtlVal.value = item1.value;
  } else {
    // Otherwise put a 0 there
    field.value = 1;
  }
}
// This button will decrement the value
function number_spinner_minus(id) {
  // console.log("minus okay");
  field = document.getElementById("qty" + id);
  itemtl = document.getElementById("ittl" + id);

  // Get its current value
  var qtyVal = parseInt(field.value);
  var ittlVal = parseInt(itemtl.value);
  var ittlDefVal = parseInt(itemtl.defaultValue);

  // If it isn't undefined or its greater than 0
  if (!isNaN(qtyVal) && qtyVal > 1) {
    // Decrement one
    field.value = qtyVal - 1;
    itemtl.value = ittlVal - ittlDefVal;
    updateGrandTotal();
  } else {
    // Otherwise put a 1 there
    field.value = 1;
  }
}
