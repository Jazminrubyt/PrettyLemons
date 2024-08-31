import {Routes, Route} from 'react-router-dom'
import './App.css'
import { CreateDrinkForm } from './components/CreateDrinkForm'
import AllDrinks from './components/AllDrinks'
import Header from './components/Header'
import Home from './components/Home'
import BottomNav from './components/BottomNav'
import DrinkDetails from './components/DrinkDetails'
import { EditDrinkForm } from './components/EditDrinkForm'

function App() {

  return (
    <>
    <Header/>
      <div className='fullSize-container bg-dark'>
        <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/view' element = {<AllDrinks/>} />
        <Route path = '/create' element = {<CreateDrinkForm/>} />
        <Route path ='/drinks/:id' element = {<DrinkDetails/>} />
        <Route path ='/drinks/update/:id' element ={<EditDrinkForm/>} />
        </Routes>
      </div>
    <BottomNav/>
    </>
  )
}

export default App

