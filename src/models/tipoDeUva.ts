export default class TipoUva {
  private descripcion: string
  private nombre: string

  constructor(nom: string, desc: string = '') {
    this.nombre = nom
    this.descripcion = desc
  }

  public getNombre() {
    return this.nombre
  }
  public getDescripcion(): string {
    return this.descripcion
  }

  public setNombre(nom: string) {
    this.nombre = nom
  }

  public setDescripcion(desc: string) {
    this.descripcion = desc
  }

  public sosTipoUva(tipoAComprobar: string): boolean {
    return this.nombre === tipoAComprobar
  }
}
