
const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const searchQueries = require("../models/search");




const searchResults = async (req, res) => {

    const { searchedBarcode, searchedCatagory, searchedCity, searchedState, searchedCondition } = req.body;
    // const customerID = await getCustomerID(req);
    const customerID = req.session.user.id;

    if (searchedBarcode) {
        const result = await searchQueries.searchBarcode(searchedBarcode);
        return res.render("results", { user: req.session.user, packages: result, id: customerID });
    }

    else {
        const result = await searchQueries.searchAll(customerID);
        if (result !== undefined) {
            if (result.length > 1)
                return res.render("results", { user: req.session.user, packages: result, id: customerID });
            return res.render("results", { user: req.session.user, packages: [result], id: customerID });
        }
    }

}

//     else if (searchedCatagory !== "") {

//         searchCatagory(req, res, searchedCatagory, customerID);
//     }

//     else if (searchedCity !== "") {

//         searchCity(req, res, searchedCity, customerID);
//     }

//     // else if (searchedState !== ""){
//     //     searchState(req, res, searchedCity, customerID);
//     // }

//     else {
//         searchALL(req, res, customerID)
//     }
// }


//this method will return the id of the customer who searched for a package 




// //if the customer wants to search by "only" the barcode
// const searchBarcode = (searchedBarcode, req, res, customerId) => {

//     sql = `SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, p.distenation FROM PACKAGE p INNER JOIN CUSTOMER c ON p.sender_ID = c.customer_id WHERE p.barcode = ${searchedBarcode}`;
//     db.get(sql, (err, rows) => {
//         if (rows !== undefined) {
//             return res.render("results", { user: req.session.user, packages: [rows], id: customerId });
//         }
//     })
// }

// //if the customer wants to search by "only" the catagory
// const searchCatagory = (req, res, searchedCatagory, customerId) => {


//     sql = `SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, distenation, p.sender_ID FROM PACKAGE p 
//     INNER JOIN 
//     CUSTOMER c ON p.sender_ID = c.customer_id 
//     WHERE p.receiver_ID = ${customerId} AND p.barcode = (SELECT barcode FROM ${searchedCatagory})

//     UNION

//     SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, distenation, p.sender_ID FROM PACKAGE p 
//     INNER JOIN 
//     CUSTOMER c ON p.receiver_ID = c.customer_id 
//     WHERE p.sender_ID = ${customerId} AND p.barcode = (SELECT barcode FROM ${searchedCatagory})`

//     db.all(sql, (err, rows) => {
//         if (rows !== undefined) {
//             return res.render("results", { user: req.session.user, packages: rows, id: customerId });
//         }
//     })


// }

// //if the customer wants to search by "only" the city
// const searchCity = (req, res, searchedCity, customerId) => {


//     sql = `SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, distenation, p.sender_ID FROM PACKAGE p 
//     INNER JOIN 
//     CUSTOMER c ON p.sender_ID = c.customer_id 
//     WHERE p.distenation = "${searchedCity}" AND p.receiver_ID = ${customerId}

//     UNION

//     SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, p.distenation, p.sender_ID FROM PACKAGE p 
//     INNER JOIN 
//     CUSTOMER c ON p.receiver_ID = c.customer_id 
//     WHERE distenation = "${searchedCity}" AND p.sender_ID = ${customerId}`;


//     db.get(sql, (err, rows) => {
//         if (rows !== undefined) {
//             if (rows.length > 1)
//                 return res.render("results", { user: req.session.user, packages: rows, id: customerId });
//             return res.render("results", { user: req.session.user, packages: [rows], id: customerId });
//         }
//     })


// }

// //if the customer wants to search by "only" the city
// const searchState = (req, res, searchedState, customerId) => {

//     sql = `SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, distenation, p.sender_ID FROM PACKAGE p 
//     INNER JOIN 
//     CUSTOMER c ON p.sender_ID = c.customer_id 
//     WHERE p.distenation = "${searchedState}" AND p.receiver_ID = ${customerId}

//     UNION

//     SELECT p.barcode, c.Fname, c.Lname, p.delivery_date, p.distenation, p.sender_ID FROM PACKAGE p 
//     INNER JOIN 
//     CUSTOMER c ON p.receiver_ID = c.customer_id 
//     WHERE distenation = "${searchedState}" AND p.sender_ID = ${customerId}`;


//     db.get(sql, (err, rows) => {
//         if (rows !== undefined) {
//             if (rows.length > 1)
//                 return res.render("results", { user: req.session.user, packages: rows, id: customerId });
//             return res.render("results", { user: req.session.user, packages: [rows], id: customerId });
//         }
//     })

// }



module.exports = {
    searchResults,
}