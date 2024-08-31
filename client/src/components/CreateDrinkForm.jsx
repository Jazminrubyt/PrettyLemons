import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewDrinkService } from '../services/newDrinkServices'

export const CreateDrinkForm = () => {

    const [errors, setErrors] = useState({})
    const [drinkData, setDrinkData] = useState({
        Name: '',
        Fruit: '',
        YearAroundOr: false,
        Price: 0,
        Comments: '',
    })

    const navigate = useNavigate();

    const updateDrinkData = e => {
        const { name, value } = e.target
        setDrinkData(prev => ({ ...prev, [name]: value }))
    }


    const createDrink = e => {
        e.preventDefault()
        createNewDrinkService(drinkData)
            .then((res) => {
                console.log(res);
                navigate('/view');
            })
            .catch((err) => { setErrors(err.response.data.errors) })
    }

    return (
        <>

            <main className='mt-5 text-center'>
                <h3 className='text-light'>If your pick is a popular one, you will see us take picutes of it and post it in the details page of the drinks!</h3>
                <div id="carouselExample" class="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='container'>
                                <div className="row">
                                    <div className="col align-self-start">
                                        <div className="card text-center bg-warning mt-5" style={{ width: 550 }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Drink Form </h5>
                                                <form onSubmit={createDrink}>
                                                    <div>
                                                        <label>
                                                            Name:
                                                            <input type="text" name="Name" className="mt-4" value={drinkData.Name} onChange={updateDrinkData} />
                                                        </label>
                                                        {errors.Name && <p>{errors.Name.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label>
                                                            What type of Fruit:
                                                            <input type="text" name="Fruit" className="mt-4" value={drinkData.Fruit} onChange={updateDrinkData} />
                                                        </label>
                                                        {errors.Fruit && <p>{errors.Fruit.message}</p>}

                                                    </div>
                                                    <div>
                                                        <label>
                                                            Should we use this drink year around?:
                                                            <input type="radio" name="YearAroundOr" value="true" onChange={updateDrinkData} className="mt-4" /> Yes
                                                            <input type="radio" name="YearAroundOr" value="false" onChange={updateDrinkData} className="mt-4" /> No
                                                        </label>
                                                        {errors.YearAroundOr && <p>{errors.YearAroundOr.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label>
                                                            Price:
                                                            <input type="number" name="Price" className="mt-4" value={drinkData.Price} onChange={updateDrinkData} />
                                                        </label>
                                                        {errors.Price && <p>{errors.Price.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label>
                                                            Comments:
                                                            <input type="text" name="Comments" className="mt-4" value={drinkData.Comments} onChange={updateDrinkData} />
                                                        </label>
                                                        {errors.Comments && <p>{errors.Comments.message}</p>}
                                                    </div>
                                                    <button type='submit' className='mt-4 btn btn-success'>Add Drink</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="../src/images//Lemonade3.jpg" className="d-block w-100" alt="Marketing"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/images/Quote.jpg" className="d-block w-100" alt="Marketing"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/images/Quote2.jpg" className="d-block w-100" alt="Marketing"></img>
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
            </main>
        </>
    )

}
