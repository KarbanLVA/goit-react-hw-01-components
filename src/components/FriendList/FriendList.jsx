import css from './FriendList.module.css';

export default function FriendsList ({items}) {    
    return (
        <ul className={css.friendList}>
            {items.map(item => (
                <li key={item.id} className={css.item}>
                    
                    <span className={ [css.spam, item.isOnline ? css.green : css.red].join(" ") }>•</span>
                    {/* <span className={classNames}>•</span> */}
                    <img className={css.avatar} src={item.avatar} alt={item.name} width="48" />
                    <p className={css.name}>{item.name}</p>
                </li>
            ))}
  
        </ul>
    )
}

// className={item.isOnlane ? css.green : css.red}
// className={ [classes["log-in-box"], classes["log-in-box_layout"] ].join(" ")}