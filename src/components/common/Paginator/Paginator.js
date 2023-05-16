import React, {useEffect, useState} from 'react';
import classes from "../../MainContent/Friends/Friends.module.css";
import {nanoid} from "nanoid";
import cn from "classnames";

const Paginator = ({totalItemsCount,pageSize,onPageChanged,currentPage,portionSize=5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    //сохраняет выбранную пятерку/десятку страниц при переключении вкладок, без юзеффекта при переключении всегда появлялась первая десятка/пятерка
    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    //получение первого, 11, 21 и тд элемента
    let leftPortionNumber = (portionNumber-1) * portionSize +1;
    //получение  10,  20 и тд элемента
    let rightPortionNumber = portionNumber * portionSize;


    const cutPages = pages.filter(p=>p >= leftPortionNumber && p<= rightPortionNumber)
    const pagesRender = cutPages.map(page => {
        return <span
            key={nanoid()}
            onClick={(e) => {
                onPageChanged(page);
            }}
            className={(currentPage === page) ? classes.selectedPage : classes.unselectedPage}
        > {page} </span>
    })

    return <div className={classes.paginator}>
        {portionNumber > 1 ? <button onClick={()=>{
            setPortionNumber(portionNumber-1);

        }}>prev</button> : null}

        {pagesRender}

        {portionCount > portionNumber ?
            <button onClick={()=>{
                setPortionNumber(portionNumber+1);
            }}>next</button> : null
        }

    </div>

}


export default Paginator;



