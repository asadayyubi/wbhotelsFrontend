function round(value, exp) {
  if (typeof exp === "undefined" || +exp === 0) return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) return NaN;

  // Shift
  value = value.toString().split("e");
  value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));

  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] - exp : -exp));
}
export function getNoOfNight(startDate, endDate) {
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
  // return endDate.getDate() - startDate.getDate() + 1;
}
export function getDiscountPrice(price, discount) {
  if (price > 0) {
    const value = (price * discount) / 100;
    return round(value, 2);
  } else {
    return 0;
  }
}
export function updateDiscountArray(discountArray, newDisObj) {
  let isDiscountAvailable = false;
  discountArray.forEach((disObj) => {
    if (disObj.discountName === newDisObj.discountName) {
      disObj.discountAmount += newDisObj.discountAmount;
      isDiscountAvailable = true;
    }
  });
  if (isDiscountAvailable === false) {
    discountArray.push(newDisObj);
  }
}
function getTaxInfoObj(totalPrice, hotelDeatils) {
  let taxInfoObj = {};
  for (const taxObj of hotelDeatils?.hotel_data?.tax_info) {
    if (totalPrice >= taxObj.min_amount && totalPrice <= taxObj.max_amount) {
      const obj = {
        totalTaxAmount: totalPrice * (taxObj.tax_value / 100),
        selectedTaxInfo: taxObj,
      };
      taxInfoObj = obj;
    }
  }
  return taxInfoObj;
}
export function getRoomPriceBreaks(
  noOfNight,
  roomsDetails,
  mendatoryRoomService,
  hotelDetails
) {
  let priceSum = 0;
  let discountSum = 0;
  // let mendatorySum = 0;
  const discountArray = [];
  const allSelectedRooms = [];
  const mendatoryRoomServiceArray = [];
  roomsDetails?.forEach((room) => {
    if (room && room.occupancy_room_count) {
      priceSum += room.room_price?.price ? room.room_price?.price : 0;
      // console.log(room.room_price?.price);
      if (room.discount && room.discount?.length) {
        let dis = 0;
        room.discount.forEach((discountObj) => {
          if (
            discountObj.discount_type === "percentage" &&
            discountObj.discount >= 0 &&
            room.availabl_discount_id === discountObj.id
          ) {
            const calculatedDiscount = getDiscountPrice(
              room.room_price?.price,
              discountObj.discount
            );
            dis += calculatedDiscount;
            // console.log({ discount: discountObj.discount, discountInRupees: calculatedDiscount });
            updateDiscountArray(discountArray, {
              discountName: discountObj.discount_name,
              discountAmount: noOfNight * calculatedDiscount,
            });
          }
        });
        discountSum += dis ? dis : 0;
      }
      allSelectedRooms.push(room);
    }
  });
  //   if (mendatoryRoomService && mendatoryRoomService.length) {
  //     let sum = 0;
  //     mendatoryRoomService.forEach((service) => {
  //       sum += service.gross_amount;
  //       const serviceObj = {
  //         serviceName: service.service_name,
  //         grossAmount: noOfNight * service.gross_amount,
  //       };
  //       mendatoryRoomServiceArray.push(serviceObj);
  //     });
  //     mendatorySum += sum;
  //   }
  return {
    noOfNight,
    totalHotelSumBeforeDisCount: noOfNight * priceSum,
    discountSum,
    totalHotelSumAfterDisCount: (noOfNight * (priceSum - discountSum))
      // + mendatorySum
      .toFixed(2),
    discountArray,
    mendatoryRoomServiceArray,
    allSelectedRooms,
    taxAndServiceObj: getTaxInfoObj(noOfNight * priceSum, hotelDetails),
  };
}
function getBookingService(priceAndSelectedRoomDetails) {
  if (
    priceAndSelectedRoomDetails &&
    priceAndSelectedRoomDetails.mendatoryRoomServiceArray?.length
  ) {
    const roomBookingInfo =
      priceAndSelectedRoomDetails.mendatoryRoomServiceArray.map((room) => {
        return {
          room_service_id: 3,
          title: "Lunch",
          quantity: 5,
          service_gross_amount: 600,
          total_gross_amount: 3000,
        };
      });
    return roomBookingInfo.length ? roomBookingInfo : [];
  }
}
function getRoomBookedInfo(
  priceAndSelectedRoomDetails,
  searchParams,
  selectedRoomInfo
) {
  if (
    priceAndSelectedRoomDetails &&
    priceAndSelectedRoomDetails.allSelectedRooms?.length
  ) {
    const roomBookingInfo = priceAndSelectedRoomDetails.allSelectedRooms.map(
      (room) => {
        return {
          room_id: room.room_id,
          no_of_pax: 0,
          no_of_adults: searchParams.no_of_adults,
          no_of_children: 0,
          total_sale_amount: room.price * searchParams.room_count,
          discount_amount: 0,
          coupon_amount: 0,
          total_without_tax: room.price,
          tax_amount: 0,
          gross_amount: room.price,
        };
      }
    );
    return roomBookingInfo;
  }
}
export function getBookingDetails(
  searchParams,
  hotelData,
  roomsDetails,
  userProfileDetails,
  fullName,
  email,
  priceAndSelectedRoomDetails,
  selectedRoomInfo
) {
  let bookingDetails = {
    hotel_id: hotelData?.id,
    tax_id: hotelData?.tax_id,
    from_date: searchParams.from_date,
    to_date: searchParams.to_date,
    no_of_nights:
      getNoOfNight(searchParams.from_date, searchParams.to_date) || 1,
    no_of_pax: 0,
    no_of_adults: searchParams.no_of_adults,
    no_of_children: searchParams.no_of_children,
    total_sale_amount: Number(
      priceAndSelectedRoomDetails.totalHotelSumAfterDisCount
    ),
    discount_id: 1,
    discount_value: Number(priceAndSelectedRoomDetails.discountSum),
    discount_amount: Number(priceAndSelectedRoomDetails.discountSum),
    discount_type: "percentage",
    coupon_id: 0,
    coupon_value: 0,
    coupon_type: "amount",
    coupon_discount_amount: 0,
    total_without_tax: Number(
      priceAndSelectedRoomDetails.totalHotelSumAfterDisCount
    ),
    tax_amount: priceAndSelectedRoomDetails.taxAndServiceObj?.totalTaxAmount,
    total_services_amount: 0,
    gross_amount:
      Number(priceAndSelectedRoomDetails.totalHotelSumAfterDisCount) +
      priceAndSelectedRoomDetails.taxAndServiceObj?.totalTaxAmount,
    minimum_advance: 500,
    paid_amount: 0,
    balance_amount: 0,
    customer_id: userProfileDetails?.id,
    first_name: fullName?.split(" ")[0],
    last_name: fullName?.split(" ")[1],
    email: email,
    visit_type: "",
    address: "",
    phone_number: userProfileDetails.phone_number,
    mobile_number: userProfileDetails.phone_number,
    country: "India",
    transaction_status: "pending",
    booking_status: "pending",
    created_by: userProfileDetails?.id,
    room_assinged_adult_info: selectedRoomInfo?.room_assinged_adult_info,
    room_booking: getRoomBookedInfo(
      priceAndSelectedRoomDetails,
      searchParams,
      selectedRoomInfo
    ),
    booking_service: getBookingService(priceAndSelectedRoomDetails) || [],
  };
  console.log("booking details payload: ", bookingDetails);
  return bookingDetails;
}

// export function getRoomPriceBreaks1(noOfNight, roomsDetails, mendatoryRoomService) {
//     let priceSum = 0;
//     let discountSum = 0;
//     let mendatorySum = 0;
//     const discountArray = [];
//     const mendatoryRoomServiceArray = [];
//     roomsDetails?.forEach((room) => {
//         priceSum += room.room_price?.price ? room.room_price?.price : 0;
//         // console.log(room.room_price?.price);
//         if (room.discount && room.discount?.length) {
//             let dis = 0;
//             room.discount.forEach((discountObj) => {
//                 if (discountObj.discount_type === 'percentage' && discountObj.discount >= 0) {
//                     const calculatedDiscount = getDiscountPrice(room.room_price?.price, discountObj.discount)
//                     dis += calculatedDiscount;
//                     // console.log({ discount: discountObj.discount, discountInRupees: calculatedDiscount });
//                     updateDiscountArray(discountArray, { discountName: discountObj.discount_name, discountAmount: noOfNight*calculatedDiscount });
//                 }
//             });
//             discountSum += dis? dis : 0;
//         }
//     });
//     if(mendatoryRoomService && mendatoryRoomService.length) {
//         let sum = 0
//         mendatoryRoomService.forEach((service) => {
//             sum += service.gross_amount;
//             const serviceObj = {
//                 serviceName: service.service_name,
//                 grossAmount: noOfNight*service.gross_amount
//             }
//             mendatoryRoomServiceArray.push(serviceObj);
//         });
//         mendatorySum += sum;
//     }
//     return {
//         noOfNight,
//         totalHotelSumBeforeDisCount: noOfNight * (priceSum),
//         discountSum,
//         totalHotelSumAfterDisCount: (noOfNight * (priceSum - discountSum + mendatorySum)).toFixed(2),
//         discountArray,
//         mendatoryRoomServiceArray
//     }
// }
