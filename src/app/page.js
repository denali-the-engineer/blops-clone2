"use client";

import styles from './page.module.css';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import TypingOnLoad from '@/components/TypingOnLoad';
import "./fadeinAnim.css"
import ScrollingNumber from '@/components/scrollingNumbers';
import { useState, useEffect } from 'react';
import { Button, Grid, Box, Grid2, Drawer } from '@mui/material';
import HoverScroll from "../components/HoverScroll"
import { Surface, Area, Layer, PieChart, Pie, Cell, Text, Rectangle, AreaChart, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { alignProperty } from '@mui/material/styles/cssUtils';
import zIndex from '@mui/material/styles/zIndex';
import Footer from '@/components/Footer';
import BottomScroller from '@/components/bottomScroller';

const Scene = dynamic(() => import('@/components/Scene/SceneSetup'), {
  ssr: false,
});

export default function Home() {
  const [watari, setWatari] = useState(33936846.454)
  const [watari2, setWatari2] = useState(33936846.454)
  const [copyButtonClicked, setCopyButtonClicked] = useState(false)
  let address = "2pAOIpcHXn9MKeJa3283y5uanFjaoeHA82toaJ3PZcXaa"
  const [positive, setPositive] = useState(true)
  const [assetsClicked, setAssetsClicked] = useState(false)
  const [connectWallet, setConnectWallet] = useState(false)
  const [selectionNum, setSelectionNum] = useState(null) // this is bad code, sorry......
  const [dataRepresentation, setDataRepresentation] = useState("ALL")
  const [dataRepresentation2, setDataRepresentation2] = useState(2)
  const [slidingModalData, setSlidingModalData] = useState(
    {iconUrl: null,
     primaryName: null,
     secondaryName: null,
     marketCap: null,
     price: null,
     priceDelta: null,
     twentyFourHourVolume: null,
     liquidity: null,
     mindshare: null,
     holderCount: null,
     twitterUrl: null,
     websiteUrl:  null,
     graphData: null
    }
  )

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    { name: "one", value: 40 },
    { name: "two", value: 42 },
    { name: "three", value: 38 },
    { name: "four", value: 45 },
    { name: "five", value: 41 },
    { name: "six", value: 47 },
    { name: "seven", value: 39 },
    { name: "eight", value: 44 },
    { name: "nine", value: 50 },
    { name: "ten", value: 48 },
    { name: "eleven", value: 43 },
    { name: "twelve", value: 46 },
    { name: "thirteen", value: 37 },
    { name: "fourteen", value: 49 },
    { name: "fifteen", value: 51 },
    { name: "sixteen", value: 36 },
    { name: "seventeen", value: 52 },
    { name: "eighteen", value: 39 },
    { name: "nineteen", value: 44 },
    { name: "twenty", value: 53 },
    { name: "twenty-one", value: 42 },
    { name: "twenty-two", value: 47 },
    { name: "twenty-three", value: 38 },
    { name: "twenty-four", value: 45 },
    { name: "twenty-five", value: 50 }
];

  const topPerformers = [
    {mainName: "ZAI", secondaryName: "ZEN AI", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "SEAN", secondaryName: "OPRY", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "JORDAN", secondaryName: "BARRETT", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "HERNAN", secondaryName: "DRAGO", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "FRANCISCO", secondaryName: "LACHOWSKI", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
  ]

  const bottomPerformers = [
    {mainName: "ZAI", secondaryName: "ZEN AI", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "SEAN", secondaryName: "OPRY", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "JORDAN", secondaryName: "BARRETT", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "HERNAN", secondaryName: "DRAGO", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
    {mainName: "FRANCISCO", secondaryName: "LACHOWSKI", iconUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383", condition: "▲ 31.39%"},
  ]

  const youRecieve = [
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
    "OSOL (1.98399107025)",
  ]

  const data3 = [
    { name: 'Jan', SeriesA: 4000, SeriesB: 2400, SeriesC: 2000 },
    { name: 'Feb', SeriesA: 3000, SeriesB: 1398, SeriesC: 2210 },
    { name: 'Mar', SeriesA: 2000, SeriesB: 9800, SeriesC: 2290 },
    { name: 'Apr', SeriesA: 2780, SeriesB: 3908, SeriesC: 2000 },
    { name: 'May', SeriesA: 1890, SeriesB: 4800, SeriesC: 2181 },
    { name: 'Jun', SeriesA: 2390, SeriesB: 3800, SeriesC: 2500 },
    { name: 'Jul', SeriesA: 3490, SeriesB: 4300, SeriesC: 2100 },
  ];

  const data4 = [
    { name: 'Jan', SeriesA: 2000, SeriesB: 7400, SeriesC: 1500 },
    { name: 'Feb', SeriesA: 3020, SeriesB: 1348, SeriesC: 5120 },
    { name: 'Mar', SeriesA: 1010, SeriesB: 3800, SeriesC: 7570 },
    { name: 'Apr', SeriesA: 2680, SeriesB: 2208, SeriesC: 3400 },
    { name: 'May', SeriesA: 7860, SeriesB: 5200, SeriesC: 1181 },
    { name: 'Jun', SeriesA: 2390, SeriesB: 6890, SeriesC: 3880 },
    { name: 'Jul', SeriesA: 5490, SeriesB: 5300, SeriesC: 6100 },
  ];

  const writeAddress = () => {
      navigator.clipboard.writeText(address).then(() => {
        console.log("copied")
      }).catch(() => {
        console.log("error copying")
      })
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const [drawerOpen, setDrawerOpen] = useState(false)

  const data2 = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];

  return (
    <main className={styles.main} style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        
        <BottomScroller/>

        <Drawer style={{zIndex: 100000000}}
          anchor="right"
          open={drawerOpen}
          onClose={() => {setDrawerOpen(false)}}
          PaperProps={{
            sx: {
              width: "800px", // Adjust width as needed
              height: "100vh",
              borderTopLeftRadius: 10, // Optional: rounded corners
              borderBottomLeftRadius: 10,
              backgroundColor: "rgba(10, 10, 10, 0.95)",
              backdropFilter: "blur(10px)"
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Grid2 container>
              <Grid2 style={{width: "100%"}} size={12}>
                <div style={{width: "100%", height: "10vh", display: "flex", alignItems: "center"}}>
                  <img src={slidingModalData["iconUrl"]} style={{border: "10%", marginLeft: 0}}></img>
                  <div style={{color: "white", fontWeight: "300", fontSize: 20, marginLeft: 10}}>{slidingModalData["secondaryName"]}</div>
                  <div style={{color: "black", fontSize: 20, marginLeft: 20, backgroundColor: "whitesmoke", fontWeight: "400", padding: 5, borderRadius: 2}}>{slidingModalData["primaryName"]}</div>
                  
                  { slidingModalData["twitterUrl"] != null ? (
                    <a style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}} href={slidingModalData["twitterUrl"]}>
                    <div style={{right: 130, width: 80, height: 20, position: "absolute", color: "white", fontWeight: "500", fontSize: 14, display: "flex", alignItems: "center"}}>
                      <svg width="16" height="17" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40244 5.65536L11.4073 1H10.4583L6.98085 5.04218L4.20343 1H1L5.20001 7.11249L1 11.9944H1.94908L5.62135 7.72567L8.55452 11.9944H11.7579L7.40221 5.65536H7.40244ZM6.10254 7.16635L5.67699 6.55768L2.29105 1.71446H3.74879L6.48128 5.62309L6.90683 6.23176L10.4587 11.3124H9.00101L6.10254 7.16658V7.16635Z" fill="#6E6E6E"></path></svg>
                      <div style={{userSelect: "none", cursor: "pointer"}}>
                        TWITTER
                      </div>   
                    </div>
                  </a>
                  ) : <></>
                  }



                  { slidingModalData["websiteUrl"] != null ? (
                    <a style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}} href={slidingModalData["websiteUrl"]}>
                      <div style={{right: 25, width: 80, height: 20, position: "absolute", color: "white", fontWeight: "500", fontSize: 14, display: "flex", alignItems: "center"}}>
                      <svg width="16" height="17" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1645_1267)"><path d="M6.50005 13.0938C7.94227 13.0938 9.11142 10.3655 9.11142 7C9.11142 3.63451 7.94227 0.90625 6.50005 0.90625C5.05782 0.90625 3.88867 3.63451 3.88867 7C3.88867 10.3655 5.05782 13.0938 6.50005 13.0938Z" stroke="#6E6E6E" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.40625 7H12.5938" stroke="#6E6E6E" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 13.0938C9.86549 13.0938 12.5938 10.3655 12.5938 7C12.5938 3.63451 9.86549 0.90625 6.5 0.90625C3.13451 0.90625 0.40625 3.63451 0.40625 7C0.40625 10.3655 3.13451 13.0938 6.5 13.0938Z" stroke="#6E6E6E" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_1645_1267"><rect width="13" height="13" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>                      <div style={{userSelect: "none", cursor: "pointer"}}>
                          WEBSITE
                        </div>   
                      </div>
                    </a>
                  ) : <></>
                  }
               
               
                </div>
              </Grid2>
              <Grid2 style={{width: "100%"}} size={12}>
                <div style={{width: "100%", height: "20vh", display: "flex", alignItems: "center"}}>
                  <Grid2 style={{ width: "100%", height: "15vh", border: "1px solid rgba(255, 255, 255, 0.1)"}} container>
                    <Grid2 style={{color: "white"}} size={4} item>
                      <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%"}} container>
                        <Grid2 size={12} style={{height: "50%", fontWeight: "300", fontSize: 12, color: "darkgray", display: "flex", alignItems: "center", marginLeft: 12}}>
                          MARKET CAP
                        </Grid2>
                        <Grid2 size={12} style={{height: "50%", marginLeft: 12}}>
                          {slidingModalData["marketCap"]}
                        </Grid2>
                      </Grid2>
                    </Grid2>
                    <Grid2 style={{color: "white"}} size={4} item>
                      <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%"}} container>
                        <div style={{width: "50%"}}>
                          <Grid2 size={12} style={{height: "50%", fontWeight: "300", fontSize: 12, color: "darkgray", display: "flex", alignItems: "center", marginLeft: 12}}>
                            PRICE
                          </Grid2>
                          <Grid2 size={12} style={{height: "50%", marginLeft: 12}}>
                            {slidingModalData["price"]}
                          </Grid2>
                        </div>
                        <div style={{width: "50%", display: "flex", alignItems: "center"}}>
                          <div style={{backgroundColor: "rgba(0, 150, 0, 0.4)", marginLeft: 25, color: "rgb(100, 255, 100)", fontSize: 14, padding: 5, borderRadius: 5}}>{slidingModalData["priceDelta"]}</div>
                        </div>
                      </Grid2>
                    </Grid2>
                    <Grid2 style={{color: "white"}} size={4} item>
                      <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%"}} container>
                        <Grid2 size={12} style={{height: "50%", fontWeight: "300", fontSize: 12, color: "darkgray", display: "flex", alignItems: "center", marginLeft: 12}}>
                          24H VOLUME
                        </Grid2>
                        <Grid2 size={12} style={{height: "50%", marginLeft: 12}}>
                          {slidingModalData["twentyFourHourVolume"]}
                        </Grid2>
                      </Grid2>
                    </Grid2>
                    <Grid2 style={{color: "white"}} size={4} item>
                      <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%"}} container>
                        <Grid2 size={12} style={{height: "50%", fontWeight: "300", fontSize: 12, color: "darkgray", display: "flex", alignItems: "center", marginLeft: 12}}>
                          LIQUIDITY
                        </Grid2>
                        <Grid2 size={12} style={{height: "50%", marginLeft: 12}}>
                          {slidingModalData["liquidity"]}
                        </Grid2>
                      </Grid2>
                    </Grid2>
                    <Grid2 style={{color: "white"}} size={4} item>
                      <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%"}} container>
                        <Grid2 size={12} style={{height: "50%", fontWeight: "300", fontSize: 12, color: "darkgray", display: "flex", alignItems: "center", marginLeft: 12}}>
                          MINDSHARE
                        </Grid2>
                        <Grid2 size={12} style={{height: "50%", marginLeft: 12}}>
                          {slidingModalData["mindshare"]}
                        </Grid2>
                      </Grid2>
                    </Grid2>
                    <Grid2 style={{color: "white"}} size={4} item>
                      <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%"}} container>
                        <Grid2 size={12} style={{height: "50%", fontWeight: "300", fontSize: 12, color: "darkgray", display: "flex", alignItems: "center", marginLeft: 12}}>
                          HOLDER COUNT
                        </Grid2>
                        <Grid2 size={12} style={{height: "50%", marginLeft: 12}}>
                          {slidingModalData["holderCount"]}
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </div>
              </Grid2>
              <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", width: "100%"}} size={12}>
                <div style={{width: "100%", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <ResponsiveContainer width="90%" height="90%">
                <AreaChart data={data}>
                  {/* Title in the top left */}
                  <Text 
                    x={20} 
                    y={20} 
                    fontSize={16} 
                    fontWeight="bold" 
                    fill="white"
                    textAnchor="start"
                  >
                    PRICE CHART
                  </Text>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="rgb(255, 94, 113)"
                    fill="rgba(255, 0, 0, 0.3)"
                    fillOpacity={0.2}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="rgba(255, 0, 0, 0.7)"
                    strokeWidth={2}
                    dot={{ r: 0 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255, 255, 255, 0.2)', 
                      borderRadius: 12,
                      color: 'white',
                    }}
                  />
                  <XAxis />
                  <YAxis />
                </AreaChart>
              </ResponsiveContainer>
                </div>
              </Grid2>
            </Grid2>
          </Box>
        </Drawer>



      { connectWallet ?
          <div style={{position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", width: "100%", height: "100%", zIndex: 10000000, backgroundColor: "rgba(0, 0, 0, 0.2)", backdropFilter: "blur(2px)"}}>
            <div style={{width: 360, height: 500, backgroundColor: "rgb(8, 8, 8)"}}>
              <Grid2 style={{height: "100%", width: "100%"}} container>
                <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.2)", height: "15%"}} size={12} item>
                  <div style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: "100%", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "300", fontSize: 15}}>
                    CONNECT SOLANA WALLET TO CONTINUE
                  </div>
                </Grid2>
                <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.2)", display: "block", height: "85%"}} size={12} item>
                  <div onClick={() => {setSelectionNum(1)}} className='rectangles2' style={{width: "80%", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", alignContent: "center", marginLeft: "50%", transform: "translateX(-50%)", height: 50, display: "flex", backgroundColor: "rgb(10, 10, 10)", color: "white", marginTop: 45}}>
                    <img style={{marginLeft: 10}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg==" width={35} height={35}>
                    </img>
                    <b style={{fontWeight: "300", marginLeft: 10}}>PHANTOM</b>
                    <div onClick={() => {setSelectionNum(1)}} className='selectionCircle' style={{width: 15, backgroundColor: selectionNum == 1 ? "rgb(40, 40, 40)" : "rgb(20, 20, 20)", height: 15, borderRadius: "50%", right: 15, position: "absolute"}}>

                    </div>
                  </div>
                  <div onClick={() => {setSelectionNum(2)}} className='rectangles2' style={{width: "80%", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", alignContent: "center", marginLeft: "50%", transform: "translateX(-50%)", height: 50, backgroundColor: "rgb(10, 10, 10)", color: "white"}}>
                    <img style={{marginLeft: 10}} src={"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+"} width={25} height={25}>
                    </img>
                    <b style={{fontWeight: "300", marginLeft: 10, display: "flex"}}>SOLFLARE</b>
                    <div onClick={() => {setSelectionNum(2)}} className='selectionCircle' style={{width: 15, backgroundColor: selectionNum == 2 ? "rgb(40, 40, 40)" : "rgb(20, 20, 20)", height: 15, borderRadius: "50%", right: 15, position: "absolute"}}>

                    </div>
                  </div>
                  <div onClick={() => {setSelectionNum(3)}} className='rectangles2' style={{width: "80%", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", alignContent: "center", marginLeft: "50%", transform: "translateX(-50%)", height: 50, backgroundColor: "rgb(10, 10, 10)", color: "white"}}>
                    <img style={{marginLeft: 10}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbvSURBVHgB7Z1dUtxGEMf/LZH3fU0V4PUJQg4QVj5BnBOAT2BzAsMJAicwPoHJCRDrAxifgLVxVV73ObDqdEtsjKn4C8+0NDv9e7AxprRC85uvnp4RYYW5qKpxCVTcYKsgfiDfGjMwIsZIvh7d/lkmzAiYy5fzhultyZhdlagf1vU5VhjCiiGFXq01zYSJdqWgx/hB5AHN5I/6iuilyFBjxVgZAdqCZ34ORoVIqAzSOhxsvq6PsSIkL4A281LwL2IW/F1UhLKgRz/X9QyJUyBhuuae31gWviLjiPF1wxeX29vPkTjJtgAftrd3GHSMnmHw4eZ0uodESVKAoRT+kpQlSE6Ats/XZv/ONK5vZHC49+B1fYjESG4MUDKfYmCFr0ic4fmHqtpCYiQlgA66QsztIzFi5j+RGMl0AXebfgn0aOTuvGG8owIarZsXOj3ronlRuEYnn84CJLo4Lgi/QL/H/LHmy/RwI6GA0RoS4acFHi8kGieFXS/QhmijFfQXmH3uPy5lSkoLbIkYlfyzhuM4juM4juM4juMMj6TzATQ4JH9tlRqFk8BM2aV9RWHB9K5kzK/KLui0KqliSQmgBa4BIS54cpMD0OeawFye3jk19JdKkWq62OAFkEIfrTXNUxBV1okf38Ot3MGjlFqHwQrQZvQ22Cfw7xjg6t8XkZaBGzpKIXdwcAJojZeCP5SC30HipJBEOigBZLn3qdzSPlKr8V9hyEmkgxCgj8zefuD9jen0AAOidwE0i6ZhfjXgRI+gDK016DUjqE3ubPhNLoWvaDLJouHToaSP9SbA0DJ7LekyiviNPgP0TC9dQM6FfxeZ7eyuT6cv0RPmAmjTx11uXx/MiegEDd425cfcwWV+H4O3+uiO+pTAVIA2uMN8av6QiWr5TQ++JVlTc/tEiF3jOMScZGC43kME0VSA95PJhWXhM+Gt1Phn98nStZa1r9mB2SDQPqefjhayfnDfFG2J5882z84eynVM5u3thlONhRhj0gLc5PRfwAw62JjW+wjE5Xa1L0VkshO4kXt/EPDev4ZJCyBRvlcwggjHG4EfYHc9OoIBBWy3mEUX4H1V7Ur7ZvILaT8qy7FRduleF9jXc4RggOUWs/gtANs0nYquvMXaMaTXlQHlE1ggayLvf5OKY0DUMYDWfmpsBjZa+9enOmiLy+VkcmqxaNW2ZgX9GnsLXNQWoGj4KYzQ2g8LyG5WUDR4hshEE6CN+AFmg5lFiRMYcI0uKRQGyIAwegWKJkBjYO8tzq12C7efQ7CK2I00MomIxOsCiCcwQhaW3sEQ6W7sPi/yIDqKAHp8m2nIF7COoc9ghQw4NU8SkYgiQCmLKXCCUSziPc84XYBh83/DSiWR3qUo2tT4ONdGYDTub73cSzD/PNt0rojdQHAByoXxw0E7XfoFhsjnRduD+DnWIkkXXACJl1cwRoMmf3cbRaOjLRzDXnKZVj9GBIILUJBtbVzyj9HAU19AgR6I9VzDtwCgMXpAo2Yxp0v/Ybi49ennJtIFEPMY/TCKHTvv+aTSUQzBgwrQ92YHbQVi3UN3GAVZhrf/jzECE1SAq/7n4yOJ074KPSBcJoii598vxgwrqAByg70HZJZbr0JJ0G5XZz5Z1e1rYccA5TAicqEk0O5ECl/3LvYys7mLTLHHCEzS7wz6Esv3+nyYTF58rwha63XAl8PG1aCnhesWq6EdOcKM3WvmXRHh+Gvv/tNVTJlJPC4a3RVEK72+sCSZ4+J/FBVhTUS43J7gJqFjrnl33A3sxtCa3nAWhX6bbAT4hJugCsNZ2TGA8224AJnjAmSOC5A5LkDmuACZ4wJkjguQOS5A5rgAmeMCZI4LkDkuQOa4AJnjAmSOC5A5LkDmuACZ4wJkjguQOWEFYJvz85xwBBWgKM1P68oKKsI/36ACdC9nsDlWPTsIJ5t1Hfw01OBjgI1p/YwLegIibw0CwESz9gUYZ2d/wHEcx3Ecx3Ecx3Ecx3HuS5QjfdrXxTHv3JzEkd2xKwHR9xPNuKGjzdf1MSIQXAA9XUsuuw8nKPpK3PWzs+AvrgwqgP1LojOjoEf3fRv6Zy+JgBSLOGfaOx1NE/6o+rCrgeT9fWp4SljmuACZ4wJkjguQOS5A5rgAmeMCZI4LkDkuQOa4AJnjAmSOC5A5LkDmuACZ4wJkjguQOS5A5rgAmeMCZI4LkDkuQOa4AJnj5wRmTlABqHQBohKhggUVYAEEP8fO+UiMgziDCvCwrnU3aw0nOATMQu8LVIIPAq+JdAerdwWBaQ/fjEBwAaQVmMnN7sEJCB3EqP3tlRGJy6qqmPkFMcZw7sucmfZiHQ6hRBNgSXdaCHbA7KeFfBvz9pxlxtl1gcN2XBWRfwHK959XFRG6AgAAAABJRU5ErkJggg==" width={25} height={25}>
                    </img>
                    <b style={{fontWeight: "300", marginLeft: 10, display: "flex"}}>BACKPACK</b>
                    <div onClick={() => {setSelectionNum(3)}} className='selectionCircle' style={{width: 15, backgroundColor: selectionNum == 3 ? "rgb(40, 40, 40)" : "rgb(20, 20, 20)", height: 15, borderRadius: "50%", right: 15, position: "absolute"}}>

                    </div>
                  </div>
                  <div onClick={() => {setSelectionNum(4)}} className='rectangles2' style={{width: "80%", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", alignContent: "center", marginLeft: "50%", transform: "translateX(-50%)", height: 50, backgroundColor: "rgb(10, 10, 10)", color: "white"}}>
                    <img style={{marginLeft: 10}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgdmlld0JveD0iMCAwIDQwMiA0MDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB3aWR0aD0iNDAyIiBoZWlnaHQ9IjQwMiIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTY5NF8xODk2NyIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMjQ4NzU2KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzE2OTRfMTg5NjciIHdpZHRoPSI0MDIiIGhlaWdodD0iNDAyIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFjRkJRWUZCQWNHQmdZSUJ3Y0lDeElMQ3dvS0N4WVBFQTBTR2hZYkdoa1dHUmdjSUNnaUhCNG1IaGdaSXpBa0ppb3JMUzR0R3lJeU5URXNOU2dzTFN6LzJ3QkRBUWNJQ0FzSkN4VUxDeFVzSFJrZExDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3ovd2dBUkNBR1NBWklEQVNJQUFoRUJBeEVCLzhRQUd3QUJBQUlEQVFFQUFBQUFBQUFBQUFBQUFBRUdCQVVIQXdML3hBQVpBUUVBQXdFQkFBQUFBQUFBQUFBQUFBQUFBUU1FQlFMLzJnQU1Bd0VBQWhBREVBQUFBZWtBQUFFRXhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaEloSWhJaElJRWdBQUFBQVFrQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBQUFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQWlVRWdBRUVnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWlZa0FJa0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUk1FZ2lZa0FBQUFBQUFBQUFQT29XVjduWFZWdXg5TXllWTNYTG8zSXo2QUFBQUFBQUFBRVNENUV6RWdBQUFBQUFCR0xNWmJSNmUydTVWK3BlT25QazR4cXpCTUFicTE4NlVYOVZjNzNlVFRhV3J6NmJmVWVmUUFBQUFBQUdPSmozbUppUUFBQUFOTlVQckE2Zk95Zm53WFZ6Qk1BZ0EyOXFvdXJtNjNyRnI1cGk5U3JlbWlvc2pIMVpnbUFQdjF4MFRrN0RUUFBycUhyWGJGeStpSGoyQUFBQmppWTk1aVlrQUFBQURtMkhuWVBZNVFzTVRYbCt5cUx1YzdMb0UxV1ZiZTVpaTRLN0FBSTArNWV2TksxWFNtaWpsVHArSGJYenhlNlpkVmppMnE0V1d1V1BsZElLclFBQUFNY1RIdk1URWdBQUFBYzYxK3kxdlg1YTMxQzIxMldnY3pvQUFBQUFBQUFPYTlLNW5yeTR3MzRycFlkRHZ1VjB3cXNBQUFBeHhNZTh4TVNBQUFBQnovVmJuVGRibUxWVmJONTlXOGN2b2dBQUFBQUFBT1lkUDVac3lmSTNZNzF1OVB1T1Qwd3JzQUFBQXh4TWU4eE1TQUFBQUJSOUZZcTcxZWFzVmQzaGVSeXVrQUFBQUFBQUI4OHM2ZHpIZGpEWms2RnM4SE80L1ZEejZBQUFBeHhNZTh4TVNBQUFBQlVxdmNLZjArYzIycHo3UEhSaHlPb0FBQUFBQUFCaGMzNkJ6L29ZUTFaK201RVR4dXFFU0FBQUJqaVk5NWlZa0FBQUFEUlVmb1hQZWpnZTNpMDBkVmVYcnhlcUNRQUFBQUFBTkRTTFpVK2x6M3Y0Ykc2cm9nNC9WQUFBQUF4eE1lOHhNU0FBQUFCNDh3NnJ6TGJreHh0eDlDMmRic25KNllWMkFBQUFBQUFValE1bUgxK1czMmh0dmoxYUJ5K2tBQUFBQmppWTk1aVlrQUFBQUJSYjFYYjZhWU9uenQzZXVXZE53YmZZWk5RQUFBQUFERnlxdlpYVWgxdVk2QlErbjQ5WDBNTzBBQUFBREhFeDd6RXhJQUFBQUR3OXlPV2ZOaHIzWDVpeTFvZFZWeXg4cm9oNTlnQUFBRHhRNXZtNnZwWUEwVWIrN1lHZnl1a0ZWb0FBQUFHT0pqM21KaVFBQUFBQU1mbkhUOVhvbzU4Ky9qcFlHOTBUelBUTW5sdG13N0xZOC9UTG9CSUJyYWpkVFphZGpOK01MYWxrd2I3azFmUXdiUUFBQUFBTWNUSHZNVEVnQUFBQUFBYTZqZEs4NzZlWExQV3VoaCtSNzhlOXRwYXF6cXJudTZ4Yk4vVWRMNTZzNGFNNHpZbkNzTzgzR0xYOC9SajFnQUFBQUFBWTRtUGVZbUpBQUFBQUFBQVl1VW1LUm9lcTYzWGw1NDJXdDI1UW55UHBQemtiKzFaZEdoc01zT3NQUHNBQUFBQUFBUWZEMElpWWxJQUFBQUFBQUFBRVZ1eXZmamxuejB2QjJaYWxkczM2elhoVGNBQUFBQUFBQUFpWUpBaVlKQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFSSUFCRW9KQUFBQUFBQUFBQUFBQUFBQUFBQUFBaVlKQUFBQkVvSkFBQUFBQUFBQUFBQUFBQUFBQUFRRWdBQUFBQkNRUUpSSUFBQUFBQUFBQUFBQUFJSlFKaVFBQUFBQUFBQUErUkhpSkFBQUFBQUFBQUFBQWVub1FCSUFBQUFILzhRQUx4QUFBQVVFQWdFQ0JBVUZBQUFBQUFBQUFBRUNBd1FGRVRBeEVFQVNJRFFURkNGQklpUXpOV0FqTWxCd2dQL2FBQWdCQVFBQkJRTEhZV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVdJV0lXSVc1di9OTi81TGYrbC92L0FDVDcvd0FLazFOcGhTYTE5V0pEY2h2ckhvRjFsdUpiUk1xaW5PV1hsc09SS2kzSTY5d1d1bXBTVUprVmR0QWVrT3lGZW1OVTNXQXhPWWtkVTlsclBld1ZLWVFIS3RIU0hhdzZvT1BPUEhoWm55R1EzV2lDS2xGV0V1dHI2SjdMV09mUCtWSmN5UXMvbVh3YnpwZ3pNOEVXbHVQQitsTXVOdnhuWTZ2V1Mxa1BtSGg4eStJOVRmYVUyNGwxdkdleTFqbktOYzdDeFRYM2hHZ014dVZJU3RNaWpwTU94M1dEdzBaUm5HeG5zdFk1ZnZmU2xLbEczVHBMZ2FveEJtSXd4NnpJbEU5UzQ3Z2NvN3lRdUsrMTY2TCtqalBaYXh6ZmZjVTZFMUpiS2x4U0NZY2RBSWlJc3FtVzNBcW54VkE2VEZNU0VFMUk0bzN0OFo3TFdPZjcvaWkvcGRPWDd6aWplMHhuc3RZNmorNGNVWCszcHlQZGNVZjJXTTlsckhVLzNIaWlkUjM2dmNVbjJPTTlsckhWZmY4QUZGL1Y2YXZxcmlsL3QrTTlsckhWeS9POFVZL3pQU1VkazgwNHJVL0dleTFqckpmbWVLUWRwdlNmTzBmbUVWb09NOWxySFdpL0Z4VER0VU9sTk8wTG1PVm8yTTlsckhXaS9wY1FUOFozU3FSMnAvSkZaT005bHJIVnl2QzRhVjR2ZEtzS3RENFlUNVNNaDdMV09vcDhvSExTdk5ubzFwWDA0cDZmS2ZrUFpheHZKODJPYWN2emdkR3JyOHBuRklUZVprUFpheVNFZkRrOFVaeTdIUmxyK0pNNG9xUHdaRDJXc2xXYjhKdkZLZCtITTZFbDM0TWJtbXQvRGdaRDJXc2xZYThtT0VxTkMyWENlWnoxaC84QUR3MmczSEVwSktjaDdMV1I1c25tRkpOS3VLVEs4RlpublVzTlBPcWZlNHBEUG5KeW5zdFphdEg4SHVZRlNKd3NqcnFHVVRacXBhK1lVZjVhTmxQWmF5dnNwZlplYVV3N3pGcWJqSVprTnlFNFpWVGFZRDhoeVF2bWxSUE5lWTlsck5OaEpsTnJRcHRmS0ZxYlZHcTRRNGgxUHBrem1Zd2sxQjZSNllNRlVwYVVraE9ZOWxyUExoTnlreUl6a1pmb2FmY1lWRnF5SE9YcERjZEVtcU9PK3FIVEZPaEtTUW5PZXkxMEZvUzRpVlNESUtTYUZlaUxPZGpCK3NGNExjVTZ2MFI0ajBrNHRPYWo5STlscnBQeG1wQlNhVTYxaFpZY2ZWR3BLRUFpSWk2VnV0SmdzeVJKZ3V4dlNTVFVjV2tHWVEybHRQVCt3Ky9WTXJsTHBSS0NrcVFvUllUc280ME5xS25ybjJIb3pNZ0pwY1ZKa1JKTHJmZi9BSnd2M2I5Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN4Y3hjeGN3bkwvQVAvRUFDY1JBQUlCQWdVRkFBSURBQUFBQUFBQUFBRUNBd0FSQkJBd01USVNJQ0ZBUVJSd0lsRlMvOW9BQ0FFREFRRS9BZjBhN2hONk03VkhNRzhIMWIyb3lxS2FjbmF0ODFtWmFXZFRRWUhiMEpKQ1RWejJKQ3pVSWxBdFR3RWNhMnp2UVlpa1BVTDZyYjBxbGpZVitPMUREajdTeHF1M1lWQjNvNGRmbEhEbis2ZU1wdmxGd0dxL0kxRHowc1JzTW8rQTFYNUdvZVkwc1I4eWo0alZsNW1vK1kwc1I4eVhpTldiblNjaHBZamxrTlhFY3RPZm5TK1RyWWdiSEtNM1VhTG03RTFFTHVOYVlYWExEdDR0b08zU3Q4c09QTjlkbDZUYWxicE42Vmd3dU8rV1RxOERLSmVsZGVXUHE4akpXSzdVazRQTHNlVlZwNUMrVU1kLzVIMFpJZzlNaFhmSkpDbTFDZFNQTlBNVzJ5QXZ0U1FmVzlNaTlQQi9taUNOODBnSjNwVkM3ZXN5aHQ2T0hQeWtpQ2ZvL3dEL3hBQWtFUUFDQVFNRUFnTUJBUUFBQUFBQUFBQUJBZ01BQkJFUU1ERXlFaUVnUUVFaWNQL2FBQWdCQWdFQlB3SC9BQTFJeS9GQzNURlNRRmZZK3FBVFN3dWFTMkE3VUJqVjRGYW10M0hGRlNPZm9SUmhWckErRHpxdE5NNU9hUzRCN1VEblhBb29wNUZPdmkyTjFlQlRNRUdUUnVWbzNSL0JUU00zSitDc1Y0b1hMRG1oZEQ5RkpLSDQwbTduZFRxS242YlZyeWRKZTUzWStncWZvZHExL2RKTzUzWXVncVhvZHExL2RIN0hkZzZDbjZuYXR1dWgzYlkveHQyNC9pbU9CbmV0VHlOSlJoenN4akNnVk1jSWQ2QnNQcGNyNzh0aU5mSnNhWFRlZ043aWtieUdhZGZNWU5NaFE0UHpoaThCazZTdjV0bmZobDhEZzhhTW9iMGFlM0k2L0JJV2VraVZOSjVjZnlQb3h6RlBWSTRmalI0bGZtbXQyQndLamdDODZFZ2MxSmNmaWZUQnh4U1hQNDFBZyt4ckpjQWVscG5MYy9XVnluc1VMbGNlNmttTC93Q0gvd0QveEFBM0VBQUJBUVFHQndZR0FnTUFBQUFBQUFBQkFnQURFUklRSUNFaVFGRXhRVkpoY1hLQkV5TXdVR0toQkRJemtaS3hRb0tBa1BELzJnQUlBUUVBQmo4Qy93QkMwcVIyaXR6WG5ObTR0TTdNZkw1bHFDUXhRNXVvejFtbWQyWUZwVlhIbVdmbGtWRUFiMmc1RTV6MU5GNHFOYVZmZUkzNld1cmdySStUM255UHUxMlpmQU4zYVFqM2FMeFpWeDhLeGNSa3ExdTlkZFV0OVNYaTExYVZjRGpwVTJ2RDdORXZsOURCdnJQUHlhMTR2N3RhZkFtZTkyajNMQU8rN1VHZzhURGZxUGdXS0k2dDlWZjVOOVo1K1RYMWRvbmV3V2d4QnhMMG5haDRVU096VG1wb3dtWHRHbVZRQkJ6YUxoVXZwTFFlSUtmQ1duSldKZmN4clFTQ2VEZlRsNXJHNzE1MFMxeDJBYzY4Q0lockIyWjlMWEZKWDdOZmRLSFN1ODVzUzk1cVZLZVJzT3B2a2oxYXh5ajdOWUllTmZkcFZ4RGZSSFJ0Q2gxWjRoT2hKaFN2bXhMM2pTOTQ0Ujl6bWxmUGlYdEwzcGhIdk1hVHo0bDUwL1ZMN3BoRjh4cC9zY1NyZ0tYdkRDRTBvNjRrY3RLeDZjR1RVZGY5cnhLRDZhZUtjRzhQcE5SMXk0bHllTktOOGYxZzMzTFVkREpJeExzNzZYWE5nM25UOTFBTXNUSEpWS0ZaS0J3WUdhcVhhYzFERlBmdlVRck1Sd1RwUEUwdWh2amlscHpTUlVkN3JNRkxzcHBKMlU0dDRqSlZLMFpHT0NlcTMwdlY5TVhOdGlOTXVwWWhnVnZNaFVSNnJjV2w1c0drS0drV3NsNG5Rb1lCTGtjVFNsQTBxTUdDUm9GbUxXN1A4Z3hTZElwN0Jac1Y4dmpsNHMyQmxQRmFUU1hoMEkvZU43WWZLdlR4cUIwK01GNmpuNHBXdFVBMlRzYUJVU2orV2s0MVR0V2dzWGE5SXFCTHkrajNEVE8xUjhLVkhlTDltbWVLalU3ZFl1ajVjZms4R2dzVUxFQ0treUZGSjNNRS9FRCt3YVpDZ29icTBDWmxiSWFFWkVaQ3JFMk9ocExCS1JBRHlDMnhlcFRRZUo2MVpuYWlscFgxeFdlcW1aNHFEU3V1N1Q3MWd0OWRSbHJMQktSQUR5S1ZhUW9NVmZEMmpaTFFVQ0R2cXdqTWpaTGR5bThkclUweTFGUnEzRTJablEweHZyelBrMEhpWTcybWRkNG4zOEdWMmtxYVo4WnpscWFBRUI1VEVpQzlvTkVpS05vVllKRVMwM3hGbnBEU29TRWpkNVpBdFA4QUQzVHN0S29RSW91aUNkb3RkRVZiUjh3N3hFZDdSbEo0bG9KRUIvbkovOFFBS2hBQUFRSUVCQVlEQVFFQkFBQUFBQUFBQVFBUklURmhjUkF3UVZFZ1FJR1JvYkZRNGZEQjhkSC8yZ0FJQVFFQUFUOGh5Q1FFNTI3cGp1bUtnRlFDb0JVQXFBVkFLZ0ZRQ29CVUFxQVZBS2dGUUNvQlVBcUFWQUtnRlFDb0JVQXFBVkFLZ0ZRQ1ltcVZHNlpia0NXVVRPQ0FiNEpta24zaG11OHBib0J2aG9pb1U4cncrSmJVSUY4ancrTEkxRTBJOFJpVzcvR21CZnZ3a3NnR0h4d2hEZ203YjQ4K3NTV0NBWWZJQ0RqQXlmSW1Zd0V6ekI4WUdZSmdPcSsvbFFGV28xRitaSk9XTmhEcVZHWElQNk5pSE1ieW1kamNTczVjQUFGSjVRb0hjeVRCT0Zab2ZaUEg3Um9PbkVPRmlLQ3hUUUJFcG5sWmlrMjVBZ0RrZ0NxbDRwR1U3eE5nZVU1Z2Z1WWs4UjFaVE9Eam9FWkFncVA0SzBtV3drTHduQjVHYmRTYlpnQkRBcnhrRzY4UFFlRi9wRk5GYzBSY2h2a05EMngrR1FnV0xBemU2Y2MyQjREa2VGNUFHUStwZjZSQVFKcWlNOUNtbmpjWmsyNmsyek5FUXV5R1RNcHY3a095WmcvWmh0aVp6YkFFOHZuUjdxOFdhSHJsRkJLRjFHWk51cE5zeUg4VWVKMUYyQjFxME4wQk1YNkg5SzZqQkU5K001Q0pNRUozSnV5N0o2SW51VW9MZUlkK01JOUhyTW0zVW0yWURYV01ieTJITXAwZDVyMzJkN1RLRUd3R2Q0b2txYkJ1STlLUVdpdTFQUWZIOTlNeWJkU2JaZ05peWhVK3VVSi8weHhDSlY2R1pOdXBOc3dHdUQwTVRoMS9ybERjbS91eEJxcGVobVRicVRiTUJxdjhNU2lQN1BsRGQ3K3pFV0d1WVRicVRiTUZxM294S0J1SEtGVkRpTFZEN1prMjZrMnpHaWJpZkp4dlova2NuUVFQd05LaFBsbVRicVRiTXZKdms0d0hjSHJrNkhFOGNEUm9PWk51cE5zeThRSHJHMHdlWEp1YXNjRkRWNHpKdDFKdG1PN2N4NCtzWFRRTzhPVHZ4bmhpQTVZS2xCc3liZFNiWmpmc2o3R1A2NkR5ZEJNZURqUWdlYzJiZFNiWmpHMkE3RHdVWi9Ea3V2eWVNYUVlQVBtemJxVGJNL053T0J5Nmg0bHVTYWRnUDdqWDBQOEFNMmJkU2Jac0FHZUFzK01ZNCtkL25KYThnbUJZUXhZM0pBL3V1Yk51cE5zMXgwQi9qK1l0SkdLNjVqa2Q3b1Y5T0NNSnVQcjlObXpicVRiTmFlYkJzY1Rqc2NBYXJWMEZ1UWFMeFAxNHlDUUNsT0lETm0zVW0yYkxRWXNnSXNSaU1RbGFFY2pvZHM5bVFQdlJUd0Y3WXN5Z3d1L0hPbTNVbTJjY1lmU3hTSzBNUVdYM3pRRWg2bFFDL3dEdHppQVNXRVNuRW03dWROdXBOczZRaXoyTzZEWXhlOWVBYTZHaHFzZFJxTGpLY0dOZ0dDNVZqQU5CYmdza1IxTytmTnVwTnM5NUJoZnFLT2hoaUR3QW9CMUprVVJFZnR3aGtvNmx4T25kcjEyVHZHUDJUcndnSXlSY29FT2dFd0EwejV0MUp0eUdnOUkwVUdRYUJJOEwxWlNSVEdJZDUvNGdRUTRMZzROUmpvTlRaUDdubGY4QUZNOEo0TXpoK2pJZEFaZ0JweUUyNmsyNUUrTU13VTRyVWVqMEtMQlhNQXg0UzREOFNHeVp3ZGlKL0RvME9PcDRlcXJDQk05bklDdzVLYmZsQm5zdEpDT3FlYkNKZW1xSUlMR0J5SE96WFlKbm92Si8xQVFBSkFjbkhIZENaNVVTZTZqN1J1aXBIMXdpNWhwQUJ5VXdtWjF1cFF1QWRBNVF6S1FYdHl3Q0FCQjBLZjJOWFNiYkk3TG5nY0pCT2NqN1U0Uk9ZZVdPZ3drNWdaQ01Ta0k2cDBxV0NoOFFVZ0F3SExpSkhFUWg4ZVN3UURERTc3Zkh6TnVHUnA4YWRoTlNIRE5EWS9Ga3NnTy9HUTZCME0vaVNXUUdwbmtrT25hZmY0ZDlCTkFkOHhtbDJUN3crRGRsRTBVczl0aW5PbzdKbS9PczNUN0JNVE05a0EzS0FBSktvVlVLcUZWQ3FoVlFxb1ZVS3FGVkNxaFZRcW9WVUtxRlZDcWhWUXFvVlVLcUZWQ3FoVlFxb1ZVS2luSE4vOW9BREFNQkFBSUFBd0FBQUJEenp6UlR6enp6enp6enp6enp6enp6VHp6enp6eVJ6enp6enp6enp6enp6enp6enp3elR6enlUenp6enp6enp6enp6enp6enp6enp5anp5aHp6enp6enp6enp6enp6enp6enp6enp4end6enp6enp6enp6enp6enp6enp6enp6enl6enp6enp6enp6enp6OVBmenp6enp6enp6enpEenp6enp6enp6UW9NTU9EN0h6enp6enp6ekx6enp6enl1QUFNTTkrNHNNUE9MM3p6enp3THp6enp6eUVJV1kzenp3MjAwd1A4QTg4ODg4Qzg4ODg4OEtRODg4ODg4ODg4NkQwODg4ODhDODg4ODg4cUU4ODg4ODg4ODhyRGQ4ODg4OEM4ODg4ODhxRzg4ODg4ODg4OGdEVzg4ODg4Qzg4ODg4OGpTODg4ODg4ODg4SkdWODg4ODhDODg4ODg4cEEvODg4ODg4ODhDSDg4ODg4OEM4ODg4ODhNRDE4ODg4ODg4OEpIODg4ODg4Qzg4ODg4OG9EYjg4ODg4ODg1REQ4ODg4ODhDODg4ODg4L0NDLzhBUFBQUFB3UjkvUFBQUFBBdlBQUFBQUE9DQWZ0L1BPOEF5dlBQUFBQUEF2UFBQUFBQUERqUTQwcUF4VDNQUFBQUFBQQXZQUFBQUFBQUExmUUF3RGovQUR6enp6enp6elB6enp6enp6enp6eTJLL3dBODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODhFODhVODg4ODg4ODg4ODg4ODg4ODg4ODg4MGM4OHN3ODg4ODg4ODg4ODg4ODg4ODg4OHM4ODg4ODhjODg4ODg4ODg4ODg4ODg4ODhFODg4ODg4ODg4akJCQkJCQkJCQkJCQkIvOEFQUFBQUFAvRUFDWVJBUUFDQVFNRUFnSURBUUFBQUFBQUFBRUFFU0VRTURGQVFXRnhJS0ZSY0lHUnNmRC8yZ0FJQVFNQkFUOFEvUm8xd2xzYW5ZQjZWSEpuZjc5VEdHb3FyZGNRNUp5V0p5UytnYmw0SjV2aGtPQ1k0dVpUSWlLcDFFY01Xc1pTL251OHZ2U1FkeElMbE9BZkF1aGNaeXFkbkExNzZmWVp4ZFRKajdtZjhQVzF4L2xwOUxkRlFkYlE4ajNvYUR3YnBwUlVuazJuZ2VOQlFHNktMNGcwM0JzdlpWcnhCU2VlZ2l4YlB1amZoZjhBak9saS9IWXVORjYzcUNVeGxVY3g4OUNnV3k3MkRTbUhuZnI5d2lWaGlGcVlUQitvSTVOY0x5emx1UHhvNjdIUTVRd3h1aG9sbGlYREJtT3dORVZDVmY0empvZ0ZNRnovQUVqdEN0Y2ppZmNIbzdWYmg5Q1djc1ROY3Y2UC84UUFKaEVCQUFJQUJRUURBQU1CQUFBQUFBQUFBUUFSRUNFd01WRkJZWEdoSUVDeFlIQ0I4UC9hQUFnQkFnRUJQeEQralg2MmN3bEV1ZFpUNnV3RnpvdGVabVN1QUtESE16Sm5LcHM1UG9ER3JXZHI0WkdOc3BScVpabGZVQVdPS201Q2FoZGNkWDFpZE1VSHNNYjB2aTR0YnFiVUdkU1I5TmZ2V0p2L0FPZnVsNldIdmFydndrRi85ZGRJNXJ4Zzc4anF1L0ZEZmkwaGt2R0N0TzdxdS84QWI5aHN1enBITTk4RmF1cmNqaGlXVkVwclJvTHpMbmdmUUNtZDlIdzVyeXF1K1dGWUhYUXI4RkhKMWhWWkJNOVlLeXFEOGdWb25NRGhjamJwcjh3SU41a0hwdVovbVBjUkduSFBOam1iVHZ6Z1o2N3Y5SFAyWkJyZUJPVFBtYmtEbVp2bmNBYlZFdjhBMG0vMGtWcW1NZnJEYkxNZXJqNmpkdTlLOVJxMk95RzVrZXh4L09qV2ZuLy94QUFxRUFFQUFRSUNDUVVCQVFFQUFBQUFBQUFCRVFBaE1hRVFNRUZSWVhHQmtmRWdRTEhCOEZEUjRmL2FBQWdCQVFBQlB4RFVXUmI3akdwY0ljMVNZdm9SVzhsNXJYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4VlhpcThWWGlxOFZYaXE4Vlc0STVNVk13NjE2azRoeVdva2hsYm4yQXFNWGNWR0lodVA5b0JZaitDZ2tKSlU4V09EY292Z1N5ZGJMZGZpMUJnUDRxQ1FralVZTTdqYVVJSkdUVXFCS3dGUTNOdHpmei9rcUhBZHB2b0JicWJ0UVhTNE1PUEgrV2srUlNCSjZ1U0g0ZnpjRndmeDlNUzJMWXF3ZnpyeTlsemw2QzVzV0gzL0FEemFURzRvUkJMam9tVXgyYzZnRGQvUXZibTV5MFhCdXY4QTBiRzMyZEZ6OVAzZjNDUERpWWU1dXZ5R2tTUU51ekE1SmZ1VUV2MkVJWGNObnQ4UjJsKzJqYTcxYy9iWTJvM2c1Y1hoUXEzWE5nNGJtZkxEU2tXeWRvTnliU2pIcXRKZTR2cHZ6OXVSTGNJcktudE1KS2lCMWFMZkd3YUw4NU9kVHFSd2VXTEhxa2dDeFlQNHN6MG9NQlByelk5RjlyTEQydFpWN0JxTllxZ281a1RFRHNGNkhFWmg4aEJ5bzVXNFd2dkJrMWNsTWtxSEl3T21xSi94d2k5em9sRkN2YkRaSHpRUkRPNXZXSXpvc3VtSDBqN0hPcXlyV1JXNkRxVGZ3T0hkS1V1eFE2UUsvYi9kRHdMeFgzVW9EdlUrc0ZZTHRQRmJjUkJjQndjWHRRVVlReU9YdDU0MHpPTEY5eFBveDFHelgzeDhWa3JIOTErMys2ZHgwblFtL0VubkpWMll6OVBFYmF6T3F5cldNVEtUd0xHUnFRUUFWYkFWZkNkZ2lPR042d2NhTWhyWVNqd1lmTGpwTGUwU2cxdkhHUlh5eEhXZVpVMkU0SW5rQ3ozMVN0ek80UUpPNVBYV1oxV1Zhd29IZjV2VURXOXBYWXBzUlBhRU9qZktuRmQrRWZqaFJBbE5sUDFYN2VzSW13TWljUnBGZWJWaTVyZG9wM1laRmw2TnM2ZVlWak4yRW5yNWtEV002ckt0WVFUZjU2UmZaQ2hSQTdxL08zNEpTUXlEQk5uV1ZGaVhBUVphNmF1TzFqTXFSbUg4S0tZZXJuM05PUXBKU3dPM1NTZmF3eTZ6T3F5cldRQ0l2ZTRhWnQwWDg2ZTBCWnVzK21MZkEvZlBXWjFXVmF5RzhidTJtYmQzN24rUGFZM1hkK2ZUTU41eWZyV1oxV1ZheTJON3B1YlJlMDdkWkdNN1dtVWJ4OEgxck02ckt0WktONitIMXBqM3Q5bC8zMmwwcGxjOU1vakhaejYxbWRWbFdzL1djSDFwZzN4N1A5dlo3S3ArdzlIR0R1ays5Wm5WWlZySWZISCsybWQ4bVgxN1B4ano5SEZydkwvZXN6cXNxMWtjVDZaWDNwanV4RHVmWHM3cVJQZEVmZm90NUdUSFdaMVdWYXkwKzJlY3RLNjhUK0p6OW54M0Y2L1JPbERDVllDakp3QWREV1oxV1ZhenlnNTltbTlrWERrSDJkeTd3WEFUNk5OaUp0dk1HdHpxc3Exa0tsek9nL0I2TGd6ZnQ4aCsvWlFCY1F1VUQ1ZE5ucGw3ajZhM09xeXJXUitTa2RVZWlWMlVyaElNZzlsRVRaZzRxL0JOTStscGJpcDhGMXVkVmxXdGUzQVRtUmxHa0c3RVRnSStWMzlrWmpJamZZWkJwbkV4NXlGZmhyYzZyS3RiQVJFejJTWGZCNjZUaHJnQ0grQ2RmWWhKUW5yMnpKU3F5M2RMUVVkOUxaTmF6cXNxMXJuWit6dmNPK25oWXJJTWxZSlFKdmJUb3lkUFlIYzFpTmdXSGVYb2FjMVlCWW9HNENOd0VHdHpxc3ExcmhRc3U5c2VqRDBwTGJ6c1JHRTAzOENCYmE5V3pqejE5eTFFYlZzSEZwRDlqVFlZQWNBZzAzVU1lMnlCMkpkdGRuVlpWcnRpMW9iRSt3bm1Pa1VFVVM0bEFaSFlYQVhaOHVldHhlejRpN2cydkNqb0VMbUw5bnhtNkFRS01BWFZvekppNXY0blFnNmE3T3F5clhCMWdBRjlrT0kxWkVwT3diQndmUWFka0ZiWEJjVGc5eW9LTkd3ZmRpR3FscU8yS2Z4WXlwUzVtSFk5dzJmUG9jcnZzTVA0SHp5MStkVmxXdkpZb0hCUGkrTzhwWU9HdWZ0L293UWdzUjJwelloQmM0N1RtZHF3c3VURGs3bmg2aDRaTFhPcGgxWDRVWTJCVFluYytIRDA3cUZybVptOTJVR2RRMEFOZm5WWlY3QzBrV0RTOENiVGgycVRSSGJ1Vy9XUHBCYlNSZEJNSHJTRFJzSE1tL1ZialFNQUpFWkUwVFlEaXZ1R0xVZmxrS052aS9BNzBxaXFyZFgwOEZCUVAweithZ3ppZUFld3pxc3E5amdxamNsU1EzbFlPRzA1TitMVFRsaFFPWStsMnhOMnNjMjFsd3JFZXdWbnVBeFpjNnhwaHZMeTRIRDB4RjRNWm9iWGdTMDRBSzVlT1J6dSt5MzNhcXdHNjNzNENjUUhaaS9UQ3BTSlhnc2NmbzdVaUJCaEVoSFVRd25FRWN4YkZObURmQWJqdHlIQ2piREFZQTRIc3drNTFXanVaOXJaUjFyZlZzSFB1VS9GTkYzMUdLNTkzMHNkdUZrY0FvcGw3aVhmQnlMOFNzRE9FUS82OGZhT0VNWXRRUUJnV3BzWGNqOW43WU1MUWhJbERHdVZHT2UydUdIS2xHWkE0UjBTT1pRYXpnYjNBNnhVTWpVRW5oRzQ0R2Z0cjNlTTl2eG9HSXhMME1rbUQ3Y1dERUJQSkMvU2pjSFpGUFlSUFdqTzNBd09BZTM0QUxIMys0YWJ6dTRjdjU5NEx1QnpxQU5KYkRITVVJZ2x4L25HUHNzT2ZwTUxhdzRPNythM0V1eU45QUFHQjZVQkRoU1IybXgzL3dBdUJoSzRHK29MdDFpK3NCR0c1M1VrNEh5L2toeExnYjZTY1JaYWtCRFV0K2ZsL3dDTzN3VGtLZ3VzcmJySjduaXcvd0NVR1lFdHp0L2hvc2NkMjJveGJOeGpRQWdJTmNna0pKVXpFT0RjcURhOFZXOWh6dDcxRmhFN3FtNHJ6dFc0QnUvMVFZQ1BhS1VBN3dwdmZOWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxWG1xODFYbXE4MVhtcTgxVjQrYWdHUjFYb0FJQURXZi9aIi8+CjwvZGVmcz4KPC9zdmc+Cg==" width={25} height={25}>
                    </img>
                    <b style={{fontWeight: "300", marginLeft: 10, display: "flex"}}>TRUST</b>
                    <div onClick={() => {setSelectionNum(4)}} className='selectionCircle' style={{width: 15, backgroundColor: selectionNum == 4 ? "rgb(40, 40, 40)" : "rgb(20, 20, 20)", height: 15, borderRadius: "50%", right: 15, position: "absolute"}}>

                    </div>
                  </div>
                  <div onClick={() => {setSelectionNum(5)}} className='rectangles2' style={{width: "80%", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", alignContent: "center", marginLeft: "50%", transform: "translateX(-50%)", height: 50, backgroundColor: "rgb(10, 10, 10)", color: "white"}}>
                    <img style={{marginLeft: 10}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+" width={25} height={25}>
                    </img>
                    <b style={{fontWeight: "300", marginLeft: 10, display: "flex"}}>WALLETCONNECT</b>
                    <div onClick={() => {setSelectionNum(5)}} className='selectionCircle' style={{width: 15, backgroundColor: selectionNum == 5 ? "rgb(40, 40, 40)" : "rgb(20, 20, 20)", height: 15, borderRadius: "50%", right: 15, position: "absolute"}}>

                    </div>
                  </div>
                  <div style={{marginLeft: "50%", marginTop: 20, width: "80%", transform: "translateX(-50%)"}}>
                    <Button onClick={() => {setConnectWallet(false); setSelectionNum(null)}} disableRipple={true} disableFocusRipple={true} style={{width: "48%", height: 60, padding: 5, color: "white", backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.2)"}}>CANCEL</Button>
                    <Button disableRipple={true} disableFocusRipple={true} style={{width: "48%", height: 60, padding: 5, color: selectionNum != null ? "black" : "white", backgroundColor: selectionNum != null ? "white" : "rgba(255, 255, 255, 0.05)", marginLeft: "4%", border: "1px solid rgba(255, 255, 255, 0.2)"}}>CONNECT</Button>
                  </div>
                </Grid2>
              </Grid2>
            </div>
        </div>
        : ""
      }
      
      
      <Header className="fadeInClass" />
      <Scene />
      <div className='fadeInClass' style={{ width: "100%", fontFamily: "Geist-Mono", height: "600px", marginTop: 720, zIndex: 20, position: "absolute", backdropFilter: "blur(10px)"}}>
        <div style={{color: "white", textAlign: "center", marginTop: 15, fontSize: 13}}><TypingOnLoad typingSpeed={30} textToType={"THE S&P100 OF SOLANA'S AI ECOSYSTEM"}/></div>
        <div style={{width: "40%", height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "0px auto", marginTop: 10}}></div>
        <div className='fadeInClass' style={{color: "white", textAlign: "center", marginTop: 22, fontSize: 14, color: "rgb(136, 142, 147)"}}>MARKET CAP</div>
        <ScrollingNumber fontSize='min(9vw, 65px)' separationWidth='min(5vw, 40px)' style={{color: "white", textAlign: "center", marginTop: 15, fontSize: 62, letterSpacing: -5, fontFamily: "Geist-Mono"}} currentValue={watari} updateValue={watari}/>
        {//<Button style={{backgroundColor: 'red', position: "absolute", width: 100, height: 100}} onClick={() => {setWatari(watari + (Math.random() * 100000))}}></Button>
        }
        <div style={{marginTop: -60}}>
          <ScrollingNumber beforeText='+' afterText='(+11230%)' textColor='rgb(150, 255, 150)' fontSize='min(4vw, 30px)' separationWidth='min(2vw, 16px)' style={{color: "white", textAlign: "center", fontSize: 62, letterSpacing: -5, fontFamily: "Geist-Mono"}} currentValue={watari - 200000} updateValue={watari - 200000}/>
        </div>

        <Grid style={{width: "min(550px, 75vw)", height: 45, scale: 1, marginLeft: "50%", transform: "translateX(-50%)", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", justifyContent: "center", }} container>
          <Grid style={{border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} xs={4} md={4} xl={4} item>
            <div style={{backgroundColor: "black", height: "50%", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
              <b style={{fontWeight: "normal", color: "gray"}}>PRICE</b> : $0.02874
            </div>
          </Grid>
          <Grid style={{border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} xs={4} md={4} xl={4} item>
            <div style={{backgroundColor: "black", height: "50%", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
              <b style={{fontWeight: "normal", color: "gray"}}>OSOL.D</b> : 1.08%
            </div>
          </Grid>
          <Grid style={{border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} xs={4} md={4} xl={4} item>
            <div style={{backgroundColor: "black", height: "50%", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
              <b style={{fontWeight: "normal", color: "gray"}}>HOLDERS</b> : 52,154
            </div>
          </Grid>
        </Grid>

        <Grid style={{width: "min(60%, 550px)", border: "1px solid rgba(255, 255, 255, 0.2)", height: 75, marginLeft: "50%", transform: "translateX(-50%)", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white", justifyContent: "center", marginTop: 70}} container>
          
            <Grid style={{border: "1px solid transparent", height: "100%"}} item xs={8} md={8} xl={8}>
                <Grid container style={{height: "50%"}}>
                <Grid style={{border: "0px solid rgba(255, 255, 255, 0.2)", height: "100%"}} xs={12} md={12} xl={12} item>
                    <div style={{backgroundColor: "black", height: "50%", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "left", height: "100%", color: "gray", width: "100%"}}>
                    <div style={{marginLeft: 20}}>SOLANA CONTRACT ADDRESS</div>
                    </div>
                </Grid>
                <Grid style={{border: "0px solid rgba(255, 255, 255, 0.2)", height: "50%"}} xs={12} md={12} xl={12} item>
                    <div style={{backgroundColor: "black", height: "50%", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                    <b style={{fontWeight: "normal", color: "white", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", padding: 12}}>{address}</b>
                    </div>
                </Grid>
                </Grid>
            </Grid>
            
            <Grid style={{border: "0px solid rgba(255, 255, 255, 0.2)", height: "100%"}} xs={4} md={4} xl={4} item>
                <div style={{backgroundColor: "black", height: "50%", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                <Button disabled={copyButtonClicked} onClick={() => {setCopyButtonClicked(true); writeAddress(); setTimeout(() => {setCopyButtonClicked(false)}, 1000)}} style={{width: "75%", backgroundColor: copyButtonClicked ? "white" : "black", border: "1px solid rgba(255, 255, 255, 0.2)", color: copyButtonClicked ? "black" : "white", height: "56%", fontSize: 12}}>{copyButtonClicked ? "COPIED!" : "COPY ADDRESS"}</Button>
                </div>
            </Grid>
            </Grid>

        <div style={{position: "absolute", width: "90%", marginLeft: "50%", transform: "translateX(-50%)", marginTop: 30}}>

          <div style={{color: "gray", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginTop : 0}}>
            Disclaimer: Cryptocurrencies are highly speculative and involve significant risks. The value of OSOL tokens may fluctuate rapidly, and participants should be fully
          </div>
          <div style={{color: "gray", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginTop : 0}}>
            aware of the risks involved in cryptocurrency investments before participating. OSOL is not available to U.S. persons or entities, as defined under U.S. securities
          </div>
          <div style={{color: "gray", fontSize: 10, textTransform: "uppercase", textAlign: "center", marginTop : 0}}>
            laws and regulations. It is the responsibility of participants to ensure that their jurisdiction allows participation before getting involved.
          </div>

        </div>

        <Grid style={{width: "100%", marginTop: 300, height: 800}} container>
          <Grid style={{color: "white", marginLeft: "7.5%", fontSize: 30, fontWeight: "normal", backgroundColor: "transparent"}} xs={6} md={6} xl={6} item>
            {assetsClicked ? (<b>Assets/ <b style={{color: "gray", cursor: "pointer"}} onClick={() => {setAssetsClicked(false); console.log("ran")}}>Assets</b></b>) : <b>Assets</b>}
          </Grid>
          <Grid style={{color: "white", fontSize: 30, fontWeight: "normal"}} xs={1.40} md={1.40} xl={1.40} item>
            <div className="fadeInClassLeftAngle" style={{cursor: "pointer", userSelect: "none", position: "absolute", marginTop: -24, backgroundColor: "red"}}>
                <HoverScroll textValue={"DETAILS"}/>
            </div>

          </Grid>
          <Grid style={{color: "white", fontSize: 30, fontWeight: "normal", backgroundColor: "transparent"}} xs={1.40} md={1.40} xl={1.40} item>
          
          </Grid>
          <Grid style={{color: "white", fontSize: 30, fontWeight: "normal", backgroundColor: "transparent"}} xs={1.40} md={1.40} xl={1.40} item>
          
          </Grid>
          <Grid style={{display: "flex", justifyContent: "center"}} xs={12} md={12} xl={12} item>
            <div onClick={() => {setAssetsClicked(true)}} className="saturate" style={{width: "85%", border: `1px solid green`, borderRadius: 8, height: 700, justifyContent: "center", alignItems: "center", display: "flex", cursor: "pointer"}}>
              <div style={{justifyContent: "center", opacity: assetsClicked ? 0 : 1, fontSize: 65, alignItems: "center", textAlign: "center", color: "white", width: "100%", lineHeight: 0.7, scale: "0.7"}}>$1,000,000 <br/> <b style={{color: positive ? "green" : "red", fontSize: 30}}>{positive ? "▲" : "▼"}19.21%</b></div>
            </div>
            {
            assetsClicked ? (
              <>
                <Grid style={{width: "85%", height: "117%", backgroundColor: 'red', opacity: 1, position: "absolute"}} container>
                    <Grid style={{}} xs={6} md={6} xl={6} item>
                      <Box style={{display: "flex", height: "100%", width: "100%", backgroundColor: "rgba(26, 6, 8)", border: "1px solid rgba(255, 255, 255, 0.2)", justifyContent: "center", alignItems: "center"}}>
                        <div style={{justifyContent: "center", alignItems: "center"}}>
                          <img width={85} src="https://dd.dexscreener.com/ds-data/tokens/solana/2otVNpcHXn9MKeDk3Zby5uanF3s7tki4toaJ3PZcXaUd.png?key=1d5579" style={{borderRadius: "50%", alignItems: "center", justifyContent: "center", marginLeft: "50%", transform: "translateX(-50%)"}}></img>
                          <div style={{justifyContent: "center", fontSize: 45, alignItems: "center", textAlign: "center", color: "white", width: 300, lineHeight: 0.7, marginTop: 7, scale: "0.7"}}>$1,000,000 <b style={{color: positive ? "green" : "red", fontSize: 30}}>{positive ? "▲" : "▼"}19.21%</b></div>
                        </div>
                      </Box>
                    </Grid>
                    <Grid style={{}} xs={6} md={6} xl={6} item>
                        <Grid style={{width: "100%", height: "100%"}} xs={12} md={12} xl={12} container>
                            <Grid style={{height: "85%"}} xs={12} md={12} xl={12} item>
                              <Box style={{display: "flex", height: "100%", width: "100%", backgroundColor: "rgba(26, 6, 8)", border: "1px solid rgba(255, 255, 255, 0.2)", justifyContent: "center", alignItems: "center"}}>
                                <div style={{justifyContent: "center", alignItems: "center"}}>
                                  <img width={85} src="https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383" style={{borderRadius: "50%", alignItems: "center", justifyContent: "center", marginLeft: "50%", transform: "translateX(-50%)"}}></img>
                                  <div style={{justifyContent: "center", fontSize: 45, alignItems: "center", textAlign: "center", color: "white", width: 300, lineHeight: 0.7, marginTop: 7, scale: "0.7"}}>$1,000,000 <b style={{color: positive ? "green" : "red", fontSize: 30}}>{positive ? "▲" : "▼"}19.21%</b></div>
                                </div>
                              </Box>
                            </Grid>
                            <Grid style={{backgroundColor: "white", height: "15%"}} xs={12} md={12} xl={12} item>
                              <Grid style={{with: "100%", height: "100%"}} container>
                                <Grid style={{height: "100%"}} xs={7} md={7} xl={7} item>
                                <Box style={{display: "flex", height: "100%", width: "100%", backgroundColor: "rgba(26, 6, 8)", border: "1px solid rgba(255, 255, 255, 0.2)", justifyContent: "center", alignItems: "center"}}>
                                  <div style={{justifyContent: "center", alignItems: "center"}}>
                                    <img width={45} src="https://dd.dexscreener.com/ds-data/tokens/solana/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K.png?key=238e32" style={{borderRadius: "50%", alignItems: "center", justifyContent: "center", marginLeft: "50%", transform: "translateX(-50%)"}}></img>
                                    <div style={{justifyContent: "center", fontSize: 15, alignItems: "center", textAlign: "center", color: "white", width: 100, lineHeight: 0.9, marginTop: 1}}>$21,000 <b style={{color: positive ? "green" : "red", fontSize: 10}}>{positive ? "▲" : "▼"}19.21%</b></div>
                                  </div>
                                </Box>
                              </Grid>
                                <Grid style={{}} xs={3} md={3} xl={3} item>
                                  <Box style={{display: "flex", height: "100%", width: "100%", backgroundColor: "rgba(26, 6, 8)", border: "1px solid rgba(255, 255, 255, 0.2)", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{justifyContent: "center", alignItems: "center"}}>
                                      <img width={45} src="https://dd.dexscreener.com/ds-data/tokens/solana/Grass7B4RdKfBCjTKgSqnXkqjwiGvQyFbuSCUJr3XXjs.png?key=f4d065" style={{borderRadius: "50%", alignItems: "center", justifyContent: "center", marginLeft: "50%", transform: "translateX(-50%)"}}></img>
                                      <div style={{justifyContent: "center", fontSize: 15, alignItems: "center", textAlign: "center", color: "white", width: 100, lineHeight: 0.9, marginTop: 1}}>$21,000 <b style={{color: positive ? "green" : "red", fontSize: 10}}>{positive ? "▲" : "▼"}19.21%</b></div>
                                    </div>
                                  </Box>
                                </Grid>
                                <Grid xs={2} md={2} xl={2} item>
                                  <Box style={{display: "flex", height: "100%", width: "100%", backgroundColor: "rgba(26, 6, 8)", border: "1px solid rgba(255, 255, 255, 0.2)", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{justifyContent: "center", alignItems: "center"}}>
                                      <img width={35} height={35} src="https://i.pinimg.com/736x/14/ff/d0/14ffd0fc4c4cdfbbc9f86e650d62ddbd.jpg" style={{borderRadius: "50%", alignItems: "center", justifyContent: "center", marginLeft: "50%", transform: "translateX(-50%)"}}></img>
                                      <div style={{justifyContent: "center", fontSize: 10, alignItems: "center", textAlign: "center", color: "white", width: 50, lineHeight: 1.1, marginTop: 1}}>$21,000 <b style={{color: positive ? "green" : "red", fontSize: 10}}>{positive ? "▲" : "▼"}19.21%</b></div>
                                    </div>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
              </>
            ) : (<></>)
            }
          </Grid>
        </Grid>



        <Grid container style={{width: "min(90%, 1500px)", marginLeft: "50%", height: 50, marginTop: 200, transform: "translate(-50%, 0px)"}}>
            <Grid style={{color: "white", fontSize: 30}} xs={12} md={12} xl={12} item >
              Top 100 AI Coins On Solana
            </Grid>
            <Grid style={{color: "white", display: "flex", fontSize: 25, marginTop: 40, height: 230}} xs={12} md={12} xl={12} container >
              <Grid className='gridLeftGraph' style={{}} xs={12} md={6} xl={6} item>
                <Box style={{width: "100%", height: "100%", backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: 12, borderRadius: 12}}>
                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                  <Grid2 style={{width: "100%", height: "100%"}} container>
                    <Grid2 style={{height: "33%", paddingLeft: "6%", width: "100%", alignContent: "center", color: "grey", fontSize: 15}} item xs={12} md={12} xl={12}>
                      TOTAL MARKET CAP
                    </Grid2>
                    <Grid2 style={{height: "33%", paddingLeft: "6%", width: "100%", fontSize: 40, fontWeight: "normal", }} item xs={12} md={12} xl={12}>
                      $2.8B <b style={{backgroundColor: "rgba(0, 150, 0, 0.4)", color: "rgba(150, 255, 150, 1)", borderRadius: 12, fontSize: 15, padding: 10, transform: "translate(20px, 15%)", position: "absolute"}}>▲ 3.4% 24h</b>
                    </Grid2>
                    <Grid2 style={{display: "flex", height: "33%", width: "100%", justifyContent: "center", alignContent: "center", alignItems: "center", transform: "translateY(-30%)"}} item xs={12} md={12} xl={12}>
                      <ResponsiveContainer style={{width: "90%", height: "100%"}} width="90%" height="100%">
                        <AreaChart data={data}>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="rgba(205, 45, 65, 1)"
                            fill="rgba(255, 0, 0, 0.3)"
                            fillOpacity={0.3}
                          />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="rgba(255, 0, 0, 0.7)"
                            strokeWidth={2}
                            dot={{ r: 0 }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'rgba(0,0,0,0.8)', 
                              border: '1px solid rgba(255, 255, 255, 0.2)', 
                              borderRadius: 12,
                              color: 'white',
                            }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Grid2>
                  </Grid2>
                </div>
                </Box>
              </Grid>
              <Grid className='gridRightGraph' style={{}} xs={12} md={6} xl={6} item>
                <Box style={{width: "100%", height: "100%", backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: 12, borderRadius: 12}}>
                  <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                    <Grid2 style={{width: "100%", height: "100%"}} container>
                      <Grid2 style={{height: "33%", paddingLeft: "6%", width: "100%", alignContent: "center", color: "grey", fontSize: 15}} item xs={12} md={12} xl={12}>
                        TRADING VOLUME (24HR)
                      </Grid2>
                      <Grid2 style={{height: "33%", paddingLeft: "6%", width: "100%", fontSize: 40, fontWeight: "normal", }} item xs={12} md={12} xl={12}>
                        $267M <b style={{backgroundColor: "rgba(0, 150, 0, 0.4)", color: "rgba(150, 255, 150, 1)", borderRadius: 12, fontSize: 15, padding: 10, transform: "translate(20px, 15%)", position: "absolute"}}>▲ 3.4% 24h</b>
                      </Grid2>
                      <Grid2 style={{display: "flex", height: "33%", width: "100%", justifyContent: "center", alignContent: "center", alignItems: "center", transform: "translateY(-30%)"}} item xs={12} md={12} xl={12}>
                        <ResponsiveContainer style={{width: "90%", height: "100%"}} width="90%" height="100%">
                          <AreaChart data={data}>
                            <Area
                              type="monotone"
                              dataKey="value"
                              stroke="rgba(205, 45, 65, 1)"
                              fill="rgba(255, 0, 0, 0.3)"
                              fillOpacity={0.3}
                            />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="rgba(255, 0, 0, 0.7)"
                              strokeWidth={2}
                              dot={{ r: 0 }}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: 'rgba(0,0,0,0.8)', 
                                border: '1px solid rgba(255, 255, 255, 0.2)', 
                                borderRadius: 12,
                                color: 'white',
                              }}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </Grid2>
                    </Grid2>
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Grid style={{color: "white", display: "flex", fontSize: 25, marginTop: 35, height: 392}} xs={12} md={12} xl={12} container >
              <Grid className="gridLeft" style={{}} xs={12} md={6} xl={6} item>
                <Box style={{width: "100%", height: "100%", backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: 12, borderRadius: 12}}>
                    <Grid style={{width: "100%", height: "100%", height: 100}} container>
                      <Grid style={{marginLeft: "5%", marginTop: 10, color: "gray", fontSize: 18, fontWeight: "300"}} xs={12} md={12} xl={12} item>
                          TOP PERFORMERS
                      </Grid>
                      <Grid xs={12} md={12} xl={12} item>
                        {topPerformers.map((element, index) => {
                          return(
                            <div className='rectangles' onClick={() => {setSlidingModalData({
                              iconUrl: element.iconUrl,
                              primaryName: element.mainName,
                              secondaryName: element.secondaryName,
                              marketCap: "$0.3M",
                              price: "$0.0004",
                              priceDelta: "12.47%",
                              twentyFourHourVolume: "$0.01M",
                              liquidity: "$0.08M",
                              mindshare: "0.01%",
                              holderCount: "1847",
                              twitterUrl: "https://www.google.com",
                              websiteUrl:  "https://www.google.com",
                              graphData: data2
                             }); setDrawerOpen(true)}} key={element.mainName + element.secondaryName} style={{width: "100%", height: 70, borderBottomLeftRadius: index == topPerformers.length - 1 ? 12 : 0, borderBottomRightRadius: index == topPerformers.length - 1 ? 12 : 0}}>
                              <Grid2 container>
                                <Grid2 style={{display: "flex", justifyContent: "center", alignItems: "center"}} size={2}>
                                  <img src={element.iconUrl} style={{borderRadius: "50%", width: "min(65%, 50px)", aspectRatio: 1}}></img>
                                </Grid2>
                                <Grid2 size={6}>
                                  <div style={{display: 'block', width: "100%", height: "35px", fontSize: 15, display: "flex", alignItems: "end", transform: "translateY(-2px)", fontWeight: "500", color: "white"}}>
                                      {element.mainName}
                                  </div>
                                  <div style={{display: 'block', width: "100%", height: "35px", fontSize: 14, display: "flex", alignItems: "start", transform: "translateY(2px)", fontWeight: "300", color: "gray"}}>
                                      {element.secondaryName}
                                  </div>
                                  
                                </Grid2>
                                <Grid2 style={{display: "flex", alignItems: 'center', justifyContent: "center"}} size={4}>
                                  <b style={{backgroundColor: "rgba(0, 150, 0, 0.4)", color: "rgba(150, 255, 150, 1)", borderRadius: 12, fontSize: 12, padding: 10, position: "absolute"}}>▲ 3.4% 24h</b>
                                </Grid2>
                              </Grid2>
                            </div>
                          )
                        })}
                      </Grid>
                    </Grid>
                </Box>
              </Grid>
              <Grid className='gridRight' style={{}} xs={12} md={6} xl={6} item>
                <Box style={{width: "100%", height: "100%", backgroundColor: "transparent", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: 12, borderRadius: 12}}>
                  <Grid style={{width: "100%", height: "100%", height: 100}} container>
                        <Grid style={{marginLeft: "5%", marginTop: 10, color: "gray", fontSize: 18, fontWeight: "300"}} xs={12} md={12} xl={12} item>
                            BOTTOM PERFORMERS
                        </Grid>
                        <Grid xs={12} md={12} xl={12} item>
                          {topPerformers.map((element, index) => {
                            return(
                              <div className='rectangles' onClick={() => {setSlidingModalData({
                                iconUrl: element.iconUrl,
                                primaryName: element.mainName,
                                secondaryName: element.secondaryName,
                                marketCap: "$0.3M",
                                price: "$0.0004",
                                priceDelta: "12.47%",
                                twentyFourHourVolume: "$0.01M",
                                liquidity: "$0.08M",
                                mindshare: "0.01%",
                                holderCount: "1847",
                                twitterUrl: "https://www.google.com",
                                websiteUrl:  "https://www.google.com",
                                graphData: data2
                               }); setDrawerOpen(true)}} key={element.primaryName + element.secondaryName} style={{width: "100%", height: 70, borderBottomLeftRadius: index == bottomPerformers.length - 1 ? 12 : 0, borderBottomRightRadius: index == bottomPerformers.length - 1 ? 12 : 0}}>
                                <Grid2 container>
                                  <Grid2 style={{display: "flex", justifyContent: "center", alignItems: "center"}} size={2}>
                                    <img src={element.iconUrl} style={{borderRadius: "50%", width: "min(65%, 50px)", aspectRatio: 1}}></img>
                                  </Grid2>
                                  <Grid2 size={6}>
                                    <div style={{display: 'block', width: "100%", height: "35px", fontSize: 15, display: "flex", alignItems: "end", transform: "translateY(-2px)", fontWeight: "500", color: "white"}}>
                                        {element.mainName}
                                    </div>
                                    <div style={{display: 'block', width: "100%", height: "35px", fontSize: 14, display: "flex", alignItems: "start", transform: "translateY(2px)", fontWeight: "300", color: "gray"}}>
                                        {element.secondaryName}
                                    </div>
                                    
                                  </Grid2>
                                  <Grid2 style={{display: "flex", alignItems: 'center', justifyContent: "center"}} size={4}>
                                    <b style={{backgroundColor: "rgba(0, 150, 0, 0.4)", color: "rgba(150, 255, 150, 1)", borderRadius: 12, fontSize: 12, padding: 10, position: "absolute"}}>▲ 3.4% 24h</b>
                                  </Grid2>
                                </Grid2>
                              </div>
                            )
                          })}
                        </Grid>
                      </Grid>
                </Box>
              </Grid>
            </Grid>
        </Grid>
        
        <Grid2 className="restOfEverything" container style={{}}>
          <Grid2 style={{border: '1px solid rgba(255, 255, 255, 0.20)', height: 800}} size={12} item> 
              <Grid2 style={{color: "white", fontSize: 25, height: "100%"}} container>
                  <Grid2 item size={12} style={{border: "1px solid transparent", display: 'flex', alignItems: "center", height: "20%"}}>
                          <div style={{marginLeft: 50, height: "max-content", fontSize: 35}}>
                            Redeem OSOL
                          </div>
                  </Grid2>
                  <Grid2 item size={12} style={{height: "15%", width: "100%"}}>
                      <div style={{display: "flex", alignItems: "center", alignContent: "center", color: "gray", height: "100%"}}>
                          <div style={{marginLeft: 30, fontSize: 70, fontWeight: "200"}}>
                            100
                          </div>
                          <div style={{marginLeft: 30, right: 0, width: 227, color: "white", position: "absolute", fontSize: 13, display: "inline-flex", alignContent: "center", alignItems: 'center'}}>
                            0 OSOL
                          <div style={{color: "gray", marginLeft: 5, display: "inline"}}>
                            AVAILABLE
                          </div>
                          <div style={{display: "inline-flex", backgroundColor: "rgba(255, 255, 255, 0.15)", width: 50, marginLeft: 10, padding: 4}}>
                            <img style={{height: 20, color: "black", aspectRatio: 1, borderRadius: "50%"}} src='https://dd.dexscreener.com/ds-data/tokens/solana/AKzAhPPLMH5NG35kGbgkwtrTLeGyVrfCtApjnvqAATcm.png?key=f2f383'/>
                              OSOL
                          </div>
                        </div>
                      </div>
                  </Grid2>
                      <div style={{display: "flex", alignItems: "center", paddingLeft: 30, paddingRight: 30, width: "100%", justifyContent: "center"}}>
                          <div style={{width: "35%", height: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", fontSize: 14, color: "gray"}}/>
                          <b style={{color: "gray", fontWeight: "300", fontSize: "min(2vw, 30px)", marginLeft: 10, marginRight: 10, color: "rgba(255, 255, 255, 0.4)"}}>YOU WILL RECIEVE</b>
                          <div style={{width: "35%", height: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", fontSize: 14}}/>
                      </div>
                  <Grid2 item size={12} style={{border: "1px solid transparent", padding: 30, paddingTop: 10, height: "35%"}}>
                      {youRecieve.map((element, index) => {
                        return(
                          <div key={String(index) + element} style={{width: "max-content", marginRight: 5, height: 20, padding: 5, backgroundColor: "rgba(255, 255, 255, 0.15)", display: "inline-block", fontSize: 11}}>
                            <div style={{display: "inline-flex", alignItems: "center", height: "100%", alignContent: "center"}}>
                              <img style={{borderRadius: "50%", height: 20, marginRight: 10, aspectRatio: 1}} src="https://dd.dexscreener.com/ds-data/tokens/solana/2otVNpcHXn9MKeDk3Zby5uanF3s7tki4toaJ3PZcXaUd.png?key=1d5579"></img>
                              {element}
                            </div>
                          </div>
                        )
                      })}
                      <div style={{display: "block"}}>
                        <Button className='connectWalletButton' onClick={() => {setConnectWallet(!connectWallet)}} disableFocusRipple={true} disableRipple={true} style={{color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: 15, width: "100%", height: 70, fontSize: 15}}>
                          CONNECT WALLET TO REDEEM
                        </Button>
                        <div style={{color: "white", backgroundColor: "rgba(15, 15, 11, 11)", marginTop: 7, width: "100%", height: 60, fontSize: 15, color: "rgb(244, 236, 168)", fontSize: "min(2vw, 15px)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <svg width={"32"} height={"32"} viewBox="0 0 24 24" fill="none" style={{marginTop: "0.2rem", padding: 10}}><path d="M12 9V14" stroke="#FFF7AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5.00003C10.54 1.79003 13.46 1.79003 15.24 5.00003L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="#FFF7AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.995 17H12.004" stroke="#FFF7AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        WARNING: REDEEMING WILL RESULT IN LOSING UP TO 60% OF YOUR TOTAL BALANCE.
                        THIS ACTION IS IRREVERSIBLE. PLEASE ENSURE YOU UNDERSTAND THE IMPLICATIONS BEFORE PROCEEDING.
                        </div>
                      </div>
                  </Grid2>
              </Grid2>
          </Grid2>
          {isClient ? (
            <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", marginTop: 0}} size={12} item>
            <div style={{color: "white", marginTop: 50, marginLeft: 50, fontSize: 30, position: "absolute"}}>
                Assets Allocation
              </div>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div style={{position: "absolute", transform: "translateY(-0px)", width: "600px", height: "400px", backgroundImage: "url(https://www.osol.ai/dots-pattern.png)", backgroundPosition: "center center", backgroundBlendMode: "soft-light", opacity: 1, zIndex: 1}}></div>
              <PieChart style={{zIndex: 10000}} width={500} height={700}>
                <Pie style={{}}
                  data={data2}
                  cx={250}
                  cy={350}
                  innerRadius={100}
                  outerRadius={170}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{transform: "translate(-50%, -70px)", marginLeft: "50%", display: "flex", justifyContent: "center"}} />
              </PieChart>
            </div>
            </Grid2>
          ) : ("")}
          

          <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.2)", height: 750}} size={12} item>
              <div style={{width: "100%", color: "white", marginLeft: "4%", fontSize: 26, height: '20%', display: "flex", alignItems: "center"}}>
                Performance Comparison
                <Button onClick={() => {setDataRepresentation("ALL")}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 20, color: dataRepresentation == "ALL" ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10}}>ALL</Button>
                <Button onClick={() => {setDataRepresentation("1M")}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 50, color: dataRepresentation == "1M" ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10}}>1M</Button>

              </div>
              <div style={{width: "100%", height: '80%', display: "flex", marginTop: 50}}>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={dataRepresentation == "ALL" ? data3 : data4} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="0 0" vertical={false} horizontalPoints={[20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280]} stroke="rgba(255, 255, 255, 0.15)"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend wrapperStyle={{transform: "translateY(100px)"}} verticalAlign='bottom' height={36} iconType='square' style={{}}/>
                    <Line type="monotone" dataKey="SeriesA" stroke="#8884d8" strokeWidth={2}  dot={false}/>
                    <Line type="monotone" dataKey="SeriesB" stroke="#82ca9d" strokeWidth={2}  dot={false}/>
                    <Line type="monotone" dataKey="SeriesC" stroke="#ff7300" strokeWidth={2}  dot={false}/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
          </Grid2>
          <Grid2 style={{border: "1px solid rgba(255, 255, 255, 0.1)", height: 800, marginTop: 0}} size={12} item>
            <div style={{width: "100%", color: "white", marginLeft: "4%", fontSize: 26, height: '20%', display: "flex", alignItems: "center"}}>
                  <div style={{display: "block", width: "90"}}>
                    Net Asset Value (NAV) and Market Price
                    <div style={{backgroundColor: 'transparent', width: "100%", height: 50}}>
                      <Grid2 style={{width: "100%", height: "100%", backgroundColor: ""}} container>
                        <Grid2 style={{display: "block"}} size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}>
                          <div style={{height: "50%", color: "darkgray", fontSize: 12, display: "flex", alignItems: "center"}}>
                            <div style={{width: 10, whiteSpace: "pre", height: 10, backgroundColor: "lime", marginRight: 10}}></div>
                            NAV: <b style={{color: "white", fontWeight: "400"}}>$1,108,684.90</b>
                          </div>
                          <div style={{height: "50%", color: "darkgray", fontSize: 12, display: "flex", alignItems: "center"}}>
                            <div style={{width: 10, height: 10, backgroundColor: "lime", marginRight: 10}}></div>
                            NAV CHANGE: <b style={{color: "white", fontWeight: "400"}}>$6,400.18 / 0.58%</b>
                          </div>
                        </Grid2>
                        <Grid2 style={{display: "block"}} size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}>
                          <div style={{height: "50%", color: "darkgray", fontSize: 12, display: "flex", alignItems: "center"}}>
                            <div style={{width: 10, whiteSpace: "pre", height: 10, backgroundColor: "hotpink", marginRight: 10}}></div>
                            MARKET PRICE: <b style={{color: "white", fontWeight: "400"}}>$1,108,684.90</b>
                          </div>
                          <div style={{height: "50%", color: "darkgray", fontSize: 12, display: "flex", alignItems: "center"}}>
                            <div style={{width: 10, height: 10, backgroundColor: "hotpink", marginRight: 10}}></div>
                            MARKET PRICE CHANGE: <b style={{color: "white", fontWeight: "400"}}>$6,400.18 / 0.58%</b>
                          </div>
                        </Grid2>
                      </Grid2>
                    </div>
                  </div>
                </div>
                <div style={{color: "gray", marginLeft: "4%"}}>
                  MEDIAN BID-ASK SPREAD (30-DAY): 0.27%
                </div>
                <Button onClick={() => {setDataRepresentation2(1)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 20, color: dataRepresentation2 == 1 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>ALL</Button>
                <Button onClick={() => {setDataRepresentation2(2)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 50, color: dataRepresentation2 == 2 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>YTD</Button>
                <Button onClick={() => {setDataRepresentation2(3)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 80, color: dataRepresentation2 == 3 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>1Y</Button>
                <Button onClick={() => {setDataRepresentation2(4)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 110, color: dataRepresentation2 == 4 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>6M</Button>
                <Button onClick={() => {setDataRepresentation2(5)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 140, color: dataRepresentation2 == 5 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>3M</Button>
                <Button onClick={() => {setDataRepresentation2(6)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 170, color: dataRepresentation2 == 6 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>1M</Button>
                <Button onClick={() => {setDataRepresentation2(7)}} disableFocusRipple={true} disableRipple={true} style={{position: "absolute", right: 200, color: dataRepresentation2 == 7 ? "white" : "gray", width: 20, minWidth: 30, height: 20, fontSize: 10, margin: 5}}>7D</Button>
                <div style={{width: "100%", height: '80%', display: "block", marginTop: 100}}>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={dataRepresentation == "ALL" ? data3 : data4} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                      <CartesianGrid strokeDasharray="0 0" vertical={false} horizontalPoints={[20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280]} stroke="rgba(255, 255, 255, 0.15)"/>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="SeriesA" stroke="#8884d8" strokeWidth={2}  dot={false}/>
                      <Line type="monotone" dataKey="SeriesB" stroke="#82ca9d" strokeWidth={2}  dot={false}/>
                      <Line type="monotone" dataKey="SeriesC" stroke="#ff7300" strokeWidth={2}  dot={false}/>
                    </LineChart>
                  </ResponsiveContainer>
                  <div style={{color: "gray", textAlign: "center", fontSize: 12, padding: 10}}>30-DAY MEDIAN BID-ASK SPREAD: THE SPREAD IS CALCULATED BY (I) SAMPLING THE ETF'S NBBO AS OF THE END OF EACH 10-SECOND INTERVAL DURING EACH TRADING DAY OF THE LAST 30 CALENDAR DAYS; (II) DIVIDING THE DIFFERENCE BETWEEN EACH SUCH BID AND OFFER BY THE MIDPOINT OF THE NBBO; AND (III) IDENTIFYING THE MEDIAN OF THOSE VALUES.</div>
                </div>
          </Grid2>
          <Footer setModalActivation={setConnectWallet} modalActivation={connectWallet}/>
        </Grid2>
      </div>


    </main>
  );
  
}
