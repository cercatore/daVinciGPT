const express = require( 'express');




/*
    endpoint "product helper"
    method post

*/

const router = express.Router();


router.post( '/productsHelper',   async (req, res) =>{

        let {prompt} = req.body
        
})

module.exports = router;
