import Header from "../components/Header"
import EditDrinkForm from '../components/EditDrinkForm'

const NewDrink = ()=> {
    return(
        <>
        <Header></Header>
        <main>
            <EditDrinkForm>
                <h1 className="text-light">Edit the Drink</h1>
            </EditDrinkForm>

        </main>
        
        </>
    )
}
export default NewDrink