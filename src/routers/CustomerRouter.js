
const router = require('express'). Router();
let Customer = require('../models/Customer');

//READ ALL - GET ALL CUSTOMERS
router.route('/').get((req, res)=> {
Customer.find()
.then(Customers => res.json(Customers))
.catch(err => res.status (400).json('Error: '+err))
});


// CREATE - ADD CUSTOMER
router.route('/add').post((req, res)=>{
const customerdetails = req.body;
console.log(customerdetails)
const newCustomer = new Customer(customerdetails);

newCustomer.save()
.then(() => res.json('Customer added!'))
.catch(err => res.status(400).json('Error: '+ err));
})



//READ BY ID - GET CUSTOMER BY ID
router.route('/:id').get((req, res)=> {
Customer.findById(req.params.id)
.then(exercise => res.json(exercise))
.catch(err => res.status(400).json('Error: ' + err));
});

//DELETE - DELETE BY ID
router.route('/:id').delete((req, res) => {
Customer.findByIdAndDelete(req.params.id)
.then(() => res.json ('Customer deleted.'))
.catch(err => res.status(400).json('Error: '+ err));
});


//UPDATE - MODIFY EXISTING CUSTOMER
router.route('/:id').put((req, res) => {
Customer.findById(req.params.id)
.then(Customer =>{
Customer.name = req.body.name;
Customer.address = req.body.address;
Customer.city = req.body.city;
Customer.state = req.body.state;
Customer.country = req.body.country;
Customer.zipCode = req.body.zipCode;
Customer.createdDate = req.body.createdDate;
Customer.isActive = req.body.isActive;
Customer.discount = req.body.discount;
Customer.save()
.then(() => res.json('Customer updated!'))
.catch(err => res.status(400).json('Error: ' + err));
})
.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
