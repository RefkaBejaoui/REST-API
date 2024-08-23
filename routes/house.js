const express = require("express")
const router = express.Router()
const houseSchema = require("../models/user");

// to add houses for sell
router.post("/sellHouse",async(req,res)=>{
    try {
        // let house = new houseSchema(req.body)
        let house = new houseSchema({
            adresse: req.body.adresse,
            surface: req.body.surface + " m²",
            price: req.body.price + " DT",
            nbrRoom: req.body.nbrRoom
        })
        await house.save()
        res.send({msg:"your house is ready to be sell", house})
    } catch (error) {
        res.send(error)
        console.error(error)
    }
})

//to update the price of the publication house
router.put("/updateprice/:id", async(req,res)=>{
    try {
        let updateprice = await houseSchema.findByIdAndUpdate(req.params.id,req.body, {new:true})
res.send({msg:"the price is updated ", updateprice})
        
    } catch (error) { res.send(error)
    }
})

// this API is for searching houses by its adress
router.get("/searchAdress/:adress", async(req,res)=>{
    try {
        let adress = await houseSchema.find({adresse:req.params.adress})
        res.send({msg:`this is all the houses ${req.params.adress} `,adress})
    } catch (error) { res.send(error)  
    }
})


//to delete a specefic house 
router.delete("/deleteHouse/:id", async(req,res)=>{
try {
    let deletedHouse =await houseSchema.findByIdAndDelete(req.params.id)
    res.send({msg:`this house is deleted`, deletedHouse})
} catch (error) { res.send(error)
    
}
})
module.exports = router