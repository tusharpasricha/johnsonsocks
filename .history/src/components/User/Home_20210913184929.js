import { useEffect, useState } from "react";
import db from '../Data/Data';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {

        db.collection('infos').get().then((snapshot) => {
            let temp = [];
            snapshot.docs.forEach((doc) => {
                temp = [
                    ...temp,
                    {image: doc.data().image, title: doc.data().title, desc: doc.data().desc}
                ];
            });
            setDatas(temp);
        });

    }, []);

    return (
        <div className="home">
            {datas.map((data) => (
                <div className="cardd">
                    <img src={data.image} alt="socks" />
                    <h2>{data.title}</h2>
                    <h3>{data.desc}</h3>
                    <button><Link to="/products">More Details</Link></button>
                </div>
            ))}
        </div>
    );
}
 
export default Home;