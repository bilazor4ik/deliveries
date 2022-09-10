import dayjs from "dayjs"

export const checkIfDeliveryDateToday = (eta) => {

   const deliveryEta = dayjs(eta)
   const today = dayjs()

   return(deliveryEta.$M === today.$M && deliveryEta.$Y === today.$Y && deliveryEta.$D === today.$D)
    




}

