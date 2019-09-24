
class Villano {
  public nombre:string;

  constructor(nombre:string) {
    this.nombre = nombre;
  }

  plan() {
    console.log("Dominar el mundo");
  }
}

let v = new Villano("Xmen");
console.log(v.plan()); // Modificacion a branch2
