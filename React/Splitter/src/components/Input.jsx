import React from 'react'

export const Input = () => {
  return (
    <>
      <div className='inputs'>
        <div className="input-item">
          <label for="bill">Bill</label>
          <div className="inp">
            <span className="dollar-symbol">$</span>
            <input id="bill" type="text" placeholder="Enter your Bill"/>
          </div>
        </div>
        <div className="tips">
          <h2>Select Tip %</h2>
          <div className="btns">
            <button className="tip-btn" value="5">5%</button>
            <button className="tip-btn" value="10">10%</button>
            <button className="tip-btn" value="15">15%</button>
            <button className="tip-btn" value="25">25%</button>
            <button className="tip-btn" value="50">50%</button>
            <button className="tip-btn custom-btn">Custom</button>
          </div>
        </div>
        <div className="people">
          <label for="ppl">Number of People</label>
          <input id="ppl" type="text" placeholder="Enter the number of People"/>
        </div>
        <button className="submit">Submit</button>
      </div>
    </>
  )
}
