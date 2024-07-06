import React from "react";

export const Output = () => {
  return (
    <>
      <div className="outputs">
        <div class="output">
          <div class="output-item">
            <div class="heading">
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <div class="value">
              $<span class="tip-value">0</span>
            </div>
          </div>

          <div class="output-item">
            <div class="heading">
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <div class="value">
              $<span class="total-value">0</span>
            </div>
          </div>
        </div>
        <button class="reset-btn">Reset</button>
      </div>
    </>
  );
};
