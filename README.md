# Utilizando el Kendo UI Grid de Telerik con JQuery

Uno de los conjuntos de controles que he encontrado con más frecuencia en los desarrollos profesionales de sistemas son sin duda el conjunto de los controles Telerik, Telerik ofrece una amplia gama de controles para diseñar la interfaz gráfica de usuario o GUI (Graphical User Interface) en diferentes frameworks de .NET como: WPF, ASP.NET, Windows Form o Silverlight.

Voy a mostrar una breve utilización básica del kendo UI Grid con un formulario que hace una petición mediante JQuery a un servidor web en este caso Apache.

Paso 1:
Voy a crear un directorio de trabajo llamado “KendoUISamples” debajo de ~/public_html que es el directorio predeterminado por OpenSuSe para ser el sitio web del usuario, todo lo que está dentro de ese directorio se publica en Apache con la siguiente dirección: http://127.0.0.1/~martin/



Paso 2:
Dentro de ese directorio voy a crear un archivo de texto llamado "Authors.js" que contendrá los siguientes datos en formato JSON:

   [
  {"Id" : "1",  "Name" : "George", "LastName": "Orwell",
  "BirthDate" : "1903-01-25","Gender" : "true" },
  {"Id" : "2",  "Name" : "Norman", "LastName": "Mailer",
  "BirthDate" : "1976-01-31","Gender" : "true" },
  {"Id" : "3",  "Name" : "Richard","LastName": "Dawkins",
  "BirthDate" : "1941-03-26","Gender" : "true" },
  {"Id" : "4",  "Name" : "Doris",  "LastName": "Lessing",
  "BirthDate" : "1919-10-22","Gender" : "false" },
  {"Id" : "5",  "Name" : "Stephen","LastName": "Hawkins",
  "BirthDate" : "1942-01-08","Gender" : "true" },
  {"Id" : "6",  "Name" : "Carl",   "LastName": "Sagan",
  "BirthDate" : "1934-11-09","Gender":"true" },
  {"Id" : "7",  "Name" : "William","LastName": "Gibson",
  "BirthDate" : "1948-03-17","Gender":"true" },
  {"Id" : "8",  "Name" : "Arthur", "LastName": "C. Clarke",
  "BirthDate": "1917-12-16","Gender":"true" },
  {"Id" : "9",  "Name" : "Leonard","LastName": "Mlodinow",
  "BirthDate": "","Gender":"true" },
  {"Id" : "10", "Name" : "Grary",  "LastName": "Booch",
  "BirthDate": "1955-02-27","Gender":"true" },
  {"Id" : "11", "Name" : "James",  "LastName": "Rumbaugh",
  "BirthDate": "1947-08-22","Gender":"true" },
  {"Id" : "12", "Name" : "Ivar",   "LastName": "Jacobson",
  "BirthDate": "1939-09-02","Gender":"true" }
  ]
      
Estos datos servirán para ser el DataSource del control Kendo UI Grid que voy a mostrar. El directorio de trabajo se verá como en la siguiente imagen:


Paso 3:
Descargamos el HTML5 Boiler template (ver este post) y lo descomprimimos dentro del directorio de trabajo para que se genere la estructura básica de un proyecto Front-End HTML5, se verá una estructura como en la siguiente imagen



Paso 4:
Copiamos los archivos css y js de JQuery y Kendo UI Telerik a los directorios css y js que están en el directorio de trabajo para tener una estructura como la que se muestra en la imagen



Paso 5:
Completamos el código del archivo [index.html] con las siguientes líneas dentro de las etiquetas <head> y </head> para incluir a los archivos css y js de JQuery y Telerik para que que queden de la siguiente manera:

 <head>  
   <meta charset="utf-8">  
   <meta http-equiv="x-ua-compatible" content="ie=edge">  
   <title>Kendo Grid example 1.0</title>  
   <link rel="stylesheet" href="css/kendo/kendo.common.min.css">  
      <link rel="stylesheet" href="css/kendo/kendo.bootstrap.min.css">  
      <script src="js/jquery-1.11.3.min.js"></script>  
      <script src="js/kendo.all.min.js"></script>  
      <script src="js/kendo.aspnetmvc.min.js"></script>  
   </head>  
En este paso se llaman a los archivos css y js de Jquery y Telerik respectivamente.
Paso 6:
Inmediatamente después de la etiqueta agregamos el siguiente código para crear los controles del formulario en donde están contenidos el control Kendo UI Grid y el botón que hará la petición.

 <p>  
 <ul>  
      <li><div id="grid"></div></li>  
      <li><div><button id="btnButton">Get data from server</button></div></li>  
 </ul>  
 </p>  
Paso 7:
Ahora viene la parte más importante de la página, en donde se escribe toda su funcionalidad, aquí iniciamos los controles DataSource, Kendo Grid y agregamos el evento del botón que realiza la petición al servidor.

 <script>  
      $(document).ready(function()  
      {  
           //init the kendo UI control  
           $("#grid").kendoGrid(  
                {  
                     height: 366,  
                     width: 300,  
                     pageable: false,  
                     sortable: false,  
                     columns: [  
                          { field: "Id", title: "id"},  
                          { field: "Name", title: "name"},  
                          { field: "LastName", title: "lastName"},  
                          { field: "BirthDate", title: "birthDate"},  
                     ]  
                });  
           //Attach the function to button  
           $("#btnButton").click(function(){  
                var url = "http://127.0.0.1/~martin/KendoUISamples/Authors.js";  
                var data = [];  
                $.getJSON(url,data,function(data,status){  
                          var dataSource = new kendo.data.DataSource({  
                               type: "json",  
                               data: data  
                          });  
                          dataSource.read();  
                          var grid = $("#grid").data("kendoGrid");  
                          grid.setDataSource(dataSource);  
                     }).error(function()  
                     {  
                     alert("some errors ")  
                     });  
                });  
      });  
  </script>  
Al abrir la página, y pulsar el botón se vera el siguiente resultado:



Aquí esta el código completo de la página:

 <!doctype html>  
 <html class="no-js" lang="">  
   <head>  
   <meta charset="utf-8">  
   <meta http-equiv="x-ua-compatible" content="ie=edge">  
   <title>Kendo Grid example 1.0</title>  
   <link rel="stylesheet" href="css/kendo/kendo.common.min.css">  
      <link rel="stylesheet" href="css/kendo/kendo.bootstrap.min.css">  
      <script src="js/jquery-1.11.3.min.js"></script>  
      <script src="js/kendo.all.min.js"></script>  
      <script src="js/kendo.aspnetmvc.min.js"></script>  
   </head>  
   <body>  
           <p>  
                <ul>  
                     <li><div id="grid"></div></li>  
                     <li><div><button id="btnButton">Get data from server</button></div></li>  
                </ul>  
           </p>  
           <script>  
      $(document).ready(function()  
      {  
           //init the kendo UI control  
           $("#grid").kendoGrid(  
                {  
                     height: 366,  
                     width: 300,  
                     pageable: false,  
                     sortable: false,  
                     columns: [  
                          { field: "Id", title: "id"},  
                          { field: "Name", title: "name"},  
                          { field: "LastName", title: "lastName"},  
                          { field: "BirthDate", title: "birthDate"},  
                     ]  
                });  
           //Attach the function to button  
           $("#btnButton").click(function(){  
                var url = "http://127.0.0.1/~martin/KendoUISamples/Authors.js";  
                var data = [];  
                $.getJSON(url,data,function(data,status){  
                          var dataSource = new kendo.data.DataSource({  
                               type: "json",  
                               data: data  
                          });  
                          dataSource.read();  
                          var grid = $("#grid").data("kendoGrid");  
                          grid.setDataSource(dataSource);  
                     }).error(function()  
                     {  
                     alert("some errors ")  
                     });  
                });  
      });  
  </script>  
   </body>  
 </html>  
