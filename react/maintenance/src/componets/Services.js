import React, {Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, 
    ListGroup, ListGroupItem } from 'reactstrap';

import AddService from './AddService';


class Service extends Component{

    constructor(props) {
        super(props);
        this.state = {
            services:props.services,
            equipName:props.equipName,
            equipId:props.equipId,
            locationId:props.locationId,
            modal: false,
            
        };
    
    this.toggle = this.toggle.bind(this);
    this.addService = this.addService.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }

    addService(date){
        this.toggle();
    
        return(
            <AddService equipName={this.state.equipName} equipId={this.state.equipId} locationId={this.state.locationId} previous={date}/>
        );
    
    // this.props.postEquipment(this.props.id,this.props.locationId,
    //     this.props.wellHouse,this.state.name, values.installDate, 
    //     values.horsePower, values.oilType, values.serial, values.greaseType);
    alert("form submitting");
  }
  
  
    render(){
        const services = this.state.services.map((service)=>{
            return(
                <React.Fragment key={service.id}>
                    <tr>
                        <th><Button type="button" size="sm" onClick={this.toggle}>{service.serviceName}</Button></th>
                        <td>{service.personName}</td>
                        <td>{service.serviceDate}</td>
                        <td>{service.nextDate}</td>
                        <td>{service.notes}</td>
                    </tr>
                    {/* Modal to edit equip details */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{service.serviceName}'s details</ModalHeader>
                        <ModalBody>
                            <ListGroup>
                                <ListGroupItem><b>Who did the Work:</b> {service.personName}</ListGroupItem>
                                <ListGroupItem><b>Date of Service:</b> {service.serviceDate}</ListGroupItem>
                                <ListGroupItem><b>Next Service Date:</b> {service.nextDate}</ListGroupItem>
                                <ListGroupItem><b>Notes:</b> {service.notes}</ListGroupItem>
                            </ListGroup>
                        </ModalBody>
                        <ModalFooter>
                            
                            <AddService equipName={this.state.equipName} equipId={this.state.equipId} 
                                locationId={this.state.locationId} previous={service.serviceDate} serviceName={service.serviceName}/>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </React.Fragment>
            );}
        );
        return(
            <React.Fragment>
                <tbody>
                    {services}
                </tbody>
            </React.Fragment>
        );
    }
    
}

export default Service;
