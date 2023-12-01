import css from './Profile.module.css';

export default function Profile ({src, alt, userName, tag, location, followersQuantity, views, likes}) {  
  return  (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src = {src}
          alt={alt}
          className={css.avatar}
        />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
  
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>followers</span>
          <span className={css.quantity}> {followersQuantity}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
  } 


