"use client";

import HoverScroll from "@/components/HoverScroll";
import TypingOnLoad from "@/components/TypingOnLoad";
import ScrollingNumber from "@/components/scrollingNumbers";
import { useState } from "react";
import { Button, Grid2, Box, Typography } from "@mui/material";
import HeaderNoFadeIn from "@/components/HeaderNoFadeIn";
import { Surface, BarChart, Bar, Area, Layer, PieChart, Pie, Cell, Rectangle, AreaChart, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import "../fadeinAnim.css"
import { FlightTakeoffSharp } from "@mui/icons-material";
import Footer from "@/components/Footer";

export default function detailsPage() {
    //<HoverScroll textValue="test one two three"/>
    const [watari, setWatari] = useState(11204001.454)
    const [watari2, setWatari2] = useState(11204001.454)
    
    const [assetViewed, setAssetViewed] = useState(null)
    const [connectWallet, setConnectWallet] = useState(false)
    const [selectionNum, setSelectionNum] = useState(null) // this is bad code, sorry......

    const data = [

  ];

  for (let i = 0; i < 365; i++) {
    data.push({name: String(i), value: 50 + Math.floor(Math.random() * 2)})
  }

  const DAOWallets = [
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "QWEQO23H...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "APOAW21A...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},
    {address: "J8NPO6CH...SJJU", holdings: "50,000,000", valueInUSD: "1,000,000", lastUpdated: "10 MINS AGO", asset: "OSOL", quantity: "50,000,000", assetImgSrc: "https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"},

  ]

  console.log(assetViewed)

  return (
    <>
      <HeaderNoFadeIn/>


      { connectWallet ?
          <div style={{position: "fixed", marginTop: -80, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", width: "100%", height: "100%", zIndex: 10000000000000000, backgroundColor: "rgba(0, 0, 0, 0.2)", backdropFilter: "blur(2px)"}}>
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
                    <img style={{marginLeft: 10}} src="data:image/png;base64,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" width={25} height={25}>
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

      <div style={{position: "relative", fontFamily: "Geist-Mono", width: "100%", height: 230, marginTop :80, display: "flex", justifyContent: "center"}}>
        <Grid2 style={{width: "92%", border: "1px solid rgba(255, 255, 255, 0.2)"}} container>
          <Grid2 style={{height: "50%", display: "flex", marginLeft: 20, fontSize: "3rem", fontWeight: "300", alignItems: "end", color: "white"}} size={12}>
            $OSOL Details
          </Grid2>
          <Grid2 
          style={{
            height: "50%",
            width: "75%",
            display: "flex",
            marginLeft: 20,
            fontSize: "0.85rem",
            fontWeight: "300",
            alignItems: "center",        // Keeps vertical centering
            justifyContent: "flex-start", // Aligns text to the left
            color: "gray",
            flexWrap: "wrap"            // Allows text to wrap naturally
          }} 
          size={12}
        >
          <span style={{ display: "inline"}}>
            OSOL operates as an index fund, tracking{" "}
            <span style={{ display: "inline", color: "white"}}>Solana's top 100 AI projects</span>. 
            Think of OSOL as the S&P500 of Solana-based AI projects, including AI 
            infrastructure projects, AI agents, and AI meme tokens.
          </span>
        </Grid2>
        </Grid2>
      </div>
      <div style={{position: "relative", fontFamily: "Geist-Mono", width: "100%", height: 430, display: "flex", justifyContent: "center"}}>
        <Grid2 style={{width: "92%", border: "1px solid rgba(255, 255, 255, 0.2)"}} container>
          <Grid2 style={{height: "12%", display: "flex", marginLeft: 20, fontSize: "0.85rem", fontWeight: "300", alignItems: "center", color: "gray"}} size={12}>
            TOTAL COINS MINTED
            <div style={{width: 7, height: 7, borderRadius: "50%", backgroundColor: "rgba(150, 255, 150, 1)", marginLeft: 15}}></div>
            <div style={{marginLeft: 5, color: "rgba(150, 255, 150, 1)"}}>LIVE</div>
          </Grid2>
          <Grid2 style={{height: "18%", display: "flex", color: "white", fontSize: 60, alignItems: "center", marginLeft: 20}} size={12}> 
            999,998,233
          </Grid2>
          <Grid2 style={{height: "70%"}} size={12}> 
            <ResponsiveContainer style={{width: "95%"}}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >

                <Tooltip />
                <Bar 
                  dataKey="value" 
                  fill="rgb(34, 34, 34)" // Dark gray color
                />
              </BarChart>
            </ResponsiveContainer>
          </Grid2>
        </Grid2>
      </div>
      <div style={{position: "relative", fontFamily: "Geist-Mono", width: "100%", height: 210, display: "flex", justifyContent: "center"}}>
        <Grid2 style={{width: "92%"}} container>
          
        <Grid2 style={{width: "33.33%", border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} container>
              
              <Grid2 style={{display: "flex", alignItems: "center"}} container>

                <Grid2 style={{color: "gray", marginLeft: "10%"}} size={12}>
                  CIRCULATING<br/>
                  SUPPLY VALUE
                </Grid2>
                <Grid2 style={{color: "white", width: "58%", marginLeft: 45}} size={12}>
                  <ScrollingNumber fontSize="min(30px, 3vw)" separationWidth="min(18px, 1.6vw)" currentValue={26455632} updateValue={26455632}/>
                </Grid2>

              </Grid2>

          </Grid2>
          <Grid2 style={{width: "33.33%", border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} container>
              
              <Grid2 style={{display: "flex", alignItems: "center"}} container>

                <Grid2 style={{color: "gray", marginLeft: "10%"}} size={12}>
                  TOTAL<br/>
                  ASSETS VALUE
                </Grid2>
                <Grid2 style={{color: "white", width: "58%", marginLeft: 45}} size={12}>
                  <ScrollingNumber fontSize="min(30px, 3vw)" separationWidth="min(18px, 1.6vw)" currentValue={26455632} updateValue={26455632}/>
                </Grid2>

              </Grid2>

          </Grid2>
          <Grid2 style={{width: "33.33%", border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} container>
              
              <Grid2 style={{display: "flex", alignItems: "center"}} container>

                <Grid2 style={{color: "gray", marginLeft: "10%"}} size={12}>
                  RESERVE<br/>
                  RATIO
                </Grid2>
                <Grid2 style={{color: "white", width: "58%", marginLeft: 45}} size={12}>
                  <ScrollingNumber fontSize="min(30px, 3vw)" separationWidth="min(18px, 1.6vw)" currentValue={26455632} updateValue={26455632}/>
                </Grid2>

              </Grid2>

          </Grid2>
      
        </Grid2>
      </div>
      <div style={{position: "relative", fontFamily: "Geist-Mono", width: "100%", height: "max-content", minHeight: 200, display: "flex", justifyContent: "center"}}>
            <Grid2 style={{color: "white", width: "100%", display: "flex", justifyContent: "center", height: "100%"}} container>
                <div style={{width: "92%", border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}}>
                  <Grid2 style={{fontSize: 60, marginLeft: "2.5%", height: "10%", display: "flex", alignItems: "center"}} size={12}>
                      DAO Wallets
                  </Grid2>
                  <Grid2 style={{height: "10%", display: "flex", alignItems: "center", marginLeft: '2.5%', marginBottom: 30}} size={12}>
                    <b onClick={() => {setAssetViewed(null)}} style={{fontWeight: "400", cursor: "pointer", userSelect: "none"}}>ALL WALLETS/</b> ... {assetViewed == null ? "" : <b style={{color: "gray", fontWeight: "300"}}>[{DAOWallets[assetViewed]["address"]}] Assets</b>}
                  </Grid2>
                  <Grid2 style={{height: "80%", display: "flex", justifyContent: "center"}} size={12}>
                    <div style={{width: "95%", height: "max-content"}}>
                    {assetViewed === null ? (
                    // Wallets view - when assetViewed is null
                    <Grid2 container direction="column" style={{ height: "100%" }}>
                      <Grid2 size={12} style={{ height: "5%"}}>
                        <Grid2 container style={{ width: "100%" }}>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={2.4}>
                            WALLET ADDRESS
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={2.4}>
                            HOLDINGS
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={2.4}>
                            VALUE IN USD
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={2.4}>
                            LAST UPDATED
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={2.4}>
                          </Grid2>
                        </Grid2>
                      </Grid2>

                      <Grid2 size={12} style={{ height: "95%"}}>
                        {DAOWallets.map((element, index) => (
                          <Grid2
                            key={`wallet-row-${index}`}
                            container
                            style={{
                              width: "100%", // Match header width
                              height: 39,
                              backgroundColor: index % 2 ? "black" : "rgb(15, 15, 15)",
                            }}
                          >
                            <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={2.4}>
                              {element.address}
                            </Grid2>
                            <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={2.4}>
                            <svg width={14} height={14} style={{padding: 5}} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.83334 13.2219C10.4232 13.2219 13.3333 10.3117 13.3333 6.72186C13.3333 3.13201 10.4232 0.221863 6.83334 0.221863C3.24349 0.221863 0.333343 3.13201 0.333344 6.72186C0.333343 10.3117 3.24349 13.2219 6.83334 13.2219ZM6.33235 11.9049C9.00516 13.2018 12.065 11.1191 11.839 8.15694L11.5638 4.55163C11.3379 1.59058 7.99774 -0.028677 5.55099 1.63667L2.57305 3.66356C0.126292 5.32891 0.407496 9.03017 3.07927 10.3265L6.33235 11.9049Z" fill="white"></path></svg>
                            {element.holdings}
                            </Grid2>
                            <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={2.4}>
                              {element.valueInUSD}
                            </Grid2>
                            <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={2.4}>
                              {element.lastUpdated}
                            </Grid2>
                            <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={2.4}>
                              <div
                                onClick={() => setAssetViewed(index)}
                                className="viewAssets"
                                style={{ height: "100%", width: "100%", fontSize: 14, fontWeight: "400", display: "flex", alignItems: "center"}}
                              >
                                VIEW ASSETS <span>→</span>
                              </div>
                            </Grid2>
                          </Grid2>
                        ))}
                      </Grid2>
                    </Grid2>
                  ) : (
                    // Asset details view - when assetViewed has an index
                    <Grid2 container direction="column" style={{ height: "100%"}}>
                      <Grid2 size={12} style={{ height: "5%"}}>
                        <Grid2 container style={{ width: "100%" }}>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "start" }} size={4}>
                            ASSET
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={4}>
                            QUANTITY
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center" }} size={4}>
                            VALUE IN USD
                          </Grid2>
                        </Grid2>
                      </Grid2>

                      <Grid2 size={12} style={{ height: "95%"}}>
                        <Grid2
                          key={`asset-detail-${assetViewed}`}
                          container
                          style={{
                            width: "100%", // Match header width
                            height: 39,
                            backgroundColor: "rgb(15, 15, 15)",
                          }}
                        >
                          <Grid2 style={{ paddingLeft: 10, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "start", alignItems: "center", fontWeight: "normal", color: "white"}} size={4}>
                            <img style={{width: 20, height: 20, padding: 5, borderRadius: "50%"}} src={"https://gateway.pinata.cloud/ipfs/QmQ9wHkApZ8r2FKXAYA6CCCeuYFrsVyHZkfHjKaFSsmv1F"}></img>
                            {DAOWallets[assetViewed].asset}
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={4}>
                            {DAOWallets[assetViewed].quantity}
                          </Grid2>
                          <Grid2 style={{ paddingLeft: 5, color: "darkgray", fontWeight: "300", display: "flex", justifyContent: "center", alignItems: "center"}} size={4}>
                            {DAOWallets[assetViewed].valueInUSD}
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  )}
                      
                    
                    </div>
                  </Grid2>
                </div>
            <Grid2/>
        </Grid2>
      </div>
      <div style={{position: "relative", fontFamily: "Geist-Mono", width: "100%", height: 800, marginTop: 20, display: "flex", justifyContent: "center"}}>
        <Grid2 style={{width: "92%", border: "1px solid rgba(255, 255, 255, 0.2)", height: "100%"}} container>

          <Grid2 style={{color: "white", fontSize: 45, height: "20%", display: "flex", width: "100%", alignItems: "center"}} size={12}>
              <div style={{marginLeft: "1%"}}>Latest Proposals</div>
              <Button disableRipple={true} focusRipple={false} style={{backgroundColor: "rgba(10, 10, 10, 1)", border: "1px solid rgba(255, 255, 255, 0.5)", color: "rgba(255, 255, 255, 1)", width: 220, height: 50, right: '5%', position: "absolute", fontWeight: "200", fontFamily: "Geist-Mono"}}>Voting Portal<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: "flex", alignItems: "center", marginBottom: "0.2rem"}}><path d="M2.5 0.721924V1.72192H8.795L0.5 10.0169L1.205 10.7219L9.5 2.42692V8.72192H10.5V0.721924H2.5Z" fill="#6E6E6E"></path></svg></Button>
          </Grid2>
          {/* top proposals area above */}
          <Grid2 style={{height: "80%", width: "100%"}} size={12}>
            <Grid2 style={{width: "100%", height: "90%"}} container>
              
              <Grid2 style={{display: "flex", justifyContent: "center"}} size={4}>
              <Box className="eventHover" style={{
                height: "100%", 
                width: "95%", 
                border: "1px solid rgba(255, 255, 255, 0.2)", 
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}>
                <div style={{
                  color: "gray", 
                  fontFamily: "Geist-Mono", 
                  display: "flex", 
                  alignItems: "center", 
                  padding: 15,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0
                }}>
                  COMPLETED
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{display: "flex", alignItems: "center", marginBottom: "0.2rem", marginLeft: "auto"}}>
                    <path d="M2.5 0.721924V1.72192H8.795L0.5 10.0169L1.205 10.7219L9.5 2.42692V8.72192H10.5V0.721924H2.5Z" fill="#6E6E6E"></path>
                  </svg>
                </div>
                
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "15px",
                }}>
                  <div style={{marginBottom: 5}}>
                    <b style={{fontSize: "16px", display: "block", fontSize: 30}}>Add $FLAME to OSOL index</b>
                  </div>
                  <div>
                    <span style={{color: "gray", fontSize: "14px"}}>
                      Flame is your companions in the latent space. do you approve adding it to the OSOL index?
                    </span>
                  </div>
                  <div style={{marginTop: 2}}>
                    <span style={{color: "gray", fontSize: "14px"}}>
                      https://flame.line/...
                    </span>
                  </div>
                </div>
              </Box>
            </Grid2>
              
              <Grid2 style={{display: "flex", justifyContent: "center"}} size={4}>
              <Box className="eventHover" style={{
                height: "100%", 
                width: "95%", 
                border: "1px solid rgba(255, 255, 255, 0.2)", 
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}>
                <div style={{
                  color: "gray", 
                  fontFamily: "Geist-Mono", 
                  display: "flex", 
                  alignItems: "center", 
                  padding: 15,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0
                }}>
                  COMPLETED
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{display: "flex", alignItems: "center", marginBottom: "0.2rem", marginLeft: "auto"}}>
                    <path d="M2.5 0.721924V1.72192H8.795L0.5 10.0169L1.205 10.7219L9.5 2.42692V8.72192H10.5V0.721924H2.5Z" fill="#6E6E6E"></path>
                  </svg>
                </div>
                
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "15px",
                }}>
                  <div style={{marginBottom: 5}}>
                    <b style={{fontSize: "16px", display: "block", fontSize: 30}}>Add $FLAME to OSOL index</b>
                  </div>
                  <div>
                    <span style={{color: "gray", fontSize: "14px"}}>
                      Flame is your companions in the latent space. do you approve adding it to the OSOL index?
                    </span>
                  </div>
                  <div style={{marginTop: 2}}>
                    <span style={{color: "gray", fontSize: "14px"}}>
                      https://flame.line/...
                    </span>
                  </div>
                </div>
              </Box>
            </Grid2>

              <Grid2 style={{display: "flex", justifyContent: "center"}} size={4}>
              <Box className="eventHover" style={{
                height: "100%", 
                width: "95%", 
                border: "1px solid rgba(255, 255, 255, 0.2)", 
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}>
                <div style={{
                  color: "gray", 
                  fontFamily: "Geist-Mono", 
                  display: "flex", 
                  alignItems: "center", 
                  padding: 15,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0
                }}>
                  COMPLETED
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{display: "flex", alignItems: "center", marginBottom: "0.2rem", marginLeft: "auto"}}>
                    <path d="M2.5 0.721924V1.72192H8.795L0.5 10.0169L1.205 10.7219L9.5 2.42692V8.72192H10.5V0.721924H2.5Z" fill="#6E6E6E"></path>
                  </svg>
                </div>
                
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "15px",
                }}>
                  <div style={{marginBottom: 5}}>
                    <b style={{fontSize: "16px", display: "block", fontSize: 30}}>Add $FLAME to OSOL index</b>
                  </div>
                  <div>
                    <span style={{color: "gray", fontSize: "14px"}}>
                      Flame is your companions in the latent space. do you approve adding it to the OSOL index?
                    </span>
                  </div>
                  <div style={{marginTop: 2}}>
                    <span style={{color: "gray", fontSize: "14px"}}>
                      https://flame.line/...
                    </span>
                  </div>
                </div>
              </Box>
            </Grid2>

            </Grid2>
          </Grid2>
        </Grid2>
      </div>

      <div style={{width: "92%", marginLeft: "50%", transform: 'translateX(-50%)'}}>
        <Footer setModalActivation={setConnectWallet} modalActivation={connectWallet}/>
      </div>
    </>
  );
}