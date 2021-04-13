


$("#create").click(()=>{
    let vendor = {
        id:0,
        code:$("#pcode").val(),
        name:$("#pname").val(),
        address:,
        city:,
        state:,
        zip:,
        phoneNumber:,
        email:
    }
    console.debug("Vendor b4:", vendor);
    vendorCreate(vendor)
        .done((res)=>{
            console.log("Create Successful:", res);
        })
        .fail((err)=>{
            console.log("Create Unsuccessful", err);
        })
})
















console.debug("Vendor b4:",vendor)
    vendorCreate(vendor){

    }