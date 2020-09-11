import React from "react"
import style from './Add.module.scss'

export class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isVisible: false,
            idText: '',
            lastNameText: '',
            firstNameText: '',
            emailText: '',
            phoneText: '',
        }
    }
    render () {
        let flag = this.state.idText && this.state.lastNameText && this.state.firstNameText &&
            this.state.emailText && this.state.phoneText
        return (
            <div className={style.add}>
                {this.state.isVisible && <div className={style.form}>
                    <input
                        type={'text'} name={'id'}
                        placeholder={'id'} value={this.state.idText}
                        onChange={(e)=>{this.setState({idText:e.target.value})}}
                    />
                    <input
                        type={'text'} name={'firstName'}
                        placeholder={'firstName'} value={this.state.firstNameText}
                        onChange={(e)=>{this.setState({firstNameText:e.target.value})}}
                    />
                    <input
                        type={'text'} name={'lastName'}
                        placeholder={'lastName'} value={this.state.lastNameText}
                        onChange={(e)=>{this.setState({lastNameText:e.target.value})}}
                    />
                    <input
                        type={'text'} name={'email'}
                        placeholder={'email'} value={this.state.emailText}
                        onChange={(e)=>{this.setState({emailText:e.target.value})}}
                    />
                    <input
                        type={'text'} name={'phone'}
                        placeholder={'phone'} value={this.state.phoneText}
                        onChange={(e)=>{this.setState({phoneText:e.target.value})}}
                    />
                </div>}
                {!flag && <div className={style.myButton}
                               onClick={()=>{this.setState({isVisible: !this.state.isVisible})}}>
                    Добавить
                </div>}
                {flag && <div className={style.myButton}
                              onClick={()=>{
                                  this.setState({
                                      isVisible: false,
                                      idText: '',
                                      lastNameText: '',
                                      firstNameText: '',
                                      emailText: '',
                                      phoneText: '',
                                  })
                              }}>
                    Добавить в таблицу
                </div>}
            </div>
        )
    }
}