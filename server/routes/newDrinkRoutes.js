import express from 'express'
import { createDrink, getAllNewDrinks, getNewDrinkById, update, deleteNewDrink} from '../controllers/newDrinkController.js'

const router = express.Router();

router.post('/new', createDrink);

router.get('/all', getAllNewDrinks);

router.get('/:id', getNewDrinkById);

router.put('/:id', update);

router.delete('/:id', deleteNewDrink);

export default router;