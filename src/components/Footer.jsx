"use client";

import { Button } from "@mui/material";
import { Grid, Grid2 } from "@mui/material";
import { useState, useEffect } from 'react';
import ScrollingNumber from "./scrollingNumbers";
import HoverScroll from "./HoverScroll";
import "../app/fadeinAnim.css"

export default function Footer({setModalActivation = () => {null}, modalActivation = false}) {

    const [copyButtonClicked, setCopyButtonClicked] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    let address = "2pAOIpcHXn9MKeJa3283y5uanFjaoeHA82toaJ3PZcXaa"


    const writeAddress = () => {
        navigator.clipboard.writeText(address).then(() => {
          console.log("copied")
        }).catch(() => {
          console.log("error copying")
        })
    }

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
        <>
            <div style={{border: "1px solid rgba(255, 255, 255, 0.1)", width: "100%", height: 600}}>
                <div style={{display: "flex", alignItems: "end", justifyContent: "center", color: "white", height: "30%", width: "100%", fontSize: 70, fontFamily: "Geist-Mono", fontWeight: "300"}}>
                    Buy $OSOL
                </div>
                <div style={{height: "15%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="connectWalletButtonFooter" focusRipple={false} disableFocusRipple={false} onClick={() => {setModalActivation(!modalActivation)}} style={{color: "black", backgroundColor: "white"}}>
                        CONNECT WALLET
                    </Button>
                </div>
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
                        <b style={{fontWeight: "normal", color: "white", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", padding: 20}}>{address}</b>
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

                <div className="disclaimerText" style={{}}>
                Disclaimer: Cryptocurrencies are highly speculative and involve significant risks. The value of OSOL tokens may fluctuate rapidly, and
                participants should be fully aware of the risks involved in cryptocurrency investments before participating. OSOL is not available to
                U.S. persons or entities, as defined under U.S. securities laws and regulations. It is the responsibility of participants to ensure that
                their jurisdiction allows participation before getting involved.
                </div>
            </div>
            
            <div style={{border: "1px solid rgba(255, 255, 255, 0.1)", width: "100%", height: 600}}>
                <div style={{width: "100%", height: "40%"}}>
                    <Grid2 style={{width: "100%", height: "100%"}} container>
                        <Grid2 style={{height: "100%"}} size={8}>
                            <div style={{height: "100%", height: "100%", display: "flex", justifyContent: "left", marginLeft: "10%", alignItems: "center", alignContent: "center"}}>
                                <Grid2 style={{width: "min(80%, 400px)", height: 180}} container>
                                    <Grid2 size={12}>
                                        <div style={{width: "100%", color: "white", height: 20, display: "flex", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.06)"}}>
                                            <div style={{height: 20, width: 20, backgroundColor: "rgba(100, 255, 100, 0.2)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                <div style={{backgroundColor: "green", borderRadius: "50%", width: 5, height: 5, transform: "translateX(-1px)"}}>
                                                </div>
                                            </div>
                                            <div style={{marginLeft: 5, color: "gray", fontSize: 13}}>
                                                // Live Updates
                                            </div>
                                        </div>
                                    </Grid2>
                                    <Grid2 size={12}>
                                        <div style={{width: "100%", height: 160, backgroundColor: "rgba(255, 255, 255, 0.07)", marginTop: 5}}>
                                            <Grid2 style={{display: "block"}} container>
                                                <Grid2 size={12} style={{width: "100%", height: 32, display: "flex", alignItems: "center", color: "gray"}}>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%"}}>
                                                        MARKET CAP: 
                                                    </div>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%", color: "white", display: "flex", alignItems: "center", alignContent: "center", height: 20, transform: "translate(-20px, 25px)"}}>
                                                        <ScrollingNumber dividerWidth="6px" style={{}} fontSize="14px" separationWidth="9px" currentValue={1000} updateValue={1000}/>
                                                    </div>
                                                </Grid2>
                                                <Grid2 size={12} style={{width: "100%", height: 32, display: "flex", alignItems: "center", color: "gray"}}>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%"}}>
                                                        PRICE:
                                                    </div>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%", color: "white", display: "flex", alignItems: "center", alignContent: "center", height: 20, transform: "translate(-20px, 25px)"}}>
                                                        <ScrollingNumber dividerWidth="6px" style={{}} fontSize="14px" separationWidth="9px" currentValue={1000} updateValue={1000}/>
                                                    </div>
                                                </Grid2>
                                                <Grid2 size={12} style={{width: "100%", height: 32, display: "flex", alignItems: "center", color: "gray"}}>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%"}}>
                                                        24H VOLUME: 
                                                    </div>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%", color: "white", display: "flex", alignItems: "center", alignContent: "center", height: 20, transform: "translate(-20px, 25px)"}}>
                                                        <ScrollingNumber dividerWidth="6px" style={{}} fontSize="14px" separationWidth="9px" currentValue={1000} updateValue={1000}/>
                                                    </div>
                                                </Grid2>
                                                <Grid2 size={12} style={{width: "100%", height: 32, display: "flex", alignItems: "center", color: "gray"}}>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%"}}>
                                                        OSOL.D:
                                                    </div>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%", color: "white"}}>
                                                        1.04%
                                                    </div>
                                                </Grid2>
                                                <Grid2 size={12} style={{width: "100%", height: 32, display: "flex", alignItems: "center", color: "gray"}}>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%"}}>
                                                        HOLDERS:
                                                    </div>
                                                    <div style={{fontSize: 12, marginLeft: 5, width: "50%", color: "white"}}>
                                                        52,101
                                                    </div>
                                                </Grid2>
                                            </Grid2>
                                        </div>
                                    </Grid2>
                                </Grid2>
                            </div>
                        </Grid2>
                        <Grid2 style={{height: "100%"}} size={4}>
                            <div style={{height: "100%", height: "100%"}}>
                                {windowWidth > 712 ? 
                                    (
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                                            <svg style={{width: "min(75%, 300px)"}} viewBox="0 0 526 183" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M169.449 134.119H151.444V115.83H169.449V134.119Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M67.126 136C104.199 136 134.252 105.556 134.252 68.0005C134.252 30.4451 104.199 0.000489515 67.126 0.000488281C30.0533 0.000488015 -1.89743e-06 30.4451 0 68.0005C-2.85848e-06 105.556 30.0533 136.001 67.126 136ZM61.9522 122.223C89.5545 135.791 121.154 114.003 118.82 83.0135L115.978 45.2965C113.645 14.3193 79.1508 -2.62054 53.883 14.8015L23.1296 36.0059C-2.13824 53.428 0.765785 92.1489 28.3573 105.711L61.9522 122.223Z" fill="white"></path><path d="M456.791 133.983C449.612 134.167 445.563 129.938 445.563 122.952V2.52843H460.656V121.113L526 119.275V132.144L456.791 133.983Z" fill="white"></path><path d="M308.728 67.2445C308.728 29.5547 331.184 0.689907 369.47 0.689907C407.388 0.689907 429.844 29.5547 429.844 67.2445C429.844 105.118 407.388 133.983 369.47 133.983C331.184 133.983 308.728 105.118 308.728 67.2445ZM323.821 67.2445C323.821 98.3155 338.731 121.113 369.47 121.113C400.025 121.113 414.75 98.3155 414.75 67.2445C414.75 36.3573 400.025 13.5596 369.47 13.5596C338.731 13.5596 323.821 36.3573 323.821 67.2445Z" fill="white"></path><path d="M300.581 99.4187C300.581 118.723 288.985 133.983 250.699 133.983C205.419 133.983 191.982 113.943 191.982 83.6074H207.075C207.075 114.311 223.457 121.113 250.699 121.113C272.787 121.113 285.488 115.782 285.488 100.154C285.488 80.4819 262.664 76.4371 242.048 70.37C216.463 62.6482 197.872 55.6618 197.872 32.6802C197.872 12.8242 211.861 0.689907 243.889 0.689907C282.175 0.689907 295.243 24.0392 295.243 45.1822H280.15C280.15 23.1199 263.768 13.5596 243.889 13.5596C226.034 13.5596 212.965 17.972 212.965 32.3125C212.965 45.9176 224.378 50.8816 245.729 57.5003C271.131 65.406 300.581 72.3924 300.581 99.4187Z" fill="white"></path><path d="M14.568 161.08V162.424H8.64V178H7.056V162.424H1.104V161.08H14.568ZM29.4909 161.08H31.0749V178H29.4909V170.296H19.2189V178H17.6349V161.08H19.2189V168.952H29.4909V161.08ZM35.0865 178V161.08H45.2385V162.424H36.6705V168.856H44.0385V170.2H36.6705V176.656H45.2385V178H35.0865ZM70.9301 173.8C70.9301 176.248 69.5381 178.24 64.5701 178.24C58.7141 178.24 57.0821 175.6 57.0821 171.712H58.6661C58.6661 175.984 60.9701 176.896 64.5701 176.896C67.5221 176.896 69.3461 176.176 69.3461 173.92C69.3461 171.088 66.1781 170.56 63.4421 169.768C60.1541 168.808 57.8501 167.896 57.8501 164.968C57.8501 162.424 59.5781 160.84 63.7061 160.84C68.6501 160.84 70.2341 163.96 70.2341 166.6H68.6501C68.6501 163.576 66.3941 162.184 63.7061 162.184C61.2581 162.184 59.4341 162.808 59.4341 164.872C59.4341 166.864 61.1381 167.56 63.9221 168.424C67.2821 169.456 70.9301 170.272 70.9301 173.8ZM93.1768 178.408L91.9288 179.224L89.3368 175.936C87.5848 177.688 85.2088 178.672 82.2808 178.672C77.8888 178.672 74.6968 176.2 74.6968 172.312C74.6968 168.784 77.0968 166.6 79.9288 166.6C81.2968 166.6 82.2088 167.296 82.5928 167.776V167.296L78.5368 162.136L78.5128 161.08H91.0408V162.424H80.6488L89.3608 173.56C90.5608 171.64 91.1848 169.12 91.1848 166.12H92.7688C92.7688 169.624 91.9288 172.6 90.3448 174.784L93.1768 178.408ZM82.2808 177.328C84.8728 177.328 86.9608 176.416 88.4488 174.784L84.8968 170.272C83.5288 168.544 82.4248 167.944 80.5528 167.944C77.9848 167.944 76.2808 169.528 76.2808 172.312C76.2808 175.456 78.7288 177.328 82.2808 177.328ZM102.138 161.08C106.41 161.08 109.026 162.256 109.026 166.528C109.026 170.824 106.41 172 102.138 172H99.258V178H97.674V161.08H102.138ZM102.138 170.656C105.138 170.656 107.442 170.08 107.442 166.528C107.442 163 105.138 162.424 102.138 162.424H99.258V170.656H102.138ZM112.325 168.76C115.565 167.44 116.645 164.32 116.717 161.08H120.005V178H118.421V162.76L118.661 161.56H118.181C117.941 165.184 116.813 168.76 112.805 170.08L112.325 168.76ZM131.283 160.84C135.915 160.84 138.291 164.608 138.291 169.528C138.291 174.472 135.915 178.24 131.283 178.24C126.627 178.24 124.251 174.472 124.251 169.528C124.251 164.608 126.627 160.84 131.283 160.84ZM131.283 162.184C127.611 162.184 125.835 165.328 125.835 169.528C125.835 171.256 126.123 172.792 126.723 174.016L134.931 163.72C134.043 162.736 132.843 162.184 131.283 162.184ZM131.283 176.896C134.955 176.896 136.707 173.752 136.707 169.528C136.707 167.8 136.419 166.264 135.819 165.04L127.611 175.336C128.499 176.32 129.723 176.896 131.283 176.896ZM148.618 160.84C153.25 160.84 155.626 164.608 155.626 169.528C155.626 174.472 153.25 178.24 148.618 178.24C143.962 178.24 141.586 174.472 141.586 169.528C141.586 164.608 143.962 160.84 148.618 160.84ZM148.618 162.184C144.946 162.184 143.17 165.328 143.17 169.528C143.17 171.256 143.458 172.792 144.058 174.016L152.266 163.72C151.378 162.736 150.178 162.184 148.618 162.184ZM148.618 176.896C152.29 176.896 154.042 173.752 154.042 169.528C154.042 167.8 153.754 166.264 153.154 165.04L144.946 175.336C145.834 176.32 147.058 176.896 148.618 176.896ZM168.192 169.528C168.192 164.608 171.048 160.84 175.944 160.84C180.816 160.84 183.672 164.608 183.672 169.528C183.672 174.472 180.816 178.24 175.944 178.24C171.048 178.24 168.192 174.472 168.192 169.528ZM169.776 169.528C169.776 173.752 171.792 176.896 175.944 176.896C180.096 176.896 182.088 173.752 182.088 169.528C182.088 165.328 180.096 162.184 175.944 162.184C171.792 162.184 169.776 165.328 169.776 169.528ZM187.219 178V161.08H198.091V162.424H188.803V169.552L196.867 169.072V170.44L188.803 170.92V178H187.219ZM223.789 173.8C223.789 176.248 222.397 178.24 217.429 178.24C211.573 178.24 209.941 175.6 209.941 171.712H211.525C211.525 175.984 213.829 176.896 217.429 176.896C220.381 176.896 222.205 176.176 222.205 173.92C222.205 171.088 219.037 170.56 216.301 169.768C213.013 168.808 210.709 167.896 210.709 164.968C210.709 162.424 212.437 160.84 216.565 160.84C221.509 160.84 223.093 163.96 223.093 166.6H221.509C221.509 163.576 219.253 162.184 216.565 162.184C214.117 162.184 212.293 162.808 212.293 164.872C212.293 166.864 213.997 167.56 216.781 168.424C220.141 169.456 223.789 170.272 223.789 173.8ZM226.35 169.528C226.35 164.608 229.206 160.84 234.102 160.84C238.974 160.84 241.83 164.608 241.83 169.528C241.83 174.472 238.974 178.24 234.102 178.24C229.206 178.24 226.35 174.472 226.35 169.528ZM227.934 169.528C227.934 173.752 229.95 176.896 234.102 176.896C238.254 176.896 240.246 173.752 240.246 169.528C240.246 165.328 238.254 162.184 234.102 162.184C229.95 162.184 227.934 165.328 227.934 169.528ZM246.697 178.24C245.857 178.264 245.377 177.76 245.377 176.92V161.08H246.961V176.896L255.529 176.656V178L246.697 178.24ZM270.701 178L268.445 171.136H261.677L259.421 178H257.861L263.429 161.08H266.693L272.261 178H270.701ZM262.109 169.792H268.013L265.301 161.56H264.821L262.109 169.792ZM275.311 178V161.08H278.551L287.647 177.52H288.127L287.887 176.32V161.08H289.471V178H286.231L277.135 161.56H276.655L276.895 162.76V178H275.311ZM305.37 178L303.114 171.136H296.346L294.09 178H292.53L298.098 161.08H301.362L306.93 178H305.37ZM296.778 169.792H302.682L299.97 161.56H299.49L296.778 169.792ZM310.455 160.36H312.039V166.12H310.455V160.36ZM329.661 173.8C329.661 176.248 328.269 178.24 323.301 178.24C317.445 178.24 315.813 175.6 315.813 171.712H317.397C317.397 175.984 319.701 176.896 323.301 176.896C326.253 176.896 328.077 176.176 328.077 173.92C328.077 171.088 324.909 170.56 322.173 169.768C318.885 168.808 316.581 167.896 316.581 164.968C316.581 162.424 318.309 160.84 322.437 160.84C327.381 160.84 328.965 163.96 328.965 166.6H327.381C327.381 163.576 325.125 162.184 322.437 162.184C319.989 162.184 318.165 162.808 318.165 164.872C318.165 166.864 319.869 167.56 322.653 168.424C326.013 169.456 329.661 170.272 329.661 173.8ZM353.871 178L351.615 171.136H344.847L342.591 178H341.031L346.599 161.08H349.863L355.431 178H353.871ZM345.279 169.792H351.183L348.471 161.56H347.991L345.279 169.792ZM367.596 162.424H363.828V176.656H367.596V178H358.476V176.656H362.244V162.424H358.476V161.08H367.596V162.424ZM380.401 178V161.08H390.553V162.424H381.985V168.856H389.353V170.2H381.985V176.656H390.553V178H380.401ZM392.878 169.528C392.878 164.608 395.734 160.84 400.63 160.84C404.878 160.84 407.638 163.432 408.142 167.608H406.558C406.174 164.176 404.134 162.184 400.63 162.184C396.478 162.184 394.462 165.328 394.462 169.528C394.462 173.752 396.478 176.896 400.63 176.896C404.134 176.896 406.174 174.88 406.558 171.448H408.142C407.638 175.648 404.878 178.24 400.63 178.24C395.734 178.24 392.878 174.472 392.878 169.528ZM411.431 169.528C411.431 164.608 414.287 160.84 419.183 160.84C424.055 160.84 426.911 164.608 426.911 169.528C426.911 174.472 424.055 178.24 419.183 178.24C414.287 178.24 411.431 174.472 411.431 169.528ZM413.015 169.528C413.015 173.752 415.031 176.896 419.183 176.896C423.335 176.896 425.327 173.752 425.327 169.528C425.327 165.328 423.335 162.184 419.183 162.184C415.031 162.184 413.015 165.328 413.015 169.528ZM443.821 173.8C443.821 176.248 442.429 178.24 437.461 178.24C431.605 178.24 429.973 175.6 429.973 171.712H431.557C431.557 175.984 433.861 176.896 437.461 176.896C440.413 176.896 442.237 176.176 442.237 173.92C442.237 171.088 439.069 170.56 436.333 169.768C433.045 168.808 430.741 167.896 430.741 164.968C430.741 162.424 432.469 160.84 436.597 160.84C441.541 160.84 443.125 163.96 443.125 166.6H441.541C441.541 163.576 439.285 162.184 436.597 162.184C434.149 162.184 432.325 162.808 432.325 164.872C432.325 166.864 434.029 167.56 436.813 168.424C440.173 169.456 443.821 170.272 443.821 173.8ZM457.03 161.08H458.734L452.638 171.52V178H451.054V171.52L444.958 161.08H446.662L451.606 169.576V170.776H452.086V169.576L457.03 161.08ZM473.966 173.8C473.966 176.248 472.574 178.24 467.606 178.24C461.75 178.24 460.118 175.6 460.118 171.712H461.702C461.702 175.984 464.006 176.896 467.606 176.896C470.558 176.896 472.382 176.176 472.382 173.92C472.382 171.088 469.214 170.56 466.478 169.768C463.19 168.808 460.886 167.896 460.886 164.968C460.886 162.424 462.614 160.84 466.742 160.84C471.686 160.84 473.27 163.96 473.27 166.6H471.686C471.686 163.576 469.43 162.184 466.742 162.184C464.294 162.184 462.47 162.808 462.47 164.872C462.47 166.864 464.174 167.56 466.958 168.424C470.318 169.456 473.966 170.272 473.966 173.8ZM488.549 161.08V162.424H482.621V178H481.037V162.424H475.085V161.08H488.549ZM491.616 178V161.08H501.768V162.424H493.2V168.856H500.568V170.2H493.2V176.656H501.768V178H491.616ZM505.294 178V161.08H508.51L513.79 177.52H514.27L519.55 161.08H522.766V178H521.182V162.76L521.422 161.56H520.942L515.662 178H512.398L507.118 161.56H506.638L506.878 162.76V178H505.294Z" fill="white"></path></svg>
                                        </div>
                                    ) : (<></>)
                                }
                            </div>
                        </Grid2>
                    </Grid2>
                </div>
                <div style={{width: "100%", color: "white", height: "60%"}}>
                    <div style={{height: "10%", width :"100%", color: "gray", fontWeight: "300"}}>
                        <Grid2 container>
                            <Grid2 style={{paddingLeft: "5%"}} size={8}>
                                COPYRIHT BLAH BLAH BLAH
                            </Grid2>
                            <Grid2 size={12}>
                                <div style={{position: "absolute", right: 280, marginTop: 0, cursor: "pointer", userSelect: "none"}}>
                                    <HoverScroll textValue={"PRIVACY POLICY"}/>
                                </div>
                                <div style={{position: "absolute", right: 160, marginTop: 0, cursor: "pointer", userSelect: "none"}}>
                                    <HoverScroll textValue={"TERMS AND CONDITIONS"}/>
                                </div>                     
                            </Grid2>
                        </Grid2>
                    </div>
                    <div style={{padding: "5%", fontWeight: "300", color: "gray", fontSize: "min(1.4vw, 15px)"}}>
                        IMPORTANT USER INFORMATION: CRYPTO PRODUCTS ARE HIGHLY RISKY AND REGULATORY TREATMENT IS UNSETTLED IN MANY AREAS. THERE MAY BE NO REGULATORY RECOURSE FOR LOSSES FROM TRANSACTIONS IN $OSOL COIN. THE VALUE OF $OSOL TOKENS CAN CHANGE RAPIDLY AND MAY BE COMPLETELY LOST.
                        <br/>
                        <br/>
                        AVAILABILITY: $OSOL COINS ARE NOT AVAILABLE TO RESIDENTS OR ENTITIES IN THE UNITED STATES OR THOSE LOCATED, INCORPORATED, OR WITH A REGISTERED AGENT THERE.
                        <br/>
                        <br/>
                        DISCLAIMER: CRYPTOCURRENCIES ARE HIGHLY SPECULATIVE AND INVOLVE SIGNIFICANT RISKS. THE VALUE OF $OSOL TOKENS MAY FLUCTUATE RAPIDLY, AND PARTICIPANTS SHOULD BE FULLY AWARE OF THE RISKS INVOLVED IN CRYPTOCURRENCY INVESTMENT BEFORE PARTICIPATING. $OSOL IS NOT AVAILABLE TO U.S. PERSONS OR ENTITIES, AS DEFINED UNDER U.S. SECURITIES LAWS AND REGULATIONS. IT IS THE RESPONSIBILITY OF PARTICIPANTS TO ENSURE THAT THEIR JURISDICTION ALLOWS PARTICIPATION BEFORE GETTING INVOLVED.
                    </div>
                    <div style={{height: "90%", width :"100%"}}>

                    </div>
                </div>
            </div>
        </>
        
    );
}