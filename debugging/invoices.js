var invoiceDocument = [{

        InvoiceID: 001,
        DocumentName: "Invoice 001",
        DocumentType: "invoice",
        Name: "Fly High Business Inc.",
        Products: [{
                Description: `24" Monitor`,
                QTY: 5,
                Price: 10000,
            },
            {
                Description: `Keyboard and Mouse set`,
                QTY: 4,
                Price: 1500,
            },
        ],
    },

    {
        InvoiceID: 002,
        DocumentName: "Invoice 002",
        DocumentType: "invoice",
        Name: "Bracket Logic Appliances Inc.",
        Products: [{
                Description: `Projector`,
                QTY: 2,
                Price: 15000,
            },
            {
                Description: `Speakerphone`,
                QTY: 1,
                Price: 5500,
            },
            {
                Description: `Aircon`,
                QTY: 3,
                Price: 25200,
            },
        ]
    }
]


function totalPerInvoice() {
    let total = 0; //inyialize total
    let description = ''; //initialize description
    let price = 0; //initialize price
    let qty = 0; //initialize quantity

    invoiceDocument.forEach((data) => {
        console.log(`Invoice Name: ${data.DocumentName}`);
        let ProductsDescription = data.Products.map((Prod) => {
            //Total the invoice amount based on quantity and product prices
            total += (Prod.Price * Prod.QTY);
            //map method method in action using if statement to display the product description and price and quantity per item purchased
            //without an if statement would have cause accessing the  ProductsDescription  variable object undefined
            if (Prod.Description) {
                return Prod.Description + " - " + "₱ " + Prod.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00" + " x " + Prod.QTY;
            }


        });

        console.log(`Products:`);
        console.log(`${ProductsDescription.join("\n")}`);
        console.log(`-----------------------------------------`);
        console.log(`Total: ₱ ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00"} \n`);


    });



}


totalPerInvoice();