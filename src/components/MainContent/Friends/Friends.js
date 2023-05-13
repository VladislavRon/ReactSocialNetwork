import React from 'react';
import Friend from "./Friend/Friend";
import {nanoid} from "nanoid";
import Paginator from "../../common/Paginator/Paginator.js";


const Friends = (props) => {

    const friendsRender =  props.friends.map(friend =>
        <Friend
            key={nanoid()}
            id={friend.id}
            fullName={friend.name}
            location='friend.location'
            followed={friend.followed}
            status= {friend.status}
            photoUrl={friend.photos.small}
            followThunk={props.followThunk}
            unfollowThunk={props.unfollowThunk}
            // toggleFollowingProgress={props.toggleFollowingProgress}
            followingInProgress={props.followingInProgress}
        />
    );


    return (
        <>
            <div>
                {friendsRender}
            </div>
            <Paginator
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage}
                // portionSize={}
            />
        </>
    );

}



export default Friends;




// {id: nanoid(), fullName: 'Dmitri K', location: {country:'Germany', city:'Berlin'}, followed: true,  status: 'online', photoUrl: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
// {id: nanoid() ,fullName: 'Olga J', location: {country:'France', city:'Paris'}, followed: false,  status: 'offline', photoUrl: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
// {id: nanoid() ,fullName: 'Vladislav O', location: {country:'Ukraine', city:'Kiev'}, followed: true,  status: 'online', photoUrl: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},

// function Friends({friends, follows, unfollow, setFriends}){
//     const getFriends = () =>{
//         if(friends.length === 0){
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     setFriends(response.data.items)
//                 });
//         }
//     }
//
//
//
//     const friendsRender = friends.map(friend =>
//             <Friend
//                 key={nanoid()}
//                 id={friend.id}
//                 fullName={friend.name}
//                 location='friend.location'
//                 followed={friend.followed}
//                 status= {friend.status}
//                 photoUrl={friend.photos.small}
//                 follow={follows}
//                 unfollow={unfollow}
//             />
//         );
//
//
//     return (
//         <>
//             <button onClick={getFriends}>GetFriends</button>
//             <div>
//                 {friendsRender}
//             </div>
//             <button>Show more</button>
//         </>
//
//
//     );
// }

