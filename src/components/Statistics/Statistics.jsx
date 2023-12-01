import css from './Statistics.module.css';
// const color = getRandomColor();

export default function Statistics ({items, title}) {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.statList}>
                {items.map(item => (
                      <li key={item.id} className={css.item} style={{backgroundColor:item.color}}>
                        <span className={css.label}>{item.label}</span> 
                        <span className={css.percentage}>{item.percentage}%</span>
                      </li>  
                    ))
                }
            </ul>       
        </section>
    )
}

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// console.log(color)



