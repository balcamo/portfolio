import React, {useState} from 'react';
import { Accordion } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TabContent, Nav, NavItem, NavLink, TabPane } from 'reactstrap';
import classnames from 'classnames';
import WellEquipment from './WellEquipment';   
import {Loading} from './LoadingComponent'; 

function EquipmentRender(props){
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.equip != null) 
        return(
            <WellEquipment equipment={props.equip}
                services={props.services}
                postEquipment={props.postEquipment} 
            />
        );
    else
        return(
            <React.Fragment>
                <h3>No Equipment Available</h3>
            </React.Fragment>
        );


}
const Booster = (props) =>{
    const [activeTab, setTab] = useState(props.tab);
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.locations != null) 
    return(
        <div className="container">
            {/* Breadcrumb */}
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.locations.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>{props.locations.name}</h3>
            </div>
            </div>
            {/* Equipment Table  */}
            <div className="row row-content">
            
                {/* booster station */}
                <Accordion atomic={false}>
                    <EquipmentRender 
                        locationId={props.locations.locationId}
                        locationName={props.locations.name}
                        equip={props.equipment} 
                        isLoading={props.equipmentisLoading} 
                        errMess={props.equipmentErrMess}
                        services={props.services}
                        servicesLoading={props.servicesisLoading}
                        servicesErrMess={props.servicesErrMess}
                        postEquipment={props.postEquipment}

                    />
                </Accordion>
                    
                    
            </div>
        </div>
    );
    else
        return(
            <div></div>
        );            
      
}

export default Booster;