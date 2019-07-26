import React, {Component} from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, 
     Row, Col, Label   } from 'reactstrap';


class AddService extends Component{
    constructor(props) {
        super(props);
        this.state = {
            equipName:props.equipName,
            equipmentId:props.equipId,
            locationId:props.locationId,
            serviceName:props.serviceName,
            serviceDate:'',
            nextDate:'',
            personName:'',
            notes:'',
            modal: false,
            touched: {
                serviceName: false,
                serviceDate: false,
                nextDate: false,
                personName: false,
                notes: false
            }
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleBlur = (field) => () => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
      handleSubmit(values){
        this.toggle();
        console.log('Current State is: ' + JSON.stringify(values));
        
        alert("form submitting");
      }
    render(){
        return(
            <div>
                <Button type="button" onClick={this.toggle} className="btn btn-secondary">Add Service</Button>
                {/* Modal to edit equip details */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add a Service for {this.state.equipName}</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="serviceName" md={2}>Service Name</Label>
                                <Col md={10}>
                                    <Control.text model=".serviceName" id="serviceName" name="serviceName"
                                        placeholder={this.state.serviceName}
                                        className="form-control"
                                        validators={{
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".serviceName"
                                        show="touched"
                                        messages={{
                                            
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="serviceDate" md={2}>Service Date</Label>
                                <Col md={10}>
                                    <Control.text model=".serviceDate" id="serviceDate" name="serviceDate"
                                        placeholder={this.state.serviceDate}
                                        className="form-control"
                                        validators={{
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".serviceDate"
                                        show="touched"
                                        messages={{
                                            
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="nextDate" md={2}>next date for this Service</Label>
                                <Col md={10}>
                                    <Control.text model=".nextDate" id="nextDate" name="nextDate"
                                        placeholder={this.state.nextDate}
                                        className="form-control"
                                        validators={{
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".nextDate"
                                        show="touched"
                                        messages={{
                                            
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="personName" md={2}>Person Who performed Service</Label>
                                <Col md={10}>
                                    <Control.text model=".personName" id="personName" name="serial"
                                        placeholder={this.state.personName}
                                        className="form-control"
                                        validators={{
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".personName"
                                        show="touched"
                                        messages={{
                                            
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="notes" md={2}>Notes</Label>
                                <Col md={10}>
                                    <Control.text model=".notes" id="notes" name="notes"
                                        placeholder={this.state.notes}
                                        className="form-control"
                                        validators={{
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".notes"
                                        show="touched"
                                        messages={{
                                            
                                        }}
                                    />
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit" >Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            
            </div>   
        );
    }
}


export default AddService;