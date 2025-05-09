import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { WorkshopIntro } from '../components/WorkshopIntro';
import { Instructor } from '../components/Instructor';
import { Venue } from '../components/Venue';
import { Building } from '../components/Venue';

const response = await fetch('http://localhost:4001/api/workshops/0');
const json = await response.json();
//console.log(json);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Domácí úkol - Workshop API</h1>
     <WorkshopIntro
        title={json.data.title}
        price={json.data.price}
        level={json.data.level}
      />
     <Instructor
        instructorName={json.data.instructor.name}
        instructorEmail={json.data.instructor.email}
        instructorBio={json.data.instructor.bio}
      />
      <Venue 
          venueName={json.data.venue.name}
          venueStreet={json.data.venue.street}
          venueCity={json.data.venue.city}
          venueInstructions={json.data.venue.instructions}
      />
     <Building/>
  </div>
);
