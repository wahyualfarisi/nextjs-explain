import classes from './comment-list.module.css';

function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {items.map((item, _) => {
        return (
          <li key={_}>
            <p>{item.text}</p>
            <div>
              By <address>{item.email}</address>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default CommentList;
