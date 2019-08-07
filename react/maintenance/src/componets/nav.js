import React, {Component} from 'react';
import { NavItem, Dropdown, DropdownItem, DropdownToggle, 
    DropdownMenu, Nav, NavLink } from 'reactstrap';

class NavNav extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render(){

        return(
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink href="/"><span className="fa fa-home fa-lg"></span> Home </NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>
                            <span className="fa fa-suitcase fa-lg"></span> 
                            Equipment 
                            <b className="caret"></b>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/well/1">Well 1</DropdownItem>
                            <DropdownItem href="/well/2">Well 2</DropdownItem>
                            <DropdownItem href="/well/3">Well 3</DropdownItem>
                            <DropdownItem href="/well/4">Well 4</DropdownItem>
                            <DropdownItem href="/well/5">Well 5</DropdownItem>
                            <DropdownItem href="/well/6">well 6</DropdownItem>
                            <DropdownItem href="/well/7">Well 7</DropdownItem>
                            <DropdownItem href="/well/8">Well 8</DropdownItem> 
                            <DropdownItem href="/well/9">Well 9</DropdownItem> 
                            <DropdownItem divider />
                            <DropdownItem href="/booster/10">Booster 1</DropdownItem>
                            <DropdownItem href="/booster/11">Booster 2</DropdownItem>
                            <DropdownItem>Booster 3</DropdownItem>
                            <DropdownItem>Booster 4</DropdownItem>
                            <DropdownItem>Booster 5</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reservior 1</DropdownItem>
                            <DropdownItem>Reservior 2</DropdownItem>
                            <DropdownItem>Reservior 3</DropdownItem>
                            <DropdownItem>Reservior 4</DropdownItem>
                            <DropdownItem>Reservior 5</DropdownItem> 
            
                        </DropdownMenu>
                    </Dropdown>
                    
                    <NavItem >
                        <NavLink href="#"><span className="fa fa-map-o fa-lg"></span> Maps</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href="#"><span className="fa fa-address-card fa-lg"></span> ???</NavLink>
                    </NavItem>
                </Nav>

            </div>
        );
    }
    
}
export default  NavNav;