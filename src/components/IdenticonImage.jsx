import Identicon from 'identicon.js';
import jsSHA from 'jssha';

const IdenticonImage = ({ seed, size = 64 }) => {
    const hashString = (seed) => {
        const shaObj = new jsSHA('SHA-256', 'TEXT');
        shaObj.update(seed);
        return shaObj.getHash('HEX');
    };

    const hash = hashString(seed);
    const data = new Identicon(hash, size).toString();
    const src = `data:image/png;base64,${data}`;

    return <img src={src} alt="Identicon" />;
};

export default IdenticonImage;