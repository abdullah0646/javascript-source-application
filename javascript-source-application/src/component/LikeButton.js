import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import problemLists from "../base/labels";
import "../assets/css/style.css";

function LikeButton({ buttonClickedLabel }) {
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);

    useEffect(() => {
        const getProblemObj = problemLists.filter(list => {
            return list.problem === buttonClickedLabel
        });

        setLikes(getProblemObj[0].likes);
        setDisLikes(getProblemObj[0].disLikes);
    }, [buttonClickedLabel])

    const handleLikes = () => {
        setLikes(Number(likes) + 1);
        const getProblemObj = problemLists.filter(list => {
            return list.problem === buttonClickedLabel
        });
        getProblemObj[0].likes = Number(likes) + 1;

    }

    const handleDisLikes = () => {
        debugger
        setDisLikes(Number(disLikes) + 1)
        const getProblemObj = problemLists.filter(list => {
            return list.problem === buttonClickedLabel
        });
        getProblemObj[0].disLikes = Number(disLikes) + 1;
    }
    return (
        <>
            <Button color="link" className="likeButtons"
                onClick={() => {
                    handleLikes()
                }}
            >
                <svg
                    height="1.4em"
                    width="1.4em"
                    viewBox="0 0 23 23"
                    fill="none"
                >
                    <path d="M6.83491 21.0012V10.0012M1.83491 13.2012V17.8012C1.83491 18.9213 1.83491 19.4814 2.0529 19.9092C2.24464 20.2855 2.55061 20.5915 2.92693 20.7832C3.35475 21.0012 3.91481 21.0012 5.03491 21.0012H15.7169C17.1784 21.0012 17.9091 21.0012 18.4993 20.7338C19.0195 20.4981 19.4616 20.1188 19.7737 19.6405C20.1277 19.0978 20.2389 18.3756 20.4611 16.9311L20.9842 13.5311C21.2773 11.6259 21.4238 10.6733 21.1411 9.9321C20.893 9.28153 20.4263 8.73753 19.821 8.39335C19.1314 8.00122 18.1676 8.00122 16.24 8.00122H15.4349C14.8749 8.00122 14.5948 8.00122 14.3809 7.89223C14.1928 7.79635 14.0398 7.64337 13.9439 7.45521C13.8349 7.2413 13.8349 6.96127 13.8349 6.40122V3.46706C13.8349 2.10521 12.7309 1.00122 11.3691 1.00122C11.0442 1.00122 10.7499 1.19252 10.618 1.48934L7.25721 9.05104C7.10435 9.39497 7.02792 9.56694 6.90711 9.69303C6.80033 9.80449 6.66918 9.88972 6.52396 9.94203C6.35967 10.0012 6.17148 10.0012 5.79511 10.0012H5.03491C3.91481 10.0012 3.35475 10.0012 2.92693 10.2192C2.55061 10.411 2.24464 10.7169 2.0529 11.0932C1.83491 11.5211 1.83491 12.0811 1.83491 13.2012Z" stroke="#FFF7ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                </svg>

            </Button>
            <span className=" cursePointer textAfterlikeButtons">
                {likes}
            </span>
            <Button color="link" className="likeButtons"

                onClick={() => {
                    handleDisLikes()
                }}
            >
                <svg height="1.4em"
                    width="1.4em"
                    viewBox="0 0 22 23"
                    fill="none"
                >
                    <path d="M15.587 1.00122V12.0012M20.587 8.80122V4.20122C20.587 3.08112 20.587 2.52106 20.369 2.09324C20.1772 1.71692 19.8713 1.41095 19.4949 1.21921C19.0671 1.00122 18.5071 1.00122 17.387 1.00122H6.70498C5.2435 1.00122 4.51275 1.00122 3.92255 1.26865C3.40236 1.50436 2.96027 1.88364 2.64821 2.36194C2.29414 2.90461 2.18302 3.62686 1.96079 5.07134L1.43772 8.47134C1.14461 10.3765 0.998058 11.3291 1.28077 12.0703C1.52891 12.7209 1.99562 13.2649 2.60089 13.6091C3.2905 14.0012 4.2543 14.0012 6.1819 14.0012H6.98697C7.54702 14.0012 7.82704 14.0012 8.04096 14.1102C8.22912 14.2061 8.3821 14.3591 8.47797 14.5472C8.58697 14.7611 8.58697 15.0412 8.58697 15.6012V18.5354C8.58697 19.8972 9.69096 21.0012 11.0528 21.0012C11.3776 21.0012 11.672 20.8099 11.8039 20.5131L15.1647 12.9514C15.3175 12.6075 15.394 12.4355 15.5148 12.3094C15.6215 12.1979 15.7527 12.1127 15.8979 12.0604C16.0622 12.0012 16.2504 12.0012 16.6268 12.0012H17.387C18.5071 12.0012 19.0671 12.0012 19.4949 11.7832C19.8713 11.5915 20.1772 11.2855 20.369 10.9092C20.587 10.4814 20.587 9.92133 20.587 8.80122Z" stroke="#FFF7ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                </svg>
            </Button>
            <span className="cursePointer textAfterlikeButtons">
                {disLikes}
            </span>
        </>
    );
}

export default LikeButton;



/**

  const initialState = [
    {id: 1, country: 'Austria'},
    {id: 2, country: 'Belgium'},
    {id: 3, country: 'Canada'},
  ];

  const [data, setData] = useState(initialState);

  const updateState = () => {
    const newState = data.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === 2) {
        return {...obj, country: 'Denmark'};
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setData(newState);





*/