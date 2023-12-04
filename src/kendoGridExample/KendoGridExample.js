 
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