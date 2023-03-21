import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const BannerCard = ({title, buttonName}) => {
    return (

        <Card className='card'>
            
            <Card.Body className='cardBody'>
                <Card.Title className='projectTitle'>{title}</Card.Title>
                <div className="cardButtons">
                   <Link to="/search"><button variant="primary">{buttonName}</button></Link>
                   
                </div>

            </Card.Body>
        </Card>
    );

};

export default BannerCard;