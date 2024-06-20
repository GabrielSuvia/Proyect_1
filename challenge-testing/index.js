

class CarritoCompra{
    constructor(product,price, quantity){
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.list = [];
      };
  
      agregarProducto(product, price, quantity){
          const prod = new CarritoCompra(product, price, quantity);
          this.list.push(prod);
      };
  
      calcularTotal(){
          let total = 0;
          for(let producto of this.list){
              total += producto.price * producto.quantity
          }
          return total;
      };
      
      aplicarDescuento(porcentaje){
          let total = this.calcularTotal();
          const descuento = total * (porcentaje/100);
          let totalDesc = total - descuento;
          
           return totalDesc;
      };
};


module.exports = {CarritoCompra};