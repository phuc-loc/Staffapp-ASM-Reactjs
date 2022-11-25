import { Loading } from "./Loading";
import { Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

function Salary(props) {
    // console.log(props)
    const list = props.salary.salary.map(item => {
        const basicSalary = item.salary;
        // console.log(basicSalary)
        const overTimeSalary = 200000;
        const luong = parseInt((item.salaryScale * basicSalary) + (item.overTime * overTimeSalary), 10);
        return (
            <div className="col-lg-4 col-md-6" key={item.id}>
                <Card className="m-2 p-3">
                    <CardTitle tag='h5'>{item.name}</CardTitle>
                    <CardText>Mã nhân viên: {item.id} </CardText>
                    <CardText>Hệ số lương: {item.salaryScale} </CardText>
                    <CardText>Số giờ làm thêm: {item.overTime} </CardText>
                    <CardText>Lương: {luong} </CardText>
                </Card>
            </div>
        )
    })

    //is loading
    if (props.salary.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if (props.salary.errMess) {
        return (
            <div className="container">
                <div className="row ">
                    <h4>{props.salary.errMess}</h4>
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
                        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div className="row">
                    {list}
                </div>
            </div>
        )
}

export default Salary;