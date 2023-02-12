import React, { useEffect } from "react";

function Radio() {
  let radioVal = undefined;

  useEffect(() => {});
  return (
    <div style={{}}>
      <form>
        <label>
          <span>OK</span>
          <input
            name="isPartner"
            type="radio"
            value={1}
            defaultChecked={radioVal ? radioVal === 1 : true}
          />
        </label>
        <label>
          <span>NG</span>
          <input
            name="isPartner"
            type="radio"
            value={0}
            defaultChecked={radioVal === 0}
          />
        </label>
      </form>
    </div>
  );
}

export default Radio;
