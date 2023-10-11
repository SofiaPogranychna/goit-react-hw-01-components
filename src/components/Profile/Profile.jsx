import React from 'react';
import css from './Profile.module.css';

export const Profile = ({ username, tag,location, avatar,stats}) => { 

  return (
      <div className={css.container}>
        <div className ={css.profile}>
  <div className={css.description}>
    <img
            src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}><b>{username}</b></p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
            <span className={css.label}>Followers</span>
      <span className={css.quantity}><b>{stats.followers}</b></span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}><b>{stats.views}</b></span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}><b>{stats.likes}</b></span>
    </li>
  </ul>
      </div>
      </div>);

}