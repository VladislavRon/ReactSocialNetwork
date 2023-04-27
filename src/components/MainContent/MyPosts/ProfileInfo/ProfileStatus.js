import classes from "../Profile.module.css";
import React from "react";



//Реакт видя классовую компоненту создает обьект! и именно с ним он работает
//в обьекте есть жизненый цикл и поэтому есть локальный стейт урок 71
class ProfileStatus extends React.Component {
    //statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status

    }
    //обьявляем метод с помощью синт стрелочных функций для того, что бы не терять контекст в обработчике
    activateEditMode=()=>{
        //setState async function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // console.log(this.state.editMode)
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode)

        //почитать что оно??
        // this.forceUpdate();
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        {/*11. updateStatus()*/}
        this.props.updateStatus(this.state.status)
        //this.props.updateStatus(this.statusInputRef.current.value)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
//для синхронизации локального стейта и стейта глобального делаем проверку в componentDidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            //делаем отмену редактирования при уходе с дива onMouseLeave={this.state.editMode ? this.deActivateEditMode : null}
            <div className={classes.status}>
                {!this.state.editMode ?
                    <div>
                       <span
                           onClick={this.activateEditMode}>
                          {this.props.status || 'no status'}
                       </span>
                    </div>
                    :
                    <div>
                        <textarea
                            // онблур отключает клик кнопкой поскольку происходит быстрее......
                            //ref={this.statusInputRef}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}
                        />

                        {/*<button onClick={this.handleSave}>Save</button>*/}
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus