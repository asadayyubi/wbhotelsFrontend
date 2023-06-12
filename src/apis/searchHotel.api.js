import { API_GET_HOTEL_BY_WORD_SEARCH } from ".";
import axios from "axios";

export const getHotelByWordSearch = ({search_text}, user_id=10, func) =>{
  if(search_text.length < 1) {
    return
  }
    axios.post(API_GET_HOTEL_BY_WORD_SEARCH,{
      search_text,
      user_id
  }).then((res)=>{
    func(res.data.data.slice(0,10))
  });
  }