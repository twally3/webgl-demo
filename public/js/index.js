const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

if (!gl) throw new Error('WebGL is not supported!');

