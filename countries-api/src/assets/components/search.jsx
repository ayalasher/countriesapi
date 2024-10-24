import axios from "axios"
import styles from "./styles.module.css"
import { useState, useTransition } from "react"

export default function Search() {

    const [entry, setentry] = useState("")
    const [country , setcountry] = useState([])
    const[loading , setloading] = useState(false)

    let countryname = entry ; 
    const searchcountryhandler = ()=>{
        axios.get(`https://restcountries.com/v3.1/name/${countryname}`).then((response)=>{
            setcountry(response.data)
            setloading(false)
            setentry("")
        }).catch((err)=>{
            console.log(err);
            
        })
    }


    return <div>

        <div className={styles.btndiv} >
        <input  className={styles.input} type="text" name="country" id="country" onChange={(e)=>setentry(e.target.value)} placeholder="Enter country " />
        <button onClick={searchcountryhandler} className={styles.btn} >search</button>
        </div>

        <div className={styles.cardcontainer} >
        {loading ? <p>Loading ...</p> : country.map((item)=><div key={item.name.official} className={styles.card} >
            <img className={styles.image} src={item.flags.png} alt="" />
            <p className={styles.cardtxt}  >Name : {item.name.common} </p>
            <p  className={styles.cardtxt} >capital city : {item.capital} </p>
        </div>  )  }
        </div>
       
    </div>
}