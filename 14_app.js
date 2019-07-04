// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function() {
    this.editMode = true;
    this.invoice = {
        customer_data : {
            customer_name : 'Sai krishna sirigiri',
            account_number : '123456789',
            address_1 : 'Plot No. 112',
            address_2 : 'Hitech City , Hyderabad',
        },
        company_data : {
            company_name : 'Some Company',
            account_number :  '123456789',
            address_1 : 'Plot No: 1471 , Road No: 12',
            address_2 : 'Jubilee Hills , Hyderabad',
        },
        items : [
          {description : 'some tinh',
            time :this.timestamp(),
            debit: null,
            credit : null
        }
        ],
    };
   
    this.printDoc = function() {
      window.print();
    };
});