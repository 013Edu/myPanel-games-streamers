import ListItem from "./ListItem";

export default function Section(props) {
  console.log(props);
  return (
    <section>
      <div>
        <h2> {props.title} </h2>
        <p> {props.subTitle} </p>
        <ul className={props.className}>{props.children}</ul>
      </div>
    </section>
  );
}
