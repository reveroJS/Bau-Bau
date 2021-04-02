import "./Home.css";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";



const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <>
            {loading === false ?
                (
                    <div id="guestHome">
                        <img className="box" src="/Human-Food-Your-Dogs-Can-And-Can-Not-Eat.webp" alt="" />
                    </div>
                ) : (
                    <section>
                        <h1 style={{ position: "relative" }}>LOADING...</h1>
                        <ClockLoader
                            size={100}
                            color={"#F8E71C"}
                            loading={loading}
                        />
                    </section>
                )}
        </>
    );


}

export default Home;