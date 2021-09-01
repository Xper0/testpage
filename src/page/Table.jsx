import React, {useState} from 'react';
import "./Table.scss";



const Table = () => {

    const [useTable, setUseTable] = useState(0);
    const style = {
        top:   `${useTable}px`
    }

    const upTable = () => {
        if (useTable <= -30){
            return
        }
        setUseTable(prev => prev - 5)
    }

    const downTable = () => {
        if (useTable >= 30){
            return
        }
        setUseTable(prev => prev + 5)
    }

    return (
        <div className="Content">
            <div className="Content-img">
                <div className="Content-body">
                    <img style={style} className="Content__img-uptable" src="./upntable.svg" alt="downtable"/>
                    <img className="Content__img-downtable" src="./downtable.png" alt="uptable"/>
                    <div className="Content-control">
                        <button className="Content__btn"  onClick={() => upTable()}>вверх</button>
                        <button className="Content__btn"  onClick={() => downTable()}>вниз</button>
                    </div>
                </div>
            </div>
            <div className="Content-text">
                <h2 className="Content__title">Эргономика&nbsp;&mdash; ключ к&nbsp;успеху современного человека </h2>
                <p className="Content__desc">Cтильная столешница, выполненной из&nbsp;экологически безопасного материала
                    (ДСП), и&nbsp;усиленной стальной рамы не&nbsp;составит труда разместить на&nbsp;поверхности
                    инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку
                    до&nbsp;80 кг.</p>
                <div className="Content-img active">
                    <div className="Content-body active">
                        <img style={style} className="Content__img-uptable" src="./upntable.svg" alt="downtable"/>
                        <img className="Content__img-downtable" src="./downtable.png" alt="uptable"/>
                        <div className="Content-control">
                            <button className="Content__btn"  onClick={() => upTable()}>вверх</button>
                            <button className="Content__btn" onClick={() => downTable()}>вниз
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <p className="Content__desc"> Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия
                    (царапины или удары), при контакте с&nbsp;водой не&nbsp;разрушается, устойчиво переносит бытовые
                    химические вещества и&nbsp;не&nbsp;выгорает под воздействием ультрафиолета.</p>
            </div>
        </div>

    );
};

export default Table;