import React, { Component } from 'react';
import { Zoom } from 'react-reveal';
import { FormField } from '../../Common';
import Helper from '../../../Helper';
import { Button } from '../../Common';

class Contact extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formdata:{
            name:{
                element: 'input',
                value: '',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'enter your name'
                },
                validation:{
                    required: true,
                },
                valid: true,
                validationMessage:''
            },
            email:{
                element: 'input',
                value: '',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'enter your email'
                },
                validation:{
                    required: true,
                    email:'true'
                },
                valid: true,
                validationMessage:''
            },
            subject:{
                element: 'input',
                value: '',
                config:{
                    name:'subject_input',
                    type:'text',
                    placeholder:'Subject'
                },
                validation:{
                    required: true,
                },
                valid: true,
                validationMessage:''
            },
            comment:{
                element: 'textfield',
                value: '',
                config:{
                    name:'comment_input',
                    type:'text',
                    placeholder:'Type your message here...'
                },
                validation:{
                    required: true,
                },
                valid: true,
                validationMessage:''
            }
        }
    }
    // constructor(){
    //     super();
    //     // this.submitForm = this.submitForm.bind(this)
    // }
    displayMessage(){
        return (
            ((this.state.formError ? <div className="error_label">Something went wrong, try again</div> :
             ((this.state.formSuccess !== '' ) ? <div className="success_label">{this.state.formSuccess}</div> : null)))
        )
    }
    submitForm(e){
        e.preventDefault();
        const dataToSubmit = Helper.validateForm(this.state.formdata);
        if(!dataToSubmit.isValid){
            return this.setState({
                formError: true
            })
        }
        console.log(dataToSubmit);
        this.authenticateUserThenLogIn(dataToSubmit.record)
    }
    onChange(event, id){
        const formDetails = Helper.onChange(this.state.formdata, id, event.target.value);
        this.setState({
            formdata: {...this.state.formdata,  [id]: {...formDetails}},
            formError: false,
            formSuccess: ''
        })
    }
    render() {
        return (
            <div className="contact_us_wrapper">
                <div className="title-wrapper">
                        <h3 className="about_us_title contact_us">contact us</h3>
                </div>
                <div
                    className="contact_us_container"
                >
                    
                    <Zoom
                        duration={500}
                    >
                        <div
                            className="map"
                        >
                            <iframe
                                title={"map1"}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.3362674200448!2d3.4432872361226914!3d6.43608886885531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51e8bda6483%3A0xe65d32af7817ff72!2sLagos+Oriental+Hotel!5e0!3m2!1sen!2sng!4v1550166989713"
                                width="100%"
                                height="400px"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </Zoom>
                    <Zoom
                        duration={500}
                    >
                        <div
                            className="contact-form"
                        >
                            
                            <form onSubmit={(e) => this.submitForm(e)} noValidate>
                                <FormField 
                                    formdata={this.state.formdata.name} id={"name"}
                                    onChange={ (event) => this.onChange(event, 'name')}
                                />
                                <FormField 
                                    formdata={this.state.formdata.email} id={"email"}
                                    onChange={ (event) => this.onChange(event, 'email')}
                                />
                                <FormField 
                                    formdata={this.state.formdata.subject} id={"subject"}
                                    onChange={ (event) => this.onChange(event, 'subject')}
                                />
                                <FormField 
                                    formdata={this.state.formdata.comment} id={"comment"}
                                    onChange={ (event) => this.onChange(event, 'comment')}
                                />
                                {this.displayMessage()}
                                <Button onClick={this.onSubmit} text={'Submit'} style={{background:'#ec4b3b'}} />
                            </form>
                        </div>
                    </Zoom>
                    
                </div>
            </div>
        );
    }
}

export default Contact;