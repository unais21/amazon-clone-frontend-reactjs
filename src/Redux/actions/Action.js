const AddtoBasket = (product)=>{
    return {
        type:"INCREMENT",
        product
    }
}

const RemoveFromBasket = (product)=>{
    return {
        type:"DECREMENT",
        product
    }
}

module.exports = {AddtoBasket,RemoveFromBasket}