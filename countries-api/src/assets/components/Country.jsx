import styles from "./styles.module.css"

export default function Country({loading, countries}) {
    return <div>

        <div className={styles.cardcontainer}  >
        {loading ? <p>Loading ...</p> : countries.map((item)=><div key={item.name.official} className={styles.card} >
            <img className={styles.image} src={item.flags.png} alt="" />
            <p className={styles.cardtxt}  >Name : {item.name.common} </p>
            <p  className={styles.cardtxt} >capital city {item.name.capital} </p>
        </div>  )  }
        </div>
    </div>
}