import { useEffect , useState } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import styles from "./styles.module.css"
import Country from "./Country"
import { Link } from "react-router-dom"


export default function Countries() {

    const [loading , setisloading] =  useState(true)
    const [countries,setcountries] = useState([])
    

    // let entredserach = setsearchcountry(entry) ; 

    useEffect(()=>{

        let all = "all"
        axios.get(`https://restcountries.com/v3.1/all`).then((response)=>{
            const results = response.data
            console.log(results);
            setcountries(results)
            
            setisloading(false)
        }).catch((err)=>{
            console.log(err);
            setisloading(true)
            
        })
    },[])


    return <div>
        <p className={styles.headertxt}  >Countries</p>

        <div className={styles.btndiv} >
        <Link className={styles.btn} to={"/search"} >Search</Link>
        </div>
       


        <div >
            <Country  loading={loading} countries={countries}  />
        </div>
        

    </div>
}