"use client";

import { Grid2, Button, colors, IconButton } from "@mui/material"
import HoverScroll from "./HoverScroll";
import "../app/fadeinAnim.css"
import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import MenuBook from "@mui/icons-material/MenuBook";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // This will only run in the browser after component mounts
        setWindowWidth(window.innerWidth);
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener("resize", handleResize);
        
        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{top: 0, left: 0}}>
            <div className="fadeInClassLeftAngle" style={{width: "100%", height: "80px", background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)", position: "fixed", zIndex: 10000, top: 0, left: 0}}>
                    
                    <a href="/">
                        <div style={{marginLeft: windowWidth < 450 ? 15 : 40, marginTop: 28}}>
                            <svg style={{scale: 1.3}} width={ windowWidth < 450 ? "35" : windowWidth < 800 ? "40" : "72"} height={"19"} viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.4586 23.3437H26.3286V20.1604H29.4586V23.3437Z" fill="white"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.6698 23.6712C18.1149 23.6712 23.3397 18.3722 23.3397 11.8356C23.3397 5.29897 18.1149 2.1471e-07 11.6698 0C5.22477 -4.62851e-08 -3.29869e-07 5.29897 0 11.8356C-4.96947e-07 18.3722 5.22477 23.6712 11.6698 23.6712ZM10.7704 21.2732C15.569 23.6346 21.0626 19.8424 20.6568 14.4486L20.1628 7.88389C19.7571 2.49223 13.7604 -0.456197 9.36755 2.57616L4.02107 6.26684C-0.371732 9.2992 0.133131 16.0387 4.92992 18.3992L10.7704 21.2732Z" fill="white"></path>
                                <path d="M79.413 23.32C78.165 23.352 77.461 22.616 77.461 21.4V0.440002H80.085V21.08L91.445 20.76V23L79.413 23.32Z" fill="white"></path>
                                <path d="M53.6723 11.704C53.6723 5.144 57.5763 0.119995 64.2323 0.119995C70.8243 0.119995 74.7283 5.144 74.7283 11.704C74.7283 18.296 70.8243 23.32 64.2323 23.32C57.5763 23.32 53.6723 18.296 53.6723 11.704ZM56.2963 11.704C56.2963 17.112 58.8883 21.08 64.2323 21.08C69.5443 21.08 72.1043 17.112 72.1043 11.704C72.1043 6.328 69.5443 2.35999 64.2323 2.35999C58.8883 2.35999 56.2963 6.328 56.2963 11.704Z" fill="white"></path>
                                <path d="M52.256 17.304C52.256 20.664 50.24 23.32 43.584 23.32C35.712 23.32 33.376 19.832 33.376 14.552H36C36 19.896 38.848 21.08 43.584 21.08C47.424 21.08 49.632 20.152 49.632 17.432C49.632 14.008 45.664 13.304 42.08 12.248C37.632 10.904 34.4 9.688 34.4 5.688C34.4 2.23199 36.832 0.119995 42.4 0.119995C49.056 0.119995 51.328 4.184 51.328 7.864H48.704C48.704 4.02399 45.856 2.35999 42.4 2.35999C39.296 2.35999 37.024 3.12799 37.024 5.62399C37.024 7.992 39.008 8.856 42.72 10.008C47.136 11.384 52.256 12.6 52.256 17.304Z" fill="white"></path>
                            </svg>
                            <svg width="4" height="12" viewBox="0 0 4 1 2" style={{fill: "none", height: "0.775rem", width: "auto"}}>
                                <path d="M3.26282 0.5H2.26282C1.15825 0.5 0.262817 1.39543 0.262817 2.5V9.5C0.262817 10.6046 1.15825 11.5 2.26282 11.5H3.26282" stroke="currentColor" strokeWidth="0.5"></path>
                            </svg>
                        </div>
                    </a>

                    <div className="fadeInClassLeftAngle" style={{cursor: "pointer", userSelect: "none", position: "absolute", marginLeft: windowWidth < 450 ? 70 : windowWidth < 800 ? 110 : 170, marginTop: -24, scale: windowWidth < 450 ? 0.75 : 1}}>
                        <a href="/details">    
                            <HoverScroll textValue={"DETAILS"}/>
                        </a>
                    
                    </div>

                    <div className="fadeInClassLeftAngle" style={{cursor: "pointer", userSelect: "none", position: "absolute", marginLeft: windowWidth < 450 ? 115 : windowWidth < 800 ? 180 : 270, marginTop: -24, scale: windowWidth < 450 ? 0.75 : 1}}>
                        <a href="/tokenomics">    
                            <HoverScroll textValue={"TOKENOMICS"}/>
                        </a>
                    </div>

                    <div className="fadeInClassLeftAngle" style={{cursor: "pointer", userSelect: "none", marginLeft: windowWidth < 450 ? 160 : windowWidth < 800 ? 270 : 390, marginTop: -24, postiion: "absolute", scale: windowWidth < 450 ? 0.75 : 1}}>
                        <HoverScroll textValue={"DOCUMENTATION"}/>
                    </div>

                    { windowWidth > 700 ? (
                        <>
                            <Button className="fadeInClassLeftAngle" disableFocusRipple={true} disableRipple={true}  style={{position: "absolute", right: 32,  backgroundColor: "white", borderRadius: 2, height: "32px", width: "140px", color: "black", backgroundColor: "white", fontFamily: "Geist-Mono", fontSize: "11px"}}>
                                connect wallet
                            </Button>

                            <Button className="fadeInClassLeftAngle" disableFocusRipple={true} disableRipple={true}  style={{position: "absolute", right: 180, color: "rgb(14, 14, 14)", backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", borderRadius: 2, height: "30px", width: "120px", fontFamily: "Geist-Mono", fontSize: "11px"}}>
                                join community
                            </Button>
                        </>
                        ) : 
                        <>
                            <IconButton onClick={() => {setOpen(true)}} focusRipple={false} disableRipple={true} style={{width: 25, height: 25, right: 30, top: 25, position: "fixed"}}>
                                <Menu style={{color: "lightgray", }}/>
                            </IconButton>
                        </>
                    }

                    <Dialog PaperProps={{sx: {backgroundColor: "rgb(10, 10, 10)"}}} open={open} onClose={() => setOpen(false)}>
                        <DialogContent>
                        <div style={{width: 200, height: 100, display: "block", justifyContent: "center"}}>
                            <Button disableFocusRipple={true} disableRipple={true}  style={{width: "95%", backgroundColor: "white", borderRadius: 2, height: "32px", color: "black", backgroundColor: "white", fontFamily: "Geist-Mono", fontSize: "11px", marginTop: 20}}>
                                connect wallet
                            </Button>

                            <Button disableFocusRipple={true} disableRipple={true}  style={{width: "95%", color: "rgb(14, 14, 14)", backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white", borderRadius: 2, height: "30px", marginTop: 20, fontFamily: "Geist-Mono", fontSize: "11px"}}>
                                join community
                            </Button>
                        </div>
                        </DialogContent>
                        <DialogActions>
                        <Button style={{backgroundColor: "rgb(32, 32, 32)", color: "gray", fontFamily: "Geist-Mono"}} onClick={() => setOpen(false)}>Close</Button>
                        </DialogActions>
                    </Dialog>

            </div>
        </div>
    );
};