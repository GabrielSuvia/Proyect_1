const {CarritoCompra} = require("../index")

describe("Evaluando a la clase CarritoCompra",()=>{
    let carrito; 

    beforeEach(()=>{

        carrito = new CarritoCompra("producto", 100, 30);
    });

    it("deberia de inicializar los atributos correctamente", ()=>{
          expect(carrito.product).toBe("producto");
          expect(carrito.price).toBe(100);
          expect(carrito.quantity).toBe(30);
          expect(carrito.list).toEqual([]);
    });
   
    it("este metodo deberia de agregar un producto a la lista", ()=>{
        carrito.agregarProducto("producto-A", 10, 3 );
        expect(carrito.list[0].product).toBe("producto-A");
        expect(carrito.list[0].price).toBe(10);
        expect(carrito.list[0].quantity).toBe(3);
    });
     
    it("tendria que retornar el costo total de los productos", ()=>{
        carrito.agregarProducto("producto-A", 10, 3 );
        carrito.agregarProducto("producto-B", 30, 10 );
          expect(carrito.calcularTotal()).toBe(330)
    });
    
     it("Deberia de realizar el descuento correctamente", ()=>{

        carrito.agregarProducto("producto-A", 10, 3 );
        carrito.agregarProducto("producto-B", 7, 10 );

       const costoTotal = carrito.calcularTotal();
       const descuento = 10;
          expect(  carrito.aplicarDescuento(descuento) ).toBe(90)
    });
    
});