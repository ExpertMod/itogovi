import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { getFavouriteCategories } from '../api/getFavouriteCategories'
import { getTaskAnalytics } from '../api/getTaskskAnalytics'

export function Dashboard (){

  const [favCat, setFavCats]= useState<any[]>([])
  const [tasks, setTasks]= useState<any[]>([])
  const [loading, setLoading]= useState(false)


  useEffect (()=>{
    setLoading(true)
    Promise.all([getFavouriteCategories().then(data=>setFavCats(data)),
      getTaskAnalytics().then(data=> setTasks(data))]).finally(()=>{setLoading(false)})
    
  },[])

  useEffect(()=>{
    console.log(favCat,tasks)
  },[favCat, tasks])


    if (loading){
      return <p>loading...</p>
    }
    return (
        <>
        <Chart
        series={[{data: tasks.map(task => task.completed_tasks)}]}
        options = {{chart: {
          type: 'area',
          height: 10,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        labels: tasks.map(task=>task.date),
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }}}
/>  
      <Chart options={{
            labels: favCat.map(cat=>cat.title),
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 100
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }} series = {favCat.map(cat=>cat.tasks)} type="donut" width={500} height={320} /> 
        </>
      )      
}