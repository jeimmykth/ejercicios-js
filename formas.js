
class Rectangulo{ 
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

	area(){
      return this.x*this.y
    }
  	
  	perimetro(){
      return 2*this.x+2*this.y
    }
}
var r= new Rectangulo(7,8)

class Triangulo{
    constructor(a,b,c){
      this.a=a;
      this.b=b;
      this.c=c;
  }
    perimetro(){
        return this.a+this.b+this.c
  }
}

var h= new Triangulo(3,4,5)

class EgualTriangulo extends Triangulo {
constructor(a){
    super(a,a,a)
}
}

var eq= new EgualTriangulo(3)
