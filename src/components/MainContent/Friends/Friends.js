import React from 'react';
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";
import {nanoid} from "nanoid";
import  axios from "axios";


// {id: nanoid(), fullName: 'Dmitri K', location: {country:'Germany', city:'Berlin'}, followed: true,  status: 'online', photoUrl: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
// {id: nanoid() ,fullName: 'Olga J', location: {country:'France', city:'Paris'}, followed: false,  status: 'offline', photoUrl: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
// {id: nanoid() ,fullName: 'Vladislav O', location: {country:'Ukraine', city:'Kiev'}, followed: true,  status: 'online', photoUrl: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},


class Friends extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setFriends(response.data.items)
            });
    }


    render(){
        const friendsRender =  this.props.friends.map(friend =>
            <Friend
                key={nanoid()}
                id={friend.id}
                fullName={friend.name}
                location='friend.location'
                followed={friend.followed}
                status= {friend.status}
                photoUrl={friend.photos.small}
                follow={this.props.follows}
                unfollow={this.props.unfollow}
            />
        );

        return (
            <>
                <div>
                    {friendsRender}
                </div>
                <button>Show more</button>
            </>
        );
    }
}


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

export default Friends;