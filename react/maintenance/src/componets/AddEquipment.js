import React, {Component} from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { postEquipment } from '../redux/ActionCreators';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, 
     Row, Col, Label   } from 'reactstrap';

const mapStateToProps = state => {
    return {
    
}}
const mapDispatchToProps = dispatch => ({
	postEquipment: (id,locationId,wellHouse,name,installDate) 
		=> dispatch(postEquipment(id,locationId,wellHouse,name,installDate)),
});
class AddEquipment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            installDate:'',
            modal: false,
            touched: {
                installDate: false
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
                <Button type="button" onClick={this.toggle} className="btn btn-secondary">Add Equipment</Button>
                {/* Modal to edit equip details */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add new peice of equipment for {this.props.locationName}</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="installDate" md={2}>Install Date</Label>
                                <Col md={10}>
                                    <Control.input model=".installDate" id="installDate" name="installDate"
                                        type="datetime-local"
                                        value={this.state.installDate}
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddEquipment));