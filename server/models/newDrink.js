import mongoose from 'mongoose'

const newDrinkSchema = new mongoose.Schema({
    Name:{
        type: String, 
        required: ' Name is required. Please fill out!', 
        minlength: [3, ' Name must be at least 3 characters long'], 
        maxlength: [255, ' Name cannot exceed 255 characters']
    },
    Fruit:{
        type: String, 
        required: ' Add a fruit to your drink.', 
        minlength: [5, ' Name must be at least 5 characters long'], 
        maxlength: [100, ' Name cannot exceed 100 characters']
    },
    YearAroundOr:{
        type:Boolean,
        default:false
    },
    Price:{
        type: Number,
        required: 'Please fill out a price you would like to be charged!',
        min: [2, 'Price must be over 2$'],
        max:[20, 'Price can not be over 20$']

    },
    Comments:{
        type: String, 
        required: 'Comments are required. Please fill out!',
        minlength: [5, 'Comments must be at least 5 characters long'], 
        maxlength: [255, 'Comments cannot exceed 255 characters'] 
    },
},
{
    timestamps:true
}
) 
const NewDrink = mongoose.model('NewDrink', newDrinkSchema);
export default NewDrink;