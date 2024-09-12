import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from "axios"
import { StoreContext } from '../../context/StoreContext';

function Verify() {

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate()

    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const {url} = useContext(StoreContext)


    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        console.log(response)

        if(response.data.success){
            navigate("/myorders")
        }else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])
    

  return (
    <div>
        hello
    </div>
  )
}

export default Verify