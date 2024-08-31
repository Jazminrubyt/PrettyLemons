import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getNewDrinkByIdService, updateNewDrinkService } from '../services/newDrinkServices';


export const EditDrinkForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [drinkData, setDrinkData] = useState({
        Name: '',
        Fruit: '',
        YearAroundOr: false,
        Price: 0,
        Comments: '',
    })


    useEffect(() => {
        getNewDrinkByIdService(id)
            .then((res) => { setDrinkData(res) })
    }, [])


    const updateDrinkData = e => {
        const { name, value } = e.target
        setDrinkData(prev => ({ ...prev, [name]: value }))
    }

    const updateYearAroundOr = e => {
        const { checked } = e.target
        setDrinkData(prev => ({ ...prev, YearAroundOr: checked }))
    }

    const updateDrink = e => {
        console.log("UPDATE")
        e.preventDefault()
        updateNewDrinkService(id, drinkData)
            .then(() => navigate(`/drinks/${id}`))
            .catch((err) => setErrors(err.response.data.errors))

    }
    return (
        <div className="Container bg-dark">
            <div className="d-flex justify-content-center">
                <div className="card bg-warning">
                    <div className="card-body">
                        <h5 className="card-title">Drink Form </h5>
                        <form onSubmit={updateDrink}>
                            <div>
                                <label>
                                    Name:
                                    <input type="text" name="Name" className="mt-4" value={drinkData.Name} onChange={updateDrinkData} />
                                </label>
                                {errors.Name && <p>{errors.Name.message}</p>}
                            </div>
                            <div>
                                <label>
                                    Fruit:
                                    <input type="text" name="Fruit" className="mt-4" value={drinkData.Fruit} onChange={updateDrinkData} />
                                </label>
                                {errors.Fruit && <p>{errors.Fruit.message}</p>}
                            </div>
                            <div>
                                <label>
                                    Year around Drink:
                                    <input type="checkbox" name="YearAroundOr" className="mt-4" checked={drinkData.YearAroundOr} onChange={updateYearAroundOr} />
                                </label>
                            </div>
                            {errors.YearAroundOr && <p>{errors.YearAroundOr.message}</p>}
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
                            <button type='submit' className='mt-4 btn btn-success'>Update Drink</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
