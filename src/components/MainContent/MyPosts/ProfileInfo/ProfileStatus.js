import classes from "../Profile.module.css";
import React from "react";



//Реакт видя классовую компоненту создает обьект! и именно с ним он работает
//в обьекте есть жизненый цикл и поэтому есть локальный стейт урок 71
class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        value: this.props.status
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
    deactivateEditMode=()=>{
        this.setState({ editMode: false });
        this.setState({value: this.state.status});
    }
    handleChange=(event) =>{
        this.setState({value: event.target.value});
    }
    handleSave =() =>{
        this.setState({value: this.state.value});
        this.setState({ editMode: false });
    }
    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activateEditMode}>{this.state.value}</span>
                    </div>
                    :
                    <div >
                        <textarea
                            //онблур отключает клик кнопкой поскольку происходит быстрее......
                            onChange={this.handleChange}
                            autoFocus={true}
                            value={this.state.value}
                        />
                        <button onClick={this.handleSave}>Save</button>
                    </div>

                }

            </div>
        )
    }
}


export default ProfileStatus