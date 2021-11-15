import React, { useState } from 'react'

function Myapp() {


    //creating new state of array to render data
    const [user, setUser] = useState([]);
    //state for rendering loading bar
    const [loading, setLoading] = useState(false);


    //main function

    const loadData = async () => {
        const datafetch = await fetch
            ("https://reqres.in/api/users?page=1/data");



        setLoading(true); //setting loading property to true
    //convert this fetch data to json format

        const conVert = await
            datafetch.json();
        setUser(conVert.data);

    }
    return (
        <>
            <div>
                <div className="navbar">
                    <ul>
                        <li><a href="/"></a></li>
                        <li><a href="/"></a></li>
                        <li><a href="/">LETS-GROW-MORE</a></li>
                        <li><a href="/"></a></li>
                        <button className='fetch1' onClick={loadData}>User-Data</button>
                    </ul>
                </div>
                {loading ?
                    <ul className="your">
                        {user.map(({ id, avatar, first_name, last_name, email }) => (
                            <div key={id} className="po" >
                                <img id="imagecard" src={avatar} alt="" /><br />
                                {first_name}
                                {last_name}<br />
                                {email}<br />
                                User-id:{id}<br />
                            </div>))}
                    </ul>
                    :  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading.." className="load"/>}
            </div>
        </>
    );
};
export default Myapp;
