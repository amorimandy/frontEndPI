import { Produto } from './Produto';

export class Categoria{
  public id: number
  public categoria: string
  public tipo_produtor: string
  public produto: Produto[]
}