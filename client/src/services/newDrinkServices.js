import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api/newDrink'
})

export const createNewDrinkService =async newDrinkData => {
    try{
        const res = await http.post('/new',newDrinkData)
        return res.data
    } catch (error){throw error}
}

export const getAllNewDrinksService = async () => {
    try{
        const res = await http.get('/all')
        return res.data
    } catch (error){throw error}
}

export const getNewDrinkByIdService = async id => {
    try{
        const res = await http.get (`/${id}`)
        return res.data
    } catch (error){throw error}
}

export const updateNewDrinkService = async (id, data) => {
    try{
        const res = await http.put(`/${id}`,data)
        return res.data
    } catch (error){throw error}
}

export const deleteNewDrinkService = async id => {
    try{
        const res = await http.delete(`/${id}`)
        return res.data
    } catch (error){throw error}
}
