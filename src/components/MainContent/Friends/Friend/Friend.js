import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";


function Friend({id,fullName,location,followed,status,photoUrl, follow, unfollow}){

    return (
        <>
            <div>
                <NavLink to={'./../profile/' + id}>
                    <img src={ photoUrl === null ? photoUrl = 'https://gambolthemes.net/workwise-new/images/resources/s3.png' : photoUrl } alt="friendPhoto"/>
                </NavLink>
            </div>
            <div>
                {fullName}
            </div>
            <div>
                {location}
            </div>
            <div>
                {status}
            </div>
            <div>
                {

                    followed
                    ? <button onClick={()=>{
                        //в delete-запросе withCredentials передается 2м как в get
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "dd035e6e-67f0-46b2-b05f-b78cb95df01f"
                            }
                        })
                            .then(response => {
                                if(response.data.resultCode === 0){
                                    console.log('delete', response.data)
                                    unfollow(id)
                                }
                            });
                    }

                    }>unfollow</button>
                    :
                    <button onClick={()=>{
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
                            }
                        })
                            .then(response => {
                                console.log('post', response.data)
                                if(response.data.resultCode === 0){
                                    follow(id)
                                }
                            });
                    }

                    }>follow</button>
                }
            </div>
            <br/>
        </>
    );
}

export default Friend;

