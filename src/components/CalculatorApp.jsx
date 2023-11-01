import React, { useEffect, useState } from 'react'
import './CalculatorApp.css'
import {evaluate} from 'mathjs'
import { BiSignal4,BiSolidBattery } from "react-icons/bi";



function CalculatorApp() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s[APap][Mm]$/, ''))
    const [input, setInput] = useState('')
    const [valueOf, setValueOf] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/\s[APap][Mm]$/, ''))
        }, 1000)
        return () => {
            clearInterval(timer); // Cleanup interval on unmount
        };
    }, [])
    const handleCalculation = (value) => {
        
        if(input === "Error!"){
            if(value === 'AC'){
                setInput('')
                setValueOf('')
            }
            return;
        }
        if (value === "=") {
            try {
                const result = evaluate(input)
                setValueOf(result)
                setInput("")
            } catch (err) {
                setInput('Error!')
            }
        } else if (value === "back") {
            setInput(input.slice(0, -1))
        }
        else if (value === "AC") {
            setValueOf("")
            setInput("")
        }
        else if (value === "*" || value === "-" || value === "/" || value === "+") {
            try {
                const result = evaluate(input)
                setValueOf(result)
                setInput(input + value)

            } catch (err) {
                setInput('Error!')
            }
        }
        else {
            setInput(input + value)
        }
    }
    return (
        <>
            <div class="container">
                <div class="calculator-section">
                    <div class="calculator-content">
                        <div class="calculator-content-padding">
                            <div class="top-section">
                                <div class="top-time">{time}</div>
                                <div class="top-notch"></div>
                                
                                <div className='top-nav'>
                                   <div style={{display:'flex',alignItems:'center',marginBottom:'3px'}}> <BiSignal4 style={{color:'white'}}/></div>
                                    <div style={{color:'white',fontFamily:'sans-serif',fontSize:'12px',marginLeft:'2px'}}>4G</div>
                                    <div style={{display:'flex',alignItems:'center',marginLeft:'4px'}}><BiSolidBattery size={20} style={{color:'white'}}/></div>
                                </div>
                            </div>
                        </div>3
                        <div class="calc-function">
                            <form action="" name="calc">
                                <div class="answer-section">
                                    <input readonly  className="value calc-answer2" value={input} type="text" name="txt" placeholder="" />

                                    <input readonly className="value calc-answer" value={valueOf} type="text" name="txt" placeholder="0" />
                                </div>
                                <div class="number-section ">
                                    <div>
                                        <div class="button-style grey-bg" onClick={() => handleCalculation('AC')}>AC</div>
                                    </div>
                                    <div>
                                        <div class="button-style grey-bg" onClick={() => handleCalculation('back')}><i class="fa-solid fa-delete-left" style={{ color: "#000000" }}></i></div>
                                    </div>
                                    <div>
                                        <div class="button-style grey-bg" onClick={() => handleCalculation('%')}>%</div>
                                    </div>
                                    <div>
                                        <div class="button-style orange-bg"><span style={{ fontSize: "30px" }} onClick={() => handleCalculation('/')}>÷</span></div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('7')}>7</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('8')}>8</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('9')}>9</div>
                                    </div>
                                    <div>
                                        <div class="button-style orange-bg" onClick={() => handleCalculation('*')} ><span style={{ fontSize: "28px", fontFamily: 'monospace' }}>x</span></div>
                                    </div>

                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('4')}>4</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('5')}>5</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('6')}>6</div>
                                    </div>
                                    <div>
                                        <div class="button-style orange-bg" onClick={() => handleCalculation('-')}><span style={{ fontSize: '30px' }}>-</span></div>
                                    </div>

                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('1')}>1</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('2')}>2</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('3')}>3</div>
                                    </div>
                                    <div>
                                        <div class="button-style orange-bg" onClick={() => handleCalculation('+')} style={{ fontSize: '30px' }}>+</div>
                                    </div>
                                </div>


                                <div class="number-section-bottom">

                                    <div class="zero-style">
                                        <div class="button-style2 light-grey-bg" onClick={() => handleCalculation('0')} >0</div>
                                    </div>
                                    <div>
                                        <div class="button-style light-grey-bg" onClick={() => handleCalculation('.')}><i>.</i></div>
                                    </div>
                                    <div>
                                        <div class="button-style orange-bg" onClick={() => handleCalculation('=')}>
                                            <i>=</i>
                                        </div>
                                    </div>



                                </div>
                            </form>

                        </div>
                        <div class="bottom-line-section">
                            <div class="bottom-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculatorApp