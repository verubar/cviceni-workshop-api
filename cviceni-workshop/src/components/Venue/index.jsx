import './index.css'

export const Venue = (props) => {
    return (
      <div>
        <h2>Místo kurzu:</h2>
        <p>Název společnosti: {props.venueName}</p>
        <p>Ulice: {props.venueStreet}</p>
        <p>Město: {props.venueCity}</p>
        <p>Instrukce: {props.venueInstructions}</p>
      </div>
    )
}

export const Building = () => {
  const imageUrl = "https://apps.kodim.cz/daweb/trening-api/assets/bootcamp.jpg";
  return (
    <div>
      <img src={imageUrl}/>
    </div>
  );
}
