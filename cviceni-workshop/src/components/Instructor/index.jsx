export const Instructor = (props) => {
    return (
      <div>
        <h2>Instruktor</h2>
        <p>Jméno: {props.instructorName}</p>
        <p>Email: {props.instructorEmail}</p>
        <p>Něco o mě: {props.instructorBio}</p>
      </div>
    )
}