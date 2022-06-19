// recuperer tout les valeur du signup
//create Object
//reccupere tt les valeurs de add product
//create object
//all  script functions
//Function signup that registrer users
function signup() {
    //alert("function works!!");
    //recuperer tous les valeurs du signup :get impmut value
    var firstName = document.getElementById("firstName").value;
    // checklength(firstName, 3);
    //appel de la fct de validation
    var isFirstNameValid = checklength(firstName, 3);
    if (isFirstNameValid != true) {
        document.getElementById("firstNameError").innerHTML = "please check your first name";
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    var lastName = document.getElementById("lastName").value;
    ////
    var isLastNameValid = checklength(lastName, 5);
    if (isLastNameValid != true) {
        document.getElementById("lastNameError").innerHTML = "please check your last name";
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }
    ///////
    //var role = 0;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    ////////
    var isPasswordValid = checklength(password, 6);
    if (isPasswordValid == false) {
        document.getElementById("passwordError").innerHTML = "please check your password";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
    ///////

    /////////////
    var confirmerPassword = document.getElementById("confirmerPassword").value;
    /////

    var isConfirmPwdValid = isEquals(password, confirmerPassword);
    if (isConfirmPwdValid == false) {
        document.getElementById("confirmerpasswordError").innerHTML = "please check your password";

    } else {
        document.getElementById("confirmerpasswordError").innerHTML = "";

    }

    ////
    var tel = document.getElementById("tel").value;
    ///////////
    var isTelValid = checktel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telError").innerHTML = "please check your tel";
    } else {
        document.getElementById("telError").innerHTML = "";
    }




    //////////////////////

    //create Object

    //1ere methode
    /*  var user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.confirmerPassword = confirmerPassword;
    user.tel = tel;

    return user;


} */


    if (isFirstNameValid == true && isLastNameValid && isPasswordValid && isTelValid) { //isfirstnamee== tree hya nafsha isfirstnamee
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]"); //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
        //2emee methode plus pratique
        var user = {
            id: generateId(usersTab) + 1,
            role: "client",

            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmerPassword: confirmerPassword,
            tel: tel

            //  return user
        };
        //stocker 
        // localStorage.setItem("users", "user");// yasna3 cle  users w y7ot fih lobjet user on doit conertir user en chaine
        //save object to localstorage
        //json.strigify :convertir object to strig
        //setilem :save value into ls
        //localStorage.setItem("users", JSON.stringify(user));
        // var usersTab=[];
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));



    }
}
////////////////////////////////////
function signupAdmin() {
    //alert("function works!!");
    //recuperer tous les valeurs du signup :get impmut value
    var firstName = document.getElementById("firstNameAdmin").value;
    // checklength(firstName, 3);
    //appel de la fct de validation
    var isFirstNameValid = checklength(firstName, 3);
    if (isFirstNameValid != true) {
        document.getElementById("firstNameErrorAdmin").innerHTML = "please check your first name";
    } else {
        document.getElementById("firstNameErrorAdmin").innerHTML = "";
    }

    var lastName = document.getElementById("lastNameAdmin").value;
    ////
    var isLastNameValid = checklength(lastName, 5);
    if (isLastNameValid != true) {
        document.getElementById("lastNameErrorAdmin").innerHTML = "please check your last name";
    } else {
        document.getElementById("lastNameErrorAdmin").innerHTML = "";
    }
    ///////
    //var role = 0;
    //var role = "Admin";

    var email = document.getElementById("emailAdmin").value;
    var password = document.getElementById("passwordAdmin").value;
    ////////
    var isPasswordValid = checklength(password, 6);
    if (isPasswordValid == false) {
        document.getElementById("passwordErrorAdmin").innerHTML = "please check your password";
    } else {
        document.getElementById("passwordErrorAdmin").innerHTML = "";
    }
    ///////

    /////////////
    var confirmerPassword = document.getElementById("confirmerPasswordAdmin").value;
    /////

    var isConfirmPwdValid = isEquals(password, confirmerPassword);
    if (isConfirmPwdValid == false) {
        document.getElementById("confirmerpasswordErrorAdmin").innerHTML = "please check your password";

    } else {
        document.getElementById("confirmerpasswordErrorAdmin").innerHTML = "";

    }

    ////
    var tel = document.getElementById("telAdmin").value;
    ///////////
    var isTelValid = checktel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telErrorAdmin").innerHTML = "please check your tel";
    } else {
        document.getElementById("telErrorAdmin").innerHTML = "";
    }




    if (isFirstNameValid == true && isLastNameValid && isPasswordValid && isTelValid) { //isfirstnamee== tree hya nafsha isfirstnamee
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]"); //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
        //2emee methode plus pratique
        var user = {
            id: generateId(usersTab) + 1,
            role: "admin",

            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmerPassword: confirmerPassword,
            tel: tel

            //  return user
        };
        //stocker 
        // localStorage.setItem("users", "user");// yasna3 cle  users w y7ot fih lobjet user on doit conertir user en chaine
        //save object to localstorage
        //json.strigify :convertir object to strig
        //setilem :save value into ls
        //localStorage.setItem("users", JSON.stringify(user));
        // var usersTab=[];
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));



    }
}
///////////////////
function signUpStore() {
    //alert("function works!!");
    //recuperer tous les valeurs du signup :get impmut value
    var firstName = document.getElementById("firstNameStore").value;
    var NameStore = document.getElementById("NameStore").value;
    var AdressesStore = document.getElementById("AdressesStore").value;

    // checklength(firstName, 3);
    //appel de la fct de validation
    var isNameStoreValid = checklength(NameStore, 4);
    if (isNameStoreValid != true) {
        document.getElementById("NameStoreError").innerHTML = "please check a name of your store ";
    } else {
        document.getElementById("NameStoreError").innerHTML = "";
    }
    var isFirstNameValid = checklength(firstName, 3);

    if (isFirstNameValid != true) {
        document.getElementById("firstNameErrorStore").innerHTML = "please check your first name";
    } else {
        document.getElementById("firstNameErrorStore").innerHTML = "";
    }

    var lastName = document.getElementById("lastNameStore").value;
    ////
    var isLastNameValid = checklength(lastName, 5);
    if (isLastNameValid != true) {
        document.getElementById("lastNameErrorStore").innerHTML = "please check your last name";
    } else {
        document.getElementById("lastNameErrorStore").innerHTML = "";
    }
    ///////
    //var role = 0;
    //var role = "Admin";

    var email = document.getElementById("emailStore").value;
    var password = document.getElementById("passwordStore").value;
    ////////
    var isPasswordValid = checklength(password, 6);
    if (isPasswordValid == false) {
        document.getElementById("passwordErrorStore").innerHTML = "please check your password";
    } else {
        document.getElementById("passwordErrorStore").innerHTML = "";
    }
    ///////

    /////////////
    var confirmerPassword = document.getElementById("confirmerPasswordStore").value;
    /////

    var isConfirmPwdValid = isEquals(password, confirmerPassword);
    if (isConfirmPwdValid == false) {
        document.getElementById("confirmerpasswordErrorStore").innerHTML = "please check your password";

    } else {
        document.getElementById("confirmerpasswordErrorStore").innerHTML = "";

    }

    ////
    var tel = document.getElementById("telStore").value;
    ///////////
    var isTelValid = checktel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telErrorStore").innerHTML = "please check your tel";
    } else {
        document.getElementById("telErrorStore").innerHTML = "";
    }




    if (isFirstNameValid == true && isLastNameValid && isPasswordValid && isTelValid && isNameStoreValid) { //isfirstnamee== tree hya nafsha isfirstnamee
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]"); //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
        //2emee methode plus pratique
        var user = {
            id: generateId(usersTab) + 1,
            role: "Store",
            statut: "not ok",
            NameStore: NameStore,


            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmerPassword: confirmerPassword,
            tel: tel,
            AdressesStore: AdressesStore
                //  return user
        };
        //stocker 
        // localStorage.setItem("users", "user");// yasna3 cle  users w y7ot fih lobjet user on doit conertir user en chaine
        //save object to localstorage
        //json.strigify :convertir object to strig
        //setilem :save value into ls
        //localStorage.setItem("users", JSON.stringify(user));
        // var usersTab=[];
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));



    }
}


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function addProduct() {
    //alert("function works!!");
    //recuperer tous les valeurs du signup
    //Get input value
    var prName = document.getElementById("prName").value;
    /////
    //just pour l affichage
    var isPriceNameValid = checklength(prName, 4);
    if (isPriceNameValid == false) {
        document.getElementById("prNameError").innerHTML = "please check product  name";
    } else {
        document.getElementById("prNameError").innerHTML = "";
    }
    /////
    var prPrice = document.getElementById("prPrice").value;
    ////
    // var price = document.getElementById("price").value;
    //
    var isPriceValid = checkNumbeer(prPrice, 0);
    if (isPriceValid != true) {
        document.getElementById("priceError").innerHTML = "please check  price";
    } else {
        document.getElementById("priceError").innerHTML = "";
    }
    ////////////////
    var prStock = document.getElementById("prStock").value;
    /////////////////////////////////////////
    var isStockValid = checkNumbeer(prStock, 20);
    if (isStockValid != true) {
        document.getElementById("stockError").innerHTML = "stock >20";
        document.getElementById("stockError").style.color = "red";
    } else {
        document.getElementById("stockError").innerHTML = "";
    }

    //////////////////////
    var prCategories = document.getElementById("prCategories").value;


    //create Object
    //alert(name);
    //create JSON OBJECT
    if (isPriceNameValid && isPriceValid && isStockValid) {
        var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
        var product = {
            id: generateId(productsTab) + 1,
            prName: prName,
            prPrice: prPrice,
            prStock: prStock,
            prCategories: prCategories


            //  return obj;


        };
        //alert(add());
        //mchit lil ls ta7didan lel cle products w jebt menha la valeur, 
        //w au cas ou mal9itch la cle ;raja3 un tableau vide
        //w sabitou dans une variable esmha productsTab



        //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
        //zt// poushit un objet esmou product dans un tableau esmou productsTab
        productsTab.push(product);
        //rajja3t tt le tab productsTab les ls ta7didan fil cle products
        //ba3d ma9lebtou strig
        localStorage.setItem("products", JSON.stringify(productsTab));
        location.replace("products.html"); ///rederiger vers index.html

        ///////////////////////////////


        /* meth1
        function checklength(ch1, nbr) {
            if (ch.length < nbr) {
        reurn false;


            } else { return true; }
        }*/
        //meth2
        ///////////les validations

        //////////////////fct  qui retourne max prix

        //alert(maxprice(t));
        /// var usersTab1 = (localStorage.getItem("product") ); //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
        //usersTab.push(user);
        //localStorage.setItem("users", JSON.stringify(usersTab))
    }
}

function checklength(ch, nbr) {

    return (ch.length >= nbr);
}

function checkNumbeer(val, nbr) {

    return (Number(val > nbr));
}
///////////valider tel
function checktel(tel, nbr) {

    return (tel.length = nbr);
}

function isEquals(ch1, ch2) {
    return ch1 = ch2;
}
//////////////////////////////////


///me
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function() {
//         myInput.focus()
//     })
////////////////////////login////////////////////
function login() {
    //  alert(email);
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    var usersTab = JSON.parse(localStorage.getItem("users")); //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
    var findedUser;

    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == email && usersTab[i].password == password) {

            findedUser = usersTab[i];
            break;
        }

        // alert(findedUser);
    }
    // localStorage.setItem("users", JSON.stringify(usersTab));

    if (findedUser) {
        localStorage.setItem("connectedUserId", findedUser.id); //pour garder le id pour la session
        if (usersTab[i].Role == "client") {
            location.replace("index.html"); ///rederiger vers index.html
        } else if (usersTab[i].Role = "Admin") {
            location.replace("basket.html"); ///rederiger vers index.html

        } else if (usersTab[i].Role = "Store") {
            location.replace("index.html"); ///rederiger vers index.html
        } else {


            document.getElementById("loginError").innerHTML = "please check Email/pass";
            document.getElementById("loginError").style.color = "red";

        }

    }
}



function generateId(t) {
    var max;
    if (t.length == 0) {
        max = 0;
    } else {
        max = t[0].id;
        for (let i = 0; i < t.length; i++) {
            if (t[i].id > max) {
                max = t[i].id;
            }
        }
    }
    return max;
}
//////////////////////////////////create category object in local st (key categories)
function addCategory() {
    var name = document.getElementById("categoryName").value;

    var isNameValid = checklength(name, 4);
    if (isNameValid == false) {
        document.getElementById("ctNameError").innerHTML = "please check category name";
        document.getElementById("ctNameError").style.color = "red";
    } else {
        document.getElementById("ctNameError").innerHTML = "";
    }
    ////////
    if (isNameValid) {
        var categoryTab = JSON.parse(localStorage.getItem("categories") || "[]");
        var category = {
            id: generateId(categoryTab) + 1,
            name: name



            //  return obj;


        };
        categoryTab.push(category);
        //rajja3t tt le tab productsTab les ls ta7didan fil cle products
        //ba3d ma9lebtou strig
        localStorage.setItem("categories", JSON.stringify(categoryTab));
        ///////////////////////////////

    }
}
///////////////////
//function displayproducts generated html bloc t.length
function displayProducts() {
    //get all  from ls
    var productstab = JSON.parse(localStorage.getItem("products") || "[]");
    //productstab=[{id,prname,...},{}...]
    var content = '';
    for (let i = 0; i < productstab.length; i++) {

        content = content + ` 
        <div class="col-lg-4 col-md-6">
       <div class="single-product">
           <img class="img-fluid" src="img/product/p1.jpg" alt="">
           <div class="product-details">
               <h6>${productstab[i].prName}</h6>
               <div class="price">
                   <h6>${productstab[i].prPrice}</h6>
                   <h6 class="l-through">${productstab[i].prCategories} </h6>
               </div>
               <div style="display: flex;">
               <div class="prd-bottom">

               <h6  class="social-info">
               <span class="ti-bag"></span>
               <button type="submit"  style="border: none;margin-left: 0px; background-color: white;" onclick="goTodisplayProduct(${productstab[i].id})">
               <p class="hover-text">view</p> </button>
           </h6>

               </div>
               <div class="prd-bottom">

               <h6  class="social-info">
               <span class="lnr lnr-heart"></span>
               <button type="submit"  style="border: none;margin-left: 0px; background-color: white;" onclick="goTodisplayProduct(${productstab[i].id})">
               <p class="hover-text">ADD </p> </button>
           </h6>

               </div>
               <div class="prd-bottom">

               <h6  class="social-info">
               <span class="lnr lnr-sync"></span>
             <!--  <button  style="border: none;margin-left: 0px; background-color: white;" type="submit" onclick="goToupdateProduct(${productstab[i].id})"> 
               <p class="hover-text">Update </p> </button>
           </h6>

               </div>
               <div class="prd-bottom">

               <h6  class="social-info">
               <span class="lnr lnr-sync"></span>
                 <button  style="border: none;margin-left: 0px; background-color: white;" type="submit" onclick="delete(${productstab[i].id})"> 
               <p class="hover-text">Update </p> </button>
           </h6>

               </div>
               </div>






           </div>
          


       </div>

       </div>

   `;
    }
    document.getElementById("productsDiv").innerHTML = content;
}
////////////////selection produit :les categories dynamiquement


function selectProduct() {


    var selectTab = JSON.parse(localStorage.getItem("categories") || "[]");
    //productstab=[{id,prname,...},{}...]
    var content = ``;
    for (var i = 0; i < selectTab.length; i++) {

        content = content + ` 
                          <option value=${selectTab[i].name}>${selectTab[i].name}</option>
      

   `;
    }

    document.getElementById("categUpdatee").innerHTML = content;

    // content += '</select>';
    document.getElementById("prCategories").innerHTML = content;
    // document.getElementById("catDUpp").innerHTML = content;




}

////////////

function selectProductt() {


    var selectTab = JSON.parse(localStorage.getItem("categories") || "[]");
    //productstab=[{id,prname,...},{}...]
    var content = ``;
    for (let i = 0; i < selectTab.length; i++) {

        content = content + ` 
                          <option value=${selectTab[i].name}>${selectTab[i].name}</option>
      

   `;
    }
    // content += '</select>';
    document.getElementById("catDUpp").innerHTML = content;



}
/////////////////////////////////////
function goTodisplayProduct(id) {
    localStorage.setItem("displayProduct", id); //nasna3 table jdid n7ot fih id (wa7ed bark ili nzelt 3lih bl boutton mta3 detail produit)


    location.replace("productDetails.html");

}
/////////////////upadate Product

function goToupdateProduct(id) {
    localStorage.setItem("updateProduct", id); //nasna3 table jdid n7ot fih id (wa7ed bark ili nzelt 3lih bl boutton mta3 detail produit)


    location.replace("updateProducts.html");

}
//////////////////////////////////update product

////////////////////////////////////////////
function updateProductsDetails() {
    var productstab = JSON.parse(localStorage.getItem("products"));
    var idProduct = JSON.parse(localStorage.getItem("updateProduct")); //retourne id
    var findProduct;
    var findposition;
    for (var i = 0; i < productstab.length; i++) {
        if (idProduct == productstab[i].id) {

            findProduct = productstab[i];
            findposition = i;
            break; //ki nal9ah no5rej

        }
    }

    // document.getElementById("productNameUp").innerHTML = findProduct.prName;
    // document.getElementById("productPriceUp").innerHTML = findProduct.prPrice;

    // document.getElementById("categoriesOfUpdate").innerHTML = findProduct.prCategories;

    // //////condition pour afficher si il ya un stock ou nn

    // document.getElementById("productStockUp").innerHTML = findProduct.prStock;
    // // document.getElementById("productsUpdateId").innerHTML = findProduct.id;

    // var x = selectProduct();
    var content = `
    <div class="row login_form">
                            <label for="">Name of product:</label>

                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="productNameUp" value=${findProduct.prName}>
                                <!-- <span id="prNameError"></span> -->
                            </div>
                            <label for="">Price of product:</label>

                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="productPriceUp" value="${findProduct.prPrice}">
                                <!-- <span id="priceError"></span> -->
                            </div>
                            <label for="">Stock:</label>

                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" id="productStockUp" value="${findProduct.prStock}">
                                <!-- <span id="stockError"></span> -->
                            </div>
                            <!-- <input value="">-->

                            <label for="">category:</label>

                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control"   value="${findProduct.prCategories}" disabled>
                                <!-- <span id="stockError"></span> -->
                            </div>
                            <label for="">Update category</label>
                        </div>
                        <div class="col-md-12 form-group  ">

                            <div class="col-md-12 form-group">
                                <button type="submit" value="submit" class="primary-btn  mt-2" onclick="updateeProduct(${idProduct},${findposition})">Update</button>
                            </div>
                        </div>

                       
                        `;



    document.getElementById('updatedForm').innerHTML = content;
    // document.getElementById("prCategoriesh").innerHTML = contentt;



}
////////////////////////////////////////////////////////////////////////////////////////////////////

function updateeProduct(id, i) {
    //alert("function works!!");
    //  alert(id);
    //recuperer tous les valeurs du signup
    //Get input value
    var prName = document.getElementById("productNameUp").value;
    //  ${findProduct.prName}
    // var prName=document.getel
    /////
    // //just pour l affichage
    //   var isPriceNameValid = checklength(prName, 4);
    // if (isPriceNameValid == false) {
    //  document.getElementById("prNameError").innerHTML = "please check product  name";
    //// } else {
    //  document.getElementById("prNameError").innerHTML = "";
    //  }
    /////
    var prPrice = document.getElementById("productPriceUp").value;
    // alert(prPrice);
    ////
    // var price = document.getElementById("price").value;
    //
    // var isPriceValid = checkNumbeer(productPriceUp, 0);
    // if (isPriceValid != true) {
    //     document.getElementById("priceError").innerHTML = "please check  price";
    // } else {
    //   document.getElementById("priceError").innerHTML = "";
    // }
    ////////////////
    var prStock = document.getElementById("productStockUp").value;
    // alert(prStock);
    /////////////////////////////////////////
    //var isStockValid = checkNumbeer(productStockUp, 20);
    ///if (isStockValid != true) {
    /// document.getElementById("stockError").innerHTML = "stock >20";
    ////  document.getElementById("stockError").style.color = "red";
    //// } else {
    ///     document.getElementById("stockError").innerHTML = "";
    /// }

    //////////////////////
    var prCategories = document.getElementById("categUpdatee").value;
    // alert(prCategories);
    // var prName = document.getElementById("categUpdatee").value;


    //create Object
    //alert(name);
    //create JSON OBJECTv
    // if (isPriceNameValid && isPriceValid && isStockValid) {
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var product = {
        id: id,
        prName: prName,
        prPrice: prPrice,
        prStock: prStock,
        prCategories: prCategories


    };
    //  alert(product);


    productsTab[i] = product;
    //alert(productsTab);
    //rajja3t tt le tab productsTab les ls ta7didan fil cle products
    //ba3d ma9lebtou strig
    localStorage.setItem("products", JSON.stringify(productsTab));
    location.replace("products.html"); ///rederiger vers index.html

    ///////////////////////////////


}


//////
// var product = {
//     id: generateId(productsTab) + 1,
//     prName: prName,
//     prPrice: prPrice,
//     prStock: prStock,
//     prCategories: prCategories


//     //  return obj;


// };
// //alert(add());
// //mchit lil ls ta7didan lel cle products w jebt menha la valeur, 
// //w au cas ou mal9itch la cle ;raja3 un tableau vide
// //w sabitou dans une variable esmha productsTab



// //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
// //zt// poushit un objet esmou product dans un tableau esmou productsTab
// productsTab.push(product);
// //rajja3t tt le tab productsTab les ls ta7didan fil cle products
// //ba3d ma9lebtou strig
// localStorage.setItem("products", JSON.stringify(productsTab));
// location.replace("products.html"); ///rederiger vers index.html

// ///////////////////////////////


// /* meth1
// function checklength(ch1, nbr) {
//     if (ch.length < nbr) {
// reurn false;


//     } else { return true; }
// }*/
// //meth2
// ///////////les validations

// //////////////////fct  qui retourne max prix

// //alert(maxprice(t));
// /// var usersTab1 = (localStorage.getItem("product") ); //JSON.parse : convertir chaine en objet // || ou crier tabvide //yjib tabl w y7awlou l 
// //usersTab.push(user);
// //localStorage.setItem("users", JSON.stringify(usersTab))
// }
// }




// function updateProductsDetails() {

//     var productstab = JSON.parse(localStorage.getItem("products"));
//     var idProduct = JSON.parse(localStorage.getItem("updateProduct")); //retourne id que je clic
//     var findProduct;
//     for (var i = 0; i < productstab.length; i++) {
//         if (idProduct == productstab[i].id) {

//             findProduct = productstab[i];
//             break; //ki nal9ah no5rej


//         }

//     }

//     document.getElementById("productNameUpdate").innerHTML = findProduct.prName;
//     document.getElementById("productPriceUpdate").innerHTML = findProduct.prPrice;

//     document.getElementById("prCategoriesUpdatee").innerHTML = findProduct.prCategories;

//     // condition pour afficher si il ya un stock ou nn

//     document.getElementById("productStockUpdate").innerHTML = "in stock";










// }
////////fonction de recherche par id
function displayProductsDetails() {

    var productstab = JSON.parse(localStorage.getItem("products"));
    var idProduct = JSON.parse(localStorage.getItem("displayProduct")); //retourne id
    var findProduct;
    for (var i = 0; i < productstab.length; i++) {
        if (idProduct == productstab[i].id) {

            findProduct = productstab[i];
            break; //ki nal9ah no5rej




        }

    }

    document.getElementById("productName").innerHTML = findProduct.prName;
    document.getElementById("productPrice").innerHTML = findProduct.prPrice;

    document.getElementById("catD").innerHTML = findProduct.prCategories;

    //////condition pour afficher si il ya un stock ou nn
    if (findProduct.prStock > 20) {
        document.getElementById("productStock").innerHTML = "in stock";

    } else {

        document.getElementById("productStock").innerHTML = "out of stock";


    }




}
//////////////////////////////fct por add to basket :commande
function displayAdminDetails() {

    var userstab = JSON.parse(localStorage.getItem("users"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId")); //retourne id
    var findUser;
    for (var i = 0; i < userstab.length; i++) {
        if (connectedUserId == userstab[i].id) {

            findUser = userstab[i];
            break; //ki nal9ah no5rej




        }

    }

    document.getElementById("userNameAdmin").innerHTML = findUser.firstName;
    document.getElementById("userLNameAdmin").innerHTML = findUser.lastName;
    document.getElementById("userRoleAdmin").innerHTML = findUser.role;
    document.getElementById("userTelAdmin").innerHTML = findUser.tel;
    document.getElementById("userPasswordAdmin").innerHTML = findUser.password;
    // document.getElementById("userNameAdmin").innerHTML = findUser.firstName;


    //////condition pour afficher si il ya un stock ou nn





}
////////////////////////////

function displayStoreDetails() {

    var userstab = JSON.parse(localStorage.getItem("users"));
    var connectedUserId = JSON.parse(localStorage.getItem("connectedUserId")); //retourne id
    var findUser;
    for (var i = 0; i < userstab.length; i++) {
        if (connectedUserId == userstab[i].id) {

            findUser = userstab[i];
            break; //ki nal9ah no5rej




        }

    }

    document.getElementById("userNameStore").innerHTML = findUser.firstName;
    document.getElementById("userLNameStore").innerHTML = findUser.lastName;
    document.getElementById("userRoleStore").innerHTML = findUser.role;
    document.getElementById("userTelStore").innerHTML = findUser.tel;
    document.getElementById("userPasswordStore").innerHTML = findUser.password;
    //  document.getElementById("userNmeOfdStore").innerHTML = findUser.;
    document.getElementById("userAdressStore").innerHTML = findUser.password;
    document.getElementById("userEmailStore").innerHTML = findUser.password;
    // document.getElementById("userNameAdmin").innerHTML = findUser.firstName;


    //////condition pour afficher si il ya un stock ou nn





}
//////////////////////////////////




function addToBasket() {
    /////qte from imput
    var qty = document.getElementById("quantity").value;
    //////pour commander il faut etre connecter
    var connectedUserId = localStorage.getItem("connectedUserId");
    //get product id from ls

    var productId = localStorage.getItem("displayProduct");
    ///create order object
    //var product = searchObjectById(productId, "products");
    ordersTab = JSON.parse(localStorage.getItem("orders") || "[]");

    //!!!
    if (Number(qty) > 0) {


        var order = {
            id: generateId(ordersTab) + 1,
            idProduct: productId,
            userId: connectedUserId,
            quantity: qty


        };
    }



    ordersTab.push(order);
    localStorage.setItem("orders", JSON.stringify(ordersTab));
    //upadateProduct
    //update product stock
    var product = getObjectFromLs("users");
    //search products by id and update stock
    for (let i = 0; i < product.length; i++) {

        if (product[i].id == productId) {

            product[i].prStock == product[i]
        }
    }
    //a terminer




}
/////function that return all objet from ls by key
function getObjectFromLs(key) {

    return JSON.parse(localStorage.getItem(key) || "[]");



}
/////////////////////////
function updateProduct(id, qte) {

    var products = json.parse(localStorage.getItem("products") || "[]");
    ////
    for (let i = 0; i < products.length; i++) {

        if (products[i].id == id) {
            products[i].prStock = products[i].prStock - qte;
        }

    }


}

///

function displayProductsAdmin() {
    //get all  from ls

    var productstab = JSON.parse(localStorage.getItem("products") || "[]");
    //productstab=[{id,prname,...},{}...]
    var content = '';

    for (let i = 0; i < productstab.length; i++) {



        content = content + ` 
        <tr>
        <td>
            <p>${productstab[i].id}</p>
        </td>
        <td>
            <h5>${productstab[i].prName}</h5>
        </td>
        <td>
            <p>${productstab[i].prPrice}</p>
        </td>
        <td>
            <p>${productstab[i].prStock}</p>
        </td>
        <td>
            <p>${productstab[i].prCategories}</p>
        </td>
        
        <td> 
       
         


        


        </td>
        <td>        <p><button onclick="goTodisplayUser(${productstab[i].id})" class="btn btn-primary">Modifier</button>   <button onclick="getRoleAdmin" class="btn btn-danger">Supprimer</button> </p> 
        </td>
    </tr>

   `;
    }
    document.getElementById("adminProductDiv").innerHTML = content;
}
///////////////////


function displayProductsAdmin2() {
    //get all  from ls
    var productstab = JSON.parse(localStorage.getItem("products") || "[]");
    //productstab=[{id,prname,...},{}...]
    var content = '';
    for (let i = 0; i < productstab.length; i++) {

        content = content + ` 
        <div class="col-lg-4 col-md-6">
       <div class="single-product">
           <img class="img-fluid" src="img/product/p1.jpg" alt="">
           <div class="product-details">
               <h6>${productstab[i].prName}</h6>
               <div class="price">
                   <h6>${productstab[i].prPrice}</h6>
                   <h6 class="l-through">${productstab[i].prCategories} </h6>
               </div>
               <div class="prd-bottom">

                   <a href="" class="social-info">
                       <span class="ti-bag"></span>
                       <p class="hover-text">add to bag</p>
                   </a>
                   <a href="" class="social-info">
                       <span class="lnr lnr-heart"></span>
                       <p class="hover-text">Wishlist</p>
                   </a>
                   <a href="" class="social-info">
                       <span class="lnr lnr-sync"></span>
                       <p class="hover-text">compare</p>
                   </a>
                   <a href="" class="social-info">
                       <span class="lnr lnr-move"></span>
                       <p class="hover-text">view more</p>
                   </a>
               </div>
           </div>
           <button type="submit" class="primary-btn" onclick="goTodisplayProduct(${productstab[i].id})">Display</button>
           <button type="submit" class="primary-btn" onclick="goToupdateProduct(${productstab[i].id})">update</button>


       </div>

       </div>

   `;
    }
    document.getElementById("adminProductDiv").innerHTML = content;
}
////////////////////basket of all users
function displayOrdersAdmin() {
    //get all  from ls
    var s = 0;
    var basketTab = JSON.parse(localStorage.getItem("orders") || "[]"); // variable sabbit fiha tous le contenu de orders
    //productstab=[{id,prname,...},{}...]
    var content = '';
    for (let i = 0; i < basketTab.length; i++) {

        content = content + ` 
        <tr>
        <td>
            <p>${basketTab[i].id}</p>
        </td>
        <td>
            <h5>${basketTab[i].userId}</h5>
        </td>
        <td>
            <p>${basketTab[i].idProduct}</p>
        </td>
        <td>
            <p>${basketTab[i].quantity}</p>
        </td>
        <td>
            <p>${searchObjectByIdAndKey(basketTab[i].idProduct,'products').prName}</p>
        </td>
        <td>
        <p>${searchObjectByIdAndKey(basketTab[i].idProduct,'products').prPrice}</p>
        </td>
        <td>
        <p>${searchObjectByIdAndKey(basketTab[i].userId,'users').firstName}</p>
        </td>
        <td>
        <p style>  ${ mult(basketTab[i].quantity , searchObjectByIdAndKey(basketTab[i].idProduct,'products').prPrice )} </p>
        </td>
        <td>
        <p>   </p>
        </td>
        <td>
        <p>  ${s+=mult(basketTab[i].quantity , searchObjectByIdAndKey(basketTab[i].idProduct,'products').prPrice )} </p>
        </td>
        
    </tr>
    

   `;
    }
    // var s = 0;





    document.getElementById("basketDiv").innerHTML = content;
}
///////////////////Pour user
function displayOrders() {
    //get all  from ls

    var orders = JSON.parse(localStorage.getItem("orders") || "[]"); // variable sabbit fiha tous le contenu de orders
    var connectedUserId = localStorage.getItem('connectedUserId');
    //productstab=[{id,prname,...},{}...]
    var ordersTab = [];



    for (var i = 0; i < orders.length; i++) {

        if (orders[i].id == connectedUserId) {
            ordersTab.push(orders[i]);
        }
    }
    var content = '';
    var totalSum = 0;
    for (var i = 0; i < ordersTab.length; i++) {


        var total = ordersTab[i].quantity * searchObjectByIdAndKey(ordersTab[i].idProduct, 'products').prPrice;
        totalSum = totalSum + total;


        content = content + ` 
        <tr>
        <td>
            <p>${ordersTab[i].id}</p>
        </td>
       
        <td>
            <p>${ordersTab[i].idProduct}</p>
        </td>
        <td>
            <p>${ordersTab[i].quantity}</p>
        </td>
        <td>
            <p>${searchObjectByIdAndKey(ordersTab[i].idProduct,'products').prName}</p>
        </td>
        <td>
        <p>${searchObjectByIdAndKey(ordersTab[i].idProduct,'products').prPrice}</p>
        </td>
        <td>
        <p>${searchObjectByIdAndKey(ordersTab[i].userId,'users').firstName}</p>
        </td>
        <td>
        <button class="btn btn-danger" onclick="deleteOrder(${ordersTab[i].Id})">Delete</button>         <button class="btn btn-primary" onclick="reload()">Refrech</button>

        </td>



    </tr>

   `;
    }
    content = content + `Total Sum :${totalSum}`;

    document.getElementById("ordersTable").innerHTML = content;
}
///////////////////////////////search product na3tiha identifiant trajja3li tous lobjet
//////x id
function searchUser(x) {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var findedUser;
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == x) {
            findedUser = usersTab[i];
            break;
        }

    }
    return findedUser;

}
///////////////search product by id
function searchProduct(id) {

    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");

    var findeProduct;
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id == x) {
            findeProduct = productsTab[i];
            break;
        }

    }
    return findeProduct;



}
/////////////fonction search generale qui peut remplacer les deux dernier
function searchObjectByIdAndKey(x, key) { //meth1

    var t = JSON.parse(localStorage.getItem(key) || "[]");

    var findeObject;
    for (var i = 0; i < t.length; i++) {
        if (t[i].id == x) {
            findeObject = t[i];
            break;
        }

    }
    return findeObject;



}
///////////////////meth2
function searchObjectById(x, t) { //meth1


    var findeObject;
    for (let i = 0; i < t.length; i++) {
        if (t[i].id == x) {
            findeObject = t[i];
            break;
        }

    }
    return findeObject;



}

////////////////////////////////////

function mult(x, y) {
    return (x * y);



}
///////////////////function delete order from ls


//////////////////////
function displayUsersAdmin() {
    //get all  from ls

    var userstab = JSON.parse(localStorage.getItem("users") || "[]"); // variable sabbit fiha tous le contenu de orders
    //productstab=[{id,prname,...},{}...]
    var content = '';
    var x = '';
    for (let i = 0; i < userstab.length; i++) {

        if (userstab[i].role == 0) {
            x =
                `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="User" id="defaultCheck1" checked>
            <label class="form-check-label" for="defaultCheck1">
              User
            </label>
          </div>
          `
        } else {
            x =
                `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>
            <label class="form-check-label" for="defaultCheck1">
              Admin
            </label>
          </div>
          `
        }

        content = content + ` 
        <tr>
        <td>
            <p>${userstab[i].id}</p>
        </td>
        <td>
            <h5>${userstab[i].firstName}</h5>
        </td>
        <td>
            <p>${userstab[i].lastName}</p>
        </td>
        <td>
            <p>${userstab[i].email}</p>
        </td>
        <td>
            <p>${userstab[i].tel}</p>
        </td>
        <td>
        <p>${userstab[i].password}</p>
        </td>
        <td> 
        <p> ${x}</p>
         


         </select>


        </td>
        <td>        <p><button onclick="goTodisplayUser(${userstab[i].id})" class="btn btn-primary">Modifier</button>   <button onclick="getRoleAdmin" class="btn btn-danger">Supprimer</button> </p> 
        </td>
    </tr>

   `;
    }
    document.getElementById("adminUserDiv").innerHTML = content;
}
////////////////

function displayAdminpRofil() {
    //get all  from ls

    var userstab = JSON.parse(localStorage.getItem("users") || "[]");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var findUser;
    var role = '';
    for (var i = 0; i < userststab.length; i++) {
        if (connectedUserId == userststab[i].id) {

            findUser = userststab[i];
            role = userststab[i].role;
            break; //ki nal9ah no5rej




        }

    }
    // variable sabbit fiha tous le contenu de orders
    //productstab=[{id,prname,...},{}...]
    var content = '';
    var x = '';
    for (let i = 0; i < userstab.length; i++) {

        if (userstab[i].role == 0) {
            x =
                `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="User" id="defaultCheck1" checked>
            <label class="form-check-label" for="defaultCheck1">
              User
            </label>
          </div>
          `
        } else {
            x =
                `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>
            <label class="form-check-label" for="defaultCheck1">
              Admin
            </label>
          </div>
          `
        }

        content = content + ` 
        <tr>
        <td>
            <p>${userstab[i].id}</p>
        </td>
        <td>
            <h5>${userstab[i].firstName}</h5>
        </td>
        <td>
            <p>${userstab[i].lastName}</p>
        </td>
        <td>
            <p>${userstab[i].email}</p>
        </td>
        <td>
            <p>${userstab[i].tel}</p>
        </td>
        <td>
        <p>${userstab[i].password}</p>
        </td>
        <td> 
        <p> ${x}</p>
         


         </select>


        </td>
        <td>        <p><button onclick="goTodisplayUser(${userstab[i].id})" class="btn btn-primary">Modifier</button>   <button onclick="getRoleAdmin" class="btn btn-danger">Supprimer</button> </p> 
        </td>
    </tr>

   `;
    }
    document.getElementById("adminUserDiv").innerHTML = content;
}
/////////////////function
function goToUpdateUser(id) {
    localStorage.setItem("displayuser", id); //nasna3 table jdid n7ot fih id (wa7ed bark ili nzelt 3lih bl boutton mta3 detail produit)


    location.replace("updateUser.html");

}
////////////////delete
function deleteOrder(x) {
    //chercher position position de l id de la commande que j ai deja reccupere le id
    var position = searchOrderPositionById(x);
    var orders = JSON.parse(localStorage.getItem("orders") || "");
    orders.splice(position, 1);

    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();

}


////////////
function searchOrderPositionById(idParam) {

    var t = JSON.parse(localStorage.getItem('orders') || "[]");
    var position;
    for (let i = 0; i < t.length; i++) {
        if (t[i].id == idParam) {
            position = i;
            break;

        }

    }
    return position;

}
///display products///display header
///generer header
function generateHeader() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var userststab = JSON.parse(localStorage.getItem("users"));
    var findUser;
    var role = '';
    for (var i = 0; i < userststab.length; i++) {
        if (connectedUserId == userststab[i].id) {

            findUser = userststab[i];
            role = userststab[i].role;
            break; //ki nal9ah no5rej




        }

    }

    var content = "";
    if (connectedUserId && role == "client") {
        // Iser is connected
        var connectedUser = searchObjectByIdAndKey(connectedUserId, "users");

        content = `                        <ul class="nav navbar-nav menu_nav ml-auto">

        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
        <li class="nav-item"><a class="nav-link" href="basket.html">Basket</a></li>

        <li class="nav-item"><a  class="nav-link" href="profile.html" >
        
        Hello ${connectedUser.firstName}
        ${connectedUser.lastName}</a></li>
        

        
        
        
        

</ul>
  
  
<ul class="nav navbar-nav navbar-right">
<li class="nav-item"><a title="logout" onclick="logout()" class="cart"><span class="ti-bag"></span></a></li>
<li class="nav-item">
    <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
</li>
</ul>
  
  
  
          `




    } else {
        content = `                        <ul class="nav navbar-nav menu_nav ml-auto">

        
        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      <li class="nav-item"><a class="nav-link" href="Products.html">Products</a></li>
      <li class="nav-item"><a class="nav-link" href="login.html">login</a></li>
      <li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Sign Up</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><a class="nav-link" href="signUpStore.html">Store</a></li>
									<li class="nav-item"><a class="nav-link" href="signUpAdmin.html">Admin</a></li>
									<li class="nav-item"><a class="nav-link" href="signup.html">client</a></li>
								</ul>
							</li>


      <li class="nav-item"><a class="nav-link" href="contact.html"></a></li>


</ul>

<ul class="nav navbar-nav navbar-right">
<li class="nav-item">
    <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
</li>
</ul>
        `
    }
    document.getElementById("navbarSupportedContent").innerHTML = content;

}
///////////////
function logout() {
    // var connectedUserId = localStorage.getItem("connectedUserId");




    localStorage.removeItem("connectedUserId");
    location.replace("index.html");



}