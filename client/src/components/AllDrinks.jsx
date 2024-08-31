import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import React from 'react'
import { getAllNewDrinksService, deleteNewDrinkService } from '../services/newDrinkServices'


const AllDrinks = ()=> {
    const [drinks, setDrinks] = useState([])
    
    useEffect( () =>{
        getAllNewDrinksService()
        .then(res => setDrinks(res))
        .catch(err => console.log(err));
    }, []
    )

    const RemoveDrink = id => {
        deleteNewDrinkService(id)
        setDrinks( res => res.filter( (drink)=> drink._id != id ) )
    }


    return(
        <>
        <div className='Container text-center'>
            <h1 className='text-success '>All Drinks</h1>
                <div className="d-flex justify-content-center">
                    <div className="card bg-warning" style={{width:850 }}>
                        <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type of Fruit</th>
                        <th scope="col">Year around Drink</th>
                        <th scope="col">Price</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                    {drinks && drinks.map( ({_id,Name, Fruit, YearAroundOr, Price,  Comments}) => (
                            <tr key = {_id}>
                            <td>{Name}</td>
                            <td>{Fruit}</td>
                            <td>{YearAroundOr ? "yes": "no"}</td>
                            <td>{Price}</td>
                            <td>{Comments}</td>
                            <td><Link to = {`/drinks/${_id}`}> Drink Details </Link></td>
                            <td><button className='btn btn-danger' onClick = {() => RemoveDrink(_id) } >Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                        </div>
                        <p><b>Flavors: Strawberry, Blue Raspberry, Watermelon, Lavender, kiwi, Grape, Pulpa, Peach, Mango, Green Apple, Cherry, Black Berry and Raspberry</b></p>
                        <p><b>Dont See the one you want? Add a new flavor!</b></p>
                    </div>
                </div>
        </div>
        </>
    )

}
export default AllDrinks