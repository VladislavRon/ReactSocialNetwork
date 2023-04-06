import React from 'react';


function Friend({id,fullName,location,followed,status,photoUrl, follow, unfollow}){

    return (
        <>
            <div>
                <img src={ photoUrl === null ? photoUrl = 'https://gambolthemes.net/workwise-new/images/resources/s3.png' : photoUrl } alt="friendPhoto"/>
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
                {followed
                    ?  <button onClick={()=>{follow(id)}}>follow</button>
                    :  <button onClick={()=>{unfollow(id)}}>unfollow</button>
                }
            </div>
            <br/>
        </>
    );
}

export default Friend;
