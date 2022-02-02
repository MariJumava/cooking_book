import main_picture from '../../pictures/main_picture.png';
import { CardResipes } from './CardResipes';

const styles = {
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        width: '1500px',
        height: '700px',
        backgroundImage: `url(${main_picture})`,
    },
};

export const HomePage = () => {
    return (
        <div style={styles.wrap}>
            <div style={styles.img}></div>
            <h3>Highest-Rated Recipes</h3>
            <div>
                <CardResipes />
            </div>
        </div>
    );
};
