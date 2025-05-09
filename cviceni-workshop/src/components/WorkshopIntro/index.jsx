export const WorkshopIntro = (props) => {
    return (
      <div>
        <h2>O kurzu:</h2>
        <p>Název kurzu: {props.title}</p>
        <p>Cena kurzu: {props.price} Kč</p>
        <p>Úroveň kurzu: {props.level}</p>
      </div>
    )
}