import React, {Component} from "react";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import StaffList from "./StaffList";
import StaffDetail from './StaffDetail'
import Department from "./Department";
import Salary from "./Salary";
import Header from "./Header";
import Footer from "./Footer";
import { fetchStaffs, fetchDepartments, fetchSalary } from "../redux/ActionCreator";
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary
})

const mapDispatchToProps = (dispatch) => ({
    fetchStaffs: () => dispatch(fetchStaffs()),
    fetchDepartments: () => dispatch(fetchDepartments()),
    fetchSalary: () => dispatch(fetchSalary())
})

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchSalary();
    }

    render(){
        // console.log('main',this.props.departments);
        const StaffWithId = ({ match }) => {
            console.log('test departments',this.props.departments)
            let item = this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.id), 10)[0];
            return (
                <StaffDetail staff={item}
                    isLoading={this.props.staffs.isLoading}
                    errMess={this.props.staffs.errMess}
                    departments = {this.props.departments.departments}
                /> 
            );
        }

        console.log('ok', this.props.staffs)

        return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/nhanvien" component={() => <StaffList staffs={this.props.staffs}/> }/>
                <Route path="/phongban" component={ () => <Department departments={this.props.departments}/>}/>
                <Route path="/bangluong" component={() =><Salary salary={this.props.salary} />}/>
                <Route path="/nhanvien/:id" component={StaffWithId} />
                <Redirect to="nhanvien" />
            </Switch>
            <Footer />
        </div>
        )
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Main)
);