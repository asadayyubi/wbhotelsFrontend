import * as React from 'react';

export default function MediaCard(props) {
  const { bookInfo, onClickOnHistory } = props;

  return (
    <div className='container' onClick={onClickOnHistory}>
      <div className='left'>
        <img className='image' src={'http://ratebotai.com/python_assets/pic2.jpeg'} alt={''} ></img>
      </div>
      <div className='right'>
        <h2>{bookInfo?.hotelname}</h2>
        <p>
          {bookInfo.from_date} - {bookInfo.to_date}
        </p>
        <p>
          {bookInfo.no_of_adults} {bookInfo.no_of_adults === 1 ? "guest" : "guests"}
        </p>
      </div>
    </div>
  );
}