import { Col } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, GithubUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span><a href={GithubUrl} /></span>
                </div>
            </div>
        </Col>
    )
}  