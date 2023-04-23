import React from 'react';
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";
import {nanoid} from "nanoid";



const Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i=1; i<= pagesCount; i++){
        pages.push(i);
    }

    const friendsRender =  props.friends.map(friend =>

        <Friend
            key={nanoid()}
            id={friend.id}
            fullName={friend.name}
            location='friend.location'
            followed={friend.followed}
            status= {friend.status}
            photoUrl={friend.photos.small}
            follow={props.follows}
            unfollow={props.unfollow}
            toggleFollowingProgress={props.toggleFollowingProgress}
            followingInProgress={props.followingInProgress}
        />
    );


    return (
        <>
            <div>
                {pages.map(page => {
                    return <span
                        key={nanoid()}
                        onClick={(e) => {
                            props.onPageChanged(page);
                        }}
                        className={(props.currentPage === page) ? classes.selectedPage : classes.unselectedPage}
                    > {page} </span>
                })}
            </div>
            <div>
                {friendsRender}
            </div>
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

