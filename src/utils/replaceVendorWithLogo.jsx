import usps from '../assets/USPS-logo.png'
import fedex from '../assets/FedEx-logo.png'
import ups from '../assets/UPS-logo.png'
import amazon from '../assets/Amazon-logo.png'
export const replaceVendorWithLogo = (vendor) => {
    if (vendor.toLowerCase() === 'fedex') {
        return <img src={fedex} alt={vendor} className="mx-auto"/>
    }
    if(vendor.toLowerCase() === 'usps') {
        return <img src={usps} alt={vendor} className="mx-auto"/>
    }
    if(vendor.toLowerCase() === 'ups') {
        return <img src={ups} alt={vendor} className="mx-auto"/>
    }
    if(vendor.toLowerCase() === 'amazon') {
        return <img src={amazon} alt={vendor} className="mx-auto"/>
    }
    if(vendor.toLowerCase() === 'other') {
        return "Unknow"
    }
}