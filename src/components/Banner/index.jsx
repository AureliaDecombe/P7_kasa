export default function Banner(props) {
  return (
    <div className={`banner ${props.additionalClass || ""}`}>
      {props.text ? <span className='banner__span'>{props.text}</span> : null}
    </div>
  );
}
