import { Button, FormGroup, InputLabel, OutlinedInput, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getRatingData, insertRatingData } from "../../apis/booking.api";
import { Rating as StarRating } from 'react-simple-star-rating'


const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045"
];
  
const Rating = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const custumer_id = queryParams.get("custumer_id");
    const booking_id = queryParams.get("booking_id");
    const hotel_id = queryParams.get("hotel_id");
    const [ hotel_rating, setHotelRating ] = useState(0);
    const [ ratingData, setRatingData ] = useState([]);
    
    const setRatingDataOverAll = (data) => {
        setRatingData(data);
    }
    
    useEffect(() => {
        getRatingData({
            custumer_id, booking_id, hotel_id
        }, setRatingDataOverAll);
        console.log(custumer_id, booking_id, hotel_id);
    }, [window.location.search])
    console.log("===rating Data", ratingData);

    const insertRating = () => {
        ratingData.forEach(rating => (
            rating.custumer_id = parseInt(custumer_id),
            rating.booking_id = parseInt(booking_id),
            rating.hotel_id = parseInt(hotel_id)
        ))
        insertRatingData(ratingData);
        console.log(ratingData)
    }

    return (

        <>
            { ratingData &&
                ratingData.map(rating => (
                    <>
                        <div style={{display: "flex", width: "40%", margin: "1rem auto", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", border: "1px solid #e3e3e3", padding: "1rem", borderRadius: "10px"}}>
                            { rating.rating_type === "main"?
                                <FormGroup style={{width: "45%", fontSize: "1.5rem"}}>
                                    <InputLabel style={{fontWeight: "bold", fontSize: "1.5rem"}} id="comment">Comment</InputLabel>
                                    <OutlinedInput onChange={(e) => rating.comment = e.target.value}/>
                                </FormGroup>
                                : 
                                <FormGroup style={{width: "45%"}}>
                                    <InputLabel style={{fontWeight: "bold", fontSize: "1.5rem"}} id="comment">Rating for {rating.name}</InputLabel>
                                    {/* <OutlinedInput value={rating?.comment} onChange={(e) => setComment(e.target.value)}/> */}
                                </FormGroup>
                            }
                            <FormGroup style={{width: "45%", paddingTop: "2.6rem"}}>
                                <StarRating
                                    onClick={(e) => rating.rating = e}
                                    size={40}
                                    transition
                                    allowFraction
                                    showTooltip
                                    tooltipDefaultText={0}
                                    // initialValue={0}
                                    fillColorArray={fillColorArray}
                                />
                            </FormGroup>
                        </div>
                    </>
            ))
        }
        <FormGroup>
            <Button size="small" style={{width: "20%", margin: "1rem auto"}} variant="contained" onClick={() => insertRating()}>Submit</Button>
        </FormGroup>
        </>

    )
}
export default Rating;