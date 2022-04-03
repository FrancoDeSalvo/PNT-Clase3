const peugeots = [
    {
        id: 1 ,
        modelo: '208',
        segmento : 'Hatchback',
        imagen : 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/02/peugeot-208-2019-tres-cuartos-delantero.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2012
    },
    {
        id: 3 ,
        modelo: '308',
        segmento : 'Hatchback',
        imagen : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peugeot-308-2021-1616163362.jpg?crop=0.960xw:0.853xh;0,0.147xh&resize=1200:*',
        fabricacion : 'Francia',
        lanzamiento: 2007
    },
    {
        id: 16 ,
        modelo: '308 SW',
        segmento : 'Station Wagon',
        imagen : 'https://neomotor.sport.es/media/2021/09/peugeot-3083.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2007
    },
    {
        id: 5 ,
        modelo: '508',
        segmento : 'Sedan',
        imagen : 'https://www.diariomotor.com/imagenes/2018/07/peugeot-508-100.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2011
    },
    {
        id: 17,
        modelo: '508 SW',
        segmento : 'Station Wagon',
        imagen : 'https://www.autozeitung.de/assets/field/images/peugeot-508-sw-hybrid-2020-09.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2011
    },
    {
        id: 2 ,
        modelo: '2008',
        segmento : 'SUV',
        imagen : 'https://fotos.perfil.com/2020/08/28/peugeot-2008-1008218.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2013
    },
    {
        id: 4 ,
        modelo: '3008',
        segmento : 'SUV',
        imagen : 'https://cdn.motor1.com/images/mgl/2X8nx/s1/peugeot-3008-restyle-2020.jpg' ,
        fabricacion : 'Francia',
        lanzamiento: 2008
    },
    {
        id: 6 ,
        modelo: '5008',
        segmento : 'SUV',
        imagen : 'https://plangobierno.org/wp-content/uploads/2021/06/Lanzamiento-Peugeot-5008-2021-Argentina-1-1024x597.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2009
    },
    {
        id: 7 ,
        modelo: 'Rifther',
        segmento : 'Furgoneta',
        imagen : 'https://automotiva.com.ar/wp-content/uploads/2019/04/Peugeot_Rifter-10.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2010
    },
    {
        id: 8 ,
        modelo: 'Parthner',
        segmento : 'Furgoneta',
        imagen : 'https://www.megautos.com/wp-content/uploads/2018/06/Nuevo-Peugeot-Partner-delantera.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2010
    },
    {
        id: 9 ,
        modelo: 'Expert',
        segmento : 'Furgoneta',
        imagen : 'https://static.motor.es/fotos-noticias/2020/07/precio-peugeot-e-expert-202069327-1595333054_1.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2010
    },
    {
        id: 10 ,
        modelo: 'Boxer',
        segmento : 'Furgoneta',
        imagen :'https://cdn.motor1.com/images/mgl/GL11J/s3/lanzamiento-peugeot-boxer.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2010
    },
    {
        id: 11 ,
        modelo: 'Hoggar',
        segmento : 'Pickup',
        imagen :'https://cdn.motor1.com/images/mgl/k3WwM/s3/adios-a-la-peugeot-hoggar.jpg',
        fabricacion : 'Brasil',
        lanzamiento: 2010
    }, 
    {
        id: 12 ,
        modelo: 'Landtrek',
        segmento : 'Pickup',
        imagen :'https://www.elcarrocolombiano.com/wp-content/uploads/2021/07/20210705-PEUGEOT-LANDTREK-PRODUCCION-EN-AMERICA-LATINA-01.jpg',
        fabricacion : 'China - Uruguay',
        lanzamiento: 2020
    },
    {
        id: 13 ,
        modelo: '108',
        segmento : 'Hatchback',
        imagen : 'https://www.vg.no/bil/api/images/107a52dc39f41182fe3f05935fb672a5?width=1000',
        fabricacion : 'Francia',
        lanzamiento: 2014
    },
    {
        id: 18 ,
        modelo: '308 CC',
        segmento : 'Coupe',
        imagen : 'https://noticias.coches.com/wp-content/uploads/2010/02/Peugeot-308-CC-2011-4.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2010
    },
    {
        id: 14 ,
        modelo: 'RCZ',
        segmento : 'Coupe',
        imagen : 'https://cochesconcadena.com/wp-content/uploads/2021/08/peugeot-rcz-timing-chain-or-belt.png',
        fabricacion : 'Francia',
        lanzamiento: 2014
    },
    {
        id: 15 ,
        modelo: '9X8',
        segmento : 'Hypercar',
        imagen : 'https://static.motor.es/fotos-noticias/2021/07/hypercar-peugeot-competira-imsa-bajo-estetica-logo-otra-marca-202179887-1627140275_1.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2022
    },
    {
        id: 19 ,
        modelo: 'e-208',
        segmento : 'Hatchback',
        imagen : 'https://motor.elpais.com/wp-content/uploads/2019/10/PEUGEOT_e208_TESTDRIVE_0919TC-403.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2012
    },
    {
        id: 20 ,
        modelo: 'e-2008',
        segmento : 'SUV',
        imagen : 'https://soymotor.com/sites/default/files/usuarios/redaccion/portal/jmorillo/peugeot_e-2008_2020_2.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2013
    },
    {
        id: 21 ,
        modelo: '508 Sport Engineered',
        segmento : 'Sedan',
        imagen : 'https://cdn.motor1.com/images/mgl/nYZN6/s1/peugeot-508-sport-engineered.jpg',
        fabricacion : 'Francia',
        lanzamiento: 2011
    },


]


const inicio = () => {
    peugeots.forEach(p =>{
        mostrar(p);
    })
}


const mostrar = (p) => {
    const card = 
    `<div class="col-lg-4 mb-4">
    <div class="card text-info">
        <img src="${p.imagen}" alt="" class="card-img-top" width="300" height= "240">
        <div class="card-body">
          <h5 class="card-title"> <b>${p.modelo}</b></h5>
          <div class="d-flex justify-content-between p-price"><span>Segmento</span><span>${p.segmento}</span></div>
          <div class="d-flex justify-content-between p-price"><span>Fabricación</span><span>${p.fabricacion}</span></div>
          <div class="d-flex justify-content-between p-price"><span>Lanzamiento</span><span>${p.lanzamiento}</span></div>
        </div>
        </div>
      </div>`
  document.getElementById("card").insertAdjacentHTML('beforeend', card);
}


 const buscar = () => {
    let id = document.getElementById("ID").value;
    const p = peugeots.find(i => i.id == id)
    if(p === undefined){
        document.getElementById("card").innerHTML =  `<h4>ID no encontrado</h4>
        <a href="index.html" class="btn btn-danger btn-sm">Volver al inicio</a>`
    }else{
        document.getElementById("card").innerHTML = '';
    }
    mostrar(p);
 }


 const filtrar = () => {
    let list = document.getElementById("list");
    let segmento = list.value;
    document.getElementById("card").innerHTML = '';
    if (segmento != "all"){
        const suvs = peugeots.filter(x => x.segmento === segmento);
        suvs.forEach(p =>{
            mostrar(p);
        })
    } else{
        inicio();
    }
 }


const limpiarInputs =() => {
    document.getElementById("modelo").value = "";
    //document.getElementById("segmento").options[0].value;
    document.getElementById("segmento").value = "Seleccione el segmento al que pertenece";
    document.getElementById("imagen").value = "";
    document.getElementById("fabricacion").value = "";
    document.getElementById("lanzamiento").value = "";
}


const agregar = () => {
    let id = peugeots.length + 1;
    let modelo = document.getElementById("modelo").value
    let segmento = document.getElementById("segmento").value
    let imagen = document.getElementById("imagen").value
    let fabricacion = document.getElementById("fabricacion").value
    let lanzamiento = document.getElementById("lanzamiento").value

   limpiarInputs();
    
    peugeots.push(
        {
                id: id ,
                modelo: modelo,
                segmento : segmento,
                imagen : imagen,
                fabricacion : fabricacion,
                lanzamiento: lanzamiento
        }
    )
   mostrar(peugeots[peugeots.length-1])
}


window.onload = inicio();