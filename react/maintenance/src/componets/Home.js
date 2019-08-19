import React, {Component} from 'react';
import { BrowserRouter,Switch, Route,withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
      locations: state.locations,
      equipment: state.equipment,
      services: state.services
    }
  }
  const mapDispatchToProps = dispatch => ({
    postService: (dishId, rating, author, comment)=> dispatch(postService(dishId, rating, author, comment)),  
    postEquipment:(id,locationId,wellHouse,name,installDate,horsePower,oilType,serial,greaseType)=>dispatch(postEquipment(id,locationId,wellHouse,name,installDate,horsePower,oilType,serial,greaseType)),
    fetchEquipment: () => { dispatch(fetchEquipment())},
    fetchLocations: () => { dispatch(fetchLocations())},
    fetchService: () => { dispatch(fetchService())}
  });

class Home extends Component{
    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchEquipment();
        this.props.fetchService();
    }
    render(){
        return(
            <div>
                <h1>Up Coming Work</h1>
                <RenderServices />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

