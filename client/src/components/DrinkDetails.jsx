import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getNewDrinkByIdService, deleteNewDrinkService } from '../services/newDrinkServices';


const DrinkDetails = ()=> {
    const {id} = useParams();
    const [drink, setDrink] = useState({});
    const navigate = useNavigate();

    useEffect( () =>{
        getNewDrinkByIdService(id)
        .then(res => setDrink(res))
        .catch(err =>console.log(err))
    }, []
    )
    
    
    const handleDelete = id => {
        console.log ("delete!!!!")
        deleteNewDrinkService(id)
        .then(() => navigate ('/'))
        .catch(err =>console.log(err))
    }
    return(
        <div className='Container'>
            <div className="card bg-warning text-dark">
                <div className="card-body">
                    <div>
                        <h1>{drink.Name}</h1>
                        <p>{drink.Fruit}</p>
                        <p>Year around Drink: {drink.YearAroundOr ? "yes": "no"}</p>
                        <p>Drink Price: {drink.Price}</p>
                        <p>Comments: {drink.Comments}</p>
                        <Link to={`/drinks/update/${drink._id}`} className=" link-success me-4">Update</Link>
                        <button className='btn btn-danger' onClick={()=>handleDelete(drink._id)}>Remove</button>
                    </div>
                </div>
            </div> 
            <div id="carouselExample" class="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="../src/images/strawberry_with_rim.png" className="d-block w-100" alt="Marketing"></img>
                        </div>
                        <div className="carousel-item active">
                            <img src="../src/images//Lemonade3.jpg" className="d-block w-100" alt="Marketing"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/images/PricklyPear.png" className="d-block w-100" alt="Marketing"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/images/Chamoy_Lemonade.png" className="d-block w-100" alt="Marketing"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

        </div>
    )
}
export default DrinkDetails