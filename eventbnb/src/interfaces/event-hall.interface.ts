export interface Body<T> {
  error: boolean;
  data:  T;
}

export interface IEventHall {
  imagenes:           string[];
  borrado:            boolean;
  reviews:            any[];
  _id:                string;
  nombre:             string;
  domicilio:          string;
  localidad:          string;
  ubicacion:          string;
  telefono:           number;
  precio:             number;
  capacidad_max:      number;
  superficie:         number;
  aire_acondicionado: number;
  parrilla:           number;
  pantalla:           number;
  personal_seguridad: number;
  baño:               number;
  baño_accesibilidad: boolean;
  accesibilidad:      boolean;
  estacionamiento:    boolean;
  catering:           boolean;
  mesas_sillas:       boolean;
  luces:              boolean;
  sonido:             boolean;
  fotografia:         boolean;
  decoracion:         boolean;
  pileta:             boolean;
  wifi:               boolean;
  cocina:             boolean;
  escenario:          boolean;
  descripcion:        string;
  propietario:        Propietario;
  eventos:            any[];
  __v:                number;
  fechaCreacion:      Date;
}

export interface Propietario {
  _id: string;
}
