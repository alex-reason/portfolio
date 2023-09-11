import './styles/backtotop.scss';

const BackToTop = ({ backToTopHandler }) => {
    return (
        <div className='back-to-top' onClick={() => backToTopHandler()}>Back to Top</div>
    )
};

export default BackToTop;