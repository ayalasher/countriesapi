import { useEffect , useState } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import styles from "./styles.module.css"
import Country from "./Country"


export default function Countries() {

    const [loading , setisloading] =  useState(true)
    const [countries,setcountries] = useState([])
    const [entry, setentry] = useState("")
    const [searchcountry, setsearchcountry] = useState("")

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
    },[entry])


    return <div>
        <p className={styles.headertxt}  >Countries</p>
        <input className={styles.input} type="text" name="country" id="country" onChange={(e)=>setentry(e.target.value)} placeholder="Serch country : " />
        <button className={styles.btn} >search</button>


        <div >
            <Country  loading={loading} countries={countries}  />
        </div>
        

    </div>
}