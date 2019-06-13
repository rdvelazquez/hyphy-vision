var React = require("react");
import Alignment from "alignment.js";

function SitePlotWithAlignment(props) {
  return (
    <div>
      <Alignment fasta={props.fasta} width={800} height={500} />
    </div>
  );
}

module.exports.SitePlotWithAlignment = SitePlotWithAlignment;
