import { CopyAll } from '@mui/icons-material';
import $ from 'jquery';
const conf = {
    // 'username': customData.username, // Username
    // 'password': customData.password, // Password
    // 'secret': customData.secret, // API key
    // 'mercid': customData.mercid //Merchant ID 
  "username": "2502606", 
  "password": "pvrnB3Y4",
  "secret": "eXqcPjWhfFDzxD3a", 
  "mercid": "263144"
  };
const sha256 = require('js-sha256');
 export async function submit() {   
      var email = $('[name="buyerEmail"]').val();
      var fname = $('[name="buyerFirstName"]').val();
      var lname = $('[name="buyerLastName"]').val();
      var city = $('[name="buyerCity"]').val();
      var state = $('[name="buyerState"]').val();
      var country = $('[name="buyerCountry"]').val();
      var address = $('[name="buyerAddress"]').val();
      var orderid = $('[name="orderid"]').val();
      var amount = $('[name="amount"]').val();
     
  
      var paramString = email + fname + lname + address + city + state + country + amount + orderid,
        date = new Date(),
        alldata = '',
        privateKey = sha256(conf.secret + '@' + conf.username + ':|:' + conf.password),
        checksum;
  
      alldata += paramString + date.toISOString().split('T')[0] + "";
  
      var key = sha256(conf.username + "~:~" + conf.password);
      checksum = sha256(key + "@" + alldata);
      console.log(checksum);
      var paramsHtml = '<input type="hidden" name="privatekey" value="' + privateKey + '"><input type="hidden" name="checksum" value="' + checksum + '"><input type="hidden" name="mercid" value="' + conf.mercid + '">';
      $('.main-transaction-form').append(paramsHtml);
      $('.main-transaction-form').submit();
      
  }