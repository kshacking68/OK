// Function to convert PNG to SVG using upng-js
async function convertToSVG() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file.');
        return;
    }

    if (file.type !== 'image/png') {
        alert('Please upload a PNG image.');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(event) {
        const arrayBuffer = event.target.result;
        const img = new UPNG.PNG(arrayBuffer);
        const svgString = img.toSVG();

        if (svgString) {
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = url;
            downloadLink.download = 'converted.svg';
            downloadLink.style.display = 'inline-block';
        } else {
            alert('Failed to convert PNG to SVG.');
        }
    };

    reader.readAsArrayBuffer(file);
}
