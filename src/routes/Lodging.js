/* ############## - Imports - ############# */

import "./../styles/Lodging.css";
import Error from "./../routes/Error";
import Carrousel from "./../components/Carrousel"
import Title from "./../components/Title"
import Tag from "./../components/Tag"
import Collapsible from "./../components/Collapsible"
import productsList from "./../data/productList.json";
import Host from "./../components/Host";
import Rating from "./../components/Rating";


/* ############## - Route - ############# */

function Lodging() {
    var lodgingId = window.location.pathname.substr(9);
    var lodging = productsList.find((item) => item.id === lodgingId);
    if(!lodging) {
        return <Error/>;
    } 
    else {
        return (
            <div className="lodging">
				<Carrousel pictures={lodging.pictures}></Carrousel>
				<div className="lodging__wrapper">
					<div className="lodging__informations">
						<Title title={lodging.title} location={lodging.location} />
						<Tag tags={lodging.tags} />
                        
					</div>
                    <div className="lodging__host">	
                        <Host host={lodging.host} />
                        <Rating ratings={lodging.rating} />		
						
				    </div>					
				</div>
                
				<div className="lodging__details">
                    <Collapsible title="Description" content={lodging.description}></Collapsible>
					<Collapsible title="Équipements" content={lodging.equipments}></Collapsible>
					
				</div>
			</div>
        )
    }

}


/* ############## - Exports - ############# */

export default Lodging;