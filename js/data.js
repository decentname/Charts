$(document).ready(function(){
    $("#northzone").click(function(){
        var txt=$('#northzone').text();        
        createzone(txt);
    });

    $("#eastzone").click(function(){
        var txt=$('#eastzone').text();        
        createzone(txt);
    });
    $("#westzone").click(function(){
        var txt=$('#westzone').text();        
        createzone(txt);
    });

    $("#southzone").click(function(){
        var txt=$('#southzone').text();
        createzone(txt);
    });

});




var india= document.getElementById("india").getContext("2d");
var myBarChart = new Chart(india, {
    type: 'bar',
    data: {
    labels: ["Sikkim", "Bihar", "Delhi", "Kerala", "Gujarat", "Haryana", "Goa"],
    datasets: [
        {
            label: "Literacy rate of various states",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [99.7, 98.8, 96.3, 90.2, 86.9,74.8,83.2],
        }
    ]
},
    options: {
        display: true
    }
});




var literacy_rate=document.getElementById("literacy_rate").getContext('2d');
    var mypie=new Chart(literacy_rate,{

        type:'pie',
        data:{
            datasets: [{
                data: [
                    20,
                    50,
                    10,
                    20,
                ],
                backgroundColor: [
                    "#660066",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                ],
            }],
            labels: [
                "North",
                "South",
                "East",
                "West",
            ]
        },
        options: {
            responsive: true,
            animation:{
                animateRotate:true
            },
        }

    });


var Delhi= document.getElementById("Delhi").getContext("2d");
	var mychart=new Chart(Delhi,{
    type:'pie',
		data:{
            datasets: [{
                data: [15,40,20,25,],
                backgroundColor: ["#F7464A","#FDB45C","#00FF00","#4D5360"],
              }],
            labels: ["North","South","East","West"]
        },
        options:{
                  responsive: true,
                  animation:
                  {
                      animateRotate:true
                  },
                  legend:{
                  onClick:function(event,legendItem){

                  if(legendItem.text=='North')
                  {

                      var add=`<canvas id="info" width="1000" height="300"></canvas>`;
                      $("#first").html(add);
                      
                      var newchart= document.getElementById("info").getContext("2d");
                      var BarChart = new Chart(newchart, {
                          type: 'bar',
                          data: {
                          labels: ["Playgrounds","Laboratory","Classrooms","Toilets"],
                          datasets: [
                              {
                                  label: "North Zone schools",
                                  backgroundColor: "rgba(255,99,132,0.2)",
                                  borderColor: "rgba(255,99,132,1)",
                                  borderWidth: 1,
                                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                                  hoverBorderColor: "rgba(255,99,132,1)",
                                  data: [10,2,10,15,0],
                              }
                          ]
                      },
                          options: {
                              display: true
                          }
                      });

                      
                      showzone();

                  }            

                  if(legendItem.text=='South')
                  {
                      var add=`<canvas id="info" width="1000" height="300"></canvas>`;
                      $("#first").html(add);
                      
                      var newchart= document.getElementById("info").getContext("2d");
                      var BarChart = new Chart(newchart, {
                          type: 'bar',
                          data: {
                          labels: ["Playgrounds","Laboratory","Classrooms","Toilets"],
                          datasets: [
                              {
                                  label: "South Zone schools",
                                  backgroundColor: "rgba(255,99,132,0.2)",
                                  borderColor: "rgba(255,99,132,1)",
                                  borderWidth: 1,
                                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                                  hoverBorderColor: "rgba(255,99,132,1)",
                                  data: [1,2,5,5,0],
                              }
                          ]
                      },
                          options: {
                              display: true
                          }
                      });

                      
                      showzone();

                  }            
                       
                  if(legendItem.text=='East')
                  {
                      var add=`<canvas id="info" width="1000" height="300"></canvas>`;
                      $("#first").html(add);
                      
                      var newchart= document.getElementById("info").getContext("2d");
                      var BarChart = new Chart(newchart, {
                          type: 'bar',
                          data: {
                          labels: ["Playgrounds","Laboratory","Classrooms","Toilets"],
                          datasets: [
                              {
                                  label: "East Zone schools",
                                  backgroundColor: "rgba(255,99,132,0.2)",
                                  borderColor: "rgba(255,99,132,1)",
                                  borderWidth: 1,
                                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                                  hoverBorderColor: "rgba(255,99,132,1)",
                                  data: [5,2,4,6,0],
                              }
                          ]
                      },
                          options: {
                              display: true
                          }
                      });

                      
                      showzone();

                  }            
                  if(legendItem.text=='West')
                  {
                      var add=`<canvas id="info" width="1000" height="300"></canvas>`;
                      $("#first").html(add);
                      
                      var newchart= document.getElementById("info").getContext("2d");
                      var BarChart = new Chart(newchart, {
                          type: 'bar',
                          data: {
                          labels: ["Playgrounds","Laboratory","Classrooms","Toilets"],
                          datasets: [
                              {
                                  label: "West Zone schools",
                                  backgroundColor: "rgba(255,99,132,0.2)",
                                  borderColor: "rgba(255,99,132,1)",
                                  borderWidth: 1,
                                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                                  hoverBorderColor: "rgba(255,99,132,1)",
                                  data: [2,5,20,15,0],
                              }
                          ]
                      },
                          options: {
                              display: true
                          }
                      });

                      
                      showzone();

                  }            

          }
        }
      }
    });


function createzone(txt)
{   
   
        


    if(txt=="North"){

      var add= `<i class="close icon"></i>
                              <div class="header">
                                List of schools in North Delhi 
                              </div>
                                  <div class="description">
                                  <table class="ui single line table">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Registration Date</th>
                                  <th>Contact</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>KL Arya DAV public School</td>
                                  <td>January 11, 2014</td>
                                  <td>jamieharingonton@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>Kendriya Vidyalaya</td>
                                  <td>May 11, 2014</td>
                                  <td>jilsewris22@yahoo.com</td>
                                  <td>Government</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                               

                              </tbody>
                            </table>`;
            



    }




     
    if(txt=="South"){

             var add= `<i class="close icon"></i>
                              <div class="header">
                                List of schools in South Delhi 
                              </div>
                                  <div class="description">
                                  <table class="ui single line table">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Registration Date</th>
                                  <th>Contact</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                               <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>KL Arya DAV public School</td>
                                  <td>January 11, 2014</td>
                                  <td>jamieharingonton@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>Kendriya Vidyalaya</td>
                                  <td>May 11, 2014</td>
                                  <td>jilsewris22@yahoo.com</td>
                                  <td>Government</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                
                              </tbody>
                            </table>`;
            


    }

      if(txt=="East")
      {

        var add= `<i class="close icon"></i>
                              <div class="header">
                                List of schools in East Delhi 
                              </div>
                                  <div class="description">
                                  <table class="ui single line table">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Registration Date</th>
                                  <th>Contact</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                               <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>

                              </tbody>
                            </table>`;
      }

      if(txt=="West")
      {
          var add= `<i class="close icon"></i>
                              <div class="header">
                                List of schools in West Delhi 
                              </div>
                                  <div class="description">
                                  <table class="ui single line table">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Registration Date</th>
                                  <th>Contact</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                               <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                 <tr>
                                  <td>KL Arya DAV public School</td>
                                  <td>January 11, 2014</td>
                                  <td>jamieharingonton@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                                <tr>
                                  <td>Kendriya Vidyalaya</td>
                                  <td>May 11, 2014</td>
                                  <td>jilsewris22@yahoo.com</td>
                                  <td>Government</td>
                                </tr>
                                <tr>
                                  <td>St.Francis Xavier School</td>
                                  <td>September 14, 2013</td>
                                  <td>jhlilk22@yahoo.com</td>
                                  <td>private</td>
                                </tr>
                              </tbody>
                            </table>`; 
      }

    $("#second").html(add);
    showschools();   
}

function showschools()
{
    $('#second')
    .modal('show');
}

function showzone()
{
    $('#first')
    .modal('show');

}

