import { Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';

function RenderStaff({ staff, departments }) {
    console.log(staff, departments)
    let searchDepartment = staff.departmentId;
    const result = departments.filter(department => {
        return department.id.toLowerCase().indexOf(searchDepartment.toLowerCase()) !== -1;
    })
    return (
        <div className="col-12">
            {/* <p>hello</p> */}
            <Card>
                <CardImg src={staff.image} alt={staff.name} />
                <div className="p-3">
                    <CardTitle tag="h5">Họ và tên: {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")} </CardText>
                    <CardText>Phòng ban: {result[0].name} </CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
                </div>
            </Card>
        </div>
    )

}

function StaffDetail(props) {
    console.log('props', props)
    if (props.staff == null) {
        return (<div></div>)
    }
    return (
        <div className="container">
            <div className="row m-2">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <RenderStaff staff={props.staff}
                    departments={props.departments}
                />
            </div>
        </div>
    )
}

export default StaffDetail;