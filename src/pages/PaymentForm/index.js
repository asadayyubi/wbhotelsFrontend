import $ from 'jquery';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoaderPrimary from '../../layout/Loader/LoaderPrimary';
import {submit} from './sendtoairpay';
const PaymentForm = () => {
    const location  = useLocation();
    const props = location?.state?.data;
    // const props = {
    //     email: 'abc@gmail.com',
    //     buyerPhone: '7012787889',
    //     fname: 'manish',
    //     lname: 'kumar',
    //     BuyerPincode: '500075',
    //     city: 'Hyderabad',
    //     state: 'Telangana',
    //     country: 'India',
    //     buyerAddress: 'Hyderabad',
    //     orderid: '1',
    //     amount: '2550.00',
    //     customField1: '',
    //     currency: '123',
    //     isocurrency: 'INR',
    //     chmod: '',
    //     tWallet: '',
    //     subtype: '',
    // }
    const [email, setEmail] = useState('');
    const [buyerPhone, setbuyerPhone] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [BuyerPincode, setBuyerPincode] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('');
    const [buyerAddress, setbuyerAddress] = useState('');
    const [orderid, setorderid] = useState('');
    const [amount, setamount] = useState('');
    const [currency, setcurrency] = useState('');
    const [isocurrency, setisocurrency] = useState('');
    const [chmod, setchmod] = useState('');
    const [customField, setcustomField] = useState('');
    const [subType, setsubType] = useState('');
    const [tWallet, settWallet] = useState('');
    const [merDom, setMerDom] = useState('aHR0cHM6Ly93YmhvdGVscy5pbg==')
    useEffect(() => {
        if(props) {
            setEmail(props.email);
        setfname(props.fname);
        setlname(props.lname);
        setbuyerAddress(props.buyerAddress);
        setbuyerPhone(props.buyerPhone);
        setcity(props.city);
        setstate(props.state);
        setcountry(props.country);
        setBuyerPincode(props.BuyerPincode);
        setorderid(props.orderid);
        setamount(props.amount);
        setcurrency(props.currency);
        setisocurrency(props.isocurrency);
        setchmod(props.chmod);
        settWallet(props.tWallet);
        setsubType(props.subtype)
        }
    }, []);
    function validates() {
        var email = $('[name="buyerEmail"]').val();
        var buyerPhone = $('[name="buyerPhone"]').val();
        var fname = $('[name="buyerFirstName"]').val();
        var lname = $('[name="buyerLastName"]').val();
        var BuyerPincode = $('[name="BuyerPincode"]').val();
        var city = $('[name="buyerCity"]').val();
        var state = $('[name="buyerState"]').val();
        var country = $('[name="buyerCountry"]').val();
        var buyerAddress = $('[name="buyerAddress"]').val();
        var orderid = $('[name="orderid"]').val();
        var amount = $('[name="amount"]').val();
        var currency = $('[name="currency"]').val();
        var isocurrency = $('[name="isocurrency"]').val();
        var chmod = $('[name="chmod"]').val();
        var rt_type = true;

        if (email == "" || email.length < 6 || email.length > 50) {

            document.getElementById('email-err').innerHTML = 'Please enter valid email address.';
            rt_type = false;
        }
        else {
            var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            const condition = new RegExp(reg, 'g');

            var email = $('[name="buyerEmail"]').val();
            if (!condition.test(email)) {
                rt_type = false;
                document.getElementById('email-err').innerHTML = 'Please enter valid Email. ';


            } else {
                document.getElementById('email-err').innerHTML = '';

            }
        }
        if (buyerPhone == "") {
            document.getElementById('buyerPhone-err').innerHTML = 'Please enter Phone Number.';
            rt_type = false;
        }
        else {
            var reg = /^[\d\s\.\-]+$/
            const condition = new RegExp(reg, 'g');



            if (!condition.test(buyerPhone)) {

                document.getElementById('buyerPhone-err').innerHTML = 'Please enter valid Phone Number.';
                rt_type = false;
            }
            else {
                // var phone = document.getElementById('buyerPhone').value;
                if (buyerPhone.length < 8 || buyerPhone.length > 15) {

                    document.getElementById('buyerPhone-err').innerHTML = 'Please enter valid Phone Number.';
                    rt_type = false;
                }
                else {
                    document.getElementById('buyerPhone-err').innerHTML = '';

                }
            }

        }
        if (fname == "") {

            document.getElementById('fname-err').innerHTML = 'Please enter First Name.';
            rt_type = false;
        }
        else {
            var reg = /^[A-Za-z\d\s]+$/;
            const condition = new RegExp(reg, 'g');

            if (!condition.test(fname)) {

                document.getElementById('fname-err').innerHTML = 'Please enter valid First Name.';
                rt_type = false;
            }
            else {

                if (fname.length < 1) {

                    document.getElementById('fname-err').innerHTML = 'First Name should be minimum 1 character.';
                    rt_type = false;
                }
                else
                    if (fname.length > 50) {
                        document.getElementById('fname-err').innerHTML = 'First Name should not exceed 50 character.';
                        rt_type = false;
                    }
                    else
                        document.getElementById('fname-err').innerHTML = '';

            }

        }
        if (lname == "") {

            document.getElementById('lname-err').innerHTML = 'Please enter Last Name.';
            rt_type = false;
        }
        else {
            var reg = /^[A-Za-z\d\s]+$/;
            const condition = new RegExp(reg, 'g');

            if (!condition.test(lname)) {

                document.getElementById('lname-err').innerHTML = 'Please enter valid Last Name.';
                rt_type = false;
            }
            else {

                if (lname.length < 1) {

                    document.getElementById('lname-err').innerHTML = 'Last Name should be minimum 1 character.';
                    rt_type = false;
                }
                else
                    if (lname.length > 50) {
                        document.getElementById('lname-err').innerHTML = 'Last Name should not exceed 50 character.';
                        rt_type = false;
                    }
                    else
                        document.getElementById('lname-err').innerHTML = '';

            }

        }

        if (buyerAddress != "") {
            var reg = /^[A-Za-z. ,;#$\/()-_]*$/;
            const condition = new RegExp(reg, 'g');

            if (!condition.test(buyerAddress)) {

                document.getElementById('buyerAddress-err').innerHTML = 'Please enter valid Address.';
                rt_type = false;
            }
            else
                if (buyerAddress.length < 4) {

                    document.getElementById('buyerAddress-err').innerHTML = 'Buyer Address should be minimum 4 character.';
                    rt_type = false;
                }
                else if (buyerAddress.length > 50) {
                    document.getElementById('buyerAddress-err').innerHTML = 'Buyer Address should not exceed 50 character.';
                    rt_type = false;
                }
                else
                    document.getElementById('buyerAddress-err').innerHTML = '';

        }

        if (city != "") {
            var reg = /^[a-zA-Z\s]+$/;
            const condition = new RegExp(reg, 'g');

            if (!condition.test(city)) {

                document.getElementById('buyerCity-err').innerHTML = 'Please enter valid City.';
                rt_type = false;
            }
            else
                if (city.length < 2) {

                    document.getElementById('buyerCity-err').innerHTML = 'City should be minimum 2 character.';
                    rt_type = false;
                } else
                    if (city.length > 50) {

                        document.getElementById('buyerCity-err').innerHTML = 'City  should not exceed 50 character.';
                        rt_type = false;
                    }
                    else
                        document.getElementById('buyerCity-err').innerHTML = '';
        }

        if (state != "") {
            var reg = /^[a-zA-Z\s]+$/;
            const condition = new RegExp(reg, 'g');

            if (!condition.test(state)) {

                document.getElementById('buyerState-err').innerHTML = 'Please enter valid State.';
                rt_type = false;
            }
            else
                if (state.length < 2) {

                    document.getElementById('buyerState-err').innerHTML = 'State should be minimum 2 character.';
                    rt_type = false;
                } else
                    if (state.length > 50) {

                        document.getElementById('buyerState-err').innerHTML = 'State should not exceed 50 character.';
                        rt_type = false;
                    }
                    else
                        document.getElementById('buyerState-err').innerHTML = '';
        }


        if (country != "") {
            var reg = /^[a-zA-Z\s]+$/;
            const condition = new RegExp(reg, 'g');

            if (!condition.test(country)) {

                document.getElementById('buyerCountry-err').innerHTML = 'Please enter valid Country.';
                rt_type = false;
            }
            else
                if (country.length < 2) {

                    document.getElementById('buyerCountry-err').innerHTML = 'Country should be minimum 2 character.';
                    rt_type = false;
                } else
                    if (country.length > 50) {

                        document.getElementById('buyerCountry-err').innerHTML = 'Country should not exceed 50 character.';
                        rt_type = false;
                    }
                    else
                        document.getElementById('buyerCountry-err').innerHTML = '';
        }

        if (BuyerPincode != "") {

            var reg = /^[0-9]*$/;
            const condition = new RegExp(reg, 'g');


            if (!condition.test(BuyerPincode)) {

                document.getElementById('BuyerPincode-err').innerHTML = 'Please enter valid Pincode.';
                rt_type = false;
            }
            else
                if (BuyerPincode.length > 8 || BuyerPincode.length < 4) {
                    document.getElementById('BuyerPincode-err').innerHTML = 'Please enter valid Pincode.';
                    rt_type = false;
                }
                else

                    document.getElementById('BuyerPincode-err').innerHTML = '';

        }

        var reg = /^[A-Za-z\d]+$/;
        const condition = new RegExp(reg, 'g');
        if (orderid == "") {
            document.getElementById('orderid-err').innerHTML = 'Please enter Order ID';
            rt_type = false;
        }
        else
            if (!condition.test(orderid)) {

                document.getElementById('orderid-err').innerHTML = 'Please enter valid Order ID.';
                rt_type = false;
            }
            else if (orderid.length > 20) {
                rt_type = false;

                document.getElementById('orderid-err').innerHTML = 'Order ID should not exceed 50 character.';

            }
            else
                document.getElementById('orderid-err').innerHTML = '';


        if (amount == "") {

            document.getElementById('amount-err').innerHTML = 'Please enter Amount.';
            rt_type = false;
        }
        else {
            //   var reg = /^\d{1,6}+(\.\d{1,2})?$/;
            // const condition = new RegExp(reg, 'g');

            if (!amount.match(/^(\d{1,6})(\.\d{2})$/)) {

                document.getElementById('amount-err').innerHTML = 'Please enter valid Amount.';
                rt_type = false;
            }
            else
                document.getElementById('amount-err').innerHTML = '';

        }

        if (currency == "") {

            document.getElementById('currency-err').innerHTML = 'Please enter Currency.';
            rt_type = false;
        }
        else {
            var reg = /^[0-9]*$/
            const condition = new RegExp(reg, 'g');

            if (!condition.test(currency)) {
                rt_type = false;
                document.getElementById('currency-err').innerHTML = 'Enter valid Currency';

            }
            else if (currency.length != 3) {
                rt_type = false;

                document.getElementById('currency-err').innerHTML = 'Enter valid Currency ';
            }
            else
                document.getElementById('currency-err').innerHTML = '';

        }

        if (isocurrency == "") {

            document.getElementById('isocurrency-err').innerHTML = 'Please enter ISO Currency.';
            rt_type = false;
        }
        else {
            var reg = /[A-Za-z]$/
            const condition = new RegExp(reg, 'g');

            if (!condition.test(isocurrency)) {
                rt_type = false;
                document.getElementById('isocurrency-err').innerHTML = 'Enter valid ISO Currency';

            }
            else if (isocurrency.length != 3) {
                rt_type = false;

                document.getElementById('isocurrency-err').innerHTML = 'Enter valid ISO Currency ';
            }
            else
                document.getElementById('isocurrency-err').innerHTML = '';

        }

        if (chmod != "") {
            var chmodes = chmod.split("_");

            for (var j = 0; j < chmodes.length; j++) {
                if (chmodes[j].toLowerCase() == "pg")
                    document.getElementById('chmod-err').innerHTML = '';
                else if (chmodes[j].toLowerCase() == "nb")
                    document.getElementById('chmod-err').innerHTML = '';
                else if (chmodes[j].toLowerCase() == "ppc")
                    document.getElementById('chmod-err').innerHTML = '';
                else if (chmodes[j].toLowerCase() == "upi")
                    document.getElementById('chmod-err').innerHTML = '';
                else if (chmodes[j].toLowerCase() == "ccpg")
                    document.getElementById('chmod-err').innerHTML = '';
                else if (chmodes[j].toLowerCase() == "dcpg")
                    document.getElementById('chmod-err').innerHTML = '';
                else {
                    document.getElementById('chmod-err').innerHTML = 'Invalid Payment Mode';
                    rt_type = false;
                    break;
                }

            }
        }
        else {
            const val = document.getElementById('amount').value;
            // if (!val.match(/^(\d{1,6})(\.\d{2})$/)) {
            //     document.getElementById('amount').style.borderColor = 'red';
            //     document.getElementById('amountspan').style.display = '';
            //     document.getElementById('amountspan').innerHTML = 'Please enter valid amount e.g. 99.50';
            //     rt_type = false;
            // }
        }

        // if (document.getElementById('customvar').value != "") {
        //     var reg = /^[A-Za-z0-9 =]*$/;
        //     if (!reg.test(document.getElementById('customvar').value)) {
        //         document.getElementById('customvar').style.borderColor = 'red';
        //         document.getElementById('customspan').style.display = 'block';
        //         document.getElementById('customspan').innerHTML = 'Please enter valid Custom field1';
        //         rt_type = false;
        //     }
        // }

        if (document.getElementById('subtype')?.value != "") {
            var reg = /^[0-9]*$/;
            if (!reg.test(document.getElementById('subtype').value)) {
                document.getElementById('subtype').style.borderColor = 'red';
                document.getElementById('subtypespan').style.display = 'block';
                document.getElementById('subtypespan').innerHTML = 'Please enter numbers';
                rt_type = false;
            }
        }
        submit();
    }

    useEffect(() => {
        if(orderid){
            setTimeout(() => {
                validates();
            }, 1000);
        }
    }, [orderid]);
    return (
        <>
        <div style={{margin: "0 auto", "textAlign": "center", display:"none"}}>
            <form className="main-transaction-form" action="https://payments.airpay.co.in/pay/index.php" method="post">
                <label >Buyer Email</label><span style={{ color: 'red' }}>*</span><br />
                <input type="text" placeholder="Buyer Email" name="buyerEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <span id="email-err"></span>
                <br></br>

                <label >Buyer Phone</label> <span style={{ color: 'red' }}>*</span><br />
                <input type="text" placeholder="Buyer Phone" name="buyerPhone"  value={buyerPhone} onChange={(e) => setbuyerPhone(e.target.value)} required />
                <span id="buyerPhone-err"></span>
                <br></br>

                <label >Buyer First Name</label> <span style={{ color: 'red' }}>*</span><br />
                <input type="text" placeholder="Buyer First Name" name="buyerFirstName"  value={fname} onChange={(e) => setfname(e.target.value)} required />
                <span id="fname-err"></span>
                <br></br>

                <label >Buyer Last Name</label>  <span style={{ color: 'red' }}>*</span><br />
                <input type="text" placeholder="Buyer Last Name" name="buyerLastName" value={lname} onChange={(e) => setlname(e.target.value)} />
                <span id="lname-err"></span>
                <br></br>

                <label >Buyer Address</label> <br />
                <input type="text" placeholder="Buyer Address" name="buyerAddress" value={buyerAddress} onChange={(e) => setbuyerAddress(e.target.value)} />
                <span id="buyerAddress-err"></span>
                <br></br>

                <label >Buyer City</label>  <br />
                <input type="text" placeholder="Buyer City" name="buyerCity" value={city} onChange={(e) => setcity(e.target.value)} />
                <span id="buyerCity-err"></span>
                <br></br>

                <label >Buyer State</label>  <br />
                <input type="text" placeholder="Buyer State" name="buyerState" value={state} onChange={(e) => setstate(e.target.value)} />
                <span id="buyerState-err"></span>
                <br></br>

                <label >Buyer Country</label>  <br />
                <input type="text" placeholder="Buyer Country" name="buyerCountry" value={country} onChange={(e) => setcountry(e.target.value)} />
                <span id="buyerCountry-err"></span>
                <br></br>

                <label >Buyer Pincode</label>  <br />
                <input type="text" placeholder="Buyer Pincode" name="BuyerPincode" value={BuyerPincode} onChange={(e) => setBuyerPincode(e.target.value)} />
                <span id="BuyerPincode-err"></span>
                <br></br>

                <label >Order ID</label> <span style={{ color: 'red' }}>*</span><br />
                <input type="text" placeholder="Order ID" name="orderid" value={orderid} onChange={(e) => setorderid(e.target.value)} />
                <span id="orderid-err"></span>
                <br></br>

                <label >Amount</label><span style={{ color: 'red' }}>*</span><br />
                <input type="text" placeholder="Amount" id='amount' name="amount" value={amount} onChange={(e) => setamount(e.target.value)} />
                <span id="amount-err"></span>
                <br></br>

                <label >Custom Field 1</label> <br />
                <input type="text" placeholder="Custom Field 1" name="customvar" value={customField} onChange={(e) => setcustomField(e.target.value)} />
                <span id="customvar-err"></span>
                <br></br>

                <label >Payment Mode</label> <br />
                <input type="text" placeholder="chmod" name="chmod" value={chmod} onChange={(e) => setchmod(e.target.value)} />
                <span id="chmod-err"></span>
                <br></br>

                {/* <input type="text" placeholder="Token" name="token" />
                <br></br>
                <br></br> */}
                <label >Transaction Wallet</label> <br />
                <input type="text" placeholder="Transaction Wallet" name="wallet" value={tWallet} onChange={(e) => settWallet(e.target.value)} />
                <br></br>

                <label >Currency</label>
                <span style={{ color: 'red' }}>*</span><br />

                <input type="text" placeholder="Currency" name="currency" value={currency} onChange={(e) => setcurrency(e.target.value)} />
                <span id="currency-err"></span>

                <br></br>
                <label >isoCurrency</label>
                <span style={{ color: 'red' }}>*</span><br />

                <input type="text" placeholder="isoCurrency" name="isocurrency" value={isocurrency} onChange={(e) => setisocurrency(e.target.value)} />
                <span id="isocurrency-err"></span>
                <br></br>

                <label >Sub Type</label>
                <br></br>
                <input type="text" id="subtype" placeholder="subtype" name="txnsubtype" value={subType} onChange={(e) => setsubType(e.target.value)} />
                <br></br>
                <label >mer dom</label>
                <br></br>
                <input type="text" id="merdom" placeholder="subtype" name="mer_dom" value={merDom} onChange={(e) => setMerDom(e.target.value)} />
                <br></br>
                <br></br>
                <button type="button" onClick={() => validates()}>Pay Here</button>
            </form>
        </div>
        <LoaderPrimary />
        </>
    )
}
export default PaymentForm;