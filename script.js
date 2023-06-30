//your JS code here. If required.
function updateSizeInfo() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeInfo = document.getElementById('sizeInfo');
  
  sizeInfo.textContent = `Width: ${width}px, Height: ${height}px`;
}

window.addEventListener('resize', updateSizeInfo);
