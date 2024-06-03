function hexToRgb(hex) {
    if (typeof hex !== 'string') {
        return null;
    }

    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
    if (!match) {
        return null;
    }

    const [_, r, g, b] = match;
    return {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16)
    };
}

function convertHexToRgb() {
    const hexInput = document.getElementById('hex-input');
    if (!hexInput) {
        console.error('Element with id "hex-input" not found');
        return;
    }

    const hex = hexInput.value.trim();
    const rgbOutput = document.getElementById('rgb-output');
    if (!rgbOutput) {
        console.error('Element with id "rgb-output" not found');
        return;
    }

    const rgb = hexToRgb(hex);
    if (rgb) {
        rgbOutput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    } else {
        rgbOutput.value = 'Invalid hex code';
    }
}
