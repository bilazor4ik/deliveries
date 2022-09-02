export const checkIfDeliveryDateToday = (eta) => {

    const current = new Date()
    const reformattedCurrent = new Date( current.getTime() - current.getTimezoneOffset() * -60000 ) 
    
    const todaysMonth = current.getMonth()+1;
    const todaysDay = current.getDate();
    const todaysYear = current.getFullYear();

    const formattedEta = new Date()
    const reformattedEta = new Date( formattedEta.getTime() - formattedEta.getTimezoneOffset() * -60000 ) 
    const etaMonth = reformattedEta.getMonth()+1;
    const etaDay = reformattedEta.getDate();
    const etaYear = reformattedEta.getFullYear()

    
    return (todaysMonth === etaMonth && todaysDay === etaDay && todaysYear === etaYear)




}

