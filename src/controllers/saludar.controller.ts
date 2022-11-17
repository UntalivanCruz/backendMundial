// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {get, param, post, requestBody, response} from '@loopback/rest';
import {EquiposRepository} from '../repositories';

export class SaludarController {
  constructor(
    @repository(EquiposRepository) public datos: EquiposRepository
  ) { }

  @get('/saludar')
  @response(200, {msj: 'El saludo funciona!'})
  fnSaludar(): any {
    let datos: number = 5 + 4;
    return {respuesta: `Hola mundo, la suma es: ${datos}`}
  }

  @get('Equipos-personalizado')
  //funcion asincrona
  async getDatos(): Promise<any> {
    return await this.datos.find();
  }

  @post('/golosinas/{apellido}')
  @response(201)
  fnCrearGolosinas(
    @param.query.string('nombre') nombre: string, // ?
    @param.path.string('apellido') apellido: string, // /
    @requestBody() contacto: any // json
  ): any {
    return `El usuario ingreso su nombre ${nombre} y apellido ${apellido}, gracias`
  }
}
