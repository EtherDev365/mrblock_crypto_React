import React, { useState, useEffect } from "react";
import { Chart,google } from "react-google-charts";

export default ({}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const d = new Date()
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    const d2 = new Date()
    d2.setDate(d2.getDate()-5);
    const ye2 = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d2)
    const mo2 = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d2)
    const da2 = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d2)
    let bodyData = `{
        topSocialGainersLosers(
          from: "${ye2}-${mo2}-${da2}T11:25:04.894Z"
          to: "${ye}-${mo}-${da}T11:25:04.894Z"
          size: 5
          status: ALL
          timeWindow: "2d"
        ) {
          datetime
          projects {
            slug
            status
            change
          }
        }
      }`;
    fetch(`https://api.santiment.net/graphql`, {
      method: "POST",
      headers: {'Content-Type':'application/graphql'},
      body: bodyData
    })
    .then((res) => res.json())
    .then((result) => {
      if(result && result.data && result.data.topSocialGainersLosers){
          let data = result.data.topSocialGainersLosers
          let chartData = [];
          var count =0;
          if(data){
              data.forEach(item => {
                  let projects = item.projects;
                  if(projects){
                    if(count==0){
                        let header = [];
                        header.push({ type: 'date', label: 'Time' })

                        projects.forEach(project=>{
                            header.push(project.slug);
                        })  
                        chartData.push(header);
                        count++;
                    }
                    let enterItem = []
                    enterItem.push(new Date(item.datetime))

                    projects.forEach(project=>{
                        enterItem.push(project.change);
                    }) 
                    chartData.push(enterItem);                      
                  }
              });
          }
          /* result.forEach(entry => {
              let arr = [];
              arr.push(new Date(entry.t*1000));
              arr.push(entry.v);
              valueArr.push(arr)
          }); */
          setValue(chartData);
      }
    })
    .catch((error) => console.log(error));
}, []);
if(value){
  return (
      <div>
      <span style={{color:'#000'}}>Top Social Gainers Loosers</span>
      <Chart
      width={'100%'}
      height={'200'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={value}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: ' Top Social Gainers Loosers',
        },
      /*   backgroundColor: '#000',
        colors:['#fff'],
        is3D: true */
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    </div>
    );
} else{
    return (
        <div></div>
    );
}

};