import { useDispatch } from "react-redux"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"
import { fetchFail, fetchStart } from "../features/stockSlice"
import {  getStocksSuccess } from "../features/stockSlice"


const useStockCalls = () => {
    const dispatch = useDispatch()
    const {axiosWithToken} = useAxios()

    const getStocks = async (url="firms")=>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(`/${url}/`)
            const apiData = data.data
            dispatch(getStocksSuccess({ apiData,url}))
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} process is failed.`)
            console.log(error);
        }
    }
    const deleteStock = async (url="firms",id)=>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/${url}/${id}`)
            toastSuccessNotify(`${url} informations deleted successful.`)
            getStocks(url)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} informations couldn't deleted, try again!`)
            console.log(error);
        }
    }
    const postStock = async(url="firms",info) =>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/${url}/`,info)
            toastSuccessNotify(`${url} has been added! `)
			getStocks(url)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(` An error occurred while adding  a ${url} record!`)
        }
    }
    const putStock = async (url="firms",info) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.put(`/${url}/${info._id}/`,info);
			toastSuccessNotify(`${url.toUpperCase()} has been successfully updated!`);
			getStocks(url)
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`An error occurred during the update`);
		}
	};
  return {getStocks,deleteStock,postStock,putStock}
}

export default useStockCalls
