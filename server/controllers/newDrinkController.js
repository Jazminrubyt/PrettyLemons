import NewDrink from "../models/newDrink.js";

const createDrink = async ( req, res) => {
    try {
        const drink = await NewDrink.create(req.body);
        res.status(200).json(drink);
    }
    catch(error){
        res.status(400).json(error)
    }
}
const getAllNewDrinks = async (req,res) =>{
    try{
        const drinks = await NewDrink.find();
            res.status(200).json(drinks);
        }
        catch(error){
            res.status(400).json(error);
        }
    }

const getNewDrinkById = async (req, res) => {
    try {
        const drink = await NewDrink.findById(req.params.id);
        if (!drink) {
            res.json({ message: 'Drink not found' });
            return;
        }
        res.status(200).json(drink);
    }
    catch (error) {
        res.status(400).json(error);
    }
}
const update = async (req,res) =>{
    try{
        const options = {
            "new":true,
            "runValidators" : true
        }
        const updateNewDrink = await NewDrink.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updateNewDrink)
    }catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}
const deleteNewDrink = async (req,res) =>{
    const {id} = req.params
    try{
    const DELETED_NEWDRINK = await NewDrink.findByIdAndDelete ( id )
    res.status(200).json(DELETED_NEWDRINK)
    }
    catch (error) {
        res.status(400).json(error)
    }    
}

export { createDrink, getAllNewDrinks, getNewDrinkById, update, deleteNewDrink }