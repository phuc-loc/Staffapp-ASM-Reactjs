import { Loading } from './Loading';
import { Card, CardImg, CardTitle, Form, Input, Button, FormGroup, Row } from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function StaffList(props) {

    const [staffs, setStaffs] = useState(props.staffs.staffs);

    const handleSubmitSearch = (values) => {
        if (values.name) {
            const newStaffList = staffs.filter((staff) => {
                return staff.name.toLowerCase().indexOf(values.name.toLowerCase()) !== -1;
            });
            setStaffs(newStaffList);
        } else {
            setStaffs(props.staffs.staffs);
        }
    }

    const list = staffs.map((staff) => {
        return (
            <div className="col-lg-2 col-md-4 col-6" key={staff.id} >
                <Link to={`/nhanvien/${staff.id}`}>
                    <Card className="m-2">
                        <CardImg src={staff.image} alt={staff.name} />
                        <CardTitle
                            tag="h5"
                            style={{ textAlign: 'center' }}
                        >
                            {staff.name}
                        </CardTitle>
                    </Card>
                </Link>
            </div >
        )
    })

    //is loading
    if (props.staffs.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.staffs.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.staffs.errMess}</h4>
                </div>
            </div>
        )
    } else
        return (
            <div className="container">
                {/* <div className="col-sm mt-3 "> */}
                <div className="mt-2">
                    {/* <LocalForm >
                        <Row>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Control.text  />
                            </FormGroup>
                            <Button>Search</Button>
                        </Row>
                    </LocalForm> */}
                    <LocalForm onSubmit={(values) => handleSubmitSearch(values)}>
                        <Control.text model=".name" id="name" name="name" />
                        <Button type="submit">Search</Button>
                    </LocalForm>
                </div>
                
                <h3>Nhân viên</h3>
                <hr />
                <div className="row">
                    {list}
                </div>
            </div>
        )
}

export default StaffList;