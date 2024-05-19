interface Order {
    id : number
    name : string
    email : string
    total_amount : number
    products : OrderProducts[]
    status : string
    created_at : string
  }

  interface OrderProducts {
    product_name : string
    quantity : number
  }
  
  export default Order;