//sequelize.import
const models=require('../model')
//console.log(models);

var customer  = models.Customer;
console.log(customer);
var express = require('express');
var router  = express.Router();
const uuidv4 = require('uuid/v4')

// const uniqueInsuranceId = uuidv4()
// console.log(uniqueInsuranceId);
// const v4options = {
//   random: [
//     0x1000
//   ]
//   random +=random;
// };
// console.log(v4options);
// uuidv4(v4options);
router.post('/create', function(req, res) {

  console.log("fsddsdsdsdsdsd")


  // customer.create(params)
  //       .then(function(result){
    var params = {
      newcustomerno:req.body.newnumber,
      existingcustomerno:req.body.existingnumber,
      language:req.body.language,
      conatctperson    : req.body.cname,
      companyname : req.body.comname,
      address : req.body.address,
      postalcode   : req.body.pcode,  
      vatno   : req.body.vno,
      // customer:customer,
      installation:req.body.install_details,
      techlastname:req.body.lastname,
      techfirstname:req.body.firstname,
      telephone:req.body.telephoneno,
      techmobileno:req.body.mobileno,
      techemail:req.body.email,
      adlastname:req.body.adlastname,
      adfirstname:req.body.adfirstname,
      adtelephone:req.body.tphone,
      ademobileno:req.body.admobileno,
      ademail:req.body.ademail,


      bcino:req.body.bcino,
      proximusref:req.body.proxref,
      saleschannel:req.body.saleschannel,
      sellercontactname:req.body.sellercontactname,
      sellercontacttelephone:req.body.sellercontacttelephone,
      sellercontactmobile:req.body.sellercontactmobile,
      sellercontactemail:req.body.sellercontactemail
    };
    console.log(params);
  
  customer.create(
    {
    newcustomerno:req.body.newnumber,
    existingcustomerno:req.body.existingnumber,
    language:req.body.language,
    conatctperson    : req.body.cname,
    companyname : req.body.comname,
    address : req.body.address,
    postalcode   : req.body.pcode,  
    vatno   : req.body.vno,
 // customer:customer,
    installation:req.body.install_details,
    techlastname:req.body.lastname,
    techfirstname:req.body.firstname,
    telephone:req.body.telephoneno,
    techmobileno:req.body.mobileno,
    techemail:req.body.email,
    adlastname:req.body.adlastname,
    adfirstname:req.body.adfirstname,
    adtelephone:req.body.tphone,
    ademobileno:req.body.admobileno,
    ademail:req.body.ademail,

    bcino:req.body.bcino,
    proximusref:req.body.proxref,
    saleschannel:req.body.saleschannel,
    sellercontactname:req.body.sellercontactname,
    sellercontacttelephone:req.body.sellercontacttelephone,
    sellercontactmobile:req.body.sellercontactmobile,
    sellercontactemail:req.body.sellercontactemail
})
  .then(function(result) {
    console.log('helllo')
    console.log(result)
    //res.redirect('/');
  //  console.log(req.body);
  
     
  res.send('Your form is Successfully submitted ');
    
  })
  .catch(function(err){
    console.log(err)

  })
});

router.get('/:user_id/destroy', function(req, res) {
  models.Customer.destroy({
    where: {
      id: req.params.user_id

    }
  }).then(function() {
    res.redirect('/');
  });
});

// router.post('/:user_id/tasks/create', function (req, res) {
//   models.Customer.create({
//                 customerno:req.params.customerno,
//                 language:req.body.language,
//                 contactperson    : req.body.cname,
//                 companyname : req.body.comname,
//                 address : req.body.address,
//                 postalcode   : req.body.pcode,
//                 vatno   : req.body.vno,
//                // customerno:customer,
//                 installation_details:req.body.install_details,
//                 techpersonlastname:req.body.lastname,
//                 techpersonfirstname:req.body.firstname,
//                 techpersontelephoneno:req.body.telephoneno,
//                 techpersonmobileno:req.body.mobileno,
//                 techpersonemail:req.body.email,
//                 adminpersonlastname:req.body.adlastname,
//                 adminpersonfirstname:req.body.adfirstname,
//                 admintphone:req.body.tphone,
//                 adminpersonmobileno:req.body.admobileno,
//                 adminpersonemail:req.body.ademail
//   }
// ).then(function() {
//     res.redirect('/');
//   });
// });

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Customer.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
