import salmon from '../../pictures/salmon.png';

const styles = {
    img: {
        width: '240px',
        height: '240px',
        backgroundImage: `url(${salmon})`,
    },
};

export const CardResipes = () => {
    return (
        <div>
            <div style={styles.img}></div>
            <h5></h5>
        </div>
    )
}