import { Loading } from "./Loading";
import { Card, CardTitle, CardText,
Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

function Department(props) {
    const list = props.departments.departments.map((department) => {
        return (
            <div className="col-lg-4 col-md-6" >
                <Card className="m-2 p-3">
                    <CardTitle tag="h5">{department.name}</CardTitle>
                    <CardText>Số lượng nhân viên: {department.numberOfStaff} </CardText>
                </Card>
            </div>
        )
    })

    //is loading
    if (props.departments.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.departments.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.departments.errMess}</h4>
                </div>
            </div>
        )
    } else
        //

        return (
            <div className="container">
                <div className="row m-2">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/nhanvien'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {list}
                </div>
            </div>
        )
}

export default Department;