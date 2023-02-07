import images from '~/assets/images';

function Header() {
    return (
        <div>
            <img src={images.logo} alt="" width={60} />
            <h2>Header</h2>
        </div>
    );
}

export default Header;
