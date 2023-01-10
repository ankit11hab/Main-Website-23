import RedStone from './RedStone';
import GreenStone from './GreenStone';
import YellowStone from './YellowStone';
import VioletStone from './VioletStone';

const HailAlcher = () => {
    return (
        <>
        <YellowStone value="yellow" />
        <RedStone value="red"/>
        <div className='hail'>HAIL <br/> ALCHER!</div>
            {/* <div className="stones"> */}
            {/* <div className='red'> */}

            {/* </div> */}
            {/* <div className='green'> */}
                <GreenStone value="green"/>
            {/* </div>
            <div className='violet'> */}
                <VioletStone value="violet"/>
            {/* </div>
            <div className='yellow'> */}

            {/* </div> */}
            {/* </div> */}
        </>
    );
}

export default HailAlcher;