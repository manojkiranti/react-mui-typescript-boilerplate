import hexToRgb from "./hexToRgb";

function rgba(color:any, opacity:any) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;