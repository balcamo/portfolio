import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, Table, 
    Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Label  } from 'reactstrap';
import { Control, Errors, LocalForm, actions } from 'react-redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Service from './Services';
import AddService from './AddService';
import { postEquipment } from '../redux/ActionCreators';

import {  AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
//import {Loading} from './LoadingComponent'; 

const mapStateToProps = state => {
    return {

    }}

  const mapDispatchToProps = dispatch => ({
    postEquipment: (id,locationId,wellHouse,name,installDate,horsePower,
        oilType,serial,greaseType) => dispatch(postEquipment(id,
            locationId,wellHouse,name,installDate,horsePower,
            oilType,serial,greaseType)),
  });


class RenderPropertiesList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:props.properties.name,
            installDate:props.properties.installDate,
            horsePower:props.properties.horsePower,
            oilType:props.properties.oilType,
            serial:props.properties.serial,
            greaseType:props.properties.greaseType,
            modal: false,
            touched: {
                installDate: false,
                installDate: false,
                horsePower: false,
                oilType: false,
                serial: false,
                greaseType: false
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
        this.props.postEquipment(this.props.id,this.props.locationId,
            this.props.wellHouse,this.state.name, values.installDate, 
            values.horsePower, values.oilType, values.serial, values.greaseType);
        alert("form submitting");
      }
    render(){
        if(this.state.name!=null){
            return(
                <React.Fragment>
                    <CardHeader>
                        <div className="d-inline-flex"> 
                            <h5><b>Info &nbsp;&nbsp;&nbsp;</b> </h5> 
                            <Button type="button" size="sm" onClick={this.toggle}>
                                <i className="fa fa-edit "></i> 
                            </Button>
                            {/* Modal to edit equip details */}
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Edit {this.state.name}'s properties</ModalHeader>
                                <ModalBody>
                                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="installDate" md={2}>Install Date</Label>
                                            <Col md={10}>
                                                <Control.text model=".installDate" id="installDate" name="installDate"
                                                    placeholder={this.state.installDate}
                                                    className="form-control"
                                                    validators={{
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".installDate"
                                                    show="touched"
                                                    messages={{
                                                        
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="horsePower" md={2}>Horse Power</Label>
                                            <Col md={10}>
                                                <Control.text model=".horsePower" id="horsePower" name="horsePower"
                                                    placeholder={this.state.horsePower}
                                                    className="form-control"
                                                    validators={{
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".horsePower"
                                                    show="touched"
                                                    messages={{
                                                        
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="oilType" md={2}>Oil Type</Label>
                                            <Col md={10}>
                                                <Control.text model=".oilType" id="oilType" name="oilType"
                                                    placeholder={this.state.oilType}
                                                    className="form-control"
                                                    validators={{
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".oilType"
                                                    show="touched"
                                                    messages={{
                                                        
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="serial" md={2}>Serial Number</Label>
                                            <Col md={10}>
                                                <Control.text model=".serial" id="serial" name="serial"
                                                    placeholder={this.state.serial}
                                                    className="form-control"
                                                    validators={{
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".serial"
                                                    show="touched"
                                                    messages={{
                                                        
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="greaseType" md={2}>Grease Type</Label>
                                            <Col md={10}>
                                                <Control.text model=".greaseType" id="greaseType" name="greaseType"
                                                    placeholder={this.state.greaseType}
                                                    className="form-control"
                                                    validators={{
                                                    }}
                                                    />
                                                <Errors
                                                    className="text-danger"
                                                    model=".greaseType"
                                                    show="touched"
                                                    messages={{
                                                        
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </LocalForm>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" type="submit" onClick={(values) => this.handleSubmit(values)}>Save</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className="row equipInfo"> 
                            <p><b>Install Date</b>: {this.state.installDate}&nbsp;</p> 
                            <p><b>Horse Power</b>: {this.state.horsePower}&nbsp;</p> 
                            <p><b>Oil Type</b>: {this.state.oilType}&nbsp;</p> 
                            <p><b>Serial Number</b>: {this.state.serial}&nbsp;</p> 
                            <p><b>Grease Type</b>: {this.state.greaseType}&nbsp;</p> 
                        </div>
                    </CardHeader>
                </React.Fragment>
                        
            );}
        else 
            return(<div></div>);
    }
}

function Equipment(props){
    const listofEquip = props.equipment.map((equip) => {
        const services = props.services.filter(
            (service) => parseInt(service.equipmentId) === parseInt(equip.id,10)); 
        return (
            <div key={equip.id}>
                <AccordionItem title={equip.name}>
                    <Card>
                        <RenderPropertiesList properties={equip} />
                        <CardBody >
                            <Table bordered striped hover >
                                {/*  Table Header */}
                                <thead >
                                    <tr>
                                        <th scope="col">Maintenance Task</th>
                                        <th scope="col">Who did the Work</th>
                                        <th scope="col">Date of Service</th>
                                        <th scope="col">Next Service Date</th>
                                        <th scope="col">Notes</th>
                                    </tr>
                                </thead>
                                {/* same as prperties for each tr */} 
                                <Service equipName={equip.name} services={services} equipId={equip.id} locationId={equip.locationId}/>
                            </Table>
                            
                            <AddService equipName={equip.name} equipId={equip.id} locationId={equip.locationId} serviceName={''}/>

                        </CardBody>
                    </Card>
                </AccordionItem>
            </div>
        );
    });
    if(listofEquip!=null)
        return(
            <div>
                <div className="card ">
                    {listofEquip}
                </div>
                {/* add equipment */}
                <button className="btn btn-secondary">Add Equipment</button>
            </div>
        );
    else
        return(<div></div>);
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Equipment));