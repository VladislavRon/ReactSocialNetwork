import classes from "../Profile.module.css";
import React, {useEffect, useState} from 'react';

// componentDidUpdate(prevProps, prevState, snapshot) {
//     if(this.props.status !== prevProps.status){
//         this.setState({ status: this.props.status})
//     }
// }


const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    //синхронизируйся когда у нас изменится статус
    //без юзэффекта, при перезагрузке, если быстро нажать на редактирование статуса, то в инпуте,
    // вместо статуса будет пусто, если дождатся выполнения гет запроса, то в инпуте будет статус

    //хук который запускает какую то функцию после того, как все отрисуется, но не всегда,
    // а когда с наружи нам прийдет какой то статус - [ ..smth.. ]
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deActivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status)
    }

    const activateEditMode = () =>{
        setEditMode(true )
    }

    return (
        <div className={classes.status}>
            {!editMode ?
                <div>
                       <span
                           onClick={activateEditMode}>
                          {props.status || 'no status'}
                       </span>
                </div>
                :
                <div>
                        <textarea
                            onChange={e => setStatus(e.target.value)}
                            autoFocus={true}
                            onBlur={deActivateEditMode}
                            value={status}
                        />
                </div>
            }
        </div>
    )
}
console.log('1')

export default ProfileStatusWithHooks